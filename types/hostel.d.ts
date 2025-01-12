enum ContractType {
  MONTHLY,
  YEARLY,
}

interface Hostel {
  id: number;
  description: string;
  location: string;
  region: string;
  city: string;
  address: string;
  pricePerMonth: number;
  agent_fee?: number | null;
  deposit?: number | null;
  contract: string;
  contractPeriod: number;
  available: boolean;
  userId: number;
  images: string[];
  createdAt: Date; // ISO date format
  updatedAt: Date; // ISO date format
}
