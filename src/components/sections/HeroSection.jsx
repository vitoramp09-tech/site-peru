import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HeroSection({ timeLeft }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-neutral-950/40 to-neutral-950" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <Badge className="mb-5 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1 text-amber-200">
            Peru Trip 2026
          </Badge>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Uma jornada pelo Peru,
            <span className="block text-amber-300">gastronomia, aventura, história e cultura</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
            Cusco, Trilha Inca, Machu Picchu, Vale Sagrado, Arequipa, Nazca, Huacachina e Lima em uma viagem desenhada para viver o Peru por inteiro.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds },
            ].map((item) => (
              <Card key={item.label} className="rounded-3xl border-white/10 bg-white/10 text-white backdrop-blur-md">
                <CardContent className="p-5 text-center">
                  <div className="text-3xl font-black md:text-4xl">{String(item.value).padStart(2, '0')}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-300">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
