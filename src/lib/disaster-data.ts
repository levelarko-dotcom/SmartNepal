export interface DisasterAlert {
  id: string;
  title: string;
  type: "Flood" | "Landslide" | "Earthquake" | "Weather";
  severity: "Critical" | "Warning" | "Advisory";
  location: string;
  issuedAt: string;
  description: string;
  affectedDistricts: string[];
  helpline: string[];
}

export const mockDisasterAlerts: DisasterAlert[] = [
  {
    id: "alt-1",
    title: "कोशी नदी आसपास उच्च सतर्कता (High Flood Alert)",
    type: "Flood",
    severity: "Critical",
    location: "Koshi River Basin",
    issuedAt: "10 mins ago",
    description:
      "निरन्तरको वर्षाका कारण कोशी नदीमा जलसतह खतराको तह नाघेको छ। तटीय क्षेत्रका बासिन्दाहरूलाई तत्काल सुरक्षित स्थानमा जान अनुरोध गरिन्छ।",
    affectedDistricts: ["Sunsari", "Saptari", "Udayapur"],
    helpline: ["1155 (Flood Toll-Free)", "100 (Police)", "102 (Ambulance)"],
  },
  {
    id: "alt-2",
    title: "नारायणगढ-मुग्लिन सडक खण्डमा पहिरो (Landslide Blockade)",
    type: "Landslide",
    severity: "Warning",
    location: "Narayangadh - Muglin Highway",
    issuedAt: "1 hour ago",
    description:
      "तुइन खोला नजिकै खसेको पहिरोका कारण राजमार्ग दुवैतर्फ अवरुद्ध छ। डोजर प्रयोग गरी बाटो खुलाउने कार्य जारी छ।",
    affectedDistricts: ["Chitwan"],
    helpline: ["056-520100 (Traffic Police)", "100"],
  },
  {
    id: "alt-3",
    title: "काठमाडौँ उपत्यका भारी वर्षा चेतावनी (Heavy Rain Advisory)",
    type: "Weather",
    severity: "Advisory",
    location: "Kathmandu Valley",
    issuedAt: "3 hours ago",
    description:
      "आगामी २४ घण्टासम्म काठमाडौँ, ललितपुर र भक्तपुरमा मध्यम देखि भारी वर्षाको सम्भावना रहेको छ। नदी किनारका बस्तीहरू सतर्क रहनुहोला।",
    affectedDistricts: ["Kathmandu", "Lalitpur", "Bhaktapur"],
    helpline: ["100", "101 (Fire Brigade)"],
  },
];
