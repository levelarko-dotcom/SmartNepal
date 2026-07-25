import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Mock Knowledge Base Response (AI Logic Simulation)
    let reply = "माफ गर्नुहोला, मैले तपाईंको प्रश्न पूर्ण रूपमा बुझ्न सकिन। कृपया सरकारी सेवा, अस्पताल, वा विपद् सम्बन्धी पुनः प्रश्न सोध्नुहोस्।";
    const query = message.toLowerCase();

    if (query.includes("passport") || query.includes("राहदानी")) {
      reply = "नेपालमा राहदानी (Passport) आवेदनका लागि:\n1. ePassport portal (emrtds.nepalpassport.gov.np) मा आवेदन भर्नुहोस्।\n2. राष्ट्रिय परिचयपत्र (NIN) नम्बर अनिवार्य छ।\n3. रु ५,००० देखि १२,००० सम्म (दुरुत वा साधारण) राजस्व लाग्छ।";
    } else if (query.includes("license") || query.includes("लाइसेन्स")) {
      reply = "सवारी चालक अनुमतिपत्र (Driving License) का लागि:\n1. applydl.dotm.gov.np मा गएर Online Form भर्नुहोस्।\n2. Biometrics र लिखित/ट्रायल परीक्षा दिनुपर्ने हुन्छ।";
    } else if (query.includes("hospital") || query.includes("अस्पताल") || query.includes("emergency")) {
      reply = "Smart Nepal Hospital Finder मार्फत तपाईंले नजिकैको अस्पतालमा ICU, Emergency Bed र एम्बुलेन्स सेवाको स्थिति हेर्न सक्नुहुन्छ।";
    } else if (query.includes("disaster") || query.includes("पहिरो") || query.includes("बाढी")) {
      reply = "नेपालमा आपतकालीन सहयोगका लागि:\n• नेपाल प्रहरी: १०0\n• सशस्त्र प्रहरी बल: १०१\n• एम्बुलेन्स: १०२";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}