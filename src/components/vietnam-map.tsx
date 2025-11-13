"use client";

import { useGame } from '@/contexts/game-context';
import { PROVINCES } from '@/lib/provinces';
import type { Province } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface VietnamMapProps {
  onProvinceSelect: (province: Province) => void;
}

export function VietnamMap({ onProvinceSelect }: VietnamMapProps) {
  const { state } = useGame();

  const getProvinceStatus = (provinceId: string) => {
    if (state.conquered.has(provinceId)) return 'conquered';
    if (state.unlocked.has(provinceId)) return 'unlocked';
    return 'locked';
  };

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center">
      <TooltipProvider>
        <svg
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[80vh] object-contain"
          aria-label="Bản đồ Việt Nam"
        >
          <defs>
            <filter id="fog" x="0" y="0" width="100%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          
          <g>
            {PROVINCES.map((province) => {
              const status = getProvinceStatus(province.id);
              const isInteractive = status === 'unlocked';

              return (
                <Tooltip key={province.id} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <path
                      d={province.path}
                      onClick={() => isInteractive && onProvinceSelect(province)}
                      className={cn(
                        'stroke-white stroke-2 transition-all duration-300',
                        {
                          'fill-primary/80': status === 'conquered',
                          'fill-accent animate-pulse': status === 'unlocked',
                          'fill-gray-400 opacity-60 filter-[url(#fog)]': status === 'locked',
                          'cursor-pointer hover:fill-accent/80 hover:stroke-yellow-200 transform hover:scale-105': isInteractive,
                          'cursor-not-allowed': status === 'locked',
                        }
                      )}
                      aria-label={province.name}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground border-accent">
                    <p className="font-bold">{province.name}</p>
                    {status === 'conquered' && <p>Đã chinh phục</p>}
                    {status === 'unlocked' && <p>Đã mở khóa - Nhấn để khám phá!</p>}
                    {status === 'locked' && <p>Bị khóa</p>}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </g>
          <text x="830" y="440" className="text-sm fill-gray-600 font-sans">Quần đảo Hoàng Sa</text>
          <text x="730" y="650" className="text-sm fill-gray-600 font-sans">Quần đảo Trường Sa</text>
        </svg>
      </TooltipProvider>
    </div>
  );
}
