import React from 'react';
import { motion } from 'motion/react';
import { Truck, Ship, Clock, BarChart, Settings, FastForward } from 'lucide-react';

export default function SourcingNodes({ t }: { t: any }) {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">{t.nodes.title}</h2>
          <p className="text-lg text-slate-600 font-medium">{t.nodes.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Node TR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-indigo-50 text-indigo-700 px-4 py-1 rounded-bl-xl font-bold text-xs uppercase tracking-wider">Fast Track</div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center border-2 border-white shadow-sm">TR</span>
              {t.nodes.tr.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <FastForward className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.tr.features[0]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Truck className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.tr.features[1]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.tr.features[2]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-indigo-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.tr.features[3]}</span>
              </li>
            </ul>
          </motion.div>

          {/* Node CN */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-700 px-4 py-1 rounded-bl-xl font-bold text-xs uppercase tracking-wider">Volume Scale</div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center border-2 border-white shadow-sm">CN</span>
              {t.nodes.cn.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <BarChart className="w-6 h-6 text-slate-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.cn.features[0]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Ship className="w-6 h-6 text-slate-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.cn.features[1]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.cn.features[2]}</span>
              </li>
              <li className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-slate-500 shrink-0" />
                <span className="text-slate-700 font-medium">{t.nodes.cn.features[3]}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
