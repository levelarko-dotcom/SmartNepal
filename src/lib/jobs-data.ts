export interface JobVacancy {
  id: string;
  title: string;
  organization: string;
  category: "Lok Sewa" | "Banking" | "Public Enterprise" | "IT & Technical";
  totalPositions: number;
  deadline: string;
  qualification: string;
  applyUrl: string;
  status: "Open" | "Closing Soon" | "Closed";
}

export const mockJobs: JobVacancy[] = [
  {
    id: "job-1",
    title: "शाखा अधिकृत (Section Officer) - रा.प.तृतीय श्रेणी",
    organization: "लोक सेवा आयोग (Public Service Commission)",
    category: "Lok Sewa",
    totalPositions: 120,
    deadline: "२०८३ श्रावण १५",
    qualification: "Bachelor's Degree in any discipline",
    applyUrl: "https://ppsconline.p2.gov.np",
    status: "Open",
  },
  {
    id: "job-2",
    title: "कम्प्युटर अधिकृत / IT Officer (Officer Level)",
    organization: "नेपाल राष्ट्र बैंक (Nepal Rastra Bank)",
    category: "Banking",
    totalPositions: 15,
    deadline: "२०८३ श्रावण १०",
    qualification: "B.E. Computer / BIT / BCA / BSc CSIT",
    applyUrl: "https://jobs.nrb.org.np",
    status: "Closing Soon",
  },
  {
    id: "job-3",
    title: "नायब सुब्बा (Nayab Subba) - अप्राविधिक",
    organization: "लोक सेवा आयोग (Public Service Commission)",
    category: "Lok Sewa",
    totalPositions: 250,
    deadline: "२०८३ भाद्र ०१",
    qualification: "10+2 / Intermediate Pass",
    applyUrl: "https://psconline.psc.gov.np",
    status: "Open",
  },
  {
    id: "job-4",
    title: "सफ्टवेयर इन्जिनियर (Software Engineer)",
    organization: "नेपाल टेलिकम (Nepal Telecom - NTC)",
    category: "Public Enterprise",
    totalPositions: 8,
    deadline: "२०८३ श्रावण २०",
    qualification: "B.E. Computer / Software / IT",
    applyUrl: "https://jobs.ntc.net.np",
    status: "Open",
  },
];
