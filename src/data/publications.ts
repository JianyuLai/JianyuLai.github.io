// =============================================================
//  Publications data
//  Single source of truth for all papers.
//  Referenced by: /publications/, /research/[slug], homepage.
// =============================================================

export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  citation?: string;
  doi: string;
  url: string;
  tags: string[];
  selected: boolean;
  selectedSummary?: string;
  pressMentionIds?: string[];
  type: 'peer-reviewed' | 'other';
}

export const publications: Publication[] = [

  // ── 2026 ─────────────────────────────────────────────────────

  {
    id: 'lai-2026-plos',
    authors: 'Lai J, Sobhani H, Coleman KK, Tai S-HS, Hong F, Sierra Maldonado I, et al.',
    title: 'Evaluating modes of influenza transmission (EMIT-2): Insights from lack of transmission in a controlled transmission trial with naturally infected donors',
    journal: 'PLOS Pathogens',
    year: 2026,
    citation: '22(1):e1013153',
    doi: '10.1371/journal.ppat.1013153',
    url: 'https://doi.org/10.1371/journal.ppat.1013153',
    tags: ['influenza', 'airborne-transmission', 'controlled-trial'],
    selected: true,
    selectedSummary: 'The EMIT-2 trial placed naturally infected influenza donors in a room with susceptible recipients under controlled ventilation. Despite confirmed infection, no transmission occurred — pointing to the critical roles of coughing behavior, donor variability, and ventilation.',
    pressMentionIds: ['sciencedaily-2026', 'maryland-today-2026', 'kathimerini-2026'],
    type: 'peer-reviewed',
  },

  // ── 2025 ─────────────────────────────────────────────────────

  {
    id: 'gold-2025-irv',
    authors: 'Gold TL, McPhaul KM, Lin H, Doughty R, Berry IM, Hong F, Lai J, et al.',
    title: 'Impact of ventilation on respiratory virus transmission in college residence hall cohorts: potential for causal inference about mode of transmission',
    journal: 'Influenza and Other Respiratory Viruses',
    year: 2025,
    citation: '19(7):e70133',
    doi: '10.1111/irv.70133',
    url: 'https://doi.org/10.1111/irv.70133',
    tags: ['ventilation', 'airborne-transmission', 'epidemiology'],
    selected: false,
    type: 'peer-reviewed',
  },

  {
    id: 'lai-2025-irv',
    authors: 'Lai J, Bueno de Mesquita PJ, Hong F, Ma T, Cowling BJ, Milton DK.',
    title: 'Comparison of Viral Aerosol Shedding by Mild and Moderately Symptomatic Community-Acquired and Nasally Inoculated Influenza A(H3) Infection',
    journal: 'Influenza and Other Respiratory Viruses',
    year: 2025,
    citation: '19(6):e70129',
    doi: '10.1111/irv.70129',
    url: 'https://doi.org/10.1111/irv.70129',
    tags: ['influenza', 'aerosols', 'exhaled-breath'],
    selected: false,
    type: 'peer-reviewed',
  },

  // ── 2024 ─────────────────────────────────────────────────────

  {
    id: 'lai-2024-ebiomed',
    authors: 'Lai J, Coleman KK, Tai S-HS, German JR, Hong FH, Albert BJ, et al.',
    title: 'Relative efficacy of masks and respirators as source control for viral aerosol shedding from people infected with SARS-CoV-2: a controlled human exhaled breath aerosol experimental study',
    journal: 'eBioMedicine',
    year: 2024,
    citation: '104:105157',
    doi: '10.1016/S2352-3964(24)00192-0',
    url: 'https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964(24)00192-0/fulltext',
    tags: ['sars-cov-2', 'aerosols', 'masks-ppe', 'source-control'],
    selected: true,
    selectedSummary: 'A controlled exhaled breath aerosol study comparing N95 respirators, surgical masks, and no mask as source control in SARS-CoV-2-infected individuals. N95 respirators substantially outperformed surgical masks, with direct implications for infection prevention guidance.',
    pressMentionIds: ['maryland-today-2024'],
    type: 'peer-reviewed',
  },

  // ── 2023 ─────────────────────────────────────────────────────

  {
    id: 'lai-2023-cid',
    authors: 'Lai J, Coleman KK, Tai S-HS, German JR, Hong FH, Albert BJ, et al.',
    title: 'Exhaled Breath Aerosol Shedding of Highly Transmissible Versus Prior SARS-CoV-2 Variants',
    journal: 'Clinical Infectious Diseases',
    year: 2023,
    citation: '76(5):786',
    doi: '10.1093/cid/ciac846',
    url: 'https://academic.oup.com/cid/article/76/5/786/6773834',
    tags: ['sars-cov-2', 'aerosols', 'variants', 'exhaled-breath'],
    selected: false,
    pressMentionIds: ['nature-news-2022', 'maryland-today-2021', 'umd-sph-2021'],
    type: 'peer-reviewed',
  },

  // ── 2022 ─────────────────────────────────────────────────────

  {
    id: 'lai-2022-microbiol-spectrum',
    authors: 'Lai J, German J, Hong F, Tai S-HS, McPhaul KM, Milton DK, et al.',
    title: 'Comparison of Saliva and Midturbinate Swabs for Detection of SARS-CoV-2',
    journal: 'Microbiology Spectrum',
    year: 2022,
    citation: '10:e00128-22',
    doi: '10.1128/spectrum.00128-22',
    url: 'https://doi.org/10.1128/spectrum.00128-22',
    tags: ['sars-cov-2', 'measurement', 'diagnostics'],
    selected: false,
    type: 'peer-reviewed',
  },

  // ── 2021 ─────────────────────────────────────────────────────

  {
    id: 'adenaiye-2021-cid',
    authors: 'Adenaiye O, Lai J, Bueno de Mesquita PJ, Hong F, Youssefi S, German J, et al.',
    title: 'Infectious SARS-CoV-2 in Exhaled Aerosols and Efficacy of Masks During Early Mild Infection',
    journal: 'Clinical Infectious Diseases',
    year: 2021,
    citation: 'ciab797',
    doi: '10.1093/cid/ciab797',
    url: 'https://academic.oup.com/cid/article/75/1/e241/6370149',
    tags: ['sars-cov-2', 'aerosols', 'masks-ppe', 'exhaled-breath'],
    selected: false,
    pressMentionIds: ['rice-news-2021'],
    type: 'peer-reviewed',
  },

  {
    id: 'gagnier-2021-qlr',
    authors: 'Gagnier JJ, Lai J, Mokkink LB, Terwee CB.',
    title: 'COSMIN reporting guideline for studies on measurement properties of patient-reported outcome measures',
    journal: 'Quality of Life Research',
    year: 2021,
    citation: '30(8):2197–2218',
    doi: '10.1007/s11136-021-02822-4',
    url: 'https://link.springer.com/article/10.1007/s11136-021-02822-4',
    tags: ['patient-reported-outcomes', 'methodology'],
    selected: false,
    type: 'peer-reviewed',
  },

  {
    id: 'adenaiye-2021-irv',
    authors: 'Adenaiye O, Bueno de Mesquita PJ, Wu Q, Hong F, Lai J, et al.',
    title: 'The effect of COVID-19 stay-at-home order and campus closure on the prevalence of acute respiratory infection symptoms in college campus cohorts',
    journal: 'Influenza and Other Respiratory Viruses',
    year: 2021,
    citation: '15(3):331–335',
    doi: '10.1111/irv.12837',
    url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/irv.12837',
    tags: ['sars-cov-2', 'epidemiology'],
    selected: false,
    type: 'peer-reviewed',
  },

  // ── 2019 ─────────────────────────────────────────────────────

  {
    id: 'faith2-2019',
    authors: 'FAITH-2 Investigators, et al.',
    title: 'Fixation using alternative implants for the treatment of hip fractures (FAITH-2): design and rationale for a pilot multi-centre 2 × 2 factorial randomized controlled trial in young femoral neck fracture patients',
    journal: 'Pilot and Feasibility Studies',
    year: 2019,
    citation: '5:70',
    doi: '10.1186/s40814-019-0458-x',
    url: 'https://link.springer.com/article/10.1186/s40814-019-0458-x',
    tags: ['orthopedics', 'clinical-trial'],
    selected: false,
    type: 'peer-reviewed',
  },

  // ── 2018 ─────────────────────────────────────────────────────

  {
    id: 'lai-2018-jbjs',
    authors: 'Lai J, Gagnier JJ.',
    title: 'The effect of lipid disorders on the risk of rotator cuff disease: A systematic review and meta-analysis',
    journal: 'JB JS Open Access',
    year: 2018,
    citation: '3(3):e0018',
    doi: '10.2106/JBJS.OA.17.00043',
    url: 'https://journals.lww.com/jbjsoa/fulltext/2018/09000/The_Effect_of_Lipid_Disorders_on_the_Risk_of.11.aspx',
    tags: ['orthopedics', 'systematic-review'],
    selected: false,
    type: 'peer-reviewed',
  },

  // ── 2017 ─────────────────────────────────────────────────────

  {
    id: 'lai-2017-jses',
    authors: 'Lai J, Robbins CB, Miller BS, Gagnier JJ.',
    title: 'The effect of lipid levels on patient-reported outcomes in patients with rotator cuff tears',
    journal: 'JSES Open Access',
    year: 2017,
    citation: '1(3):133–138',
    doi: '10.1016/j.jsesp.2017.08.009',
    url: 'https://www.sciencedirect.com/science/article/pii/S2468602617300517',
    tags: ['orthopedics', 'patient-reported-outcomes'],
    selected: false,
    type: 'peer-reviewed',
  },

  {
    id: 'chen-2017-china-occmed',
    authors: 'Chen W, Lai J, Feng S, Li X, Ling L.',
    title: 'Influencing factors on usage of personal protective equipment in migrant workers exposed to organic solvents',
    journal: 'China Occupational Medicine',
    year: 2017,
    citation: '44(3):313–317',
    doi: '',
    url: 'https://d.wanfangdata.com.cn/periodical/zgzyyx201703013',
    tags: ['occupational-health', 'ppe'],
    selected: false,
    type: 'peer-reviewed',
  },

];

export const allTags = [...new Set(publications.flatMap(p => p.tags))].sort();
