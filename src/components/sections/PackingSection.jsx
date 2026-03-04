import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PackingSection({ packingList, isGeneratingPacking, onGeneratePackingList }) {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-3xl border-amber-300/20 bg-amber-400/10 text-white">
        <CardContent className="p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Bagagem</p>
          <h3 className="mt-3 text-3xl font-black">Lista inteligente para microclimas</h3>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-200">
            Da altitude de Cusco ao deserto de Huacachina, este roteiro passa por cenários muito diferentes. Gere uma sugestão rápida para montar a mala com mais segurança.
          </p>

          {!packingList ? (
            <Button
              onClick={onGeneratePackingList}
              disabled={isGeneratingPacking}
              className="mt-6 rounded-full bg-amber-500 text-neutral-950 hover:bg-amber-400"
            >
              {isGeneratingPacking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {isGeneratingPacking ? 'Gerando lista...' : 'Gerar lista de bagagem'}
            </Button>
          ) : (
            <div className="mt-6 whitespace-pre-wrap rounded-2xl bg-black/20 p-5 text-sm leading-7 text-neutral-100">{packingList}</div>
          )}
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 text-white">
        <div className="h-full">
          <img
            src="https://images.unsplash.com/photo-1520613536365-9f32f18b7d44?auto=format&fit=crop&w=1200&q=80"
            alt="Paisagem andina do Peru"
            className="h-64 w-full object-cover"
          />
          <CardContent className="p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Essência da viagem</p>
            <h3 className="mt-3 text-2xl font-black">Uma rota pensada para sentir o Peru</h3>
            <p className="mt-4 leading-7 text-neutral-300">
              O roteiro combina o peso histórico de Cusco, a grandiosidade da Trilha Inca, a autenticidade do Vale Sagrado, a sofisticação de Arequipa, o mistério de Nazca, a aventura em Huacachina e o fechamento gastronômico em Lima.
            </p>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
