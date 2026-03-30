// =============================================================
//  Experience timeline data
//  Referenced by: /about/ — curated, not exhaustive.
// =============================================================

export type TimelineEventType =
  | 'position'
  | 'education'
  | 'award'
  | 'grant';

export interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  type: TimelineEventType;
  title: string;
  institution?: string;
  description?: string;
  description_zh?: string;
  url?: string;
}

export const timelineEvents: TimelineEvent[] = [

  {
    id: 'postdoc-umd-2024',
    year: 2024,
    type: 'position',
    title: 'Postdoctoral Associate',
    institution: 'Public Health AeroBiology Laboratory, University of Maryland',
    description: 'Continuing research on airborne pathogen transmission, exhaled breath aerosols, and infection prevention.',
    description_zh: '持续开展空气传播病原体、呼出气体气溶胶及感染预防领域的研究。',
  },
  {
    id: 'asm-mentor-2024',
    year: 2024,
    type: 'award',
    title: 'Future Leaders Mentorship Fellowship — Mentor',
    institution: 'American Society for Microbiology',
  },
  {
    id: 'geoh-grant-2025',
    year: 2025,
    month: 3,
    type: 'grant',
    title: 'GEOH Early Career Seed Grant (PI)',
    institution: 'University of Maryland, College Park',
    description: 'CLEAR: Communicating, Learning, and Epidemiological Application for Respiratory Prevention. $10,000.',
    description_zh: 'CLEAR：呼吸道预防的传播、学习与流行病学应用项目。资助金额：$10,000。',
  },
  {
    id: 'phd-umd-2023',
    year: 2023,
    type: 'education',
    title: 'PhD, Epidemiology',
    institution: 'University of Maryland, College Park',
    description: 'Dissertation: Exhaled Breath Aerosol Transmission of Acute Respiratory Infections. Advisor: Donald K. Milton, MD, DrPH.',
    description_zh: '论文：Exhaled Breath Aerosol Transmission of Acute Respiratory Infections。导师：Donald K. Milton，MD，DrPH。',
  },
  {
    id: 'open-science-fellowship-2023',
    year: 2023,
    type: 'award',
    title: 'Open Science Fellowship for Influenza',
    institution: 'Center for Open Science & Flu Lab',
  },
  {
    id: 'delta-omega-2023',
    year: 2023,
    type: 'award',
    title: 'Inductee, Delta Omega Honorary Society for Public Health',
    institution: 'Gamma Zeta Chapter',
  },
  {
    id: 'grad-ra-umd-2019',
    year: 2019,
    type: 'position',
    title: 'Graduate Teaching and Research Assistant',
    institution: 'Department of Global, Environmental, and Occupational Health, University of Maryland',
  },
  {
    id: 'research-assoc-umich-2017',
    year: 2017,
    type: 'position',
    title: 'Research Associate',
    institution: 'Department of Orthopedic Surgery, University of Michigan',
  },
  {
    id: 'mph-umich-2016',
    year: 2016,
    type: 'education',
    title: 'MPH, Epidemiology',
    institution: 'University of Michigan, Ann Arbor',
  },

];

export const timelineSorted = [...timelineEvents].sort((a, b) =>
  b.year !== a.year ? b.year - a.year : (b.month ?? 0) - (a.month ?? 0)
);
