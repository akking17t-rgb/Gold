import React, { useState } from 'react';
import { Shield, BookOpen, Share2, Award, Terminal, Copy, Check, Info, Settings, Sparkles } from 'lucide-react';

export default function AdminGuide() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  
  // UTM Generator State
  const [baseUrl, setBaseUrl] = useState<string>('https://yourdomain.com');
  const [utmSource, setUtmSource] = useState<string>('facebook');
  const [utmMedium, setUtmMedium] = useState<string>('cpc');
  const [utmCampaign, setUtmCampaign] = useState<string>('gold_signals_conversion');

  const generatedUrl = `${baseUrl}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const deployGuides = [
    {
      platform: 'Vercel (Highly Recommended)',
      cost: '100% Free Tier',
      steps: [
        'Prerequisites: Create a free account at vercel.com and install git.',
        'Push your code to a GitHub repository (private or public).',
        'In Vercel, click "Add New Project" and import your GitHub repository.',
        'Choose Vite/React preset (Vercel automatically detects this). Leave configuration default.',
        'Click "Deploy". Within 30 seconds your site is live on a secure HTTPS *.vercel.app domain!',
        'Optional: Add your custom domain (e.g., goldmastersignals.com) in Vercel Settings -> Domains.'
      ]
    },
    {
      platform: 'Netlify (Great & Simple Asset Hosting)',
      cost: '100% Free Tier',
      steps: [
        'Create a free account at netlify.com.',
        'Fast Track: Run "npm run build" in your terminal, then drag-and-drop the generated "dist/" folder directly onto the Netlify dashboard upload block.',
        'Github Track: Connect Netlify to your GitHub repo to trigger automatic re-deploys every time you update your code.',
        'Custom Domains can be mapped within minutes under Site Settings.'
      ]
    },
    {
      platform: 'Cloud Run / AI Studio',
      cost: 'Free tier available',
      steps: [
        'Your current app is already successfully deployed by AI Studio to Google Cloud Run!',
        'You can immediately share the preview URLs provided in your workspace with coworkers or clients.',
        'Exporting is simple: From the settings menu, you can export this as a clean ZIP or GitHub Repository.'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 relative overflow-hidden" id="admin-guide">
      {/* Decorative Gold Rings */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
            <Shield size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono px-2 py-0.5 bg-amber-500 text-black uppercase rounded">
                Owner Mode
              </span>
              <span className="text-xs text-neutral-400 font-mono">XAUUSD Channel Admin</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
              Hosting & Ad Strategy Toolbox
            </h3>
          </div>
        </div>
        <p className="text-xs text-neutral-400 max-w-sm md:text-right">
          This specialized control center lists the detailed answers to your questions on where to host, setting up ads, and tracking traffic sources.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Hosting Guides & Strategy */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h4 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-amber-500" />
              1. Where & How to Deploy / Host Your Custom Landing Page
            </h4>
            <div className="space-y-4">
              {deployGuides.map((guide, i) => (
                <div key={i} className="bg-neutral-950/60 rounded-xl p-4 border border-neutral-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-white font-sans">{guide.platform}</span>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-mono font-bold uppercase">{guide.cost}</span>
                  </div>
                  <ol className="list-decimal text-xs text-neutral-400 space-y-1.5 pl-4 leading-relaxed">
                    {guide.steps.map((step, idx) => (
                      <li key={idx}>
                        {step.startsWith('Prerequisites:') ? (
                          <span>
                            <strong className="text-neutral-300">Prerequisites:</strong>{step.replace('Prerequisites:', '')}
                          </span>
                        ) : step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-amber-500" />
              2. Complete Gold Trading Ad Campaign Blueprint
            </h4>
            <div className="space-y-3 text-xs text-neutral-400 leading-relaxed">
              <div className="p-4 bg-neutral-950/60 rounded-xl border border-neutral-800 space-y-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Meta (Facebook & Instagram) Conversion Ads
                </span>
                <p>
                  Meta has the highest volume of retail traders. Create a free Facebook Business Suite account, build an active Instagram page matching <span className="text-amber-400">@XAUUSD_MASTER</span>, and setup a META Pixel.
                </p>
                <p className="border-l-2 border-amber-500 pl-3 italic text-[11px] bg-amber-500/5 py-1 text-neutral-300">
                  <strong>Recommended Ad Copy:</strong> "Tired of hitting stop loss? Join the elite XAUUSD MASTER community for 100% free daily gold signal forecasts with exact Entry, Take Profit & Stop Loss coordinates. Tap 'Learn More' to secure free VIP access on Telegram! 📈🔥"
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[10px] block text-neutral-500">Target Geographies (Tier 1-2):</span>
                    <span className="text-neutral-300 font-medium">Malaysia, UAE, UK, South Africa, Germany</span>
                  </div>
                  <div>
                    <span className="text-[10px] block text-neutral-500">Target Interests:</span>
                    <span className="text-neutral-300 font-medium font-mono text-[10px]">Forex Trading, Technical Analysis, MetaTrader, Day Trading</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-950/60 rounded-xl border border-neutral-800 space-y-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Google Search Ads (Intent Trading Traffic)
                </span>
                <p>
                  Bid on exact high-intent search terms in Google Ads. Target keywords such as <code className="bg-neutral-900 px-1 py-0.5 rounded text-amber-500">"best gold signals free"</code>, <code className="bg-neutral-900 px-1 py-0.5 rounded text-amber-500">"free XAUUSD signal telgram"</code>, or <code className="bg-neutral-900 px-1 py-0.5 rounded text-amber-500">"how to trade spot gold"</code>. Point these ads directly to this landing page.
                </p>
              </div>

              <div className="p-4 bg-neutral-950/60 rounded-xl border border-neutral-800 space-y-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Original Telegram Native Ads
                </span>
                <p>
                  Go to <code className="bg-neutral-900 px-1 py-0.5 rounded text-sky-400">promote.telegram.org</code> and create direct sponsor ads targeted strictly on other popular crypto, stock, or secondary trading channels! This ensures users are already signed into Telegram.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: UTM Campaign generator */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-neutral-950 p-5 rounded-2xl border border-amber-500/20 relative">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <Share2 size={16} className="text-amber-500" />
              3. Interactive UTM Campaign Link Builder
            </h4>
            
            <p className="text-xs text-neutral-400 mb-4 leading-normal">
              Before launching ads on different platforms, create unique trackable links to see exactly which ad campaign brings you the most Telegram members.
            </p>

            <div className="space-y-3 text-xs text-neutral-300">
              {/* Base URL */}
              <div>
                <label className="block text-neutral-500 font-medium mb-1">Your Live Landing Page Domain</label>
                <input 
                  type="text" 
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                  placeholder="https://goldmastersignals.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white font-mono text-[11px] focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Source */}
              <div>
                <label className="block text-neutral-500 font-medium mb-1">UTM Campaign Source (Where users see the ad)</label>
                <select 
                  value={utmSource}
                  onChange={(e) => setUtmSource(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="facebook">Facebook Ads</option>
                  <option value="instagram">Instagram Story/Bio</option>
                  <option value="google">Google PPC Search</option>
                  <option value="telegram_ad">Telegram Native Ad</option>
                  <option value="tiktok_bio">TikTok Profile</option>
                  <option value="youtube_desc">YouTube Video link</option>
                </select>
              </div>

              {/* Campaign Medium */}
              <div>
                <label className="block text-neutral-500 font-medium mb-1">UTM Medium (Marketing style)</label>
                <input 
                  type="text" 
                  value={utmMedium}
                  onChange={(e) => setUtmMedium(e.target.value)}
                  placeholder="cpc, organic, native, story"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white font-mono text-[11px] focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Campaign Name */}
              <div>
                <label className="block text-neutral-500 font-medium mb-1">UTM Campaign Name (Specific event)</label>
                <input 
                  type="text" 
                  value={utmCampaign}
                  onChange={(e) => setUtmCampaign(e.target.value)}
                  placeholder="conversion_may_2026"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white font-mono text-[11px] focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Generated Result Container */}
              <div className="pt-3 border-t border-neutral-800 space-y-2">
                <span className="text-[10px] text-amber-500 block uppercase font-bold tracking-wider">YOUR TRACKABLE TARGET LINK</span>
                <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-850 break-words font-mono text-[10px] text-neutral-300 select-all max-h-[85px] overflow-y-auto">
                  {generatedUrl}
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(generatedUrl, 'utm')}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-xs"
                >
                  {copiedSection === 'utm' ? (
                    <>
                      <Check size={14} /> Link Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Campaign link
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-4 text-[11px] text-neutral-400 flex items-start gap-2.5">
            <Info size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Tip:</strong> Always look at your Telegram Channel stats dashboard &rarr; "Invites" tab. You can create different join-links for separate ads to see exactly how many users stay inside the channel!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
