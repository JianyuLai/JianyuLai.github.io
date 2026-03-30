// =============================================================
//  Presentations data
//  Referenced by: /presentations/
// =============================================================

export type PresentationType = 'invited' | 'conference' | 'poster';

export interface Presentation {
  id: string;
  type: PresentationType;
  /** Full formatted author string */
  authors: string;
  title: string;
  event: string;
  location: string;
  year: number;
  /** 1–12 */
  month?: number;
  url?: string;
}

// -------------------------------------------------------------
//  Data — populated in next step
// -------------------------------------------------------------
export const presentations: Presentation[] = [
  // Example:
  // {
  //   id: 'options-xii-2024',
  //   type: 'conference',
  //   authors: 'Lai J',
  //   title: 'Evaluating Modes of Influenza Transmission (EMIT-2) …',
  //   event: 'OPTIONS XII for the Control of Influenza',
  //   location: 'Brisbane, Australia',
  //   year: 2024,
  //   month: 9,
  // },
];

// Helpers: grouped by type
export const invited    = presentations.filter(p => p.type === 'invited');
export const conference = presentations.filter(p => p.type === 'conference');
export const posters    = presentations.filter(p => p.type === 'poster');
