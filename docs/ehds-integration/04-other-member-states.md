# Other member states: a comparative view

This file compares EHDS readiness and gateway architecture across nine member states beyond Finland: Germany, France, Estonia, the Netherlands, Austria, Denmark, Sweden, Italy and Spain. See the [README](README.md) for methodology caveats — WebFetch access to most government and industry domains was blocked during research, so findings rely on search-engine synthesis rather than direct verification.

## Germany

Germany already has a live opt-out national ePA ("ePA für alle," since 15 January 2025) built on the **Telematikinfrastruktur (TI)**, with gematik responsible for connecting the ePA ecosystem to European cross-border exchange ([heise](https://www.heise.de/en/news/Germany-is-expected-to-deliver-on-EU-health-data-space-ePA-and-EUDI-Wallet-11266858.html)). German FHIR-based initiatives — ISiK, MIOs, and the Medical Informatics Initiative (MII) core dataset — will increasingly need to align with EU EHDS requirements ([health-samurai.io](https://www.health-samurai.io/articles/fhir-adoption-in-germany)).

Germany has passed two of the national laws needed for EHDS — the **Digital-Gesetz (DigiG)** and the **Gesundheitsdatennutzungsgesetz (GDNG)** ([BMG - DigiG](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/digig); [BMG - GDNG](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/gesundheitsdatennutzungsgesetz)) — and stood up a secondary-use data body, the **Forschungsdatenzentrum Gesundheit (FDZ Gesundheit / "Health Data Lab")**, under the GDNG, sitting within BfArM, which publicly launched **9 October 2025** and is "well positioned to support Germany's future Health Data Access Body responsibilities under EHDS" ([dsv-europa.de](https://dsv-europa.de/en/news/2025/10/fdz-gesundheit.html); [Latham & Watkins](https://www.lw.com/en/insights/new-health-data-lab-in-germany-facilitates-secondary-use-of-health-data)). FDZ Health holds pseudonymised claims data for statutory-health-insurance members (~90% of the population, 2009–2023) and "will allow Germany to plug into EHDS once that platform has become fully operational, currently contemplated for 2031" ([Latham & Watkins](https://www.lw.com/en/insights/new-health-data-lab-in-germany-facilitates-secondary-use-of-health-data)).

A third law, the **"Gesetz für Daten und digitale Innovation im Gesundheitswesen" (GeDIG)**, was approved by the German Cabinet on **15 July 2026**, explicitly framed as continuing EHDS-compatible data reuse infrastructure ([BMG press release](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/kabinett-beschliesst-gedig-pm-15-07-2026)).

**Vendor landscape**: A pan-European vendor-readiness market-research study (Black Book Research — treat as vendor-market-research, not an official assessment) characterizes Germany's hospital-IT vendor landscape as **CompuGroup Medical (CGM), Siemens, Vitagroup and Agfa** competing in "sovereignty-driven tenders," with German hospitals said to "face the steepest readiness gap" among the markets studied; CGM is described as aligning its middleware with gematik ePA standards "extending toward EHDS compliance"; Agfa HealthCare's Orbis Connect product operates in Germany and France; Oracle Health (Cerner) and Epic are described as competing for large academic/enterprise hospital contracts on interoperability depth ([Black Book Research via Newswire](https://www.newswire.com/news/black-book-research-unveils-first-pan-european-study-of-ehds-22630969) — a market-research firm's press release, not independently verified in this research).

**Gateway model**: Germany's approach is a phased, nationally-legislated build-out (DigiG → GDNG → GeDIG), with the national ePA/TI infrastructure and gematik serving as the technical bridge to MyHealth@EU/EHDS — a hybrid pattern where a strong national platform coexists with a historically fragmented, vendor-competitive hospital-IT market.

> ⚠️ **Unverified / conflicting sources**: No source found explicitly, formally designates Germany's HDAB or NCPeH by EHDS-specific legal title (FDZ Gesundheit and gematik are preparatory/adjacent bodies, described in forward-looking language). The Black Book Research findings could not be independently verified via direct fetch.

## France

France starts from a strong existing base: **Mon espace santé** (25 million users) and the **Health Data Hub**, with a digital-health framework that already imposes FHIR as an exchange standard ([donneespersonnelles.fr](https://www.donneespersonnelles.fr/espace-europeen-donnees-sante)). Mon espace santé, launched 2021, is run by the **Délégation ministérielle au numérique en santé (DNS)** and the **Caisse nationale d'assurance maladie (CNAM)**, and EHDS's opt-out model mirrors the existing Mon Espace Santé approach ([donneespersonnelles.fr](https://www.donneespersonnelles.fr/espace-europeen-donnees-sante)).

The Health Data Hub is positioned functionally as France's HDAB-type body (research/innovation/public-health/governance data access requests), though no source uses the word "designated." A consortium, **"French_HealthData_EU,"** co-financed by the European Commission and piloted by the Health Data Hub with 18 French partners, is implementing a DCAT-AP-compliant metadata catalogue, on track to conclude by end of 2026 with a roadmap for European cooperation ([health-data-hub.fr](https://www.health-data-hub.fr/actualites/frenchhealth-dataeu-une-etape-cle-vers-la-mise-en-place-de-lespace-europeen-des-donnees)).

EHDS implementation in France requires amending the **Code de la santé publique** and the "Informatique et Libertés" law via a bill expected in 2026, piloted by the DNS ([assemblee-nationale.fr](https://www.assemblee-nationale.fr/dyn/content/download/504006/file/Communication%20Espace%20europ%C3%A9en%20donn%C3%A9es%20de%20sant%C3%A9.pdf)); commentary as of the sources found notes "arbitrages devront être faits" (trade-offs will need to be made) and "le temps presse" (time is pressing) ([lesdpodelasante.com](https://www.lesdpodelasante.com/blog/ehds-espace-europeen-donnees-sante-preparation)). The DNS held a dedicated EHDS session on 8 October 2026 to update stakeholders.

**Vendor engagement**: No specific evidence was found of individual French DPI (Dossier Patient Informatisé) hospital-EMR vendors publicly engaging with EHDS preparation — a gap — though the DNS's prior FHIR mandate implies vendors already operate under a compatible interoperability requirement.

**Gateway model**: France's approach is **centrally-led and state/CNAM-run** (DNS + CNAM operating Mon espace santé nationally; Health Data Hub centralizing secondary-use access) rather than hospital/vendor-led.

> ⚠️ **Unverified / conflicting sources**: No explicit, named NCPeH designation or formally designated HDAB (by legal act) was confirmed for France.

## Estonia

Estonia's **X-Road**-based, federated national EHR — launched 17 December 2008, the first country to register virtually all residents' medical history from birth to death — is frequently cited in EHDS literature as a template for federated/decentralized data exchange. X-Road, launched in 2001, now facilitates over 2.2 billion transactions annually across more than 3,000 digital services spanning e-health, taxation and e-voting ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2352340925010753); [cyber.ee](https://cyber.ee/resources/case-studies/estonian-interoperability-framework-x-road/)). A Lancet Digital Health paper, "Federated electronic health records for the European Health Data Space," uses Estonia's federated model as a reference point for EHDS-style architecture ([The Lancet Digital Health](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00156-5/fulltext)). Estonia and Finland have connected their respective data-exchange layers for cross-border interoperability, with several cross-border healthcare services already running ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2352340925010753)).

The Ministry of Social Affairs is in charge of health-data policy and strategy, working alongside the (now-merged) Estonian e-Health Foundation.

> ⚠️ **Unverified / conflicting sources**: This research could not confirm Estonia's designated NCPeH or HDAB by name (e.g., whether Terviseamet/Health Board, TEHIK, or another body holds these roles), nor find a published Estonian national EHDS implementation roadmap — a genuine information gap, not evidence of absence of activity.

## Netherlands

The Netherlands is legislating its EHDS transposition now: a first-tranche bill, the **"Wet op het Gezondheidsinformatiestelsel" (Wgis)**, closed public consultation on **8 July 2026**, and proposes a new single body — the **Gezondheidsdata-autoriteit (GDA)** — combining the Digital Health Authority (ADG/DHA), the HDAB, and the National Contact Point for Secondary Use (NCPSG) into one organization ([ICTRecht](https://www.ictrecht.nl/blog/van-wegiz-tot-wet-gis-de-nederlandse-invulling-van-de-ehds); [Van Doorne](https://www.vandoorne.com/artikelen/internetconsultatie-wet-op-het-gezondheidsinformatiestelsel-ehds-tranche-1/)). The GDA is tasked with assessing applications and issuing licences for secondary use, providing access to health data, and monitoring compliance, and per EHDS must operate independently and avoid conflicts of interest. The Ministry of Health, Welfare and Sport (VWS) is now reviewing consultation responses ([datavoorgezondheid.nl](https://www.datavoorgezondheid.nl/actueel/nieuws/2026/07/09/internetconsultatie-eerste-ehds-wetgevingstranche-gesloten)).

The existing **MedMij Afsprakenstelsel** (agreement framework) is assessed as "a promising basis" ("kansrijke basis") for EHDS citizen rights, though "further steps are needed to fully support all rights" ([MedMij.nl](https://medmij.nl/media/medmij-kansrijke-basis-voor-ehds-burgerrechten-verdere-stappen-nodig/); [ICT&health](https://www.icthealth.nl/nieuws/verkenning-medmij-biedt-basis-voor-ehds-burgerrechten)).

**Vendor engagement**: On the hospital-vendor side, **Tjongerschans hospital** (using ChipSoft's HiX Digital Health Services Platform) and **MCL** (using Epic's "Care Everywhere") became the first Dutch hospitals to exchange patient data directly between the two EMR platforms using "a universal plug" based on national and international standards ([ChipSoft press release](https://chipsoft.com/en/news/539/Pioneering-exchange-of-medical-data-achieved-by-ChipSoft-and-Epic)). The Dutch hospital EPD/PDMS market is described as "further consolidating around ChipSoft and Epic" in 2026 ([M&I/Partners, "EPD-landschap 2026"](https://mxi.nl/kennis/746/epd-landschap-2026-tussen-standaardisatie-en-innovatie)). For 2026–2027, Dutch guidance states ICT service providers must ensure priority data categories (patient summaries, prescriptions) comply with EEHRxF and begin self-certification ([ICTRecht](https://www.ictrecht.nl/en/blog/de-ehds-5-verplichtingen-voor-ict-dienstverleners-in-de-zorg)). The Netherlands must be fully ready for EHDS to become operational by 26 March 2031 at the latest ([ICTRecht](https://www.ictrecht.nl/en/blog/de-implementatie-van-de-ehds-waar-staan-we-begin-2026)).

**Gateway model**: The post-failed-national-EPD model (regional/vendor-led interoperability via MedMij/PGOs, with VZVZ as scheme manager) is being **extended rather than replaced**: the new Wgis/GDA approach layers EHDS-mandated bodies on top of the existing MedMij consent/exchange framework. The ChipSoft–Epic exchange suggests practical interoperability progress is also happening vendor-to-vendor under national standards, in parallel with the top-down legislative process.

> ⚠️ **Unverified / conflicting sources**: No primary source was fetched confirming the historical "failed national EPD" (Landelijk EPD rejection) narrative in this research session; it is widely known background context but not independently cited here. The Wgis bill had not passed as of the sources found.

## Austria

Austria is frequently characterized as "already very well positioned" for EHDS because its established **ELGA** (Elektronische Gesundheitsakte, since 2015) already mandates structured data types. ELGA does not store data centrally — only an index/pointer showing that data exist, accessible by authorised health service providers, is centralized ([gnius.esante.gouv.fr](https://gnius.esante.gouv.fr/en/decode-ehealth-internationally/digital-healthcare-austria); [EC Digital Building Blocks wiki](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=533365925)). ELGA is opt-out: patients can opt out entirely or per-entry, and only health professionals can enter data ([SCOOP4C](https://scoop4c.eu/showcase/elga-electronic-health-records)).

A hard national milestone precedes EHDS's own timeline: starting **1 January 2026, all relevant health data must be stored in ELGA**; from **1 January 2028** this extends to pathology reports ([Springer Nature, "Die Radiologie"](https://link.springer.com/article/10.1007/s00117-026-01637-z); [PubMed](https://pubmed.ncbi.nlm.nih.gov/42380337/)). The same source states "Austria is already very well positioned compared to other European countries" given many health-data types are already structured in ELGA.

Projects **HealthData@AT** and **Extended EHR@EU** support primary and secondary use; Austria participates in the eHDSI infrastructure ([GÖG, HealthData@AT](https://goeg.at/healthdata_at_secondary_use)). Austria is preparing to establish an HDAB (German: "Gesundheitsdatenzugangsstelle") via the HealthData@AT project, and the **AT-eHDSI project** aims to establish Austria's NCPeH integrated with existing ELGA infrastructure, with **ELGA GmbH** contributing expert input ([GÖG](https://goeg.at/EU_Gesundheitsdatenraum_EHDS); [ÖGPI](https://www.oegpi.at/ehds-und-elga-warum-pflegeinformatik-jetzt-gesundheitsdaten-mitgestalten-muss/)).

**Gateway model**: Austria's approach is explicitly **government/ELGA-GmbH-led** (a state-mandated central index-and-access-pointer registry), not hospital-by-hospital or vendor-led — the 2026/2028 ELGA data-completeness mandates function as a national on-ramp to EHDS compliance.

> ⚠️ **Unverified / conflicting sources**: The exact planned operational date for Austria's HDAB or NCPeH was not confirmed (both are described as "in preparation"). No direct evidence of individual Austrian hospital-IT/EMR vendor engagement with EHDS was found.

## Denmark

Denmark already operates a **live, EU-recognized NCPeH implementation** (via the Danish Health Data Authority / Sundhedsdatastyrelsen, publicly documented on GitHub) built on mature national infrastructure: **sundhed.dk** (national eHealth portal, described in the 2018 national strategy as "a national access point for personal health-related data"), **MedCom**, and **Det Fælles Medicinkort (FMK)**, the shared national medication record ([gnius.esante.gouv.fr](https://gnius.esante.gouv.fr/en/international-e-health/denmark); [MedCom](https://www.medcom.dk/projekter/faelles-medicinkort-fmk)). All primary-care doctors have used electronic medical records and been mandated to use computerized record/communication systems since 2004. FMK is housed at Sundhedsdatastyrelsen and updatable by GPs, dentists, specialists and hospital doctors; MedCom participates in the certification team that tests vendor systems for FMK integration on new releases ([MedCom](https://www.medcom.dk/projekter/faelles-medicinkort-fmk)).

Denmark's NCPeH, enabling MyHealth@EU cross-border exchange, is maintained by **Sundhedsdatastyrelsen**, documented in a public GitHub repository, "Danish implementation of MyHealth @ EU – eHealth Digital Service Infrastructure (eHDSI)" ([GitHub](https://github.com/Sundhedsdatastyrelsen/ehdsi); [English Sundhedsdatastyrelsen](https://english.sundhedsdatastyrelsen.dk/health-data-and-registers/european-health-data-space)).

A major governance consolidation is underway: a new organization, **"Digital Health Denmark,"** will be established **1 January 2027**, jointly owned by municipalities, regions and the state, merging **sundhed.dk, the Danish Health Data Authority, MedCom, the National Genome Centre**, and several regionally-managed national IT solutions, explicitly to strengthen digital development and coherence across the health sector ([English Sundhedsdatastyrelsen](https://english.sundhedsdatastyrelsen.dk/about-us/digital-health-denmark); [MTR Consult](https://mtrconsult.com/news/establishing-digital-health-denmark)). The merging bodies cease to exist as independent organizations on 31 December 2026.

**Gateway model**: Denmark's approach is unambiguously **state-run, single-infrastructure-owner**: rather than leaving interoperability to hospitals or EMR vendors, Denmark is consolidating even its own multiple national digital-health bodies into one organization — strongly suggesting EHDS-related national gateway functions (NCPeH, likely HDAB) will centralize within Digital Health Denmark.

> ⚠️ **Unverified / conflicting sources**: Denmark's designated HDAB was not confirmed by name/legal act.

## Sweden

In June 2023 the Swedish government tasked the **Swedish eHealth Agency (E-hälsomyndigheten)** with developing a roadmap for a national digital infrastructure for health, medical and dental care "in which the state takes greater responsibility," including a plan to comply with EHDS ([WHO Health Systems and Policy Monitor](https://eurohealthobservatory.who.int/monitors/health-systems-monitor/updates/hspm/sweden-2023/a-first-step-towards-a-national-digital-infrastructure-for-healthcare)).

The **SENASH** project on secondary use of health data began in 2024, splitting responsibilities: the **National Board of Health and Welfare (Socialstyrelsen)** is preparing to handle requests and grant access to health datasets (an HDAB-type function); **Statistics Sweden (SCB)** is exploring secure processing environments; the **Health and Social Care Inspectorate (IVO)** will monitor compliance; and the **eHealth Agency** facilitates national e-health infrastructure implementation ([Gart Solutions, "Sweden HealthTech Analysis 2025–2026"](https://gartsolutions.com/sweden-healthtech-industry/) — an industry/consultancy source, treat as analyst commentary).

The same analysis estimates EHDS-related investment needs of **€150–400 million by 2028** for Sweden and describes a required shift "from Sweden's traditional opt-in consent model to an EU-mandated opt-out approach" ([Gart Solutions](https://gartsolutions.com/sweden-healthtech-industry/) — explicitly flagged as an analyst/consultancy estimate, not an official government figure).

**Gateway model**: Sweden is pursuing a **state-led/centralizing model** (echoing Denmark and Austria), consistent with the government's explicit 2023 mandate that "the state takes greater responsibility" for national digital health infrastructure.

> ⚠️ **Unverified / conflicting sources**: No confirmation found of Sweden's designated NCPeH. The €150–400 million figure and the opt-in/opt-out framing come from a single industry consultancy source not cross-verified against an official Swedish government or EU document.

## Italy

Italy's national EHR, the **Fascicolo Sanitario Elettronico (FSE)**, originating from a 2012 decree-law, serves as a single access point to health and social-health data from both the National Health Service and private facilities ([Agenda Digitale](https://www.agendadigitale.eu/sanita/fascicolo-sanitario-elettronico-2-0-il-dato-sanitario-diventa-infrastruttura/); [FSE official portal](https://www.fascicolosanitario.gov.it/portale/en/home)). **FSE 2.0** introduced a "Gateway" component (the Sogei FSE Gateway, per the Decree of 7 September 2023) connecting regional FSE systems; this primary-use architecture is described by legal/consultancy commentary as "structurally compatible with EHDS" ([noze.it](https://www.noze.it/insights/fse-2-0-gateway-sogei/)). Italy's federated model — the **INI** (national interoperability infrastructure) plus the FSE 2.0 Gateway — is described as "mirror[ing] the EHDS vision of a decentralized yet interconnected ecosystem, where national systems remain sovereign but are seamlessly integrated into a European-level infrastructure" ([noze.it](https://www.noze.it/insights/fse-2-0-gateway-sogei/); [Frontiers in Medicine/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12719427/)).

Historically, Italy's FSE faced ~20 different regional implementations with interoperability problems and a lack of automatic data upload from private clinics ([PMC editorial](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11980697/); [PMC response](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11927704/)). As of May 2026, private healthcare providers were producing FSE 2.0-compliant digital data, but **non-activation of regional gateways was still blocking access** to that data, per a market-research vendor survey reported by a regional outlet ([Maremma News, citing Black Book Italy Provider Pulse](https://maremmanews.it/salute/2026-05-03/fse-2-0-la-sanita-privata-produce-dati-digitali-ma-la-mancata-attivazione-dei-gateway-regionali-blocca-l-accesso) — a regional news outlet relaying a market-research firm's press release, weighted accordingly).

Italy is still actively **designing its HDAB**; a readiness checklist frames the public-administration task as "designing the Italian HDAB, updating the national regulatory frame, dialogue with European counterparts," requiring integration with the data-protection authority (Garante), Ethics Committees, the medicines agency (AIFA), Agenas, and ISS ([noze.it](https://www.noze.it/insights/ehds-secondary-use-2027/)).

**Gateway model**: Italy exemplifies a **hybrid gateway model**: a national interoperability layer (INI + FSE 2.0 Gateway) is mandated top-down, but activation and compliance still depend heavily on Italy's regional health authorities — the "national gateway vs. left-to-regions/vendors" dichotomy is really a spectrum here, with national architecture in place but regional execution lagging.

> ⚠️ **Unverified / conflicting sources**: No source confirms which specific body will be formally designated Italy's NCPeH. The regional-gateway-activation problem should be corroborated with an official Italian Ministry of Health or Agenas source before being treated as confirmed fact.

## Spain

Spain's existing **Historia Clínica Digital del Sistema Nacional de Salud (HCDSNS)** links health records across the country's 17 devolved regional health systems (autonomous communities), alongside the Individual Health Card and the national Electronic Prescription (Receta Electrónica) ([Ministerio de Sanidad](https://www.sanidad.gob.es/en/profesionales/hcdsns/home.htm)). The Ministerio de Sanidad's "Salud Digital" area includes a dedicated "Espacio Europeo de Datos de Salud" section ([Ministerio de Sanidad](https://www.sanidad.gob.es/areas/saludDigital/espacioEuropeoDS/home.htm)).

Spain's HDAB "will presumably be structured through the Ministry of Health with participation from autonomous communities," expected to issue data permits, audit compliance, and impose sanctions ([search synthesis, drawing on saludcomply.com and dondeestalasaluddigital.com](https://saludcomply.com/guia/que-es-ehds)) — this framing is explicitly hedged as "presumably" by the underlying source, i.e., analyst speculation about likely structure, **not a confirmed government designation**.

**Gateway model**: Given Spain's health system is organized around 17 autonomous communities each running separate regional health services (as in Italy), any Spanish HDAB/NCPeH is likely to require similar central-government/regional coordination — but no Spanish-specific architecture document was found to confirm this (inference only).

> ⚠️ **Unverified / conflicting sources**: No confirmed HDAB or NCPeH designation found for Spain — only analyst speculation about likely structure. No published Spanish national EHDS implementation roadmap or transposition law was found. No hospital/EMR-vendor-specific engagement evidence found.

## Cross-country synthesis: readiness and gateway-vs-vendor architecture

Multiple independent assessments agree EHDS readiness is highly uneven and **no member state was found to be "fully ready"**:

- The **TEHDAS Joint Action** found "a heterogeneous picture" in countries' readiness, concluding "no member state is fully ready yet to comply with the future regulation," with strong political will but a "significant need for more staff with technical and legal expertise and more time" ([TEHDAS](https://tehdas.eu/tehdas1/results/member-states-readiness-to-benefit-from-the-ehds-regulation-varies/); underlying study: [PubMed](https://pubmed.ncbi.nlm.nih.gov/39514641); [Oxford Academic, European Journal of Public Health](https://academic.oup.com/eurpub/article/34/6/1102/7887708)).
- **Better (better.care)'s 2026 "EHDS Implementation Readiness Report"**, based on interviews with national health officials, programme leads, technical architects and clinical informaticists, found that while EHDS's goals are broadly understood and supported, "many health systems are struggling to move from policy ambition to operational reality," that "national readiness varies widely, governance models remain unclear," and that the decisive barriers are "fragmented governance, inconsistent semantic quality, legacy infrastructure, and limited implementation capacity" rather than the standards themselves ([Better report](https://www.better.care/document/ehds-implementation-readiness-report/); [Better blog](https://www.better.care/blog-en/ehds-implementation-policy-practice/)).
- **Black Book Research**'s 2026 pan-European vendor-readiness study found "only 13% of Healthcare IT Users say vendors are EHDS-ready," under the headline "Europe is Connected, But Not Yet Interoperable" ([Newswire](https://www.newswire.com/news/black-book-study-finds-europe-is-connected-but-not-yet-interoperable-22799022); [AccessNewswire](https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/black-book-study-finds-europe-is-connected-but-not-yet-interoperable-1177035) — a commercial market-research firm's self-published survey, weighted as industry commentary, not an EU institutional or peer-reviewed source).
- Formal national readiness assessments exist elsewhere too — Ireland's HIQA published one specifically on Ireland's EHDS readiness ([HIQA](https://www.hiqa.ie/hiqa-news-updates/new-hiqa-report-assesses-irelands-readiness-european-health-data-space-regulation)), and academic literature exists for Poland ("Is Poland ready for the European health data space?", [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2211883726000158)) — illustrating this is a recognized national governance step beyond the nine countries covered here.

**Gateway architecture**: The European Commission's **HealthData@EU** central platform, released as open source in March 2025, provides "a catalogue, gateway services, and interoperability components for the secondary use of health data across Member States" ([Better](https://www.better.care/blog-en/ehds-infrastructure-platforms/)). The same source describes an emerging pattern: "a consistent architectural pattern is emerging: national EHDS infrastructure layers that sit between clinical systems and the European MyHealth@EU infrastructure," arguing this "national layer absorbs the complexity that EHR vendors cannot realistically handle on their own" (industry-vendor commentary — a description of a trend/argument, not an official EU architectural mandate).

Synthesizing the country sections: the clearest evidence of a **government-built, centrally-run national gateway/interoperability layer** (rather than leaving integration to individual hospitals or vendors) is found in **Austria** (ELGA/ELGA GmbH plus AT-eHDSI), **Denmark** (Sundhedsdatastyrelsen/soon Digital Health Denmark), **Estonia** (X-Road as a foundational state-run federated layer), **France** (DNS/CNAM-run Mon espace santé plus centralized Health Data Hub), and **Italy** (INI plus FSE 2.0 Gateway, notwithstanding regional execution gaps). **Germany** and the **Netherlands** show more of a hybrid pattern — new legal/institutional scaffolding (FDZ Gesundheit/gematik in Germany; the proposed GDA in the Netherlands) is being built specifically because interoperability has historically been more vendor- and region-fragmented (multiple competing hospital-IT vendors in Germany; MedMij/PGO ecosystem plus direct vendor-to-vendor deals like ChipSoft–Epic in the Netherlands).

On "ahead vs. behind": Austria and Denmark appear comparatively advanced on institutional/infrastructural readiness (existing national EHR/index systems, near-term legal mandates already in force or imminent). Italy and Spain show more visible structural/regional fragmentation risk. Germany and France are mid-position: strong existing national platforms but implementing legislation and formal body designations still incomplete or in progress.

> ⚠️ **Unverified / conflicting sources**: This ranking is a synthesis across multiple partial sources, not a single authoritative EU ranking — no source found provided an explicit ordinal ranking of these nine countries. No single authoritative EU-level document (e.g., an official European Commission or eHealth Network country-by-country EHDS readiness scorecard) was found or fetched in this research. The Black Book Research country-vendor-ranking release was identified but not fetched; its specific per-country rankings remain unknown.

## Sources

- [heise — Germany expected to deliver on EU health data space](https://www.heise.de/en/news/Germany-is-expected-to-deliver-on-EU-health-data-space-ePA-and-EUDI-Wallet-11266858.html)
- [health-samurai.io — FHIR adoption in Germany](https://www.health-samurai.io/articles/fhir-adoption-in-germany)
- [dsv-europa.de — FDZ Gesundheit](https://dsv-europa.de/en/news/2025/10/fdz-gesundheit.html)
- [Latham & Watkins — New Health Data Lab in Germany](https://www.lw.com/en/insights/new-health-data-lab-in-germany-facilitates-secondary-use-of-health-data)
- [görg.de — Daten, Digitalisierung und EHDS](https://www.goerg.de/de/aktuelles/veroeffentlichungen/09-06-2026/daten-digitalisierung-und-ehds-das-gesundheitswesen-vor-dem-naechsten-grossen-umbruch)
- [BMG — DigiG](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/digig)
- [BMG — GDNG](https://www.bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-lp/gesundheitsdatennutzungsgesetz)
- [BMG press release — GeDIG Cabinet approval](https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/kabinett-beschliesst-gedig-pm-15-07-2026)
- [BMG — Europäische Gesundheitspolitik / EHDS](https://www.bundesgesundheitsministerium.de/themen/internationale-gesundheitspolitik/europa/europaeische-gesundheitspolitik/ehds)
- [Newswire — Black Book Research pan-European EHDS study](https://www.newswire.com/news/black-book-research-unveils-first-pan-european-study-of-ehds-22630969)
- [donneespersonnelles.fr — Espace européen des données de santé](https://www.donneespersonnelles.fr/espace-europeen-donnees-sante)
- [health-data-hub.fr — French_HealthData_EU](https://www.health-data-hub.fr/actualites/frenchhealth-dataeu-une-etape-cle-vers-la-mise-en-place-de-lespace-europeen-des-donnees)
- [Assemblée nationale — Communication espace européen données de santé (PDF)](https://www.assemblee-nationale.fr/dyn/content/download/504006/file/Communication%20Espace%20europ%C3%A9en%20donn%C3%A9es%20de%20sant%C3%A9.pdf)
- [lesdpodelasante.com — EHDS preparation](https://www.lesdpodelasante.com/blog/ehds-espace-europeen-donnees-sante-preparation)
- [ScienceDirect — Estonian X-Road interoperability](https://www.sciencedirect.com/science/article/pii/S2352340925010753)
- [cyber.ee — Estonian Interoperability Framework: X-Road](https://cyber.ee/resources/case-studies/estonian-interoperability-framework-x-road/)
- [The Lancet Digital Health — Federated EHRs for the EHDS](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00156-5/fulltext)
- [European Commission — my rights over my health data](https://health.ec.europa.eu/ehealth-digital-health-and-care/my-rights-over-my-health-data_en)
- [MedMij.nl — kansrijke basis voor EHDS burgerrechten](https://medmij.nl/media/medmij-kansrijke-basis-voor-ehds-burgerrechten-verdere-stappen-nodig/)
- [ICT&health — MedMij biedt basis voor EHDS burgerrechten](https://www.icthealth.nl/nieuws/verkenning-medmij-biedt-basis-voor-ehds-burgerrechten)
- [ChipSoft — pioneering exchange of medical data with Epic](https://chipsoft.com/en/news/539/Pioneering-exchange-of-medical-data-achieved-by-ChipSoft-and-Epic)
- [M&I/Partners — EPD-landschap 2026](https://mxi.nl/kennis/746/epd-landschap-2026-tussen-standaardisatie-en-innovatie)
- [ICTRecht — Van Wegiz tot Wet GIS](https://www.ictrecht.nl/blog/van-wegiz-tot-wet-gis-de-nederlandse-invulling-van-de-ehds)
- [Van Doorne — internetconsultatie Wet GIS](https://www.vandoorne.com/artikelen/internetconsultatie-wet-op-het-gezondheidsinformatiestelsel-ehds-tranche-1/)
- [datavoorgezondheid.nl — internetconsultatie EHDS tranche gesloten](https://www.datavoorgezondheid.nl/actueel/nieuws/2026/07/09/internetconsultatie-eerste-ehds-wetgevingstranche-gesloten)
- [datavoorgezondheid.nl — introductie Gezondheidsdata-autoriteit](https://www.datavoorgezondheid.nl/actueel/nieuws/2026/05/28/introductie-gezondheidsdata-autoriteit-markeert-nieuwe-fase-in-digitale-zorgtransformatie)
- [ICTRecht — 5 verplichtingen voor ICT-dienstverleners in de zorg](https://www.ictrecht.nl/en/blog/de-ehds-5-verplichtingen-voor-ict-dienstverleners-in-de-zorg)
- [ICTRecht — implementatie van de EHDS begin 2026](https://www.ictrecht.nl/en/blog/de-implementatie-van-de-ehds-waar-staan-we-begin-2026)
- [gnius.esante.gouv.fr — digital healthcare Austria](https://gnius.esante.gouv.fr/en/decode-ehealth-internationally/digital-healthcare-austria)
- [European Commission Digital Building Blocks wiki — Austria](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=533365925)
- [SCOOP4C — ELGA electronic health records](https://scoop4c.eu/showcase/elga-electronic-health-records)
- [Springer Nature — Nationale Infrastrukturen und EHDS (Die Radiologie)](https://link.springer.com/article/10.1007/s00117-026-01637-z)
- [PubMed record](https://pubmed.ncbi.nlm.nih.gov/42380337/)
- [GÖG — HealthData@AT secondary use](https://goeg.at/healthdata_at_secondary_use)
- [GÖG — Ein Schritt in Richtung EHDS](https://goeg.at/EU_Gesundheitsdatenraum_EHDS)
- [ÖGPI — EHDS und ELGA](https://www.oegpi.at/ehds-und-elga-warum-pflegeinformatik-jetzt-gesundheitsdaten-mitgestalten-muss/)
- [Haslinger Nagele — Der EHDS Überblick und Ausblick](https://www.haslinger-nagele.com/en/der-ehds-neue-regeln-fuer-gesundheitsdaten-ueberblick-und-ausblick/)
- [gnius.esante.gouv.fr — Denmark](https://gnius.esante.gouv.fr/en/international-e-health/denmark)
- [World Health Systems Facts — Denmark ICT](https://healthsystemsfacts.org/denmark-health-system-facts/denmark-health-information-and-communication-technologies/)
- [MedCom — Fælles Medicinkort (FMK)](https://www.medcom.dk/projekter/faelles-medicinkort-fmk)
- [MedCom PDF — En fremtid med adgang](https://medcom.dk/wp-content/uploads/2023/03/en-fremtid-med-adgang-til-et-faelles-og-samlet-overblik-over-en-borgers-aktuelle-medicinering.pdf)
- [MedCom — international activities](https://medcom.dk/medcom-in-english/international-activities/)
- [GitHub — Sundhedsdatastyrelsen/ehdsi](https://github.com/Sundhedsdatastyrelsen/ehdsi)
- [English Sundhedsdatastyrelsen — European Health Data Space](https://english.sundhedsdatastyrelsen.dk/health-data-and-registers/european-health-data-space)
- [English Sundhedsdatastyrelsen — Digital Health Denmark](https://english.sundhedsdatastyrelsen.dk/about-us/digital-health-denmark)
- [MTR Consult — Establishing Digital Health Denmark](https://mtrconsult.com/news/establishing-digital-health-denmark)
- [WHO Health Systems and Policy Monitor — Sweden 2023](https://eurohealthobservatory.who.int/monitors/health-systems-monitor/updates/hspm/sweden-2023/a-first-step-towards-a-national-digital-infrastructure-for-healthcare)
- [Gart Solutions — Sweden HealthTech Industry Analysis](https://gartsolutions.com/sweden-healthtech-industry/)
- [digifor1health.se — outputs](https://digifor1health.se/outputs_en/)
- [Agenda Digitale — Fascicolo Sanitario Elettronico 2.0](https://www.agendadigitale.eu/sanita/fascicolo-sanitario-elettronico-2-0-il-dato-sanitario-diventa-infrastruttura/)
- [Fascicolo Sanitario Elettronico portal](https://www.fascicolosanitario.gov.it/portale/en/home)
- [noze.it — Gateway FSE e Decreto 7 settembre 2023](https://www.noze.it/insights/fse-2-0-gateway-sogei/)
- [PMC — challenges of national health data ecosystems (Italy)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12719427/)
- [PMC — the Italian health data system is broken (editorial)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11980697/)
- [PMC — response article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11927704/)
- [Maremma News — FSE 2.0 regional gateway activation](https://maremmanews.it/salute/2026-05-03/fse-2-0-la-sanita-privata-produce-dati-digitali-ma-la-mancata-attivazione-dei-gateway-regionali-blocca-l-accesso)
- [noze.it — EHDS verso il 2027: HDAB, data permit e secondary use](https://www.noze.it/insights/ehds-secondary-use-2027/)
- [Agenas — FSE strategic projects](https://www.agenas.gov.it/agenzia-per-la-sanit%C3%A0-digitale/progetti-strategici/fse)
- [Ministerio de Sanidad — HCDSNS](https://www.sanidad.gob.es/en/profesionales/hcdsns/home.htm)
- [Ministerio de Sanidad — Espacio Europeo de Datos de Salud](https://www.sanidad.gob.es/areas/saludDigital/espacioEuropeoDS/home.htm)
- [Ministerio de Sanidad — Historia Clínica Electrónica en la UE](https://www.sanidad.gob.es/areas/saludDigital/historiaClinicaUE/home.htm)
- [saludcomply.com — Qué es el EHDS](https://saludcomply.com/guia/que-es-ehds)
- [TEHDAS — member states' readiness varies](https://tehdas.eu/tehdas1/results/member-states-readiness-to-benefit-from-the-ehds-regulation-varies/)
- [PubMed — TEHDAS readiness study](https://pubmed.ncbi.nlm.nih.gov/39514641)
- [Oxford Academic, European Journal of Public Health — TEHDAS study](https://academic.oup.com/eurpub/article/34/6/1102/7887708)
- [Better — EHDS Implementation Readiness Report](https://www.better.care/document/ehds-implementation-readiness-report/)
- [Better blog — EHDS implementation: from policy to practice](https://www.better.care/blog-en/ehds-implementation-policy-practice/)
- [Newswire — Black Book: Europe is connected but not yet interoperable](https://www.newswire.com/news/black-book-study-finds-europe-is-connected-but-not-yet-interoperable-22799022)
- [AccessNewswire — Black Book study](https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/black-book-study-finds-europe-is-connected-but-not-yet-interoperable-1177035)
- [HIQA — Ireland's readiness for EHDS](https://www.hiqa.ie/hiqa-news-updates/new-hiqa-report-assesses-irelands-readiness-european-health-data-space-regulation)
- [ScienceDirect — Is Poland ready for the EHDS?](https://www.sciencedirect.com/science/article/pii/S2211883726000158)
- [Better — EHDS infrastructure: platforms powering EU health data](https://www.better.care/blog-en/ehds-infrastructure-platforms/)
