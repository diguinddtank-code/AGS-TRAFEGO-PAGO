import React from 'react';
import { REPORT_DATA } from '../constants';
import { DollarSign, MessageCircle, TrendingUp } from 'lucide-react';
import { PremiumCard } from './CyberCard';

export const HeroSection: React.FC = () => {
  const { totals, client } = REPORT_DATA;

  return (
    <div className="w-full mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800">Visão Geral da Conta</h2>
        <p className="text-sm text-gray-500">Resultados consolidados de {client.month}/{client.year}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Investment */}
        <PremiumCard className="border-l-4 border-l-[#1a73e8]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-[#1a73e8]">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Investimento Total</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                ${totals.investment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
            </div>
          </div>
        </PremiumCard>

        {/* Conversations */}
        <PremiumCard className="border-l-4 border-l-[#188038]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-full text-[#188038]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Conversas (Calls)</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                {totals.conversations}
              </h3>
            </div>
          </div>
        </PremiumCard>

        {/* Cost Per Conversation */}
        <PremiumCard className="border-l-4 border-l-[#fbbc04]">
           <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-full text-[#fbbc04]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Custo por Conversa</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                ${totals.costPerConversation.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </h3>
            </div>
          </div>
        </PremiumCard>

      </div>
    </div>
  );
};