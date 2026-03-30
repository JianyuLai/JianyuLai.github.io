// =============================================================
//  Publications data
//  Single source of truth for all papers.
//  Referenced by: /publications/, /research/[slug], homepage.
// =============================================================

export interface Publication {
  /** Stable key — used to cross-reference from research.ts and news.ts */
  id: string;
  /** Full formatted author string; bold self with HTML if needed */
  authors: string;
  title: string;
  journal: string;
  year: number;
  /** Full citation detail, e.g. "22(1):e1013153" */
  citation?: string;
  doi: string;
  url: string;
  /** Topic tags for the filterable publication list */
  tags: string[];
  /** true → shown in the "Selected publications" highlighted section */
  selected: boolean;
  /** 1–2 sentence lay summary shown in the selected publications block */
  selectedSummary?: string;
  /** IDs from news.ts that cover this paper */
  pressMentionIds?: string[];
  type: 'peer-reviewed' | 'other';
}

// -------------------------------------------------------------
//  Data
// -------------------------------------------------------------
export const publications: Publication[] = [
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
    selectedSummary: 'The EMIT-2 trial placed naturally infected influenza donors in a room with susceptible recipients under controlled ventilation. Despite confirmed infection, no transmission occurred — pointing to the critical roles of coughing behavior, donor variability, and ventilation in determining infection risk.',
    pressMentionIds: ['sciencedaily-2026', 'maryland-today-2026'],
    type: 'peer-reviewed',
  },

  // Additional publications will be migrated in the full content step.
  // Stubs below are referenced in research themes for cross-linking.
  {
    id: 'lai-2024-ebiomed',
    authors: 'Lai J, Coleman KK, Tai S-HS, German JR, Hong FH, Albert BJ, et al.',
    title: 'Relative efficacy of masks and respirators as source control for viral aerosol shedding from people infected with SARS-CoV-2',
    journal: 'eBioMedicine',
    year: 2024,
    citation: '104:105157',
    doi: '10.1016/S2352-3964(24)00192-0',
    url: 'https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964(24)00192-0/fulltext',
    tags: ['sars-cov-2', 'aerosols', 'masks-ppe', 'source-control'],
    selected: false,
    type: 'peer-reviewed',
  },

  {
    id: 'lai-2023-cid',
    authors: 'Lai J, Coleman KK, Tai S-HS, German JR, Hong FH, Albert BJ, et al.',
    title: 'Exhaled Breath Aerosol Shedding of Highly Transmissible Versus Prior SARS-CoV-2 Variants',
    journal: 'Clinical Infectious Diseases',
    year: 2023,
    citation: '76(5):786',
    doi: '10.1093/cid/ciac846',
    url: 'https://academic.oup.com/cid/article/76/5/786/6773834',
    tags: ['sars-cov-2', 'aerosols', 'variants'],
    selected: false,
    pressMentionIds: ['nature-news-2022'],
    type: 'peer-reviewed',
  },
];

// Convenience: all unique tags across publications
export const allTags = [...new Set(publications.flatMap(p => p.tags))].sort();
