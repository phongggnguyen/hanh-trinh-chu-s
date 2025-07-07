"use client";

import { useGame } from '@/contexts/game-context';
import { findProvinceById } from '@/lib/provinces';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Award, MapPin } from 'lucide-react';

export function TravelJournal() {
  const { state } = useGame();
  const conqueredProvinces = Array.from(state.conquered).map(id => findProvinceById(id)).filter(Boolean);

  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="p-4">
        {conqueredProvinces.length === 0 ? (
          <div className="text-center text-muted-foreground mt-10">
            <MapPin className="mx-auto h-12 w-12 mb-4" />
            <p>Sổ tay của bạn còn trống.</p>
            <p>Bắt đầu hành trình để sưu tầm tem!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {conqueredProvinces.map(province => (
              province && (
              <Card key={province.id} className="text-center bg-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center gap-2 text-primary">
                    <Award className="w-8 h-8 text-accent" />
                    <span>{province.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Đã chinh phục</p>
                </CardContent>
              </Card>
              )
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
