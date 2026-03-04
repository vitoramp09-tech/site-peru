import React from 'react';
import { Card } from '@/components/ui/card';

export function ClosingSection() {
  return (
    <section className="mt-16">
      <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Fechamento</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Uma viagem para lembrar por muitos anos</h2>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-300">
              Não é só um roteiro, é uma travessia entre cidades históricas, montanhas, desertos, sabores e encontros. Um site para guardar expectativas agora, e memórias depois.
            </p>
          </div>
          <div className="bg-white/5 p-4 md:p-6">
            <img
              src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&w=1400&q=80"
              alt="Paisagem montanhosa ao entardecer"
              className="h-full min-h-[320px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
