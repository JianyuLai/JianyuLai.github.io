// =============================================================
//  Experience timeline data
//  Referenced by: /about/ (Timeline component)
// =============================================================

export type TimelineEventType =
  | 'position'
  | 'education'
  | 'publication'
  | 'media'
  | 'award';

export interface TimelineEvent {
  id: string;
  year: number;
  /** 1–12, optional for ordering within a year */
  month?: number;
  type: TimelineEventType;
  title: string;
  institution?: string;
  /** 1–2 sentence description shown on expand */
  description?: string;
  /** Cross-reference to publications.ts */
  relatedPubId?: string;
  url?: string;
}

// -------------------------------------------------------------
//  Data — populated in next step
// -------------------------------------------------------------
export const timelineEvents: TimelineEvent[] = [
  // Events will be added in reverse chronological order.
  // Example:
  // {
  //   id: 'postdoc-umd-2024',
  //   year: 2024,
  //   type: 'position',
  //   title: 'Postdoctoral Associate',
  //   institution: 'Public Health AeroBiology Laboratory, University of Maryland',
  //   description: 'Continuing research on airborne pathogen transmission …',
  // },
  // {
  //   id: 'phd-umd-2024',
  //   year: 2024,
  //   type: 'education',
  //   title: 'PhD, Epidemiology',
  //   institution: 'University of Maryland, College Park',
  // },
];

// Helper: sorted newest-first
export const timelineSorted = [...timelineEvents].sort((a, b) =>
  b.year !== a.year ? b.year - a.year : (b.month ?? 0) - (a.month ?? 0)
);
