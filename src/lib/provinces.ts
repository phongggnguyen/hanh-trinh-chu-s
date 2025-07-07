import { type Province } from './types';

// NOTE: This is a simplified list of provinces for demonstration purposes.
// The SVG paths are illustrative and not geographically perfect.
export const PROVINCES: Province[] = [
  {
    id: 'ha-noi',
    name: 'Hà Nội',
    path: 'M454.5 178.5L453.5 179.5L452.5 181.5L452 184L453 186.5L454.5 187.5L458 188.5L460 186.5L461.5 184.5L461.5 181.5L459.5 179.5L454.5 178.5Z',
    neighbors: ['vinh-phuc', 'thai-nguyen', 'bac-giang', 'bac-ninh', 'hung-yen', 'ha-nam'],
  },
  {
    id: 'ho-chi-minh',
    name: 'TP. Hồ Chí Minh',
    path: 'M506.5 613.5L504 615.5L503 618.5L504.5 621.5L507.5 623L510.5 621.5L511.5 618.5L510.5 615L506.5 613.5Z',
    neighbors: ['binh-duong', 'dong-nai', 'ba-ria-vung-tau', 'tien-giang', 'long-an', 'tay-ninh'],
  },
  {
    id: 'da-nang',
    name: 'Đà Nẵng',
    path: 'M564.5 401.5L562.5 403.5L562.5 407L564.5 409L567.5 408L568.5 405.5L567.5 402.5L564.5 401.5Z',
    neighbors: ['thua-thien-hue', 'quang-nam'],
  },
  { id: 'vinh-phuc', name: 'Vĩnh Phúc', path: 'M442 174L448 172L452 177L446 180L442 174Z', neighbors: ['ha-noi'] },
  { id: 'thai-nguyen', name: 'Thái Nguyên', path: 'M453 166L460 168L461 175L454 176L453 166Z', neighbors: ['ha-noi'] },
  { id: 'bac-giang', name: 'Bắc Giang', path: 'M464 172L470 174L468 180L462 182L464 172Z', neighbors: ['ha-noi'] },
  { id: 'bac-ninh', name: 'Bắc Ninh', path: 'M464 184L469 185L468 189L463 188L464 184Z', neighbors: ['ha-noi'] },
  { id: 'hung-yen', name: 'Hưng Yên', path: 'M460 190L465 192L463 197L457 195L460 190Z', neighbors: ['ha-noi'] },
  { id: 'ha-nam', name: 'Hà Nam', path: 'M448 191L454 190L456 196L450 198L448 191Z', neighbors: ['ha-noi'] },
  { id: 'binh-duong', name: 'Bình Dương', path: 'M502 602L508 604L507 611L501 609L502 602Z', neighbors: ['ho-chi-minh'] },
  { id: 'dong-nai', name: 'Đồng Nai', path: 'M511 605L518 608L516 615L510 613L511 605Z', neighbors: ['ho-chi-minh'] },
  { id: 'ba-ria-vung-tau', name: 'Bà Rịa - Vũng Tàu', path: 'M518 617L525 620L523 627L516 624L518 617Z', neighbors: ['ho-chi-minh'] },
  { id: 'tien-giang', name: 'Tiền Giang', path: 'M495 625L502 627L500 634L493 631L495 625Z', neighbors: ['ho-chi-minh'] },
  { id: 'long-an', name: 'Long An', path: 'M492 616L498 618L496 625L490 622L492 616Z', neighbors: ['ho-chi-minh'] },
  { id: 'tay-ninh', name: 'Tây Ninh', path: 'M490 606L496 608L494 615L488 612L490 606Z', neighbors: ['ho-chi-minh'] },
  { id: 'thua-thien-hue', name: 'Thừa Thiên Huế', path: 'M545 390L552 392L550 399L543 396L545 390Z', neighbors: ['da-nang'] },
  { id: 'quang-nam', name: 'Quảng Nam', path: 'M555 412L562 414L560 421L553 418L555 412Z', neighbors: ['da-nang'] },
];

export const findProvinceById = (id: string) => PROVINCES.find(p => p.id === id);
