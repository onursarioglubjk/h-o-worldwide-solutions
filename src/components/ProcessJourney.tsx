import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Network, ShieldCheck, Truck } from 'lucide-react';

export default function ProcessJourney({ t }: { t: any }) {
  const steps = [
    { icon: Lightbulb, ...t.journey.steps[0] },
    { icon: Network, ...t.journey.steps[1] },
    { icon: ShieldCheck, ...t.journey.steps[2] },
    { icon: Truck, ...t.journey.steps[3] },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">{t.journey.title}</h2>
          <p className="text-lg text-slate-600 font-medium">{t.journey.desc}</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full border-4 border-slate-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-indigo-100 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
