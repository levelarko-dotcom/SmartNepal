export interface Hospital {
  id: string;
  name: string;
  location: string;
  district: string;
  phones: string[]; // Multiple Phone Numbers
  ambulance: string[]; // Multiple Ambulance Numbers
  availableIcu: number;
  availableBeds: number;
  emergencyStatus: "Available" | "Busy" | "Full";
}

export const mockHospitals: Hospital[] = [
  {
    id: "1",
    name: "Bir Hospital (वीर अस्पताल)",
    location: "Mahabouddha, Kathmandu",
    district: "Kathmandu",
    phones: ["01-4221988", "01-4221119", "01-4223807"],
    ambulance: ["102", "01-4228900"],
    availableIcu: 4,
    availableBeds: 28,
    emergencyStatus: "Available",
  },
  {
    id: "2",
    name: "Tribhuvan University Teaching Hospital (TUTH)",
    location: "Maharajgunj, Kathmandu",
    district: "Kathmandu",
    phones: ["01-4412303", "01-4412505", "01-4412808"],
    ambulance: ["102", "01-4410911"],
    availableIcu: 1,
    availableBeds: 12,
    emergencyStatus: "Busy",
  },
  {
    id: "3",
    name: "Patan Hospital (पाटन अस्पताल)",
    location: "Lagankhel, Lalitpur",
    district: "Lalitpur",
    phones: ["01-5522295", "01-5522266", "01-5521034"],
    ambulance: ["102", "01-5522295"],
    availableIcu: 0,
    availableBeds: 5,
    emergencyStatus: "Full",
  },
  {
    id: "4",
    name: "Civil Service Hospital (निजामती अस्पताल)",
    location: "Minbhawan, Kathmandu",
    district: "Kathmandu",
    phones: ["01-4107000", "01-4107001", "01-4107002"],
    ambulance: ["102", "01-4107003"],
    availableIcu: 3,
    availableBeds: 18,
    emergencyStatus: "Available",
  },
  {
    id: "5",
    name: "BP Koirala Institute of Health Sciences (BPKIHS)",
    location: "Dharan, Sunsari",
    district: "Sunsari",
    phones: ["025-525555", "025-525554", "025-520200"],
    ambulance: ["102", "025-521111"],
    availableIcu: 6,
    availableBeds: 45,
    emergencyStatus: "Available",
  },
];
