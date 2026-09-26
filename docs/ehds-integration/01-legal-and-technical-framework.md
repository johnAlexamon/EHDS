# Legal and technical framework

This file summarizes what Regulation (EU) 2025/327 (the European Health Data Space, "EHDS") requires of EHR/HIS systems and the organizations that build, sell, and operate them. See the [README](README.md) for methodology and confidence caveats — in short, EUR-Lex and most primary sources could not be directly fetched during research, so most claims below are search-engine-synthesized summaries rather than verified quotations, and exact article numbers should be checked against [EUR-Lex CELEX:32025R0327](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R0327) before being relied on.

## Legal basis and structure

Regulation (EU) 2025/327 of the European Parliament and of the Council of 11 February 2025, "on the European Health Data Space and amending Directive 2011/24/EU and Regulation (EU) 2024/2847," was published in the Official Journal as L, 2025/327, on 5 March 2025 ([European Commission](https://health.ec.europa.eu/latest-updates/regulation-eu-2025327-european-health-data-space-and-amending-directive-201124eu-and-regulation-eu-2025-03-05_en); [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R0327)). It amends the Cross-Border Healthcare Directive (2011/24/EU) and the Cyber Resilience Act (Regulation (EU) 2024/2847) ([Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2025/03/european-health-data-space-regulation-published); [EY Greece](https://www.ey.com/en_gr/technical/tax/tax-alerts/regulation-2025-327-establishing-ehds)).

The Regulation's dual legal basis is **Article 16 TFEU** (data protection) and **Article 114 TFEU** (internal market harmonisation); Article 114 was chosen because most provisions aim to improve the internal market and free movement of goods/services, subject to Article 114(3) TFEU's requirement of a high level of human health protection — a point of legislative debate versus the alternative pure health-policy basis, Article 168(1) TFEU (search synthesis citing [EUR-Lex proposal COM(2022)197](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52022PC0197) and academic commentary). This dual basis is why EHDS operates alongside, rather than replacing, the GDPR: Article 114 gives it a product-regulation character (hence the CE-marking-style EHR certification regime), while Article 16 anchors the data-subject rights that parallel GDPR rights.

The Regulation is organized around two distinct regimes bridged by a product-certification chapter:

- **Chapter II — primary use**: patients' access to and control over their own electronic health data, and cross-border exchange between healthcare providers. Article 3 reportedly sets out the "Right of natural persons to access their personal electronic health data" (search synthesis, unverified against primary text).
- **Chapter III — EHR systems**: the conformity/certification regime for the software itself. "EHR systems shall be placed on the market or put into service only if they comply with the provisions in Chapter III" (search synthesis referencing Regulation text).
- **Chapter IV — secondary use**: research, innovation, and policy reuse of health data via Health Data Access Bodies.

> ⚠️ **Unverified / conflicting sources**: The exact enumeration of all Titles/Chapters, and the precise entry-into-force date, could not be verified against the primary EUR-Lex text. 5 March 2025 (publication) + 20 days should be approximately 25 March 2025, but sources are split between **25 March 2025** and **26 March 2025** for entry into force — see [02-implementation-timeline.md](02-implementation-timeline.md) for the full discussion of this conflict.

## Primary use: patient rights and cross-border exchange

Chapter II establishes patients' right to access their own electronic health data and provides the legal basis for cross-border exchange via **MyHealth@EU** (described in detail below). Healthcare providers, as data holders, must support these primary-use rights and connect to MyHealth@EU via their national infrastructure (search synthesis).

## The European Electronic Health Record Exchange Format (EEHRxF)

The EEHRxF is the EHDS-mandated common technical format for structuring and exchanging electronic health data. It initially covers five/six "priority categories," rolled out in two phased groups:

- **Group 1 (by March 2029)**: patient summaries and electronic prescriptions/dispensations.
- **Group 2 (by March 2031)**: medical images and imaging reports, laboratory results/reports, and hospital discharge reports.

(search synthesis, multiple sources including StreamLex Art. 51 and [health.ec.europa.eu](https://health.ec.europa.eu)). Patient summaries cover allergies, active problems, implants, surgeries and medications; ePrescriptions/eDispensations cover digital drug prescriptions and dispensing records; medical images/reports cover CT, MRI, X-ray, ultrasound and radiologist interpretations; lab results/reports cover clinical chemistry, hematology, microbiology and genetic testing reports (search synthesis).

Technically, the EEHRxF is expected to build on **HL7 FHIR**-based European implementation guides, notably the HL7 Europe/International Patient Summary standard aligned with **ISO/EN 27269**, succeeding the earlier CDA-based epSOS/eHDSI formats ([HL7 Europe Patient Summary FHIR IG](https://confluence.hl7.org/spaces/HEU/pages/248712170/HL7+Europe+Patient+Summary+FHIR+Implementation+Guide); [build.fhir.org IG](https://build.fhir.org/ig/hl7-eu/eps/introduction.html)). The epSOS project (2008–2014) developed the first operational cross-border Patient Summary/ePrescription services on HL7 CDA R2.0, going live under the successor eHDSI/MyHealth@EU programme from January 2019 (search synthesis citing HL7 Europe documentation). A related HL7 Europe "Medication Prescription and Dispense" implementation guide is also relevant ([build.fhir.org](https://build.fhir.org/ig/hl7-eu/mpd/background.html)).

> ⚠️ **Unverified / conflicting sources**: The move from CDA to FHIR is a generational technical shift vendors already supporting eHDSI patient summaries will need to plan a migration path for. However, **the EEHRxF's detailed field/profile-level content is not fixed in the Regulation's own text** — it is deferred to Commission implementing acts due by March 2027 (see [02-implementation-timeline.md](02-implementation-timeline.md) and [05-gateway-market-and-api-status.md](05-gateway-market-and-api-status.md) for the full standards-status discussion). No confirmation was found of an implementing act already adopted specifically for EEHRxF *content* (as distinct from the MyHealth@EU/HealthDCAT-AP infrastructure implementing regulations issued in September/October 2026 — see below).

## EHR system conformity, self-certification, and CE marking

EHDS creates a **mandatory, self-certification-based conformity regime** for EHR systems that process the priority categories of personal electronic health data — modeled more on general-product CE marking than on the Medical Device Regulation's (MDR) third-party/notified-body conformity assessment ([Osborne Clarke](https://www.osborneclarke.com/insights/eu-establishes-mandatory-ce-marking-electronic-health-record-systems)).

The process, as reported:

1. Manufacturers must demonstrate compliance with **essential requirements laid down in Annex II** of the Regulation, covering general functionality, interoperability standards, and security/logging capabilities, before placing systems on the EU market.
2. Testing occurs in "European digital testing environments" established under the Regulation.
3. Manufacturers issue an **EU declaration of conformity** (reportedly Article 39) stating essential requirements are fulfilled.
4. Manufacturers affix the **CE marking** of conformity to accompanying documents and, where applicable, to system packaging.
5. Manufacturers must ensure compliance with **common specifications adopted under Article 36**.
6. Manufacturers must register the system in a Commission-run **EU database** before market placement or putting into service, supporting transparency, procurement decisions and market surveillance.

(search synthesis, consolidated from Osborne Clarke/DLA Piper/StreamLex via search). Reportedly, **Article 28** covers market surveillance authorities, **Article 29** addresses handling of risks/serious incidents, and **Article 30** covers handling of non-compliance. Under **Article 38**, an "information sheet" for each registered system must give professional users the manufacturer's identity/contact details, system name/version/release date, intended purpose, categories of electronic health data processed, and supported standards/formats/specifications (search synthesis).

**Article 27** reportedly addresses the relationship with medical devices/IVD Union law: medical device and IVD manufacturers become subject to EHDS interoperability product requirements when they claim their devices are interoperable with EHR systems ([MedDeviceGuide](https://meddeviceguide.com/blog/european-health-data-space-ehds-medical-device-manufacturers-guide)). This means HIS/EMR vendors integrating with connected medical devices should expect dual-regime compliance (MDR/IVDR plus EHDS Chapter III) for interoperability claims.

The "no notified body" self-certification design is a deliberate lighter-touch route relative to MDR — but market surveillance authorities retain enforcement powers (Articles 28–30), so self-certification is not unsupervised; post-market enforcement (corrective action, market withdrawal) is the real compliance lever rather than pre-market gatekeeping.

> ⚠️ **Unverified / conflicting sources**: The precise content of Annex II (essential requirements) and Article 36 ("common specifications") could not be verified directly from the Regulation text. Whether "European digital testing environments" are already operational, or remain a pending Commission deliverable, is also unconfirmed but likely pending given the general 2027 implementing-act deadline.

## Manufacturers vs. healthcare providers: who owes what

The Regulation splits obligations along product-law lines:

- **EHR system manufacturers** (Chapter III): pre-market and post-market product-compliance duties — essential-requirements compliance, technical documentation, testing, EU declaration of conformity, CE marking, EU database registration, and cooperation with market surveillance/incident reporting (Articles 28–30) (search synthesis, consolidated from Osborne Clarke/DLA Piper/StreamLex).
- **Healthcare providers / deployers** (Chapters II and IV): operational and data-governance duties — honoring patients' primary-use access rights, connecting to MyHealth@EU via national infrastructure, and — as "health data holders" — making specified categories of electronic health data available for secondary use through Health Data Access Bodies (HDABs), subject to limited exemptions (search synthesis, citing McCann FitzGerald/Lexology and activeMind.legal analyses).

Exemptions from the data-holder secondary-use sharing obligation exist for natural persons (including individual researchers), microenterprises, and cases where sharing might compromise intellectual property rights (search synthesis). Notably, "healthcare providers performing health research" are explicitly named as data holders, so hospitals with research arms should expect secondary-use sharing obligations to reach ordinary clinical data, not just dedicated research datasets.

By reportedly **Article 19**, each Member State must designate one or more national **Digital Health Authorities** responsible for implementation oversight — issuing guidelines, certifying interoperability components, and managing MyHealth@EU connections — a body distinct from the manufacturer-facing market surveillance authority (search synthesis; one source suggests a June 2025 designation deadline, unconfirmed).

A hospital IT department therefore needs to track two separate compliance tracks: (a) only procuring/deploying EHR systems that carry valid CE marking and EU database registration, and (b) independently meeting its own data-holder obligations under Chapters II and IV regardless of which vendor's system it runs.

> ⚠️ **Unverified / conflicting sources**: The exact article(s) enumerating "healthcare provider" duties under primary use, and whether there are provider-side penalties distinct from manufacturer-side penalties, could not be confirmed against primary text.

## MyHealth@EU and National Contact Points for Digital Health (NCPeH)

**MyHealth@EU** (the successor to eHDSI) is the EU's cross-border digital health infrastructure for primary use: the central EU platform plus a network of **National Contact Points for eHealth (NCPeH)**, one per Member State, enabling interoperable cross-border exchange of patient summaries, ePrescriptions, and (from 2031) medical images, lab results and discharge reports (search synthesis). The NCPeH is the standardized national gateway infrastructure that, under the legacy eHDSI framework, enables this exchange (search synthesis).

New Commission implementing regulations on **MyHealth@EU and HealthDCAT-AP** were reportedly issued around **23 September 2026** ([Die Produktkanzlei](https://www.produktkanzlei.com/en/2026/09/23/myhealtheu-and-healthdcat-ap/) — title/date only verified via search snippet; full content not independently fetched). See [02-implementation-timeline.md](02-implementation-timeline.md) for the specific instrument numbers (Implementing Regulations (EU) 2026/2083 and (EU) 2026/2098).

Each Member State must designate one or more national Digital Health Authorities (Article 19) with responsibilities including managing MyHealth@EU infrastructure and connections (search synthesis).

> ⚠️ **Unverified / conflicting sources**: The precise legal instrument content of the September 2026 MyHealth@EU/HealthDCAT-AP implementing regulations could not be verified beyond a search snippet. The exact article number(s) establishing MyHealth@EU and NCPeH obligations are also unconfirmed against primary text (thematically likely in Chapter II).

## Secondary use: Health Data Access Bodies, HealthData@EU, and the opt-out

Each Member State must establish at least one **Health Data Access Body (HDAB)** that:

- receives and evaluates data-permit applications from secondary users (researchers, innovators, public bodies);
- coordinates access with data holders;
- grants access only through a **secure processing environment**; and
- connects nationally to the decentralized **HealthData@EU** cross-border infrastructure, which links HDABs across Member States and provides data users a single point of access.

(search synthesis, citing Oxford Academic/European Journal of Public Health and EY Greece). Data holders (including healthcare providers and organisations performing health research) must make extensive categories of electronic health data available for secondary use, with the exemptions noted above (search synthesis, citing DLA Piper Privacy Matters and McCann FitzGerald/Lexology).

Patients have a mandatory **right to object (opt-out)** to secondary use of their electronic health data — an opt-out-by-default model, exercisable at any time without needing to state a reason, via an "accessible and easily understandable opt-out mechanism" Member States must provide (search synthesis, citing ScienceDirect analysis and activeMind.legal). This EHDS opt-out is described as legally **distinct from the GDPR right to object**: the GDPR right lets a data subject contest ongoing processing, whereas the EHDS opt-out, once exercised, prevents personal electronic health data from being made available for any subsequent instance of secondary use (search synthesis, ScienceDirect via search).

For HIS/EMR vendors, the practical technical implication is that hospital systems need to (a) flag/respect patient opt-out status at the point data is extracted for HDAB requests, and (b) support structured, interoperable export of the relevant data categories (likely aligned to EEHRxF-related standards) to HDAB-managed secure processing environments. This likely requires a dedicated "EHDS opt-out flag" data field distinct from any existing GDPR consent-management flag, since the two rights are legally distinct.

Most secondary-use provisions become applicable from **March 2029**, with additional categories (e.g., genomic data) becoming operational by **March 2031** (search synthesis).

> ⚠️ **Unverified / conflicting sources**: The specific article number governing data-holder secondary-use obligations, and the article establishing the opt-out right, could not be verified. The exact scope/list of "additional categories" beyond genomic data in the 2031 wave is unconfirmed, as are details on HDAB fees and the precise structure of "data permits."

## Penalties and enforcement

Two enforcement tracks exist:

- **HDAB-led enforcement** (secondary use / data-holder violations), reportedly under Articles 63–64, with tools including permit revocation, exclusion from future access, and **administrative fines of up to EUR 20 million or 4% of total worldwide annual turnover, whichever is higher** (search synthesis, citing William Fry and TEHDAS draft guideline documents). Member States must also establish additional penalties for violations not otherwise specifically addressed.
- **Market-surveillance-authority-led enforcement** (Chapter III product compliance against manufacturers/economic operators), reportedly under Articles 28–30.

A dedicated TEHDAS project deliverable, a draft "Guideline for Health Data Access Bodies on fees and penalties for non-compliance related to the EHDS regulation" (as of Sept/Oct 2025), provides non-binding practical guidance for HDABs ([TEHDAS draft guideline PDF](https://tehdas.eu/wp-content/uploads/2025/10/draft-guideline-on-penalties-for-non-compliance-related-to-the-ehds-regulation.pdf); [Zenodo record](https://zenodo.org/records/20267597)) — this is soft-law guidance, not the Regulation's own text.

Enforcement follows the EU's usual "procedural autonomy" model, so specific appeal/procedural rules vary by Member State (search synthesis).

An organization that is both a healthcare provider (data holder) and, if it develops in-house EHR/HIS software, a "manufacturer," could face parallel enforcement exposure from two different national authorities under the two separate tracks.

> ⚠️ **Unverified / conflicting sources**: Whether the EUR 20 million / 4% turnover fine ceiling applies only to secondary-use violations (Articles 63–64) or is a Regulation-wide maximum also applicable to Chapter III manufacturer non-compliance could not be confirmed. No source confirmed tiered fine levels (GDPR-style lower/higher tiers) — only the higher figure was found.

## Sources

- [Regulation (EU) 2025/327 — EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R0327)
- [European Commission — Regulation (EU) 2025/327 announcement](https://health.ec.europa.eu/latest-updates/regulation-eu-2025327-european-health-data-space-and-amending-directive-201124eu-and-regulation-eu-2025-03-05_en)
- [Wikipedia summary of European Health Data Space](https://en.wikipedia.org/wiki/European_Health_Data_Space)
- [EUR-Lex — Commission proposal COM(2022)197](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52022PC0197)
- [Arnold & Porter — EHDS Regulation published](https://www.arnoldporter.com/en/perspectives/advisories/2025/03/european-health-data-space-regulation-published)
- [EY Greece — Regulation 2025/327 establishing EHDS](https://www.ey.com/en_gr/technical/tax/tax-alerts/regulation-2025-327-establishing-ehds)
- [HL7 Europe Patient Summary FHIR Implementation Guide (Confluence)](https://confluence.hl7.org/spaces/HEU/pages/248712170/HL7+Europe+Patient+Summary+FHIR+Implementation+Guide)
- [HL7 Europe Patient Summary IG (build.fhir.org)](https://build.fhir.org/ig/hl7-eu/eps/introduction.html)
- [HL7 Europe Medication Prescription and Dispense IG](https://build.fhir.org/ig/hl7-eu/mpd/background.html)
- [Osborne Clarke — EU establishes mandatory CE marking for EHR systems](https://www.osborneclarke.com/insights/eu-establishes-mandatory-ce-marking-electronic-health-record-systems)
- [MedDeviceGuide — EHDS medical device manufacturers guide](https://meddeviceguide.com/blog/european-health-data-space-ehds-medical-device-manufacturers-guide)
- [Die Produktkanzlei — MyHealth@EU and HealthDCAT-AP](https://www.produktkanzlei.com/en/2026/09/23/myhealtheu-and-healthdcat-ap/)
- [TEHDAS draft guideline on penalties for non-compliance (PDF)](https://tehdas.eu/wp-content/uploads/2025/10/draft-guideline-on-penalties-for-non-compliance-related-to-the-ehds-regulation.pdf)
- [Zenodo record of TEHDAS guideline](https://zenodo.org/records/20267597)
