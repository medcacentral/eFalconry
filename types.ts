
export interface AuditRequest {
  brandName: string;
  monthlyRevenue: string;
  currentAcos: string;
  topPainPoint: string;
}

export interface AuditResponse {
  analysis: string;
  quickWins: string[];
  strategicVision: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
