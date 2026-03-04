import React, { useMemo, useState, useEffect } from 'react';
import { bourdainTribute, itinerary, tipBank, travelers } from './data/tripData';
import { HeroSection } from './components/sections/HeroSection';
import { TravelersSection } from './components/sections/TravelersSection';
import { HighlightsSection } from './components/sections/HighlightsSection';
import { ItinerarySection } from './components/sections/ItinerarySection';
import { PackingSection } from './components/sections/PackingSection';
import { BourdainSection } from './components/sections/BourdainSection';
import { ClosingSection } from './components/sections/ClosingSection';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeDay, setActiveDay] = useState(0);
  const [packingList, setPackingList] = useState('');
  const [isGeneratingPacking, setIsGeneratingPacking] = useState(false);
  const [dailyTips, setDailyTips] = useState({});
  const [loadingTipDay, setLoadingTipDay] = useState(null);

  const tripDate = useMemo(() => new Date('2026-08-22T00:00:00').getTime(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = tripDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tripDate]);

  const handleGenerateTip = async (index, day) => {
    setLoadingTipDay(index);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setDailyTips((prev) => ({
      ...prev,
      [index]: tipBank[day.title] || 'Curtam o dia com calma e deixem espaço para surpresas boas no caminho.',
    }));
    setLoadingTipDay(null);
  };

  const handleGeneratePackingList = async () => {
    setIsGeneratingPacking(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setPackingList(`- Roupas em camadas: segunda pele, fleece, corta-vento e casaco mais quente
- Camisetas respiráveis e calças confortáveis para trekking
- Bota ou tênis de trilha já amaciado
- Meias reforçadas e extras
- Boné, gorro e luvas leves
- Óculos de sol e protetor solar
- Mochila de ataque para os dias de trilha
- Garrafa de água ou sistema de hidratação
- Remédios pessoais e itens para altitude
- Jaqueta impermeável
- Roupa mais leve para Huacachina e Lima
- Power bank, documentos e seguro viagem
- Protetor labial e hidratante
- Lanches práticos para deslocamentos`);
    setIsGeneratingPacking(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSection timeLeft={timeLeft} />

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <TravelersSection travelers={travelers} />
        <HighlightsSection />
        <ItinerarySection
          itinerary={itinerary}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          dailyTips={dailyTips}
          loadingTipDay={loadingTipDay}
          onGenerateTip={handleGenerateTip}
        />
        <PackingSection
          packingList={packingList}
          isGeneratingPacking={isGeneratingPacking}
          onGeneratePackingList={handleGeneratePackingList}
        />
        <BourdainSection bourdainTribute={bourdainTribute} />
        <ClosingSection />
      </main>
    </div>
  );
}
