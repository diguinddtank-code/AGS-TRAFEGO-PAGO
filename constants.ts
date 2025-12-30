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
    month: "DEZEMBRO",
    year: "2025",
  },
  totals: {
    investment: 1500.16,
    conversations: 48,
    clicks: 214,
    costPerConversation: 31.25
  },
  campaigns: [
    {
      id: 'pavers',
      name: 'AGS PAVERS',
      status: 'active',
      investment: 617.01,
      clicks: 65,
      conversations: 20,
      costPerConversation: 30.85
    },
    {
      id: 'cabinets',
      name: 'AGS CABINETS',
      status: 'active',
      investment: 883.14,
      clicks: 149,
      conversations: 28,
      costPerConversation: 31.53
    }
  ],
  gmb: {
    views: 49,
    calls: 3,
    directions: 37,
    rating: 5,
    reviews: 6,
    profileUrl: "https://www.google.com/search?q=AGS+STONES+%26+CABINETS&stick=H4sIAAAAAAAA_-NgU1IxqLCwSDO1tLRMTUqyTDI1MDK1MqiwNE0xSDY2NUk2NjO1SDNYxCrq6B6sEBzi7-carKCm4Ozo5OnnGhIMAN3IZylAAAAA&hl=en-GB&mat=CVT_LcqU3BZpElcBTVDHnnMfL3P6RVxDppFQthUeEhlM-H_Gs2glxypVmDnY2DBXizdgmz6Sh1O7V_W1UYqPwK4qUms9tD_31BqibC8K6mpt4nxS-w8VUAU5PfBT9nTB8Vs&authuser=1&ved=2ahUKEwiKj9q5rMiRAxXaqJUCHcJXMMkQ-MgIegQIGBAj"
  },
  pendingActions: [
    {
      id: 'facade-photo',
      title: 'Foto da Fachada Pendente',
      description: 'Precisamos de uma foto atual da fachada da AGS STONES AND CABINETS (com a placa visível) para validar e preencher a ficha do Google.',
      priority: 'high'
    }
  ]
};