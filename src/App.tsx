import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  Award, 
  Shield, 
  DollarSign, 
  Bell, 
  Sparkles, 
  Check, 
  LineChart, 
  Zap, 
  MessageCircle,
  Activity,
  UserCheck,
  Percent,
  TrendingDown,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion } from 'motion/react';

// Import our custom sub-components
import ProfitCalculator from './components/ProfitCalculator';
import SignalTracker from './components/SignalTracker';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AdminGuide from './components/AdminGuide';

export default function App() {
  const [showAdminToolbox, setShowAdminToolbox] = useState<boolean>(true);
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(true); // Let it be unlocked by default or toggled simply to guide them easily!

  const telegramLink = "https://t.me/XAUUSD_MASTER_44";

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-amber-500 selection:text-black antialiased relative overflow-x-hidden">
      
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[750px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-amber-500/0 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1200px] left-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2400px] right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Free Active Alert Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-amber-950/80 to-neutral-900 border-b border-amber-500/20 py-2.5 px-4 text-center text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            LIMITED COMPLIMENTARY SPOT ACCESSIBILITY
          </span>
          <span className="text-neutral-400 font-medium hidden sm:inline">|</span>
          <p className="text-neutral-300 font-sans">
            Our high-win-rate signal channel is temporarily set to <span className="text-white font-bold underline">FREE Public</span>! Offer expires once remaining 134 spots are claimed.
          </p>
          <a 
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-bold underline transition-colors text-xs ml-1"
          >
            Claim Spot <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Modern High-End Top Header */}
      <header className="border-b border-neutral-900 bg-neutral-950/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-black font-black text-base shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-200">
              XM
            </div>
            <div>
              <span className="text-md font-bold tracking-tight text-white block group-hover:text-amber-400 transition-colors">
                XAUUSD_MASTER_44
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono">
                Elite Gold Signals
              </span>
            </div>
          </a>

          {/* Quick Stats Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs text-neutral-400">
            <a href="#calculator-section" className="hover:text-white hover:border-b hover:border-amber-500/30 pb-1 transition-all">Potential Income Calculator</a>
            <a href="#signals-section" className="hover:text-white hover:border-b hover:border-amber-500/30 pb-1 transition-all">Verified Logs</a>
            <a href="#testimonials-section" className="hover:text-white hover:border-b hover:border-amber-500/30 pb-1 transition-all">Community Stats</a>
            <a href="#faq-section" className="hover:text-white hover:border-b hover:border-amber-500/30 pb-1 transition-all">FAQs</a>
          </nav>

          {/* Action Header Button */}
          <div className="flex items-center gap-3">
            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Users size={14} className="text-amber-500" />
              <span>18,480+ Members</span>
            </a>
            
            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black px-4.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1 shadow-md shadow-amber-500/15 hover:shadow-amber-500/30 hover:scale-102 transition-all cursor-pointer"
            >
              <span>Join Free</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-10 md:pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-4 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-full">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                Verified #1 Gold Commodity Signal Channel
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Dominate Spot Gold <br className="hidden sm:inline" />
              With Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 drop-shadow-sm font-black">XAUUSD</span> Signals
            </h1>

            <p className="text-neutral-400 text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
              Stop guessing market entries & exits. Get professional gold trading signals, 
              intraday analysis, and target alerts forwarded straight to your mobile for free. 
              Our members target <span className="text-white font-bold">+1,500 monthly pips</span> under professional execution.
            </p>

            {/* Dynamic Highly Converting CTA Box - MOVED UP FOR INSTANT MOBILE RECOGNITION */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-xl">
              <a 
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-amber-500 to-yellow-500 text-black font-extrabold text-center py-4 px-8 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 text-md shrink-0"
              >
                <MessageCircle size={20} className="fill-current" />
                <span>Join Telegram Channels Now</span>
                <ArrowUpRight size={18} />
              </a>
              
              <div className="text-center sm:text-left flex flex-col justify-center">
                <span className="text-xs text-neutral-400 font-medium block">⭐️ Rated 4.9/5 by 12,000+ traders</span>
                <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">🟢 Instant VIP Access Ready</span>
              </div>
            </div>

            {/* Core Statistics Highlights - MOVED BELOW CTA FOR OPTIMAL READING HIERARCHY */}
            <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
              <div className="border border-neutral-900 bg-neutral-950/40 rounded-2xl p-3 md:p-4 text-center">
                <span className="text-xl md:text-3xl font-black text-amber-400 font-mono block">87%</span>
                <span className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">Win Rate Logs</span>
              </div>
              <div className="border border-neutral-900 bg-neutral-950/40 rounded-2xl p-3 md:p-4 text-center">
                <span className="text-xl md:text-3xl font-black text-white font-mono block">1:3</span>
                <span className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">Risk-to-Reward</span>
              </div>
              <div className="border border-neutral-900 bg-neutral-950/40 rounded-2xl p-3 md:p-4 text-center">
                <span className="text-xl md:text-3xl font-black text-white font-mono block">FREE</span>
                <span className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">Lifetime Open</span>
              </div>
            </div>

            {/* Checklist Promises */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400 pt-2 font-mono">
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-amber-500" />
                <span>0 Delay Signals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-amber-500" />
                <span>Exact TP & SL Markers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-amber-500" />
                <span>No VPS/Paid Bot Needed</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals: Interactive Premium Gold Pricing/Signals Ticker Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-3xl opacity-10 blur-2xl -z-10" />
            
            <div className="bg-neutral-900/90 border border-neutral-850 rounded-3xl p-6 relative overflow-hidden space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                    <Activity size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">XAUUSD (Spot Gold)</h4>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase">Live Active Zone Analytics</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-bold font-mono">+$24.40 (+1.04%)</span>
                  <span className="block text-xs font-mono font-semibold text-neutral-200 mt-0.5">$2,364.80 /oz</span>
                </div>
              </div>

              {/* Sample Chart Design */}
              <div className="h-40 relative flex items-end">
                {/* SVG Live-like Line */}
                <svg className="w-full h-full text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0 80 Q 25 75 50 60 T 100 65 T 150 40 T 200 45 T 250 15 T 300 5" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M0 80 Q 25 75 50 60 T 100 65 T 150 40 T 200 45 T 250 15 T 300 5 L 300 100 L 0 100 Z" 
                    fill="url(#goldGradient)" 
                    opacity="0.12"
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  
                  {/* Visual Points */}
                  <circle cx="150" cy="40" r="4.5" fill="#F59E0B" className="animate-ping" />
                  <circle cx="150" cy="40" r="3" fill="#F59E0B" />
                  <circle cx="250" cy="15" r="3" fill="#10B981" />
                </svg>

                {/* Animated Highlights overlays */}
                <div className="absolute top-[8%] left-[45%] bg-neutral-950/90 border border-amber-500/30 text-[10px] font-mono p-1 px-2 rounded-lg text-amber-400 shadow">
                  BUY LIMIT TRIGGERED
                </div>
                <div className="absolute top-[18%] right-[8%] bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono p-1 px-2 rounded-lg text-emerald-400 font-bold shadow">
                  TP3 REACHED (+125 Pips) 🎉
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-neutral-950/70 border border-neutral-850 rounded-xl space-y-1">
                  <span className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Today's Pips</span>
                  <div className="text-base font-bold text-white font-mono flex items-center justify-between">
                    <span>+169 pips</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
                <div className="p-3 bg-neutral-950/70 border border-neutral-850 rounded-xl space-y-1">
                  <span className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Active Signals</span>
                  <div className="text-base font-bold text-sky-400 font-mono flex items-center justify-between">
                    <span>1 Trade</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-neutral-500 italic">
                  "Perfect sniper entries mapping structural liquidity sweeps daily"
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Channel Core Values Container */}
      <section className="bg-neutral-950/80 border-y border-neutral-900 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="space-y-3 p-2">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shadow-amber-500/5">
                <TrendingUp size={22} />
              </div>
              <h4 className="text-lg font-bold text-white font-sans">Institutional Sniper Entries</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We use Smart Money Concepts (SMC), market liquidity sweeps, and supply/demand zones to secure entries with negligible drawdown.
              </p>
            </div>

            <div className="space-y-3 p-2">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shadow-amber-500/5">
                <Shield size={22} />
              </div>
              <h4 className="text-lg font-bold text-white font-sans">Strict Risk Management Guidelines</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We don't gamble. Every signal includes clear Stop Loss coordinates and trailing tips to protect your balance and lock in incremental gains.
              </p>
            </div>

            <div className="space-y-3 p-2">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shadow-amber-500/5">
                <Zap size={22} />
              </div>
              <h4 className="text-lg font-bold text-white font-sans">Real-Time News Forecasts</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Get full alerts and trading plans before major news events (like NFP, CPI, FOMC, and PMI) so you stay protected from erratic market spreads.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Signal Tracker & Interactive Calculator Hub */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Signals Log */}
        <div className="relative">
          <div className="absolute -top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <SignalTracker />
        </div>

        {/* Profit Range Calculator Component */}
        <div>
          <ProfitCalculator />
        </div>

        {/* Testimonials */}
        <div className="pt-8">
          <Testimonials />
        </div>

        {/* FAQ Area */}
        <div className="pt-8">
          <FAQ />
        </div>

        {/* Special Owner Ad Campaign Toolbox (Can be expanded by the administrator to check how to host or run ads!) */}
        <div className="pt-12 border-t border-neutral-900">
          <div className="bg-neutral-950 rounded-3xl p-6 border border-amber-500/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="span text-[10px] uppercase tracking-wider font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded inline-block">
                  OWNER SETTINGS
                </div>
                <h4 className="text-lg font-bold text-white mt-1.5">Are you the owner of t.me/XAUUSD_MASTER_44?</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  We've built an exclusive interactive portal for deploying this site and organizing ad campaigns. Use it to fast-track your advertising.
                </p>
              </div>

              <button
                onClick={() => setShowAdminToolbox(!showAdminToolbox)}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold transition-all text-xs cursor-pointer ${
                  showAdminToolbox 
                    ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-750' 
                    : 'bg-amber-500 text-black hover:bg-amber-400'
                }`}
              >
                {showAdminToolbox ? 'Hide Owner/Ad Toolbox' : 'Open Owner/Ad Toolbox'}
              </button>
            </div>

            {showAdminToolbox && (
              <div className="mt-8 pt-6 border-t border-neutral-900">
                <AdminGuide />
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Modern Financial Footnote Disclaimer Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16 px-4 md:px-8 mt-12 text-xs text-neutral-500 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            {/* Logo copy */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center font-bold text-xs">
                XM
              </div>
              <span className="font-bold text-white text-sm">XAUUSD MASTER Elite Club</span>
            </div>

            {/* Quick links footer */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-400">
              <a href="#calculator-section" className="hover:text-white transition-colors">Profit Calculator</a>
              <a href="#signals-section" className="hover:text-white transition-colors">Signal History</a>
              <a href="#testimonials-section" className="hover:text-white transition-colors">Reviews</a>
              <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-amber-500 font-semibold hover:underline">Join Telegram</a>
            </div>

          </div>

          <div className="border-t border-neutral-900 pt-8 space-y-4">
            <h5 className="font-semibold text-neutral-400">🚨 HIGH RISK FINANCIAL DISCLAIMER</h5>
            <p className="leading-relaxed text-justify">
              Trading spot gold (XAUUSD) or other leverage/margin commodities carries an extreme level of risk and may not be suitable for all investment portfolios. Leverage can work both to your absolute advantage and disadvantage. Past statistical performance tracked in our Telegram channel or on this landing page is for presentation purposes only and does not represent standard guarantees of future gains. You of your own accord are completely liable for any margins, leverages, lots, or capital changes deployed on your brokerage accounts. 
            </p>
            <p className="leading-relaxed">
              We do not act as licensed financial advisors. Signals forwarded on XAUUSD_MASTER_44 are shared solely as educational case studies mirroring real-world Technical Analysis setups. Only deposit money you can comfortably afford to lose.
            </p>
          </div>

          <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600">
            <span>© {new Date().getFullYear()} @XAUUSD_MASTER_44 - All Rights Reserved.</span>
            <span>Created as a high-converting landing template.</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
