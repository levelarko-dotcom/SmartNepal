import { NextResponse } from "next/server";

// Dynamic Service Data Generator (Acts as Live Scraped Database Interface)
export async function GET(req: Request) {
  try {
    // 💡 Real-world Application मा यहाँ External Govt API / Database Query चल्छ
    const liveServices = [
      {
        id: "epassport",
        title: "e-Passport Application (इ-राहदानी)",
        category: "Identity",
        description:
          "Apply online for new e-Passport issuing or renewal in Nepal.",
        fee: "NPR 5,000 (Normal) - NPR 12,000 (Urgent)",
        processingTime: "3 to 15 Days",
        lastUpdated: new Date().toLocaleDateString("ne-NP"),
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
        fee: "NPR 1,500 - NPR 3,500 (Category Wise)",
        processingTime: "7 to 30 Days",
        lastUpdated: new Date().toLocaleDateString("ne-NP"),
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
        fee: "Free (नि:शुल्क)",
        processingTime: "1 to 2 Days",
        lastUpdated: new Date().toLocaleDateString("ne-NP"),
        requiredDocuments: [
          "Citizenship Certificate",
          "Passport Size Photo (Digital)",
        ],
        applyUrl: "https://ird.gov.np",
      },
    ];

    return NextResponse.json({
      success: true,
      lastSync: new Date().toISOString(),
      data: liveServices,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch live services" },
      { status: 500 },
    );
  }
}
