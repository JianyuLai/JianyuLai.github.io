// =============================================================
//  Research themes data
//  Referenced by: /research/ (card grid), homepage highlights.
// =============================================================

export interface ResearchTheme {
  /** Matches the slug in src/content/projects/*.md (if a project page exists) */
  slug: string;
  title: string;
  /** CSS color value for the card accent bar */
  accentColor: string;
  /** 2-sentence description for the card */
  summary: string;
  /** The "Key insight" callout line */
  keyInsight: string;
  /** Path relative to /public */
  figure?: string;
  figureAlt?: string;
  /** IDs from publications.ts */
  relatedPubs: string[];
  /** If true, card links to /research/[slug]/ */
  hasProjectPage: boolean;
}

// -------------------------------------------------------------
//  Data
// -------------------------------------------------------------
export const researchThemes: ResearchTheme[] = [
  {
    slug: 'emit2',
    title: 'Airborne Transmission of Respiratory Viruses',
    accentColor: '#2a9d8f',
    summary: 'I investigate how respiratory viruses spread through the air using controlled human transmission trials and observational data from real-world settings.',
    keyInsight: 'Transmission risk is shaped not just by proximity, but by coughing behavior, ventilation, and individual variability in viral shedding.',
    relatedPubs: ['lai-2026-plos'],
    hasProjectPage: true,
  },
  {
    slug: 'aerosol-shedding',
    title: 'Exhaled Breath Aerosol Shedding',
    accentColor: '#3a7ca5',
    summary: 'My work quantifies how much virus infected individuals exhale and how source control measures — including masks and respirators — reduce infectious aerosol output.',
    keyInsight: 'Viral shedding in exhaled aerosols varies substantially across variants, individuals, and mask types, with direct implications for transmission risk and control.',
    relatedPubs: ['lai-2023-cid', 'lai-2024-ebiomed', 'lai-2025-irv'],
    hasProjectPage: true,
  },
  {
    slug: 'ventilation',
    title: 'Ventilation & Indoor Infection Risk',
    accentColor: '#6b7fa3',
    summary: 'I study how indoor ventilation and environmental conditions modify the risk of respiratory virus transmission in shared spaces, including college residence halls.',
    keyInsight: 'Environmental factors such as airflow and ventilation can substantially modify infection risk, even in high-exposure settings.',
    relatedPubs: ['gold-2025-irv'],
    hasProjectPage: true,
  },
  {
    slug: 'measurement',
    title: 'Measurement and Detection of Respiratory Viruses',
    accentColor: '#5c6b7a',
    summary: 'I evaluate sampling strategies and diagnostic approaches for detecting respiratory infections, including comparisons of specimen types and their impact on detection sensitivity.',
    keyInsight: 'Sampling method and specimen type influence detection sensitivity and the interpretation of infection dynamics in both clinical and research contexts.',
    relatedPubs: ['lai-2022-microbiol-spectrum'],
    hasProjectPage: true,
  },
];
