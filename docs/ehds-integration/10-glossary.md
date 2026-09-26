---
sidebar_position: 10
sidebar_label: Glossary
---

# Glossary

Every acronym and specialist term used across this documentation set, defined in one place. Entries link back to the file(s) where the term is discussed in depth. This file introduces no new facts — it's a reference index, not a source of claims; see the relevant linked file for citations.

## EU regulation and governance

**CE marking** — The conformity mark EHDS requires on EHR systems handling priority-category data, via self-certification rather than third-party review (modeled more on general-product CE marking than the Medical Device Regulation's notified-body process). See [01](01-legal-and-technical-framework.md).

**Digital Health Authority** (National Digital Health Authority) — The national body each Member State designates to oversee EHDS implementation domestically (distinct from the HDAB, which handles secondary-use data permits specifically). See [01](01-legal-and-technical-framework.md).

**EEHRxF** (European Electronic Health Record Exchange Format) — The common technical format EHDS requires for exchanging electronic health data, covering the priority categories in Annex I (patient summary, ePrescription/eDispensation, lab results, medical imaging/reports, hospital discharge reports). Not yet formally established as of this research — see [01](01-legal-and-technical-framework.md), [02](02-implementation-timeline.md), and [06](06-api-drafts-and-specifications.md) for the draft specs feeding it.

**EHDS** (European Health Data Space) — Regulation (EU) 2025/327, the subject of this whole documentation set. See [01](01-legal-and-technical-framework.md).

**EHDS Board** — The EU governance body established by Commission Implementing Regulation (EU) 2026/771 (April 2026) to oversee EHDS implementation. See [02](02-implementation-timeline.md).

**eHDSI** (eHealth Digital Service Infrastructure) — The predecessor name for what is now branded **MyHealth@EU**; you'll still see "eHDSI" in older sources and some technical documentation. See [07](07-cross-border-exchange.md).

**eHMSEG** (eHealth DSI EU countries Expert Group) — The group of national managers, one nominated per Member State, responsible for implementing and coordinating their country's NCPeH; advises the eHealth Network and the European Commission. See [07](07-cross-border-exchange.md).

**epSOS** (Smart Open Services for European Patients) — The 2008–2014 EU pilot project that built the first operational cross-border Patient Summary/ePrescription services on HL7 CDA; its output became the technical foundation eHDSI/MyHealth@EU went live with from 2019, and which the live NCPeH network (OpenNCP) still runs on today. See [01](01-legal-and-technical-framework.md), [07](07-cross-border-exchange.md).

**GDPR** (General Data Protection Regulation) — The EU's general data protection law. EHDS operates *alongside* GDPR, not instead of it — EHDS's own opt-out right for secondary use is explicitly a separate, distinct right from the GDPR right to object. See [01](01-legal-and-technical-framework.md).

**HDAB** (Health Data Access Body) — The national body each Member State must designate to receive and process secondary-use data access requests (research, policy-making, etc.) and issue data permits. Finland's presumed HDAB candidate is Findata. See [01](01-legal-and-technical-framework.md), [03](03-finland.md), [04](04-other-member-states.md).

**HealthData@EU** — The EU-level decentralized network connecting national HDABs for cross-border secondary-use data access, analogous to MyHealth@EU but for research/policy use rather than direct patient care. See [01](01-legal-and-technical-framework.md), [05](05-gateway-market-and-api-status.md).

**IVDR** (In Vitro Diagnostic Regulation) — EU regulation for in-vitro diagnostic medical devices; EHDS Chapter III interoperability requirements can stack with IVDR/MDR compliance for connected-device manufacturers making interoperability claims. See [01](01-legal-and-technical-framework.md).

**MDR** (Medical Device Regulation) — EU regulation for medical devices, used throughout this documentation as the point of comparison for EHDS's lighter-touch, notified-body-free EHR conformity regime. See [01](01-legal-and-technical-framework.md).

**MyHealth@EU** — The EU's cross-border digital health infrastructure for *primary use* (direct patient care) — the successor branding for eHDSI. Architected as one national gateway (NCPeH) per Member State connecting to shared EU central services. See [06](06-api-drafts-and-specifications.md), [07](07-cross-border-exchange.md).

**NCP API** — The FHIR IG published at `fhir.ehdsi.eu`, specified by the eHDSI programme itself (not EURIDICE), covering the NCPeH-to-NCPeH interface — the in-progress FHIR successor to the live SOAP/XCA cross-border mechanism. See [07](07-cross-border-exchange.md).

**NCP-A / NCP-B** — In the epSOS/eHDSI cross-border workflow, the two NCPeH roles in any given exchange: **NCP-A** is the patient's **country of affiliation** (their home country, which holds the data), **NCP-B** is the **country of treatment** (where the patient currently is). See [07](07-cross-border-exchange.md).

**NCPeH** (National Contact Point for eHealth) — The single national gateway each Member State operates to connect its own health system to MyHealth@EU. Finland's NCPeH function is operated by Kela via Kanta. See [03](03-finland.md), [06](06-api-drafts-and-specifications.md), [07](07-cross-border-exchange.md).

**Priority category** — One of the specific types of health data EHDS lists in Annex I as subject to mandatory cross-border exchange: patient summaries, ePrescriptions/eDispensations, lab results, medical imaging/reports, and hospital discharge reports. Rolled out in two tranches (2029, 2031). See [02](02-implementation-timeline.md).

**Secure processing environment** — The controlled technical environment an HDAB must provide for researchers/analysts to access secondary-use data without it leaving the environment. See [01](01-legal-and-technical-framework.md).

**TFEU** (Treaty on the Functioning of the European Union) — EHDS's dual legal basis is Article 16 TFEU (data protection) and Article 114 TFEU (internal market harmonization) — this dual basis is why EHDS has both a GDPR-adjacent rights character and a CE-marking-style product-regulation character. See [01](01-legal-and-technical-framework.md).

## Standards, protocols and technical specifications

**CEN / CENELEC** (European Committee for Standardization / European Committee for Electrotechnical Standardization) — The EU's formal standardization bodies; CEN/TC 251 is the technical committee for health informatics. No EHDS-specific standardization mandate was confirmed by name in this research. See [05](05-gateway-market-and-api-status.md).

**CDA** (Clinical Document Architecture) — The older HL7 document standard (pre-FHIR) that today's live, operational NCPeH network exchanges Patient Summaries and ePrescriptions in — as opposed to the newer FHIR-based formats described in [06](06-api-drafts-and-specifications.md), which are drafted but not yet live. See [07](07-cross-border-exchange.md).

**CI-build** — "Continuous integration build" — the least stable state a FHIR Implementation Guide can be in: the live, unballoted tip of the source repository, not yet through any formal review. Most of the HL7 Europe content IGs are at this stage. See [06](06-api-drafts-and-specifications.md).

**DICOM** (Digital Imaging and Communications in Medicine) — The long-established standard for medical imaging data and networking; predates EHDS by decades. See [06](06-api-drafts-and-specifications.md).

**DICOMweb** — The modern REST-based family of DICOM protocols (QIDO-RS for query, WADO-RS for retrieve, STOW-RS for store). Not itself EHDS-specific — it's the underlying transport that the EHDS-driven **MADO** profile is layered on top of. See [06](06-api-drafts-and-specifications.md).

**EURIDICE** (European Interoperability Specifications for Digital Solutions in Healthcare) — The joint HL7 Europe / IHE Europe initiative actually drafting the technical specifications intended to feed the EEHRxF. Not a Commission body. See [05](05-gateway-market-and-api-status.md), [06](06-api-drafts-and-specifications.md).

**FHIR** (Fast Healthcare Interoperability Resources) — The HL7 data-exchange standard underpinning essentially all the draft EHDS technical work (HL7 Europe content IGs, the EU Health Data API, IHE MHD/PDQm). See [06](06-api-drafts-and-specifications.md).

**FSH** (FHIR Shorthand) — A compact, human-readable authoring language for FHIR Implementation Guides, compiled to full FHIR JSON/XML by the SUSHI tool. The example Patient Summary in [06](06-api-drafts-and-specifications.md) is shown in FSH.

**HL7** / **HL7 Europe** — Health Level Seven International, the standards organization behind FHIR; HL7 Europe is its European affiliate, publisher of the content Implementation Guides referenced throughout [06](06-api-drafts-and-specifications.md).

**ICD-10 / ICD-11** (International Classification of Diseases) — WHO diagnosis coding systems; referenced as one of the terminology standards relevant to EHDS content. See [05](05-gateway-market-and-api-status.md).

**IG** (Implementation Guide) — A published, structured specification for how to use FHIR (or another base standard) for a particular purpose — the standard packaging format for all the draft specs discussed in [06](06-api-drafts-and-specifications.md).

**IHE** (Integrating the Healthcare Enterprise) / **IHE Europe** — An international standards body that profiles how existing standards (FHIR, DICOM, etc.) should be combined for specific real-world use cases, via named "profiles" (MHD, PDQm, MADO, XDS, XCA below). IHE Europe co-runs EURIDICE with HL7 Europe. See [06](06-api-drafts-and-specifications.md).

**IID** (Invoke Image Display) — An IHE profile for launching an image viewer to display a study; referenced as part of how MADO constrains image retrieval. See [06](06-api-drafts-and-specifications.md).

**IPA** (International Patient Access) — An HL7 FHIR Implementation Guide defining patient-facing (not just clinician-facing) API conventions; a dependency of the draft EU Health Data API. See [06](06-api-drafts-and-specifications.md).

**IPS** (International Patient Summary) — The HL7 FHIR base standard for patient summary documents that nearly every HL7 Europe content IG (including EPS) builds on. See [06](06-api-drafts-and-specifications.md).

**ITI** (IT Infrastructure) — The IHE domain covering cross-enterprise document/resource exchange infrastructure (as in "IHE ITI-105," the document-publish transaction referenced in [06](06-api-drafts-and-specifications.md)).

**KOS** (Key Object Selection) — A DICOM document type used to express an imaging manifest — a structured list of which images belong to a study — as an alternative to a FHIR `ImagingStudy` resource under the MADO profile. See [06](06-api-drafts-and-specifications.md).

**LOINC** (Logical Observation Identifiers Names and Codes) — A coding system for identifying clinical observations and document sections (used throughout the example Patient Summary in [06](06-api-drafts-and-specifications.md) to code sections like "medications" or "allergies").

**MADO** (Manifest-based Access to DICOM Objects) — The IHE Radiology profile created specifically because of EHDS's imaging-sharing requirement; a governance/manifest layer sitting on top of DICOMweb's WADO-RS. See [06](06-api-drafts-and-specifications.md).

**OpenNCP** — The European Commission (DG SANTE)-backed open-source reference implementation of the NCPeH, built on SOAP/XCA and CDA (the older generation, predating the new FHIR drafts). Real national NCPeH implementations (e.g. Denmark's, MIT-licensed) are built directly on it. See [07](07-cross-border-exchange.md).

**MHD** (Mobile access to Health Documents) — An IHE profile for document-style query/retrieve over FHIR; the primary pattern the draft EU Health Data API uses for pulling documents like a Patient Summary. See [06](06-api-drafts-and-specifications.md).

**PDQm** (Patient Demographics Query for Mobile) — An IHE profile for matching/finding the right patient record across systems before requesting their data; a dependency of the draft EU Health Data API. See [06](06-api-drafts-and-specifications.md).

**QIDO-RS** — The DICOMweb query transaction (part of the WADO-RS/QIDO-RS/STOW-RS family). See [06](06-api-drafts-and-specifications.md).

**SMART Backend Services** (also "SMART on FHIR") — An OAuth2-based standard for system-to-system authorization without an end-user login step — how one country's system authenticates to another's under the draft EU Health Data API. See [06](06-api-drafts-and-specifications.md).

**SNOMED CT** — A comprehensive clinical terminology/coding system, referenced as one of the terminology standards relevant to EHDS content. See [05](05-gateway-market-and-api-status.md).

**STOW-RS** — The DICOMweb store transaction (part of the WADO-RS/QIDO-RS/STOW-RS family). See [06](06-api-drafts-and-specifications.md).

**STU** / **STU1** (Standard for Trial Use) — A formal, balloted FHIR IG maturity level — more mature than an unballoted CI-build, but still explicitly not a final/normative standard. Two EURIDICE IGs (Imaging Study Report, EU Health Data API) reached STU1 ballot in March–April 2026. See [06](06-api-drafts-and-specifications.md).

**SUSHI** — The compiler that turns FSH source into full FHIR JSON/XML artifacts; the standard modern FHIR IG build toolchain. See [06](06-api-drafts-and-specifications.md).

**WADO-RS** (Web Access to DICOM Objects by RESTful Services) — The DICOMweb transaction for retrieving actual image data; still the underlying retrieval mechanism even under the newer MADO profile. See [06](06-api-drafts-and-specifications.md).

**XCA** (Cross-Community Access) — An older IHE profile for querying (transaction **ITI-38**) and retrieving (transaction **ITI-39**) documents across independent "communities" (e.g. regions or countries) that don't share a common patient ID scheme. This is what today's live NCP-to-NCP Patient Summary exchange actually runs on. See [06](06-api-drafts-and-specifications.md), [07](07-cross-border-exchange.md).

**XCPD** (Cross-Community/Cross-Gateway Patient Discovery) — The IHE profile used by the epSOS **Identification Service** to match a patient's identity across two countries' systems before any data is requested. See [07](07-cross-border-exchange.md).

**XDS** (Cross-Enterprise Document Sharing) — An older IHE profile for sharing documents within a single community/region via a shared repository/registry; the architecture pattern Finland's Kanta and similar national systems resemble. See [06](06-api-drafts-and-specifications.md).

## System types

**EHR** (Electronic Health Record) — Used in this documentation largely interchangeably with EMR/HIS; the regulatory term EHDS itself uses (e.g. "EHR system" conformity regime).

**EMR** (Electronic Medical Record) — See EHR/HIS; the terms are used loosely in industry and in this documentation.

**HIS** (Hospital Information System) — The broader hospital-wide IT system a HIS/EMR/EHR vendor sells, which typically includes the EMR/EHR module discussed throughout.

**PACS** (Picture Archiving and Communication System) — The system hospitals use to store and manage medical images, the typical source system for DICOM/DICOMweb data. See [06](06-api-drafts-and-specifications.md).

## National bodies and systems, by country

**Finland** — **Kanta** (Kanta-palvelut / Kanta Services): Finland's national digital health backbone, operated by **Kela**; **THL** (Finnish Institute for Health and Welfare): technical/operational EHDS preparation support; **STM** (Ministry of Social Affairs and Health): leads national EHDS implementation; **Findata**: Finland's Secondary Use Act data-permit authority and presumed HDAB candidate. See [03](03-finland.md).

**Germany** — **gematik**: operator of the Telematikinfrastruktur (TI), Germany's national digital health network; **ePA** (elektronische Patientenakte): Germany's national electronic patient record; **DigiG** and **GDNG**: Germany's two EHDS-related implementing laws passed as of this research; **GeDIG**: a further implementing law in progress; **FDZ Gesundheit** (Forschungsdatenzentrum Gesundheit): Germany's secondary-use data body, positioned as a likely HDAB precursor. See [04](04-other-member-states.md).

**France** — **DNS** (Délégation au numérique en santé): leads France's EHDS transposition; **ANS** (Agence du Numérique en Santé): operates France's NCPeH ("Sesali"); **CNAM**: France's national health insurance body; **DMP** / **Mon espace santé**: France's national patient portal/shared medical record; **Health Data Hub**: France's secondary-use data platform. See [04](04-other-member-states.md), [06](06-api-drafts-and-specifications.md).

**Austria** — **ELGA** (Elektronische Gesundheitsakte): Austria's national electronic health record system, described as putting Austria "already very well positioned" for EHDS. See [04](04-other-member-states.md).

**Denmark** — **MedCom**: a Danish national health-data-exchange coordination body; **Sundhedsdatastyrelsen** (Danish Health Data Authority): operates Denmark's NCPeH; consolidating into "Digital Health Denmark" from January 2027. See [04](04-other-member-states.md).

**Netherlands** — **MedMij**: the Dutch framework for citizen-facing personal health environments (PGOs); **PGO** (Persoonlijke GezondheidsOmgeving): a personal health environment app under MedMij; **VZVZ**: a Dutch health-data-exchange coordination body; **GDA** (Gezondheidsdata-autoriteit): the proposed new Dutch authority intended to house the Digital Health Authority, HDAB and NCP for Secondary Use roles. See [04](04-other-member-states.md).

**Sweden** — **SENASH**: the Swedish project splitting secondary-use roles across national bodies for EHDS. See [04](04-other-member-states.md).

**Italy** — **FSE** (Fascicolo Sanitario Elettronico) 2.0: Italy's national electronic health record; **INI** Gateway: Italy's federated national gateway architecture, built on Sogei infrastructure. See [04](04-other-member-states.md).

## Research, assessment and industry bodies

**Black Book Research** — A commercial market-research firm whose EHDS vendor-readiness and market-size figures are cited throughout [04](04-other-member-states.md) and [05](05-gateway-market-and-api-status.md) but flagged as single-source, promotional commentary rather than independently verified fact.

**GA4GH** (Global Alliance for Genomics and Health) — Referenced for policy-brief commentary on EHDS national implementation. See [02](02-implementation-timeline.md).

**HIMSS** (Healthcare Information and Management Systems Society) — A health-IT industry association referenced as a potential source of EHDS market analysis. See [05](05-gateway-market-and-api-status.md).

**KLAS Research** — A health-IT market-research firm referenced as a potential source of vendor/market analysis. See [05](05-gateway-market-and-api-status.md).

**TEHDAS** (Towards the European Health Data Space) — An EU4Health-funded joint action that conducted a cross-country EHDS readiness assessment, concluding "no member state is fully ready." See [04](04-other-member-states.md).
