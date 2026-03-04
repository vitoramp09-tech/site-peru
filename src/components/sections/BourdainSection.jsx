import React from 'react';
import { Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function BourdainSection({ bourdainTribute }) {
  return (
    <section className="mt-16">
      <Card className="overflow-hidden rounded-[2rem] border-amber-300/20 bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 text-white">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Bourdain Tribute</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Inspirados no legado para viver novos sabores</h2>
              <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
                Uma sessão dedicada aos restaurantes e experiências culinárias que queremos viver no Peru — com destaque para lugares ligados ao olhar de Anthony Bourdain e seu jeito de explorar culturas pela comida.
              </p>
            </div>
            <Badge className="rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-amber-200">
              <Utensils className="mr-2 h-4 w-4" />
              Sabores, histórias e rua
            </Badge>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {bourdainTribute.map((item) => (
              <div key={item.place} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-white/10 text-neutral-200">{item.city}</Badge>
                  <Badge className="rounded-full bg-emerald-500/20 text-emerald-200">{item.type}</Badge>
                  {item.bourdainSpot && (
                    <Badge className="rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-200">
                      Lugar citado por Bourdain
                    </Badge>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-bold">{item.place}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
