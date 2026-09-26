# Core Legal and Technical Obligations of EHDS (Regulation (EU) 2025/327) for HIS/EMR/EHR Systems and Providers

## What is the legal basis and structure of the EHDS Regulation (Regulation (EU) 2025/327)? What are its main chapters/titles relevant to primary use vs secondary use?

### Takeaway
Regulation (EU) 2025/327 of 11 February 2025 was adopted on the dual legal basis of Article 16 TFEU (data protection) and Article 114 TFEU (internal market harmonisation), was published in the Official Journal on 5 March 2025, and structures the EHDS around two distinct regimes — Chapter II for **primary use** (patients' access/control and cross-border exchange) and Chapter IV for **secondary use** (research/policy reuse) — bridged by a Chapter III certification regime for EHR systems themselves.

### Cited Findings
- Regulation (EU) 2025/327 of the European Parliament and of the Council of 11 February 2025 "on the European Health Data Space and amending Directive 2011/24/EU and Regulation (EU) 2024/2847" was published in the Official Journal as L, 2025/327, on 5 March 2025 — [Public Health / European Commission](https://health.ec.europa.eu/latest-updates/regulation-eu-2025327-european-health-data-space-and-amending-directive-201124eu-and-regulation-eu-2025-03-05_en); [EUR-Lex listing](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R0327)
- The Regulation lays down obligations on public and private sector bodies to facilitate both primary and secondary use of electronic health data (personal and non-personal) and aims to improve individuals' access to and control over their electronic health data — [Wikipedia summary of official text](https://en.wikipedia.org/wiki/European_Health_Data_Space) (via search synthesis, not directly fetched — see Gaps)
- Legal basis is Article 16 and Article 114 TFEU; Article 114 was chosen as the primary basis because most provisions aim to improve the internal market and free movement of goods/services, while Article 114(3) TFEU requires a high level of human health protection to be guaranteed; this contrasts with Article 168(1) TFEU (a pure health-policy basis) which was debated during the legislative process — [search synthesis citing EUR-Lex proposal COM(2022)197 and academic commentary](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52022PC0197)
- Chapter II and Chapter IV of the Regulation deal with primary use and secondary use of data, respectively; Article 3 (in Chapter II) sets out the "Right of natural persons to access their personal electronic health data" — [search synthesis]
- Chapter III of the Regulation governs EHR systems (the certification/conformity regime): "EHR systems shall be placed on the market or put into service only if they comply with the provisions in Chapter III" — [search synthesis referencing Regulation text]
- The Regulation amends Directive 2011/24/EU (cross-border healthcare) and Regulation (EU) 2024/2847 (Cyber Resilience Act) — [Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2025/03/european-health-data-space-regulation-published); [EY Greece](https://www.ey.com/en_gr/technical/tax/tax-alerts/regulation-2025-327-establishing-ehds)
- The Regulation entered into force 20 days after publication; sources differ slightly on the exact date given rounding: one search result states entry into force "26 May 2025" while another (used for the timeline) states "26 March 2025" as the date from which staged application periods are counted — see Gaps/conflict note below — [search synthesis, conflicting]

### Inferences
- The dual Article 16/114 TFEU legal basis explains why EHDS operates in parallel with, rather than as a lex specialis fully replacing, the GDPR: Article 114 gives it an internal-market/product-regulation character (hence the CE-marking-style EHR certification regime in Chapter III), while Article 16 anchors the data-subject rights (access, portability, opt-out) that parallel/interact with GDPR rights.
- The chapter split (II = primary use / III = EHR system product regulation / IV = secondary use) is the organizing structure vendors and providers need to track separately, since obligations, actors, and enforcement bodies differ by chapter.

### Gaps
- I could not directly access the EUR-Lex full text (eur-lex.europa.eu was blocked by the network egress proxy in this environment), so the exact enumeration of all Titles/Chapters and precise entry-into-force date (20 days after the 5 March 2025 OJ publication would be approximately 25 March 2025, but one secondary source says "26 May 2025" and another timeline source says application periods are counted "from 26 March 2025") could not be verified against the primary text. The report writer should confirm the precise entry-into-force date and full chapter list directly against EUR-Lex CELEX:32025R0327 if precision is required.
- Could not confirm the full list of all Chapter/Title headings (e.g., whether there is a distinct "Title" structure above "Chapter" level) since primary source access failed.

---

## What is the European Electronic Health Record Exchange Format (EEHRxF)? What data categories/priority categories does it cover, and what technical standards underpin it?

### Takeaway
The EEHRxF is the EHDS-mandated common technical format for structuring and exchanging electronic health data, initially covering five "priority categories" — patient summaries, e-prescriptions/e-dispensations, medical images and imaging reports, laboratory results/reports, and hospital discharge reports — rolled out in two phased groups (2029 and 2031), and technically built on HL7 FHIR-based European implementation guides (notably the HL7 Europe/International Patient Summary standard aligned with ISO/EN 27269) that succeed the earlier epSOS/eHDSI patient-summary and ePrescription formats (HL7 CDA R2).

### Cited Findings
- The EEHRxF defines key datasets under priority data categories including patient summaries, electronic prescriptions/dispensations, laboratory measurements, medical imaging reports, and hospital discharge reports — [search synthesis, multiple sources including StreamLex Art. 51 and health.ec.europa.eu]
- Patient summaries contain key clinical data such as allergies, active problems, implants, surgeries, and medications; ePrescriptions/eDispensations cover digital drug prescriptions and dispensing records; medical images and reports cover CT, MRI, X-ray, ultrasound and radiologist interpretations; lab results/reports cover clinical chemistry, hematology, microbiology, and genetic testing reports — [search synthesis]
- Implementation is phased: by March 2029 the first group of priority categories (patient summaries and ePrescriptions/eDispensations) must be exchangeable across all EU Member States; by March 2031 the second group (medical images, lab results, hospital discharge reports) must be operational EU-wide — [search synthesis citing health.ec.europa.eu and legal commentary]
- The HL7 FHIR European Patient Summary implementation guide is designed to support EEHRxF implementation and cross-border exchange, and claims conformance with the HL7 FHIR International Patient Summary (IPS) Implementation Guide v2.0.0 and HL7 FHIR EU Core profiles, which in turn claims compliance with the ISO/EN 27269 International Patient Summary standard — [HL7 Europe / HL7.eu Confluence & build.fhir.org](https://confluence.hl7.org/spaces/HEU/pages/248712170/HL7+Europe+Patient+Summary+FHIR+Implementation+Guide); [build.fhir.org IG](https://build.fhir.org/ig/hl7-eu/eps/introduction.html)
- Historically, the epSOS project (2008–2014) developed the first operational cross-border Patient Summary and ePrescription services, originally based on the HL7 CDA R2.0 standard, first operational in 2019 (under the successor eHDSI/MyHealth@EU programme) — [search synthesis citing HL7 Europe documentation]
- There is also an HL7 Europe "Medication Prescription and Dispense" implementation guide relevant to the ePrescription/eDispensation priority category — [build.fhir.org](https://build.fhir.org/ig/hl7-eu/mpd/background.html)

### Inferences
- The move from CDA-based epSOS formats to FHIR-based European IGs represents a generational technical shift that HIS/EMR vendors already supporting eHDSI patient summaries will need to plan a migration path for, since the FHIR-based EEHRxF specification is intended to supersede/extend the CDA-based legacy format used in MyHealth@EU today.
- Because EEHRxF technical specifications are to be adopted via Commission implementing acts (per Article references to "common specifications," see next section), the detailed field-level/profile-level content of the EEHRxF is not fully fixed in the Regulation's text itself — vendors should treat the HL7 Europe IGs as the leading candidate technical basis but watch for the formal implementing act.

### Gaps
- I could not confirm from primary sources (EUR-Lex was inaccessible) the exact Article number(s) that formally define "EEHRxF" (search results point to Article 51 as thematically relevant per StreamLex, but I could not verify its content directly) nor the exact wording of Annex/Article provisions listing the priority categories.
- The status of the Commission implementing act(s) formally adopting the EEHRxF technical specification is unclear from available sources — this should be flagged as **pending** given the Regulation defers detailed technical specifications to implementing acts due by 2027 per the staged timeline (see timeline section below), but I found no confirmation of an implementing act already adopted specifically for EEHRxF content (as opposed to MyHealth@EU/HealthDCAT-AP implementing regulations, which one source suggests were newly issued around September 2026 — see the primary-use infrastructure section for that specific, more recent item).

---

## What are the conformity assessment / self-certification / "CE-marking-like" requirements for EHR systems under EHDS? Is this similar to the MDR model?

### Takeaway
EHDS creates a mandatory, self-certification-based (no notified body) conformity regime for EHR systems that process the priority categories of personal electronic health data, modeled more on general-product CE marking than on the MDR's third-party conformity assessment: manufacturers must meet essential requirements (Annex II) covering interoperability and security/logging, draw up technical documentation, test systems in "European digital testing environments," issue an EU declaration of conformity (Article 39) and affix CE marking, and register the system in a Commission-run EU database before placing it on the market.

### Cited Findings
- EHDS establishes a mandatory conformity self-assessment scheme for EHR systems processing priority categories of personal electronic health data; certification is by self-certification with no notified body, a model closer to CE marking for general product safety than to the notified-body model under MDR — [Osborne Clarke, via search synthesis](https://www.osborneclarke.com/insights/eu-establishes-mandatory-ce-marking-electronic-health-record-systems)
- Manufacturers must demonstrate compliance with essential requirements laid down in Annex II of the Regulation before placing EHR systems on the EU market, covering general functionality, interoperability standards, and security/logging capabilities — [search synthesis, Osborne Clarke/DLA Piper via search]
- The process: (1) manufacturers draw up technical documentation demonstrating compliance with essential requirements prior to market placement; (2) testing occurs in "European digital testing environments" established under the Regulation; (3) manufacturers issue an EU declaration of conformity under Article 39 stating essential requirements are fulfilled; (4) manufacturers affix the CE marking of conformity to accompanying documents and, where applicable, to the system packaging — [search synthesis]
- EHR systems "shall be placed on the market or put into service only if they comply with the provisions in Chapter III" of the Regulation; manufacturers must ensure harmonised software components and the EHR systems themselves conform to essential requirements in Annex II and to common specifications adopted under Article 36 — [search synthesis]
- Article 28 covers market surveillance authorities; Article 29 addresses handling of risks posed by EHR systems and of serious incidents; Article 30 covers handling of non-compliance — [search synthesis]
- National market surveillance authorities supervise and enforce the Regulation's rules against manufacturers/economic operators regarding EHR systems placed on the market or put into service; technical documentation must let market surveillance authorities assess conformity with essential requirements — [search synthesis]
- The Commission must establish a publicly available EU database for registration of EHR systems and labelled wellness applications; manufacturers must enter specified data into this database before market placement or putting into service, supporting transparency, procurement decisions, and market surveillance — [search synthesis]
- Under Article 38, an "information sheet" for each registered system must give concise, complete, correct, and clear information to professional users, including manufacturer identity/contact details, system name/version/release date, intended purpose, categories of electronic health data processed, and supported standards/formats/specifications — [search synthesis]
- Article 27 addresses the relationship with medical devices/IVD Union law: medical device and IVD manufacturers become subject to EHDS interoperability product requirements when they claim their devices are interoperable with EHR systems — [MedDeviceGuide, via search synthesis](https://meddeviceguide.com/blog/european-health-data-space-ehds-medical-device-manufacturers-guide)

### Inferences
- The "no notified body" self-certification design is a deliberate lighter-touch compliance route compared to MDR, which should reduce time-to-market for HIS/EMR vendors relative to a medical-device-style regime, but the presence of market surveillance authorities with enforcement powers (Articles 28–30) means self-certification is not "unsupervised" — post-market enforcement risk (corrective action, market withdrawal) is the real compliance lever rather than pre-market gatekeeping.
- Because Article 27 pulls medical device/IVD manufacturers into EHDS product-interoperability obligations whenever they claim EHR interoperability, HIS/EMR vendors integrating with connected medical devices should expect dual-regime compliance (MDR/IVDR plus EHDS Chapter III) for interoperability claims.

### Gaps
- I could not verify the precise content of Annex II (the essential requirements) or Article 36 ("common specifications") directly from the Regulation text — primary source access (EUR-Lex, Osborne Clarke, DLA Piper, health.ec.europa.eu) was blocked by the network egress proxy in this research environment; only search-engine-synthesized summaries were available, not the verbatim provisions.
- Could not confirm whether "European digital testing environments" are already operational or are a **pending** deliverable requiring further Commission implementing measures — this should be flagged as likely pending given the general 2027 first-wave implementing-act deadline noted in the timeline section.

---

## What obligations fall on manufacturers of EHR systems vs. on healthcare providers who deploy/operate them?

### Takeaway
Under Chapter III, EHR system **manufacturers** bear product-safety-style obligations (essential requirements compliance, technical documentation, testing, EU declaration of conformity, CE marking, database registration, post-market surveillance cooperation, incident/risk reporting), while **healthcare providers/deployers** bear operational and data-governance obligations under Chapters II and IV (ensuring patient primary-use access rights are honored, connecting to MyHealth@EU via national infrastructure, and — as "health data holders" — making specified categories of electronic health data available for secondary use through Health Data Access Bodies, subject to limited exemptions).

### Cited Findings
- EHR system manufacturers must ensure harmonised software components and EHR systems conform to essential requirements (Annex II) and common specifications (Article 36) before market placement, and are responsible for technical documentation, EU declarations of conformity (Article 39), CE marking, and EU database registration (Article 38 information sheet requirements) — [search synthesis, consolidated from Osborne Clarke/DLA Piper/StreamLex via search]
- Article 28–30 place market surveillance and incident/non-compliance handling obligations that run between manufacturers/economic operators and national market surveillance authorities — [search synthesis]
- "Health data holders" — a category including healthcare providers and organisations performing health research — are required to make extensive categories of electronic health data available for specified secondary use purposes, i.e., healthcare providers acting as data holders bear affirmative secondary-use data-sharing obligations distinct from the manufacturer's product obligations — [search synthesis, citing McCann FitzGerald/Lexology and activeMind.legal analyses]
- Exemptions from the data holder secondary-use sharing obligation exist for natural persons (including individual researchers) and microenterprises, and where sharing might compromise intellectual property rights — [search synthesis]
- By June 2025 (per one source) or otherwise per Article 19, each Member State must designate one or more national Digital Health Authorities responsible for implementation oversight, including issuing guidelines, certifying interoperability components, and managing MyHealth@EU connections — a body distinct from the manufacturer-facing market surveillance authority — [search synthesis]

### Inferences
- The obligation split maps cleanly onto product-law logic: manufacturers face pre-market and post-market product compliance duties (akin to MDR "manufacturer" duties), while healthcare providers/hospitals face operational "user"/"data controller-holder" duties (patient rights fulfillment under primary use, data-sharing under secondary use) — meaning a hospital IT department must track two separate compliance tracks: (a) only procuring/deploying EHR systems that carry valid CE marking and EU database registration, and (b) independently meeting its own data holder/data access obligations under Chapters II and IV regardless of which vendor's system it runs.
- Because "healthcare providers performing health research" are explicitly named as data holders, hospitals with research arms should expect secondary-use sharing obligations to apply to clinical data generated in ordinary care delivery, not only to dedicated research datasets.

### Gaps
- I could not confirm from primary text the exact Article(s) enumerating "healthcare provider" duties under primary use (e.g., duties to make data available for cross-border care, timelines for interoperability adoption by providers) distinct from the general market-level manufacturer duties — EUR-Lex access failure limited verification.
- Could not determine whether there are provider-side penalties distinct from manufacturer-side penalties, or whether both are captured under the same Articles 63–64 penalty framework (see penalties section) — flagged as a gap for the enforcement section too.

---

## What is MyHealth@EU and what role does it play for primary use exchange? What are National Contact Points for Digital Health (NCPeH)?

### Takeaway
MyHealth@EU (the successor to eHDSI) is the EU's cross-border digital health infrastructure for **primary use**, formed by the central EU platform plus a network of national contact points (NCPeH) in each Member State that enable interoperable, cross-border exchange of patient summaries, ePrescriptions, and (once the second priority group is live) medical images, lab results and discharge reports; new Commission implementing regulations on MyHealth@EU (and the related HealthDCAT-AP metadata standard) were reportedly issued as recently as September 2026.

### Cited Findings
- "MyHealth@EU means the cross-border infrastructure for primary use of electronic health data formed by the combination of national contact points for digital health and the central platform for digital health," per the Regulation's definitional language as summarized — [search synthesis]
- The National Contact Point for eHealth (NCPeH) is the standardized national gateway infrastructure that, under the (legacy) eHealth Digital Service Infrastructure (eHDSI) framework, enables secure, interoperable exchange of health data (e.g., Patient Summaries, ePrescriptions) across Member States — [search synthesis]
- By March 2029, the first group of priority data categories (patient summaries and ePrescriptions/eDispensations) must be exchangeable across all 27 Member States via MyHealth@EU; by March 2031 the second group (medical images, lab results, hospital discharge reports) must be operational — [search synthesis, consistent across multiple sources]
- New Commission implementing regulations on "MyHealth@EU and HealthDCAT-AP" were reported by a specialist legal blog as recently issued, dated around 23 September 2026 — [Die Produktkanzlei](https://www.produktkanzlei.com/en/2026/09/23/myhealtheu-and-healthdcat-ap/) (title/date only verified via search snippet; full content not independently fetched)
- Each Member State must designate one or more national Digital Health Authorities (per Article 19) with responsibilities that include managing MyHealth@EU infrastructure and connections — [search synthesis]

### Inferences
- The near-term (2029) MyHealth@EU deadline for patient summaries and ePrescriptions means HIS/EMR vendors serving hospitals with cross-border patient flows (a live consideration for a Finland-focused integration project, given the Nordic/Baltic cross-border patient traffic) should prioritize FHIR-based patient summary and ePrescription interoperability now, since NCPeH connectivity for these two categories is the first mandatory milestone.
- The apparent September 2026 issuance of MyHealth@EU/HealthDCAT-AP implementing regulations (per the Produktkanzlei item) suggests the technical/legal groundwork for the 2029 milestone is actively being finalized at the time of this research (Sept 2026); this item is recent enough that the report writer should treat it as an important, freshly-adopted implementing measure to flag prominently, while noting it could not be independently verified beyond the search snippet.

### Gaps
- I was unable to fetch the Die Produktkanzlei article directly (network egress restrictions blocked WebFetch broadly in this environment), so the precise legal instrument name/number and substantive content of the September 2026 MyHealth@EU/HealthDCAT-AP implementing regulation(s) could not be verified — flagged as **pending verification**, recommend the report writer or a follow-up researcher fetch this source directly if tool access allows.
- Could not confirm the exact Article number(s) establishing MyHealth@EU and NCPeH obligations (thematically likely in Chapter II, but unverified against primary text).

---

## For secondary use: what are Health Data Access Bodies (HDABs), data permits, HealthData@EU, and what must EHR/HIS systems or data holders do to support data access requests?

### Takeaway
Each Member State must establish at least one Health Data Access Body (HDAB) that receives and evaluates data-permit applications from secondary users (researchers, innovators, public bodies), coordinates with data holders, grants access only through secure processing environments, and connects nationally to the decentralized HealthData@EU cross-border infrastructure; data holders (including healthcare providers) must make specified electronic health data categories available on request, subject to a patient opt-out right that operates independently of, and alongside, GDPR's right to object.

### Cited Findings
- The EHDS mandates establishment of at least one national Health Data Access Body (HDAB) per Member State, through which secondary users apply for data; HDABs receive data permit applications, coordinate access with data holders, and manage cross-border requests through HealthData@EU — [search synthesis, citing Oxford Academic/European Journal of Public Health and EY Greece]
- To access secondary health data, an applicant submits a data access application to the HDAB; secondary use covers scientific research, innovation, official statistics, public health policy, and regulatory activities — [search synthesis]
- HealthData@EU is a decentralized EU-wide infrastructure connecting HDABs established in each Member State, enabling exchange of information (metadata, data permit applications) and ultimately providing data users a single point of access — [search synthesis]
- An HDAB "shall only provide access to electronic health data pursuant to a data permit through a secure processing environment" — [search synthesis]
- Data holders (including healthcare providers and organisations performing health research) are required to make extensive categories of electronic health data available for secondary use, with exemptions for natural persons/individual researchers, microenterprises, and cases risking IP compromise — [search synthesis, citing DLA Piper Privacy Matters and McCann FitzGerald/Lexology analyses]
- Patients have a mandatory right to object (opt-out) to secondary use of their electronic health data; in principle secondary use is permitted unless an explicit objection is made (opt-out-by-default model); the right is exercisable at any time without needing to state a reason, and Member States must provide an "accessible and easily understandable opt-out mechanism" — [search synthesis, citing ScienceDirect analysis and activeMind.legal]
- The EHDS opt-out is described as a distinct right from the GDPR right to object: the GDPR right lets a data subject contest ongoing processing, whereas the EHDS opt-out, once exercised, prevents personal electronic health data from being made available for any subsequent instance of secondary use — [search synthesis, ScienceDirect via search]
- Most secondary use provisions become applicable from March 2029, with additional categories (e.g., genomic data) becoming operational by March 2031 — [search synthesis]

### Inferences
- For HIS/EMR vendors, the practical secondary-use technical obligation is to ensure hospital systems can (a) flag/respect patient opt-out status at the point data is extracted for HDAB requests, and (b) support structured, interoperable export of the relevant electronic health data categories (likely aligned to EEHRxF-related standards) to HDAB-managed secure processing environments — though the Regulation appears to place the legal obligation to share on the "data holder" (the hospital/provider), the technical burden of enabling compliant, filtered data export will fall on the underlying HIS/EMR software.
- The opt-out-by-default (rather than opt-in/consent) design for secondary use is a materially different consent architecture than typical GDPR research-consent practice, and EMR/HIS systems will need a dedicated "EHDS opt-out flag" data field distinct from any existing GDPR consent management flags, given the two rights are legally distinct per the ScienceDirect analysis.

### Gaps
- I could not verify the specific Article number governing data holder secondary-use obligations (search results referenced "Article 44" only as part of my own query framing, not as a confirmed citation — this should not be treated as confirmed) or the specific Article establishing the opt-out right — primary text access failed.
- Could not determine the exact scope/list of secondary-use "additional categories" beyond genomic data becoming operational in the 2031 wave, nor confirm whether hospital discharge reports (a primary-use priority category) is also separately listed for secondary use.
- Could not confirm details on fees HDABs may charge or the precise structure/content of "data permits" (validity period, renewal, scope limitations) beyond the general description above.

---

## What penalties/enforcement mechanisms exist for non-compliance?

### Takeaway
The EHDS empowers HDABs (for secondary use/data holder violations) and national market surveillance authorities (for EHR system manufacturer/product violations) with enforcement tools including permit revocation, exclusion from future access, and administrative fines of up to EUR 20 million or 4% of total worldwide annual turnover (whichever is higher), with Member States required to establish additional penalties for violations not otherwise specifically addressed; enforcement follows the EU's usual "procedural autonomy" model, so specific appeal/procedural rules vary by Member State.

### Cited Findings
- The EHDS Regulation imposes administrative fines for violations of up to EUR 20 million or 4% of total worldwide annual turnover, whichever is higher; Member States must also establish additional penalties for violations not specifically covered by an EHDS-specified penalty — [search synthesis, citing William Fry and TEHDAS draft guideline documents]
- Enforcement is primarily attributed to each Member State's HDAB, which must monitor compliance by data holders and data users and may request information from them to verify compliance; enforcement tools available to HDABs include permit revocation, exclusions, and administrative fines — [search synthesis]
- The relevant Articles for penalties and enforcement are Articles 63 and 64 of the EHDS Regulation, covering enforcement by health data access bodies and general conditions for imposing administrative fines, respectively — [search synthesis]
- Procedural conditions for enforcement (time limits for appeal, administrative steps, identity of competent national bodies) may vary by Member State under the principle of procedural autonomy — [search synthesis]
- A dedicated TEHDAS project deliverable — "Guideline for Health Data Access Bodies on fees and penalties for non-compliance related to the EHDS regulation" — exists as a (draft, as of Sept/Oct 2025) practical guidance document for HDABs on implementing the fee/penalty regime — [TEHDAS draft guideline PDF](https://tehdas.eu/wp-content/uploads/2025/10/draft-guideline-on-penalties-for-non-compliance-related-to-the-ehds-regulation.pdf); [Zenodo record](https://zenodo.org/records/20267597)
- Separately, market surveillance authorities enforce Chapter III (EHR system product) compliance against manufacturers/economic operators, with Articles 28 (market surveillance authorities), 29 (handling of risks/serious incidents), and 30 (handling of non-compliance) providing the relevant product-side enforcement framework — [search synthesis]

### Inferences
- The EUR 20 million / 4% global turnover fine ceiling mirrors the GDPR's higher fine tier, signaling that EU legislators intend EHDS non-compliance (at least for secondary-use/data holder violations under HDAB enforcement) to be treated with GDPR-level severity; vendors and hospitals should treat EHDS compliance with the same governance rigor as GDPR compliance programs.
- Because two different enforcement tracks exist — HDAB-led (secondary use, Articles 63-64) and market-surveillance-authority-led (Chapter III product compliance, Articles 28-30) — an organization that is both a healthcare provider (data holder) and, if it develops its own in-house EHR/HIS software, a "manufacturer," could face parallel enforcement exposure from two different national authorities.

### Gaps
- I could not verify whether the EUR 20 million/4% turnover fine ceiling specifically applies only to secondary-use-related (Articles 63-64) violations, or whether it is a Regulation-wide maximum also applicable to Chapter III (EHR system) manufacturer non-compliance — sources described it in the context of HDAB/secondary-use enforcement but did not explicitly rule out its application to Chapter III violations, and I could not access the primary text to confirm the fine ceiling's scope of application.
- Could not confirm whether there are tiered fine levels (e.g., a lower tier for lesser infringements, as GDPR has EUR 10m/2% and EUR 20m/4% tiers) — only the higher figure was found in search results.
- The TEHDAS guideline is explicitly non-binding practical guidance for HDABs (a draft as of the dates found), not the Regulation's own text — should be cited as secondary/soft-law guidance only, not as a legal source for the fine amounts themselves.

---

## Overall Research Method Note

### Takeaway
Direct access to primary sources (EUR-Lex regulation text, European Commission health pages, and most law-firm analysis sites such as DLA Piper, Skadden, Osborne Clarke, EY, Inside Privacy, Wikipedia, and StreamLex) was blocked by this environment's network egress proxy for all WebFetch attempts; all findings above are therefore drawn from WebSearch's own synthesized summaries of search results (which themselves cite and quote these sources), not from directly fetched and independently verified page content.

### Cited Findings
- Every WebFetch call attempted in this research session (to eur-lex.europa.eu, www.ey.com, www.dlapiper.com, www.skadden.com, www.osborneclarke.com, www.insideprivacy.com, privacymatters.dlapiper.com, streamlex.eu, health.ec.europa.eu, en.wikipedia.org) returned an `EGRESS_BLOCKED` error from the network egress proxy in this session's environment.
- WebSearch calls succeeded throughout and returned search-engine-synthesized answers with source links, which is the basis for all findings in this document.

### Inferences
- The report writer and any downstream fact-checking should treat every claim in this document as **search-engine-synthesized, not independently primary-source-verified**, and should re-verify Article-level citations directly against EUR-Lex CELEX:32025R0327 before publishing any claim as an authoritative direct quotation of the Regulation's text, especially for exact Article numbers, Annex II content, and the precise scope of the fine ceiling.

### Gaps
- Full verbatim text of Regulation (EU) 2025/327, including the definitive Table of Contents (all Chapter/Section headings), Annex II (essential requirements), and Annex/Article defining EEHRxF priority categories, was not accessible in this session and should be independently verified.
- Exact entry-into-force date discrepancy (25/26 March 2025 vs. "26 May 2025" reported by one source) is unresolved and should be confirmed against the Official Journal publication (5 March 2025 + 20 days = approximately 25 March 2025, per standard EU regulation entry-into-force convention, but this arithmetic was not itself confirmed against the primary text).
