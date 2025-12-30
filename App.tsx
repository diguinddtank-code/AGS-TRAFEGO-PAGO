import React, { useState } from 'react';
import { REPORT_DATA } from './constants';
import { PremiumCard } from './components/CyberCard';
import { AnimatedCounter } from './components/AnimatedCounter';
import { 
  PhoneCall, 
  DollarSign, 
  MousePointer2, 
  Target, 
  MapPin, 
  LayoutGrid, 
  Store,
  ArrowUpRight,
  Navigation,
  Eye,
  Star,
  TrendingUp,
  Camera,
  AlertCircle,
  Sparkles
} from 'lucide-react';

// Tab State
enum Tab {
  ADS = 'ADS',
  GMB = 'GMB'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ADS);
  const { client, campaigns, totals, gmb, pendingActions } = REPORT_DATA;

  return (
    <div className="min-h-screen pb-28">
      
      {/* 1. Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4 flex justify-between items-center transition-all duration-300 animate-slide-up">
        <div>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">CLIENTE</p>
          <h1 className="text-lg font-extrabold text-gray-900 leading-tight">{client.name}</h1>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{client.year}</span>
           <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
             {client.month}
           </span>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <main className="px-5 space-y-6">
        
        {/* ===========================
            TAB: GOOGLE ADS
           =========================== */}
        {activeTab === Tab.ADS && (
          <div key="ads-container" className="space-y-6"> 
            {/* Added key for React reconciliation on tab switch */}
            
            {/* NEW HERO: Phone Calls & Clicks */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Card 1: Phone Calls (Primary Focus) */}
              <PremiumCard gradient className="py-6" delay={100}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <div className="bg-emerald-400/20 p-1.5 rounded-lg animate-pulse">
                          <PhoneCall className="w-4 h-4 text-emerald-300" />
                       </div>
                       <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Phone Calls</p>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight text-white mt-1">
                      <AnimatedCounter value={totals.conversations} />
                    </h2>
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-500/20 px-2 py-1 rounded text-emerald-300 border border-emerald-500/30">
                       <TrendingUp className="w-3 h-3" />
                       <span className="text-[10px] font-bold">+12.5% vs last month</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* Card 2: Clicks */}
              <PremiumCard gradient className="py-6 relative" delay={200}>
                 {/* Decorative background circle */}
                 <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                 
                 <div className="flex justify-between items-center relative z-10">
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Total Clicks</p>
                      <h2 className="text-4xl font-bold tracking-tight text-white">
                        <AnimatedCounter value={totals.clicks} />
                      </h2>
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                      <MousePointer2 className="w-8 h-8 text-blue-200" />
                    </div>
                 </div>
              </PremiumCard>
            </div>

            {/* SECONDARY METRICS: Investment & CPA */}
            <div className="grid grid-cols-2 gap-4">
              <PremiumCard delay={300}>
                <div className="flex flex-col gap-2">
                  <div className="p-2 w-fit bg-gray-100 rounded-lg text-gray-600">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                       <AnimatedCounter value={totals.investment} prefix="$" decimals={0} />
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Investimento Total</p>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard delay={400}>
                <div className="flex flex-col gap-2">
                  <div className="p-2 w-fit bg-blue-50 rounded-lg text-blue-600">
                     <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter value={totals.costPerConversation} prefix="$" decimals={2} />
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Custo por Call</p>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* 2026 STRATEGIC OUTLOOK */}
            <PremiumCard 
              delay={500}
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white border-none shadow-xl shadow-indigo-200 overflow-hidden relative animate-float"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shadow-inner border border-white/10">
                  <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight text-white">Visão Estratégica 2026</h3>
                  <p className="text-sm text-indigo-50 leading-relaxed font-medium">
                    "Estamos preparando um salto tecnológico: <strong className="text-white">2026 será um ano muito superior</strong>. 
                    Iremos introduzir novas implementações e ferramentas exclusivas que <strong className="text-white">ainda não chegaram ao mercado geral</strong>, garantindo uma vantagem competitiva absoluta."
                  </p>
                </div>
              </div>
            </PremiumCard>

            {/* Campaign Breakdown Title */}
            <div className="pt-2 flex items-center justify-between animate-slide-up delay-500">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Campanhas Ativas</h3>
              <span className="text-xs font-medium text-blue-600">{campaigns.length} Campaigns</span>
            </div>

            {/* Campaign Cards List */}
            <div className="space-y-4">
              {campaigns.map((camp, index) => (
                <PremiumCard key={camp.id} delay={600 + (index * 100)} className="active:scale-[0.98] transition-transform">
                  <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <h4 className="font-bold text-gray-900">{camp.name}</h4>
                      </div>
                      <span className="text-[10px] text-gray-400 ml-4">SEARCH NETWORK</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">${camp.investment.toLocaleString()}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="text-[10px] text-gray-400 uppercase mb-1">Calls</p>
                      <p className="text-sm font-bold text-emerald-600">{camp.conversations}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="text-[10px] text-gray-400 uppercase mb-1">Clicks</p>
                      <p className="text-sm font-bold text-blue-600">{camp.clicks}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="text-[10px] text-gray-400 uppercase mb-1">CPA</p>
                      <p className="text-sm font-bold text-gray-900">${camp.costPerConversation}</p>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </div>
        )}

        {/* ===========================
            TAB: GMB (Google My Business)
           =========================== */}
        {activeTab === Tab.GMB && (
          <div key="gmb-container" className="space-y-6">
            
            {/* PENDING ACTIONS / REQUESTS */}
            {pendingActions && pendingActions.length > 0 && (
              <div className="space-y-4 animate-slide-up">
                 {pendingActions.map((action, idx) => (
                    <div 
                      key={action.id} 
                      className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-sm hover:shadow-md transition-all duration-300"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                       {/* Background Gradient Mesh */}
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-100" />
                       
                       <div className="relative bg-white/80 backdrop-blur-xl rounded-xl p-5 border border-amber-100 flex flex-col gap-4">
                          
                          {/* Header */}
                          <div className="flex justify-between items-start">
                             <div className="flex gap-4">
                                <div className="relative">
                                   <div className="absolute inset-0 bg-amber-200 blur-lg opacity-40 rounded-full" />
                                   <div className="relative bg-gradient-to-br from-amber-100 to-orange-50 p-3 rounded-2xl border border-amber-200 text-amber-600 shadow-sm">
                                      <Camera className="w-6 h-6" />
                                   </div>
                                </div>
                                <div>
                                   <div className="flex items-center gap-2 mb-1">
                                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-red-100">
                                         <AlertCircle className="w-3 h-3" />
                                         Ação Necessária
                                      </span>
                                      {action.priority === 'high' && (
                                         <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                                            Alta Prioridade
                                         </span>
                                      )}
                                   </div>
                                   <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                      {action.title}
                                   </h3>
                                </div>
                             </div>
                          </div>

                          {/* Body */}
                          <p className="text-sm text-gray-600 leading-relaxed font-medium pl-1">
                             {action.description}
                          </p>

                          {/* Footer Action */}
                          <button className="mt-2 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] shadow-lg shadow-gray-200 group-hover:shadow-xl">
                             Resolver Solicitação
                             <ArrowUpRight className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
            )}

            {/* GMB Header Card */}
            <PremiumCard className="border-t-4 border-t-blue-500" delay={100}>
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 animate-shine-effect">
                    <Store className="w-8 h-8" />
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-gray-900">Perfil da Empresa</h2>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm font-bold text-gray-900">{gmb.rating}</span>
                      <div className="flex text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span className="text-xs text-gray-400">({gmb.reviews} reviews)</span>
                    </div>
                 </div>
              </div>
              
              <a 
                href={gmb.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold active:bg-blue-100 transition-colors"
              >
                Ver Perfil no Google
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </PremiumCard>

            <div className="grid grid-cols-1 gap-4">
              {/* Directions */}
              <PremiumCard delay={200}>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <Navigation className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Solicitações de Rota</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                          <AnimatedCounter value={gmb.directions} />
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                 </div>
              </PremiumCard>

              {/* Calls */}
              <PremiumCard delay={300}>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <PhoneCall className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Chamadas do Perfil</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                          <AnimatedCounter value={gmb.calls} />
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                 </div>
              </PremiumCard>

              {/* Views */}
              <PremiumCard delay={400}>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Visualizações (Search/Maps)</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                           <AnimatedCounter value={gmb.views} />
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                 </div>
              </PremiumCard>
            </div>
          </div>
        )}

      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-nav z-50 pb-safe animate-slide-up">
        <div className="flex justify-around items-center p-2">
          <button 
            onClick={() => setActiveTab(Tab.ADS)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl w-full transition-all duration-300 active:scale-95 ${activeTab === Tab.ADS ? 'text-blue-600 scale-105' : 'text-gray-400'}`}
          >
            <div className={`p-1 rounded-lg transition-colors duration-300 ${activeTab === Tab.ADS ? 'bg-blue-50' : 'bg-transparent'}`}>
              <LayoutGrid className={`w-6 h-6 ${activeTab === Tab.ADS ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            </div>
            <span className="text-[10px] font-bold">Ads Overview</span>
          </button>
          
          <button 
            onClick={() => setActiveTab(Tab.GMB)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl w-full transition-all duration-300 active:scale-95 ${activeTab === Tab.GMB ? 'text-blue-600 scale-105' : 'text-gray-400'}`}
          >
             <div className={`p-1 rounded-lg transition-colors duration-300 ${activeTab === Tab.GMB ? 'bg-blue-50' : 'bg-transparent'}`}>
              <MapPin className={`w-6 h-6 ${activeTab === Tab.GMB ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            </div>
            <span className="text-[10px] font-bold">Google Maps</span>
          </button>
        </div>
      </nav>

    </div>
  );
};

export default App;