import React, { useState, useEffect } from 'react';
import { TrendingUp, Bell, CheckCircle2, Clock, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Signal {
  id: string;
  type: 'BUY' | 'SELL' | 'BUY_LIMIT' | 'SELL_LIMIT';
  entryPrice: number;
  tp1: number;
  tp2: number;
  tp3: number;
  sl: number;
  status: 'TP1' | 'TP2' | 'TP3' | 'ACTIVE' | 'SL';
  pips: number;
  timeAgo: string;
}

const mockSignals: Signal[] = [
  {
    id: 'sig-1',
    type: 'BUY',
    entryPrice: 2342.50,
    tp1: 2346.00,
    tp2: 2350.00,
    tp3: 2355.00,
    sl: 2335.00,
    status: 'TP3',
    pips: 125,
    timeAgo: '2 hours ago'
  },
  {
    id: 'sig-2',
    type: 'SELL',
    entryPrice: 2368.20,
    tp1: 2364.50,
    tp2: 2360.00,
    tp3: 2356.00,
    sl: 2374.00,
    status: 'TP2',
    pips: 82,
    timeAgo: '5 hours ago'
  },
  {
    id: 'sig-3',
    type: 'BUY_LIMIT',
    entryPrice: 2331.00,
    tp1: 2335.00,
    tp2: 2340.00,
    tp3: 2346.00,
    sl: 2325.00,
    status: 'TP2',
    pips: 90,
    timeAgo: '1 day ago'
  },
  {
    id: 'sig-4',
    type: 'SELL_LIMIT',
    entryPrice: 2392.40,
    tp1: 2388.00,
    tp2: 2384.00,
    tp3: 2378.00,
    sl: 2399.00,
    status: 'ACTIVE',
    pips: 44,
    timeAgo: 'Just now'
  },
  {
    id: 'sig-5',
    type: 'BUY',
    entryPrice: 2315.80,
    tp1: 2320.00,
    tp2: 2325.00,
    tp3: 2332.00,
    sl: 2309.00,
    status: 'TP3',
    pips: 162,
    timeAgo: '2 days ago'
  }
];

export default function SignalTracker() {
  const [activeTab, setActiveTab] = useState<'all' | 'profitable' | 'active'>('all');
  const [signals, setSignals] = useState<Signal[]>(mockSignals);

  // Filter signals
  const filteredSignals = signals.filter(sig => {
    if (activeTab === 'profitable') return sig.pips > 0 && sig.status !== 'ACTIVE';
    if (activeTab === 'active') return sig.status === 'ACTIVE';
    return true;
  });

  return (
    <div className="bg-neutral-900/65 border border-neutral-800 rounded-3xl p-6 md:p-8 backdrop-blur-md" id="signals-section">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 font-mono">
              LIVE Telegram Feed
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mt-1.5">
            Recent Signals & Results
          </h3>
          <p className="text-neutral-400 text-sm mt-1">
            Real performance transparency. We track and verify every entry.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex space-x-1 bg-neutral-950/80 p-1 rounded-xl border border-neutral-800 self-start md:self-center">
          {(['all', 'profitable', 'active'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab === 'all' ? 'All Alerts' : tab === 'profitable' ? 'Targets Hit' : 'Pending/Active'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Signals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSignals.map((signal, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              key={signal.id}
              className={`bg-neutral-950/70 border rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between ${
                signal.status === 'ACTIVE'
                  ? 'border-blue-500/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.1)]'
                  : 'border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              {/* Highlight Overlay */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                signal.status === 'ACTIVE'
                  ? 'bg-blue-500'
                  : signal.status === 'SL'
                  ? 'bg-red-500'
                  : 'bg-emerald-500'
              }`} />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-lg text-white font-mono">XAUUSD</span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      signal.type.startsWith('BUY')
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/10'
                        : 'bg-red-500/15 text-red-400 border border-red-500/10'
                    }`}>
                      {signal.type.replace('_', ' ')}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1 font-mono">
                    <Clock size={11} /> {signal.timeAgo}
                  </span>
                </div>

                <div className="text-right">
                  {signal.status === 'ACTIVE' ? (
                    <span className="text-xs text-blue-400 font-bold bg-blue-500/15 border border-blue-500/20 px-2.5 py-1 rounded-full animate-pulse flex items-center gap-1">
                      <Globe size={11} className="animate-spin" /> Active
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={11} /> +{signal.pips} Pips
                    </span>
                  )}
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="bg-neutral-900/40 rounded-xl p-3 border border-neutral-800/50 space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 font-medium">Entry Price</span>
                  <span className="text-neutral-200 font-bold font-mono">{signal.entryPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 font-medium font-sans">Stop Loss</span>
                  <span className="text-red-400/80 font-bold font-mono">{signal.sl.toFixed(2)}</span>
                </div>
                <div className="border-t border-neutral-800/40 my-1 pt-1" />
                <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
                  <div className={`p-1 rounded ${signal.status !== 'ACTIVE' ? 'bg-emerald-950/30 text-emerald-400 font-semibold' : 'bg-neutral-800/30 text-neutral-400'}`}>
                    TP1: {signal.tp1.toFixed(0)}
                  </div>
                  <div className={`p-1 rounded ${['TP2', 'TP3'].includes(signal.status) ? 'bg-emerald-950/30 text-emerald-400 font-semibold' : 'bg-neutral-800/30 text-neutral-400'}`}>
                    TP2: {signal.tp2.toFixed(0)}
                  </div>
                  <div className={`p-1 rounded ${signal.status === 'TP3' ? 'bg-emerald-950/30 text-emerald-400 font-semibold' : 'bg-neutral-800/30 text-neutral-400'}`}>
                    TP3: {signal.tp3.toFixed(0)}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-neutral-800/50">
                <span className="text-neutral-500">Strategy</span>
                <span className="text-amber-500/80 font-semibold text-[11px] uppercase tracking-wide">Zone Reversal Breakout</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Trust Footnote */}
      <div className="mt-8 bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="text-sm font-semibold text-white">Want to join these real-time trades?</h4>
          <p className="text-xs text-neutral-400 mt-1">All entries, exits, updates, and charts are shared free with 0 delay.</p>
        </div>
        <a 
          href="https://t.me/XAUUSD_MASTER_44" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-black py-2.5 px-5 rounded-xl text-xs font-bold transition-all duration-200 shadow-lg shadow-amber-500/15 text-center whitespace-nowrap"
        >
          Join Telegram Channel
        </a>
      </div>
    </div>
  );
}
