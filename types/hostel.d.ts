enum ContractType {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
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
  contract: ContractType;
  contractPeriod: number;
  available: boolean;
  userId: number;
  images: string[];
  createdAt: string; // ISO date format
  updatedAt: string; // ISO date format
}
