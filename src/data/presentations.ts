// =============================================================
//  Presentations data
//  Referenced by: /presentations/
// =============================================================

export type PresentationType = 'invited' | 'conference' | 'poster';

export interface Presentation {
  id: string;
  type: PresentationType;
  authors: string;
  title: string;
  event: string;
  location: string;
  year: number;
  month?: number;
  url?: string;
}

export const presentations: Presentation[] = [

  // ── Invited / Campus Talks ────────────────────────────────────

  {
    id: 'cript-sab-2024',
    type: 'invited',
    authors: 'Milton DK, Lai J',
    title: 'EMIT-2 Quarantine Studies',
    event: '3rd Annual CRIPT Scientific Advisory Board Meeting',
    location: 'Virtual',
    year: 2024,
    month: 2,
  },
  {
    id: 'miaeh-seminar-2022',
    type: 'invited',
    authors: 'Lai J',
    title: 'Exhaled Breath Aerosol Shedding of Highly Transmissible Versus Prior SARS-CoV-2 Variants',
    event: 'Maryland Institute of Environmental Health Seminar',
    location: 'College Park, MD, USA',
    year: 2022,
    month: 10,
  },
  {
    id: 'niaid-save-2022',
    type: 'invited',
    authors: 'Coleman KK, Lai J, Milton DK',
    title: 'Evolution of SARS-CoV-2 Shedding in Exhaled Breath Aerosols',
    event: 'NIAID SAVE',
    location: 'Virtual',
    year: 2022,
    month: 4,
  },
  {
    id: 'niaid-investigators-2021',
    type: 'invited',
    authors: 'Milton DK, Lai J, Frieman M',
    title: 'Infectious SARS-CoV-2 in exhaled aerosols and efficacy of masks during early mild infection',
    event: 'DMID/NIAID/NIH/DHHS SARS-CoV-2 Weekly Investigators Meeting',
    location: 'Virtual',
    year: 2021,
    month: 10,
  },
  {
    id: 'miaeh-seminar-2021',
    type: 'invited',
    authors: 'Lai J, Milton DK',
    title: 'Results of the UMD StopCOVID study and high efficiency air sanitation with germicidal UV light for schools and conference rooms',
    event: 'Maryland Institute of Environmental Health Seminar',
    location: 'College Park, MD, USA',
    year: 2021,
    month: 9,
  },

  // ── Oral Conference Presentations ────────────────────────────

  // ── Poster Presentations ─────────────────────────────────────

  {
    id: 'idweek-2024',
    type: 'poster',
    authors: 'Lai J',
    title: 'Evaluating Modes of Influenza Transmission (EMIT-2): a Controlled Human Influenza Virus Infection Transmission Trial (CHIVITT)',
    event: 'IDWeek 2024',
    location: 'Los Angeles, CA, USA',
    year: 2024,
    month: 10,
  },
  {
    id: 'options-xii-2024',
    type: 'conference',
    authors: 'Lai J',
    title: 'Evaluating Modes of Influenza Transmission (EMIT-2): a Controlled Human Influenza Virus Infection Transmission Trial (CHIVITT)',
    event: 'OPTIONS XII for the Control of Influenza',
    location: 'Brisbane, Australia',
    year: 2024,
    month: 9,
  },
  {
    id: 'ceirr-emit2-2024',
    type: 'poster',
    authors: 'Lai J',
    title: 'Evaluating Modes of Influenza Transmission (EMIT-2): a Controlled Human Influenza Virus Infection Transmission Trial (CHIVITT)',
    event: 'CEIRR Annual Network Meeting 2024',
    location: 'New York, NY, USA',
    year: 2024,
    month: 7,
  },
  {
    id: 'ceirr-flu-shedding-2024',
    type: 'poster',
    authors: 'Lai J',
    title: 'Influenza A (H3) Viral Aerosol Shedding in Nasally Inoculated and Naturally Infected Cases',
    event: 'CEIRR Annual Network Meeting 2024',
    location: 'New York, NY, USA',
    year: 2024,
    month: 7,
  },
  {
    id: 'ceirr-comparison-2024',
    type: 'poster',
    authors: 'Lai J',
    title: 'Comparison of Viral Aerosol Shedding in Influenza, Seasonal Coronavirus, and SARS-CoV-2 in a College Community',
    event: 'CEIRR Annual Network Meeting 2024',
    location: 'New York, NY, USA',
    year: 2024,
    month: 7,
  },
  {
    id: 'apha-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'N95 Respirators Provide Superior Source Control for SARS-CoV-2',
    event: 'American Public Health Association Annual Meeting & Expo',
    location: 'Atlanta, GA, USA',
    year: 2023,
    month: 11,
  },
  {
    id: 'aaar-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'N95 Respirators Provide Superior Source Control for SARS-CoV-2',
    event: 'American Association for Aerosol Research 41st Annual Conference',
    location: 'Portland, OR, USA',
    year: 2023,
    month: 10,
  },
  {
    id: 'eswi-emit2-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'Evaluating Modes of Influenza Transmission (EMIT-2): Study Design of a Randomized Controlled Trial',
    event: 'Ninth ESWI Influenza Conference',
    location: 'Valencia, Spain',
    year: 2023,
    month: 9,
  },
  {
    id: 'eswi-flu-shedding-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'Influenza A (H3) Viral Aerosol Shedding in Nasally Inoculated and Naturally Infected Cases',
    event: 'Ninth ESWI Influenza Conference',
    location: 'Valencia, Spain',
    year: 2023,
    month: 9,
  },
  {
    id: 'ats-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'N95 Respirators Provide Superior Source Control for SARS-CoV-2',
    event: 'American Thoracic Society International Conference',
    location: 'Washington, DC, USA',
    year: 2023,
    month: 5,
  },
  {
    id: 'rid-2023',
    type: 'poster',
    authors: 'Lai J',
    title: 'N95 Respirators Provide Superior Source Control for SARS-CoV-2',
    event: 'Research Interaction Day',
    location: 'College Park, MD, USA',
    year: 2023,
    month: 4,
  },
  {
    id: 'bioscience-day-2022',
    type: 'poster',
    authors: 'Lai J',
    title: 'Evolution of SARS-CoV-2 Shedding in Exhaled Breath Aerosols',
    event: 'Bioscience Day 2022',
    location: 'College Park, MD, USA',
    year: 2022,
    month: 10,
  },
  {
    id: 'options-xi-2022',
    type: 'poster',
    authors: 'Lai J',
    title: 'Evolution of SARS-CoV-2 Shedding in Exhaled Breath Aerosols',
    event: 'Options XI for the Control of Influenza',
    location: 'Belfast, UK',
    year: 2022,
    month: 9,
  },
  {
    id: 'phrm-2022',
    type: 'poster',
    authors: 'Lai J',
    title: 'Comparison of Saliva and Midturbinate Swabs for Detection of SARS-CoV-2',
    event: 'Public Health Research at Maryland',
    location: 'College Park, MD, USA',
    year: 2022,
    month: 4,
  },
  {
    id: 'imed-2021',
    type: 'poster',
    authors: 'Lai J',
    title: 'Comparison between saliva and mid-turbinate swabs in the detection of COVID-19 cases',
    event: 'International Meeting on Emerging Diseases and Surveillance',
    location: 'Virtual',
    year: 2021,
    month: 11,
  },
  {
    id: 'aaar-2021',
    type: 'conference',
    authors: 'Milton DK, Lai J',
    title: 'Infectious SARS-CoV-2 in exhaled aerosols and efficacy of masks during early mild infection',
    event: 'American Association for Aerosol Research Conference',
    location: 'Virtual',
    year: 2021,
    month: 10,
  },
  {
    id: 'ors-2018',
    type: 'poster',
    authors: 'Lai J',
    title: 'The effect of lipid levels on patient reported outcomes in patients with rotator cuff tears',
    event: 'ORS Great Lakes/Midwest Regional Symposium',
    location: 'Ann Arbor, MI, USA',
    year: 2018,
    month: 8,
  },
  {
    id: 'isoqol-prom-2017',
    type: 'poster',
    authors: 'Lai J',
    title: 'Bias arising from the use of patient reported outcomes measures',
    event: 'ISOQOL 24th Annual Conference',
    location: 'Philadelphia, PA, USA',
    year: 2017,
    month: 10,
  },
  {
    id: 'isoqol-acl-2017',
    type: 'poster',
    authors: 'Lai J',
    title: 'A systematic review of the psychometric properties of patient-reported outcome measures for use in patients with anterior cruciate ligament injuries',
    event: 'ISOQOL 24th Annual Conference',
    location: 'Philadelphia, PA, USA',
    year: 2017,
    month: 10,
  },
  {
    id: 'epi-internship-2016',
    type: 'poster',
    authors: 'Lai J',
    title: 'The Effect of Lipid Disorders on The Risk of Rotator Cuff Diseases: A Systematic Review and Meta-analysis',
    event: 'Epidemiology Internship Poster Session',
    location: 'Ann Arbor, MI, USA',
    year: 2016,
    month: 10,
  },

];

export const invited    = presentations.filter(p => p.type === 'invited');
export const conference = presentations.filter(p => p.type === 'conference');
export const posters    = presentations.filter(p => p.type === 'poster');
