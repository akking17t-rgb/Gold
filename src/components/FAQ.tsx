import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is the Telegram group really 100% free?",
    answer: "Yes, our main VIP Channel containing XAUUSD entry signals, target updates, and educational charts is 100% free with no monthly subscriptions. We believe in building a transparent community where members trade side-by-side using professional logic rather than charging insane upfront indicator fees."
  },
  {
    question: "How many Gold signals do you send daily?",
    answer: "On average, we send 1 to 3 highly vetted signals per day. We focus entirely on high-probability setups during London and New York session opens, prioritizing quality over quantity. If there is no pristine setup, we do not force trades to keep your capital safe."
  },
  {
    question: "What minimum balance and leverage do I need?",
    answer: "You can start with any balance from $100 to $10,000+. We recommend using a broker that offers at least 1:200 to 1:500 leverage specifically on spot metals (XAUUSD). Always practice responsible risk management: start with 0.01 lot per $100 or $200 of account equity."
  },
  {
    question: "How do I copy your signals correctly?",
    answer: "Once joined, you will receive notifications explaining: 1) Asset Pair (XAUUSD), 2) Entry range (e.g. 2350 - 2351), 3) Action (BUY/SELL), 4) Stop Loss (SL), and 5) Take Profit levels (TP1, TP2, TP3). Simply input these coordinates into MetaTrader 4/5 or cTrader to match our entries."
  },
  {
    question: "What is your average monthly performance range?",
    answer: "Historically, the XAUUSD MASTER community captures between 1,200 to 2,500 net pips every month with an average win rate hovering around 83-87%. This targets consistent account growth while maintaining low drawdown limits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 md:p-8 backdrop-blur" id="faq-section">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          COMMON QUESTIONS
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-neutral-400 text-sm mt-2">
          Everything beginners and seasoned gold traders want to know before diving into our calls.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border-b border-neutral-800 last:border-b-0 pb-4 last:pb-0"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left flex justify-between items-center py-3 text-white hover:text-amber-400 transition-colors focus:outline-none"
              >
                <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                <span className="p-1.5 bg-neutral-800 rounded-lg text-neutral-400 shrink-0">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed pt-1 pb-3 pl-1">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
