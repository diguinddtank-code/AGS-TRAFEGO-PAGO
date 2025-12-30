export interface CampaignData {
  id: string;
  name: string;
  status: 'active' | 'paused';
  investment: number;
  conversations: number; // Phone Calls
  clicks: number;
  costPerConversation: number;
}

export interface GmbData {
  views: number;
  calls: number;
  directions: number;
  rating: number;
  reviews: number;
  profileUrl: string;
}

export interface ClientData {
  name: string;
  month: string;
  year: string;
}

export interface PendingAction {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface DashboardData {
  client: ClientData;
  campaigns: CampaignData[];
  gmb: GmbData;
  pendingActions: PendingAction[];
  totals: {
    investment: number;
    conversations: number;
    clicks: number;
    costPerConversation: number;
  };
}