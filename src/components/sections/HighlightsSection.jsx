import React from 'react';
import { Sparkles, Mountain, Landmark, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  { icon: Utensils, title: 'Gastronomia', text: 'Da alta cozinha de Lima aos sabores tradicionais do sul peruano.' },
  { icon: Mountain, title: 'Aventura', text: 'Trilha Inca, altitude, lagoas andinas, deserto e sandboard.' },
  { icon: Landmark, title: 'História', text: 'Mundo inca, cidades coloniais e mistérios arqueológicos.' },
  { icon: Sparkles, title: 'Cultura', text: 'Feiras, vilarejos, artesanato, arquitetura e cotidiano local.' },
];

export function HighlightsSection() {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-4">
      {highlights.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="rounded-3xl border-white/10 bg-neutral-900 text-white">
            <CardContent className="p-6">
              <Icon className="h-8 w-8 text-amber-300" />
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{item.text}</p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
