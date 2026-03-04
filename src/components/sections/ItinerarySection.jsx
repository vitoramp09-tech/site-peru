import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ItinerarySection({ itinerary, activeDay, setActiveDay, dailyTips, loadingTipDay, onGenerateTip }) {
  return (
    <section className="mt-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Roteiro</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Dias, cidades e experiências</h2>
        </div>
        <Badge className="w-fit rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-amber-200">
          22 de agosto a 07 de setembro
        </Badge>
      </div>

      <div className="space-y-4">
        {itinerary.map((day, index) => {
          const Icon = day.icon;
          const isActive = activeDay === index;

          return (
            <motion.div
              key={day.date + day.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Card
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isActive ? 'border-emerald-400/40 bg-emerald-500/10' : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                }`}
              >
                <CardContent className="p-0">
                  <button className="w-full p-5 text-left md:p-6" onClick={() => setActiveDay(isActive ? -1 : index)}>
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="min-w-[76px] rounded-2xl bg-white/10 px-3 py-3 text-center">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Dia {index + 1}</div>
                        <div className="mt-1 text-lg font-black">{day.date}</div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold md:text-2xl">{day.title}</h3>
                          <Badge className="rounded-full bg-white/10 text-neutral-200">{day.city}</Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-neutral-300 md:text-base">{day.highlight}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full ${isActive ? 'bg-emerald-300 text-emerald-950' : 'bg-white/10 text-neutral-200'}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <ChevronDown className={`hidden h-5 w-5 text-neutral-400 transition-transform md:block ${isActive ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-6">
                          <p className="max-w-3xl leading-7 text-neutral-200">{day.desc}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {day.tags.map((tag) => (
                              <Badge key={tag} className="rounded-full bg-white/10 text-neutral-200">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="mt-6">
                            {!dailyTips[index] && loadingTipDay !== index && (
                              <Button
                                onClick={() => onGenerateTip(index, day)}
                                className="rounded-full bg-emerald-500 text-white hover:bg-emerald-400"
                              >
                                <Sparkles className="mr-2 h-4 w-4" />
                                Ver dica do dia
                              </Button>
                            )}

                            {loadingTipDay === index && (
                              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-200">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Buscando uma dica especial...
                              </div>
                            )}

                            {dailyTips[index] && (
                              <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                                <div className="mb-2 flex items-center gap-2 font-semibold text-amber-200">
                                  <Sparkles className="h-4 w-4" />
                                  Dica do dia
                                </div>
                                <p>{dailyTips[index]}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
