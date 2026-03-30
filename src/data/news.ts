// =============================================================
//  News / media coverage data
//  Referenced by: /news/, homepage teaser, /research/[slug].
// =============================================================

export interface NewsItem {
  id: string;
  outlet: string;
  outletCountry?: string;
  headline: string;
  url: string;
  year: number;
  month?: number;
  context: string;
  context_zh?: string;
  relatedPubId?: string;
  featured: boolean;
}

export const newsItems: NewsItem[] = [

  // ── 2026 ─────────────────────────────────────────────────────

  {
    id: 'sciencedaily-2026',
    outlet: 'ScienceDaily',
    headline: 'A room full of flu patients and no one got sick',
    url: 'https://www.sciencedaily.com/releases/2026/01/260110211204.htm',
    year: 2026,
    month: 1,
    context: 'Coverage of the EMIT-2 trial, highlighting the roles of coughing behavior and ventilation in influenza transmission.',
    context_zh: '报道 EMIT-2 试验，聚焦咳嗽行为和通风在流感传播中的作用。',
    relatedPubId: 'lai-2026-plos',
    featured: true,
  },

  {
    id: 'china-science-daily-2026',
    outlet: '中国科学报',
    outletCountry: 'CN',
    headline: 'EMIT-2研究：流感传播方式的新发现',
    url: 'https://medical.sciencenet.cn/sbhtmlnews/2026/3/371506.shtm',
    year: 2026,
    month: 3,
    context: 'Coverage of the EMIT-2 influenza transmission findings, also reported by Xinhua News and ScienceNet.',
    context_zh: '报道 EMIT-2 流感传播研究新发现，新华社及中国科学网同步转载。',
    relatedPubId: 'lai-2026-plos',
    featured: false,
  },

  {
    id: 'kathimerini-2026',
    outlet: 'Kathimerini',
    outletCountry: 'GR',
    headline: 'Η επιστήμονας που αμφισβήτησε όσα πιστεύουμε για τη γρίπη',
    url: 'https://www.kathimerini.gr/opinion/interviews/564022897/h-epistimonas-poy-amfisvitise-osa-pisteyame-gia-ti-gripi/',
    year: 2026,
    month: 1,
    context: 'Profile interview on the EMIT-2 influenza transmission study and its implications for how we understand flu spread.',
    context_zh: '关于 EMIT-2 流感传播研究及其对流感传播认知影响的人物专访。',
    relatedPubId: 'lai-2026-plos',
    featured: false,
  },

  {
    id: 'maryland-today-2026',
    outlet: 'Maryland Today',
    headline: 'As Flu Spreads, UMD Study Shows What Can Stop It',
    url: 'https://today.umd.edu/as-flu-spreads-umd-study-shows-what-can-stop-it',
    year: 2026,
    month: 1,
    context: 'University press coverage of the EMIT-2 findings and their public health implications.',
    context_zh: '马里兰大学对 EMIT-2 研究成果及其公共卫生意义的报道。',
    relatedPubId: 'lai-2026-plos',
    featured: false,
  },

  // ── 2024 ─────────────────────────────────────────────────────

  {
    id: 'maryland-today-2024',
    outlet: 'Maryland Today',
    headline: 'N95 Masks Nearly Perfect at Blocking COVID, UMD Study Shows',
    url: 'https://today.umd.edu/n95-masks-nearly-perfect-at-blocking-covid-umd-study-shows',
    year: 2024,
    month: 5,
    context: 'Coverage of the eBioMedicine study finding N95 respirators substantially outperform surgical masks as source control for exhaled viral aerosols.',
    context_zh: '报道 eBioMedicine 研究，发现 N95 呼吸器作为病毒气溶胶源头控制措施显著优于外科口罩。',
    relatedPubId: 'lai-2024-ebiomed',
    featured: true,
  },

  // ── 2022 ─────────────────────────────────────────────────────

  {
    id: 'nature-news-2022',
    outlet: 'Nature News',
    headline: 'How much virus does a person with COVID exhale? New research has answers',
    url: 'https://www.nature.com/articles/d41586-022-02202-z',
    year: 2022,
    month: 8,
    context: 'Interviewed on findings from exhaled breath aerosol shedding research across SARS-CoV-2 variants.',
    context_zh: '就 SARS-CoV-2 各变异株的呼出气体气溶胶脱落研究接受采访。',
    relatedPubId: 'lai-2023-cid',
    featured: false,
  },

  // ── 2021 ─────────────────────────────────────────────────────

  {
    id: 'rice-news-2021',
    outlet: 'Rice News',
    headline: "Mask up, and make 'em tight",
    url: 'https://news.rice.edu/news/2021/mask-and-make-em-tight',
    year: 2021,
    month: 9,
    context: 'Coverage of research finding infectious SARS-CoV-2 in exhaled aerosols and quantifying mask efficacy during early mild infection.',
    context_zh: '报道研究发现：SARS-CoV-2 存在于呼出气溶胶中，并量化了早期轻症感染期间口罩的防护效果。',
    relatedPubId: 'adenaiye-2021-cid',
    featured: false,
  },

  {
    id: 'maryland-today-2021',
    outlet: 'Maryland Today',
    headline: 'Successive COVID-19 Variants Becoming More Airborne, Researchers Find',
    url: 'https://today.umd.edu/successive-covid-19-variants-becoming-more-airborne-researcher-finds',
    year: 2021,
    month: 9,
    context: 'Coverage of early findings on SARS-CoV-2 variant aerosol shedding, later published in Clinical Infectious Diseases.',
    context_zh: '报道 SARS-CoV-2 变异株气溶胶脱落早期研究发现，后发表于 Clinical Infectious Diseases。',
    relatedPubId: 'lai-2023-cid',
    featured: false,
  },

  {
    id: 'umd-sph-2021',
    outlet: 'UMD School of Public Health',
    headline: 'COVID-19 Virus is Evolving to Get Better at Becoming Airborne, New Study Shows',
    url: 'https://sph.umd.edu/news/covid-19-virus-evolving-get-better-becoming-airborne-new-study-shows',
    year: 2021,
    month: 9,
    context: 'University school of public health coverage of the SARS-CoV-2 variant shedding findings.',
    context_zh: '马里兰大学公共卫生学院对 SARS-CoV-2 变异株脱落研究的报道。',
    relatedPubId: 'lai-2023-cid',
    featured: false,
  },

];

export const newsSorted = [...newsItems].sort((a, b) =>
  b.year !== a.year ? b.year - a.year : (b.month ?? 0) - (a.month ?? 0)
);
