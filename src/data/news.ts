// =============================================================
//  News / media coverage data
//  Referenced by: /news/, homepage teaser, /research/[slug].
// =============================================================

export interface NewsItem {
  /** Stable key — used to cross-reference from publications.ts */
  id: string;
  outlet: string;
  /** ISO 3166-1 alpha-2 country code, for international coverage labels */
  outletCountry?: string;
  headline: string;
  url: string;
  year: number;
  /** 1–12 */
  month?: number;
  /** 1-sentence context: what study/finding does this cover? */
  context: string;
  /** ID from publications.ts that this piece covers */
  relatedPubId?: string;
  /** true → shown in the homepage NewsTeaser (2–3 items max) */
  featured: boolean;
}

// -------------------------------------------------------------
//  Data
// -------------------------------------------------------------
export const newsItems: NewsItem[] = [
  {
    id: 'sciencedaily-2026',
    outlet: 'ScienceDaily',
    headline: 'A room full of flu patients and no one got sick',
    url: 'https://www.sciencedaily.com/releases/2026/01/260110211204.htm',
    year: 2026,
    month: 1,
    context: 'Coverage of the EMIT-2 influenza transmission study, highlighting the roles of coughing and ventilation in airborne spread.',
    relatedPubId: 'lai-2026-plos',
    featured: true,
  },
  {
    id: 'maryland-today-2026',
    outlet: 'Maryland Today',
    headline: 'As Flu Spreads, UMD Study Shows What Can Stop It',
    url: 'https://today.umd.edu/as-flu-spreads-umd-study-shows-what-can-stop-it',
    year: 2026,
    month: 1,
    context: 'University press coverage of the EMIT-2 findings and their public health implications.',
    relatedPubId: 'lai-2026-plos',
    featured: false,
  },
  {
    id: 'nature-news-2022',
    outlet: 'Nature News',
    headline: 'How much virus does a person with COVID exhale? New research has answers',
    url: 'https://www.nature.com/articles/d41586-022-02202-z',
    year: 2022,
    month: 8,
    context: 'Interviewed on findings from exhaled breath aerosol shedding research across SARS-CoV-2 variants.',
    relatedPubId: 'lai-2023-cid',
    featured: true,
  },
];

// Helper: items sorted newest-first
export const newsSorted = [...newsItems].sort((a, b) =>
  b.year !== a.year ? b.year - a.year : (b.month ?? 0) - (a.month ?? 0)
);
