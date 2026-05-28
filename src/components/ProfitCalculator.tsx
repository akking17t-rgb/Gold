import React, { useState } from 'react';
import { DollarSign, Percent, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfitCalculator() {
  const [balance, setBalance] = useState<number>(1000);
  const [lotSize, setLotSize] = useState<number>(0.1);
  const [monthlyPips, setMonthlyPips] = useState<number>(1200);

  // Calculations for Gold (XAUUSD)
  // 1 Lot = $10 per pip (point) fluctuation on standard accounts.
  // Standard gold pip logic: 1 Pip = $0.10 gold price change.
  // Profit = Lot Size * Monthly Pips * $10
  const monthlyProfit = Number((lotSize * monthlyPips * 10).toFixed(2));
  const gainPercentage = Number(((monthlyProfit / balance) * 100).toFixed(1));

  const handleBalancePreset = (value: number) => {
    setBalance(value);
    // Suggest standard safe lot size matching balance (roughly 0.01 lot per $100 balance or safe risk)
    const suggestedLot = Math.max(0.01, Number((value * 0.0001).toFixed(2)));
    setLotSize(suggestedLot);
  };

  return (
    <div className="bg-neutral-900/80 border border-amber-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden" id="calculator-section">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          XAUUSD Profit Calculator
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 tracking-tight">
          Visualize Your Potential Gains
        </h3>
        <p className="text-neutral-400 text-sm mt-2">
          Calculate potential monthly earnings based on our target signals and standard leverage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders and Toggles */}
        <div className="lg:col-span-7 space-y-6">
          {/* Account Balance */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-neutral-300">Account Balance</label>
              <span className="text-white font-mono font-medium bg-neutral-800 px-3 py-1 rounded-lg border border-neutral-700/50">
                ${balance.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="25000"
              step="100"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex gap-2 mt-2">
              {[200, 1000, 5000, 10000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handleBalancePreset(preset)}
                  className={`text-xs px-3 py-1.5 rounded-md transition-all border ${
                    balance === preset
                      ? 'bg-amber-500 text-black font-semibold border-amber-500'
                      : 'bg-neutral-800/60 text-neutral-400 border-neutral-700/50 hover:text-white hover:border-neutral-600'
                  }`}
                >
                  ${preset.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Lot Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1">
                <label className="text-sm font-medium text-neutral-300">Lot Size (Volume)</label>
                <span className="text-xs text-neutral-500">(Recommended: 0.01 per $100)</span>
              </div>
              <span className="text-white font-mono font-medium bg-neutral-800 px-3 py-1 rounded-lg border border-neutral-700/50">
                {lotSize.toFixed(2)} Lots
              </span>
            </div>
            <input
              type="range"
              min="0.01"
              max="2.00"
              step="0.01"
              value={lotSize}
              onChange={(e) => setLotSize(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex gap-2 mt-2">
              {[0.02, 0.1, 0.5, 1.0].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setLotSize(preset)}
                  className={`text-xs px-3 py-1.5 rounded-md transition-all border ${
                    lotSize === preset
                      ? 'bg-amber-500 text-black font-semibold border-amber-500'
                      : 'bg-neutral-800/60 text-neutral-400 border-neutral-700/50 hover:text-white hover:border-neutral-600'
                  }`}
                >
                  {preset >= 1.0 ? `${preset.toFixed(1)} Std` : preset.toFixed(2)} Lot
                </button>
              ))}
            </div>
          </div>

          {/* Target Monthly Pips */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1.5">
                <label className="text-sm font-medium text-neutral-300">Target Monthly Pips</label>
                <span className="text-xs text-emerald-500 px-1.5 py-0.5 bg-emerald-500/10 rounded font-medium">Channel Avg: ~1,500</span>
              </div>
              <span className="text-amber-500 font-mono font-bold bg-neutral-800/80 px-3 py-1 rounded-lg border border-amber-500/20">
                {monthlyPips.toLocaleString()} Pips
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="3500"
              step="50"
              value={monthlyPips}
              onChange={(e) => setMonthlyPips(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-neutral-500 px-1">
              <span>Conservative (500 pips)</span>
              <span>Consistent Member Avg</span>
              <span>Elite Target (3000+ pips)</span>
            </div>
          </div>
        </div>

        {/* Big Profit Card Result */}
        <div className="lg:col-span-5 bg-gradient-to-br from-neutral-950 to-neutral-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[280px]">
          <div className="absolute top-0 right-0 bg-yellow-500/10 text-amber-400 px-4 py-1 text-xs font-semibold uppercase rounded-bl-xl border-l border-b border-amber-500/20 font-mono">
            ESTIMATED RETURN
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-500">
                <TrendingUp size={24} />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Monthly Potential Net Profit</span>
                <div className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight mt-1 font-sans">
                  ${monthlyProfit.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800/80 my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-medium uppercase text-neutral-500">Account Growth</span>
                <div className="text-xl font-bold text-emerald-500 flex items-center gap-1 mt-0.5">
                  <Percent size={16} />
                  {gainPercentage}%
                </div>
              </div>
              <div>
                <span className="text-[11px] font-medium uppercase text-neutral-500">Ending Balance</span>
                <div className="text-xl font-bold text-white mt-0.5">
                  ${(balance + monthlyProfit).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-neutral-800/80">
            <p className="text-[10px] text-neutral-500 flex items-center gap-1 leading-normal">
              <ShieldCheck size={12} className="text-amber-500/70 shrink-0" />
              Disclaimer: Leverage trading carries risk. Past performance does not guarantee future results. Manage risk wisely using 0.01 per $100.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
