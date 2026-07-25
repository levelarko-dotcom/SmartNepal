export interface GovernmentService {
  id: string;
  title: string;
  category: string;
  description: string;
  fee: string;
  processingTime: string;
  requiredDocuments: string[];
  applyUrl: string;
}

export const mockGovernmentServices: GovernmentService[] = [
  {
    id: "epassport",
    title: "e-Passport Application (इ-राहदानी)",
    category: "Identity",
    description: "Apply online for new e-Passport issuing or renewal in Nepal.",
    fee: "NPR 5,000 - 12,000",
    processingTime: "3 to 15 Days",
    requiredDocuments: [
      "National Identity Card (NIN)",
      "Citizenship Certificate (Original & Copy)",
      "Old Passport (if renewing)",
    ],
    applyUrl: "https://emrtds.nepalpassport.gov.np",
  },
  {
    id: "driving-license",
    title: "Smart Driving License (सवारी चालक अनुमतिपत्र)",
    category: "Transport",
    description:
      "Online application for new driving license, category add, or renewal.",
    fee: "NPR 1,500 - 3,500",
    processingTime: "7 to 30 Days",
    requiredDocuments: [
      "Citizenship Certificate",
      "Medical Fitness Report",
      "Blood Group Card",
    ],
    applyUrl: "https://applydl.dotm.gov.np",
  },
  {
    id: "pan-card",
    title: "Personal PAN Registration (स्थायी लेखा नम्बर)",
    category: "Finance",
    description:
      "Register for Individual Permanent Account Number (PAN) online.",
    fee: "Free",
    processingTime: "1 to 2 Days",
    requiredDocuments: [
      "Citizenship Certificate",
      "Passport Size Photo (Digital)",
    ],
    applyUrl: "https://ird.gov.np",
  },
  {
    id: "national-id",
    title: "National Identity Card (राष्ट्रिय परिचयपत्र)",
    category: "Identity",
    description: "Pre-enrollment for National ID card (NIN) generation.",
    fee: "Free",
    processingTime: "Same Day Biometrics",
    requiredDocuments: [
      "Original Citizenship Certificate",
      "Married Certificate (if applicable)",
    ],
    applyUrl: "https://nid.docr.gov.np",
  },
];
