import React from 'react';
import { Star, ShieldAlert, BadgeCheck, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  username: string;
  avatarText: string;
  quote: string;
  rating: number;
  result: string;
  isVerified: boolean;
}

const testimonials: Review[] = [
  {
    id: 'rev-1',
    name: 'Mustafa K.',
    username: '@mustafa_fx',
    avatarText: 'M',
    quote: "I've tried 5 different premium Gold channels and most of them just hit stop loss. XAUUSD MASTER has completely changed my consistency. The TP1 is almost always hit 90% of the time, letting me secure partials effortlessly.",
    rating: 5,
    result: '}+$3,420 last month',
    isVerified: true
  },
  {
    id: 'rev-2',
    name: 'Sophia L.',
    username: '@sophia_trades',
    avatarText: 'S',
    quote: "The free charts and educational markups they send along with signals is what sets them apart. They teach you why they're entering the trade. Best free channel out there by far!",
    rating: 5,
    result: '+1,150 pips captured',
    isVerified: true
  },
  {
    id: 'rev-3',
    name: 'Zayn Malik',
    username: '@zayn_gold',
    avatarText: 'Z',
    quote: 'Absolutely incredible. He gave a buy limit call yesterday at 2315 and it hit the exact pip bottom and went up 120 pips. Highly recommended for complete beginners who want quality alerts.',
    rating: 5,
    result: '+$845 in single trade',
    isVerified: true
  },
  {
    id: 'rev-4',
    name: 'Hassan Al-S.',
    username: '@hassan_al_s',
    avatarText: 'H',
    quote: 'Risk to reward ratio is amazing. Usually 1:3 or 1:4. Very professional management and honest admins. If they hit SL, they admit it, unlike other channels that delete failed signals.',
    rating: 5,
    result: '86% verified win-rate',
    isVerified: true
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-6" id="testimonials-section">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          HEAR FROM THE VIP CLUB
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 tracking-tight">
          What Our Live Members Say
        </h3>
        <p className="text-neutral-400 text-sm mt-2">
          Unfiltered feedback and verified performance stats shared voluntarily by our telegram signals community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((review, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            key={review.id}
            className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/10 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-600 text-black flex items-center justify-center font-bold text-sm tracking-wide">
                    {review.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-white">{review.name}</h4>
                      {review.isVerified && (
                        <BadgeCheck size={14} className="text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">{review.username}</span>
                  </div>
                </div>

                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed italic">
                "{review.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-3 border-t border-neutral-800/60 text-xs">
              <span className="text-neutral-500 flex items-center gap-1">
                <MessageSquare size={12} className="text-amber-500/50" /> Community Verified
              </span>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                {review.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
