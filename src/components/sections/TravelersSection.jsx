import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function TravelersSection({ travelers }) {
  return (
    <section className="-mt-10 grid gap-6 md:grid-cols-4">
      {travelers.map((person, index) => (
        <motion.div
          key={person.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * index }}
        >
          <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${person.color}`}>
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{person.name}</h3>
              <p className="mt-1 text-sm text-neutral-300">{person.role}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
