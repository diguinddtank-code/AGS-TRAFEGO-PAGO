import { DashboardData } from './types';

// ==========================================
// CONFIGURAÇÃO DE DADOS
// ==========================================

export const COLORS = {
  primary: '#1a73e8',
  grid: '#e0e0e0',
  muted: '#9aa0a6'
};

export const REPORT_DATA: DashboardData = {
  client: {
    name: "AGS STONES",
    month: "JANEIRO",
    year: "2026",
  },
  totals: {
    investment: 1310.10,
    conversations: 46,
    clicks: 214,
    costPerConversation: 28.45
  },
  campaigns: [
    {
      id: 'pavers',
      name: 'AGS PAVERS',
      status: 'active',
      investment: 281.39,
      clicks: 21,
      conversations: 18,
      costPerConversation: 15.61
    },
    {
      id: 'cabinets',
      name: 'AGS CABINETS',
      status: 'active',
      investment: 995.71,
      clicks: 101,
      conversations: 28,
      costPerConversation: 35.56
    }
  ],
  gmb: {
    views: 43,
    calls: 6,
    directions: 30,
    rating: 5,
    reviews: 6,
    profileUrl: "https://www.google.com/search?q=AGS+STONES+%26+CABINETS&stick=H4sIAAAAAAAA_-NgU1IxqLCwSDO1tLRMTUqyTDI1MDK1MqiwNE0xSDY2NUk2NjO1SDNYxCrq6B6sEBzi7-carKCm4Ozo5OnnGhIMAN3IZylAAAAA&hl=en-GB&mat=CVT_LcqU3BZpElcBTVDHnnMfL3P6RVxDppFQthUeEhlM-H_Gs2glxypVmDnY2DBXizdgmz6Sh1O7V_W1UYqPwK4qUms9tD_31BqibC8K6mpt4nxS-w8VUAU5PfBT9nTB8Vs&authuser=1&ved=2ahUKEwiKj9q5rMiRAxXaqJUCHcJXMMkQ-MgIegQIGBAj"
  },
  
};