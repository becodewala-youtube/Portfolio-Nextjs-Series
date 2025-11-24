'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-5xl font-bold text-primary">
      {count.toLocaleString()}+
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.label} className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <Counter value={stat.value} duration={2000 + index * 200} />
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
