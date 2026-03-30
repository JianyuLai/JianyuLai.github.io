// =============================================================
//  Research themes data
//  Referenced by: /research/ (card grid), homepage highlights.
// =============================================================

export interface ResearchTheme {
  /** Matches the slug in src/content/projects/*.md (if a project page exists) */
  slug: string;
  title: string;
  title_zh?: string;
  /** CSS color value for the card accent bar */
  accentColor: string;
  /** 2-sentence description for the card */
  summary: string;
  summary_zh?: string;
  /** The "Key insight" callout line */
  keyInsight: string;
  keyInsight_zh?: string;
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
    title_zh: '呼吸道病毒的空气传播',
    accentColor: '#2a9d8f',
    summary: 'I investigate how respiratory viruses spread through the air using controlled human transmission trials and observational data from real-world settings.',
    summary_zh: '我通过受控人体传播试验和真实环境的观察数据，研究呼吸道病毒如何通过空气传播。',
    keyInsight: 'Transmission risk is shaped not just by proximity, but by coughing behavior, ventilation, and individual variability in viral shedding.',
    keyInsight_zh: '传播风险不仅取决于距离，还受咳嗽行为、通风条件以及个体病毒脱落差异的影响。',
    relatedPubs: ['lai-2026-plos'],
    hasProjectPage: true,
  },
  {
    slug: 'aerosol-shedding',
    title: 'Exhaled Breath Aerosol Shedding',
    title_zh: '呼出气体气溶胶脱落',
    accentColor: '#3a7ca5',
    summary: 'My work quantifies how much virus infected individuals exhale and how source control measures — including masks and respirators — reduce infectious aerosol output.',
    summary_zh: '我的研究量化了感染者呼出的病毒量，以及口罩、呼吸器等源头控制措施如何减少传染性气溶胶的排放。',
    keyInsight: 'Viral shedding in exhaled aerosols varies substantially across variants, individuals, and mask types, with direct implications for transmission risk and control.',
    keyInsight_zh: '呼出气溶胶中的病毒脱落量因变异株、个体和口罩类型的不同而存在显著差异，对传播风险评估和防控策略具有直接影响。',
    relatedPubs: ['lai-2023-cid', 'lai-2024-ebiomed', 'lai-2025-irv'],
    hasProjectPage: true,
  },
  {
    slug: 'ventilation',
    title: 'Ventilation & Indoor Infection Risk',
    title_zh: '通风与室内感染风险',
    accentColor: '#6b7fa3',
    summary: 'I study how indoor ventilation and environmental conditions modify the risk of respiratory virus transmission in shared spaces, including college residence halls.',
    summary_zh: '我研究室内通风和环境条件如何影响共享空间（包括大学宿舍）中呼吸道病毒的传播风险。',
    keyInsight: 'Environmental factors such as airflow and ventilation can substantially modify infection risk, even in high-exposure settings.',
    keyInsight_zh: '气流和通风等环境因素可以显著改变感染风险，即便在高暴露环境中也是如此。',
    relatedPubs: ['gold-2025-irv'],
    hasProjectPage: true,
  },
  {
    slug: 'measurement',
    title: 'Measurement and Detection of Respiratory Viruses',
    title_zh: '呼吸道病毒的检测与测量',
    accentColor: '#5c6b7a',
    summary: 'I evaluate sampling strategies and diagnostic approaches for detecting respiratory infections, including comparisons of specimen types and their impact on detection sensitivity.',
    summary_zh: '我评估呼吸道感染的采样策略与诊断方法，包括比较不同样本类型及其对检测灵敏度的影响。',
    keyInsight: 'Sampling method and specimen type influence detection sensitivity and the interpretation of infection dynamics in both clinical and research contexts.',
    keyInsight_zh: '采样方法和样本类型影响检测灵敏度，以及在临床和研究情境中对感染动态的解读。',
    relatedPubs: ['lai-2022-microbiol-spectrum'],
    hasProjectPage: true,
  },
];
