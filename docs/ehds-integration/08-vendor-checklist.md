---
sidebar_position: 8
sidebar_label: Vendor Checklist
---

# Selling an EHR across the EU: what does a vendor actually need to implement?

This file answers the practical question directly: if you're building or selling a HIS/EMR/EHR product across the EU, which APIs do you need to implement, and is that the same everywhere or a country-by-country decision? It's a synthesis of what's documented in [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md) and [07-cross-border-exchange.md](07-cross-border-exchange.md) — no new sources are introduced here; see those files for citations.

## The short answer

**The underlying API/standard set is designed to be the same across the whole EU — but how much of it you personally have to implement, versus a national gateway absorbing it on your behalf, is a per-country decision.** It is closer to "one shared toolkit, deployed differently per country" than either "one identical model everywhere" or "27 completely different national APIs." Three things are constant everywhere; one thing varies by country; one thing you never touch at all.

## What's the same in every country (the shared toolkit)

This is the EU Health Data API and content IG stack from [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md) — the same named standards, everywhere, by design (this consistency is the explicit point of the EEHRxF and the Regulation's Article 36 "common specifications"):

| What | Standard(s) | What it's for |
|---|---|---|
| **Clinical content** | HL7 Europe content IGs — Patient Summary (EPS), Medication Prescription/Dispense (MPD), Laboratory, Hospital Discharge Report (HDR), Imaging Report, Imaging Manifest | What the data looks like as FHIR resources — one EU base profile per category (with national "flavors" layered on top, see below) |
| **Patient matching** | IHE PDQm (Patient Demographics Query for Mobile) | Finding the right patient record before requesting their data |
| **Document query/retrieve** | IHE MHD (Mobile access to Health Documents) | The primary pattern for pulling/publishing a Patient Summary, Discharge Report, etc. |
| **Patient-facing API conventions** | HL7 IPA (International Patient Access) | Conventions for when the API is consumer- not just clinician-facing |
| **Authentication** | SMART Backend Services (OAuth2) | System-to-system authorization, no end-user login |
| **Imaging pixel data** | MADO over DICOMweb's WADO-RS | Retrieving the actual DICOM study a manifest points to — separate from the FHIR-based metadata calls above |

If you build support for this stack once, you have the technical foundation for every EU country — this part is not meant to be country-specific.

## What varies by country: how much of that stack you personally run

This is the Pattern 1 / Pattern 2 choice from [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md), and it **is** an explicit per-country decision, made by each Member State's national infrastructure, not by the vendor and not by the EU Health Data API spec itself (which says outright: *"this IG does not prescribe"* the national architecture):

| | Pattern 1: Centralized repository | Pattern 2: Federated query |
|---|---|---|
| **What you implement** | Only a *publish* call (push your data up to the national repository) — you do **not** need to host a live query API | The **full Access Provider role** — a live, publicly-reachable, always-on, conformant query + retrieval endpoint |
| **Who's the real integration point** | The national gateway operator (e.g. Kela/Kanta in Finland) | You, directly |
| **Named/inferred for** | Finland, and by inference Austria, Denmark, France, Estonia (countries with existing national XDS/XCA document-repository infrastructure) | **The Netherlands and Sweden**, named explicitly in the source |

So: for the *same* underlying API surface, a Pattern 1 country needs from you a thin publish-only client; a Pattern 2 country needs from you a full production-grade FHIR server, kept online and conformant continuously. **This is the single biggest variable in your EU-wide build/deploy effort** — a multi-country rollout plan needs to check this per target country before estimating integration cost, because the same product can mean a week of work in one country and months of ongoing operational commitment in another.

One layer of genuine country-specific technical variation exists even within the "shared" content layer: national **content-profile "flavors."** The example in [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md) is Austria's Patient Summary (`aps`) — built as a national extension of the shared EU base profile (`PatientEuEps`, `CompositionEuEps`), with German-language section titles and Austria-specific fields. Expect this pattern to repeat: one shared EU base profile per content category, with a thin, country-specific derived profile on top — meaning full "build once, deploy everywhere with zero changes" is unlikely even once the specs stabilize; budget for a per-country localization/mapping pass on top of the shared core build.

## What you never touch: cross-border exchange

Regardless of which pattern your target country uses, **you never implement the cross-border (Layer 3) protocol yourself.** Per [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md): the EHR system's technical boundary is always the national Layer 2 API; the country-to-country NCPeH-to-NCPeH exchange is a structurally separate protocol, "governed separately," whose only participants in every source found are national gateways. See [07-cross-border-exchange.md](07-cross-border-exchange.md) for exactly how that layer works (today, on the live epSOS/eHDSI mechanism) and its in-progress FHIR successor — none of it is your integration surface.

## A practical build checklist

1. **Implement the content IGs** — map your internal EHR data model to the FHIR profiles for Patient Summary, ePrescription/eDispensation, Laboratory, Hospital Discharge Report, and Imaging Report/Manifest ([06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md) has the package IDs and a real example).
2. **Implement the EU Health Data API transport stack** — PDQm for patient matching, MHD for document query/publish, SMART Backend Services for authentication. Build **both** the publish-only path (for Pattern 1 countries) and the full Access Provider path (for Pattern 2 countries) if you intend to sell into both kinds of market — you won't know which you need until you know the target country.
3. **Add MADO/WADO-RS support for imaging**, alongside whatever you already do with your PACS integration — this is a separate call path from the FHIR document/resource calls above.
4. **For each target country, confirm the pattern before scoping the deal**: is the national gateway going to absorb the query-serving burden (Pattern 1), or do you need to run a production FHIR server yourself (Pattern 2)? This is a sales-engineering question to ask the national gateway operator or Digital Health Authority directly, not something derivable from the spec alone.
5. **Budget for country-specific content-profile localization** on top of the shared EU base profiles — don't assume zero marginal engineering cost per new country.
6. **Do not build cross-border (Layer 3) support** — it isn't your integration surface in any country.

## Is this settled, or could it still change?

**Not settled.** Everything above describes the *current draft* state (CI-build/STU1-ballot as of this research — see the ballot timeline in [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md)). Two specific open questions bear directly on "will this be the same everywhere":

- **Will the Commission's eventual binding "common specifications"** (due by statute 26 March 2027, under Article 36) **preserve the Pattern 1/Pattern 2 flexibility, or force convergence on one model?** No source found in this research states either way. The current EURIDICE draft explicitly leaves the choice to Member States; whether the Commission's own binding implementing act does the same, or instead mandates a single pattern EU-wide, is unknown and worth tracking directly.
- **Will more countries' pattern choices become explicitly confirmed** before you need to commit engineering resources? Today only the Netherlands and Sweden are named in the source text for Pattern 2; the Pattern 1 countries (Finland, Austria, Denmark, France, Estonia) are this documentation's own inference from their existing national infrastructure, not a confirmed list. For any other target country, the pattern is presently unknown and should be confirmed directly with that country's Digital Health Authority or NCPeH operator before scoping a build.

> ⚠️ **Unverified / conflicting sources**: This entire file is a synthesis of facts already sourced in [06-api-drafts-and-specifications.md](06-api-drafts-and-specifications.md) and [07-cross-border-exchange.md](07-cross-border-exchange.md) — see those files for citations. No new sources are introduced here. Treat the "build checklist" as a reasonable engineering-planning framework given current draft specs, not a confirmed, stable target — everything here is subject to change before the Commission's common specifications are legally finalized.
