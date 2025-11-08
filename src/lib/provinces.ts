import { type Province } from './types';

// Danh sách đầy đủ 63 tỉnh thành Việt Nam
// SVG paths được tạo dựa trên vị trí địa lý tương đối
// Tọa độ viewBox: 400 50 250 700 (width x height)

export const PROVINCES: Province[] = [
  // ========== MIỀN BẮC ==========

  // Tây Bắc
  {
    id: 'dien-bien',
    name: 'Điện Biên',
    path: 'M410 100L425 95L435 105L430 118L418 115L410 100Z',
    neighbors: ['lai-chau', 'son-la'],
  },
  {
    id: 'lai-chau',
    name: 'Lai Châu',
    path: 'M430 80L445 75L455 85L450 100L438 95L430 80Z',
    neighbors: ['dien-bien', 'lao-cai', 'son-la'],
  },
  {
    id: 'son-la',
    name: 'Sơn La',
    path: 'M420 120L440 115L450 135L440 150L425 145L420 120Z',
    neighbors: ['dien-bien', 'lai-chau', 'yen-bai', 'hoa-binh', 'phu-tho'],
  },
  {
    id: 'lao-cai',
    name: 'Lào Cai',
    path: 'M450 70L470 65L480 80L475 95L460 90L450 70Z',
    neighbors: ['lai-chau', 'ha-giang', 'yen-bai'],
  },
  {
    id: 'yen-bai',
    name: 'Yên Bái',
    path: 'M455 100L475 95L485 115L475 130L460 125L455 100Z',
    neighbors: ['lao-cai', 'son-la', 'phu-tho', 'tuyen-quang'],
  },

  // Đông Bắc
  {
    id: 'ha-giang',
    name: 'Hà Giang',
    path: 'M480 55L500 50L515 65L510 85L495 80L480 55Z',
    neighbors: ['lao-cai', 'cao-bang', 'tuyen-quang'],
  },
  {
    id: 'cao-bang',
    name: 'Cao Bằng',
    path: 'M515 60L540 55L555 75L545 95L530 90L515 60Z',
    neighbors: ['ha-giang', 'bac-kan', 'lang-son', 'quang-ninh'],
  },
  {
    id: 'bac-kan',
    name: 'Bắc Kạn',
    path: 'M515 95L535 90L545 110L535 125L520 120L515 95Z',
    neighbors: ['cao-bang', 'tuyen-quang', 'thai-nguyen', 'lang-son'],
  },
  {
    id: 'tuyen-quang',
    name: 'Tuyên Quang',
    path: 'M490 105L510 100L520 120L510 135L495 130L490 105Z',
    neighbors: ['ha-giang', 'cao-bang', 'bac-kan', 'thai-nguyen', 'yen-bai', 'phu-tho'],
  },
  {
    id: 'lang-son',
    name: 'Lạng Sơn',
    path: 'M545 85L570 80L580 100L570 120L555 115L545 85Z',
    neighbors: ['cao-bang', 'bac-kan', 'thai-nguyen', 'bac-giang', 'quang-ninh'],
  },
  {
    id: 'thai-nguyen',
    name: 'Thái Nguyên',
    path: 'M520 125L540 120L550 140L540 155L525 150L520 125Z',
    neighbors: ['bac-kan', 'lang-son', 'bac-giang', 'bac-ninh', 'ha-noi', 'vinh-phuc', 'phu-tho', 'tuyen-quang'],
  },
  {
    id: 'quang-ninh',
    name: 'Quảng Ninh',
    path: 'M570 115L595 110L605 135L595 155L575 145L570 115Z',
    neighbors: ['cao-bang', 'lang-son', 'bac-giang', 'hai-duong', 'hai-phong'],
  },
  {
    id: 'bac-giang',
    name: 'Bắc Giang',
    path: 'M545 145L565 140L575 160L565 175L550 170L545 145Z',
    neighbors: ['lang-son', 'quang-ninh', 'hai-duong', 'bac-ninh', 'thai-nguyen'],
  },
  {
    id: 'bac-ninh',
    name: 'Bắc Ninh',
    path: 'M540 170L555 165L565 180L555 195L545 190L540 170Z',
    neighbors: ['thai-nguyen', 'bac-giang', 'hai-duong', 'hung-yen', 'ha-noi'],
  },

  // Đồng bằng Sông Hồng
  {
    id: 'ha-noi',
    name: 'Hà Nội',
    path: 'M520 180L540 175L550 195L540 210L525 205L520 180Z',
    neighbors: ['thai-nguyen', 'bac-ninh', 'bac-giang', 'hung-yen', 'ha-nam', 'hoa-binh', 'vinh-phuc'],
  },
  {
    id: 'vinh-phuc',
    name: 'Vĩnh Phúc',
    path: 'M505 160L525 155L535 175L525 190L510 185L505 160Z',
    neighbors: ['phu-tho', 'thai-nguyen', 'ha-noi', 'hoa-binh'],
  },
  {
    id: 'phu-tho',
    name: 'Phú Thọ',
    path: 'M480 140L500 135L510 155L500 170L485 165L480 140Z',
    neighbors: ['son-la', 'yen-bai', 'tuyen-quang', 'thai-nguyen', 'vinh-phuc', 'hoa-binh'],
  },
  {
    id: 'hoa-binh',
    name: 'Hòa Bình',
    path: 'M490 175L510 170L520 190L510 205L495 200L490 175Z',
    neighbors: ['son-la', 'phu-tho', 'ha-noi', 'ha-nam', 'ninh-binh', 'thanh-hoa'],
  },
  {
    id: 'hai-duong',
    name: 'Hải Dương',
    path: 'M565 170L585 165L595 185L585 200L570 195L565 170Z',
    neighbors: ['quang-ninh', 'bac-giang', 'bac-ninh', 'hung-yen', 'hai-phong', 'thai-binh'],
  },
  {
    id: 'hai-phong',
    name: 'Hải Phòng',
    path: 'M590 190L610 185L620 210L610 225L595 220L590 190Z',
    neighbors: ['quang-ninh', 'hai-duong', 'thai-binh'],
  },
  {
    id: 'hung-yen',
    name: 'Hưng Yên',
    path: 'M545 195L565 190L575 210L565 225L550 220L545 195Z',
    neighbors: ['bac-ninh', 'hai-duong', 'thai-binh', 'ha-nam', 'ha-noi'],
  },
  {
    id: 'thai-binh',
    name: 'Thái Bình',
    path: 'M570 210L590 205L600 230L590 245L575 240L570 210Z',
    neighbors: ['hai-duong', 'hai-phong', 'hung-yen', 'ha-nam', 'nam-dinh'],
  },
  {
    id: 'ha-nam',
    name: 'Hà Nam',
    path: 'M530 210L550 205L560 225L550 240L535 235L530 210Z',
    neighbors: ['ha-noi', 'hung-yen', 'thai-binh', 'nam-dinh', 'ninh-binh', 'hoa-binh'],
  },
  {
    id: 'nam-dinh',
    name: 'Nam Định',
    path: 'M555 235L575 230L585 255L575 270L560 265L555 235Z',
    neighbors: ['thai-binh', 'ha-nam', 'ninh-binh'],
  },
  {
    id: 'ninh-binh',
    name: 'Ninh Bình',
    path: 'M530 245L550 240L560 265L550 280L535 275L530 245Z',
    neighbors: ['hoa-binh', 'ha-nam', 'nam-dinh', 'thanh-hoa'],
  },

  // ========== MIỀN TRUNG ==========

  // Bắc Trung Bộ
  {
    id: 'thanh-hoa',
    name: 'Thanh Hóa',
    path: 'M510 270L540 265L550 300L535 320L515 310L510 270Z',
    neighbors: ['hoa-binh', 'ninh-binh', 'nghe-an'],
  },
  {
    id: 'nghe-an',
    name: 'Nghệ An',
    path: 'M520 315L545 310L560 350L545 370L525 360L520 315Z',
    neighbors: ['thanh-hoa', 'ha-tinh'],
  },
  {
    id: 'ha-tinh',
    name: 'Hà Tĩnh',
    path: 'M535 365L555 360L565 385L555 400L540 395L535 365Z',
    neighbors: ['nghe-an', 'quang-binh'],
  },
  {
    id: 'quang-binh',
    name: 'Quảng Bình',
    path: 'M545 395L565 390L575 415L565 430L550 425L545 395Z',
    neighbors: ['ha-tinh', 'quang-tri'],
  },
  {
    id: 'quang-tri',
    name: 'Quảng Trị',
    path: 'M555 425L575 420L585 445L575 460L560 455L555 425Z',
    neighbors: ['quang-binh', 'thua-thien-hue'],
  },
  {
    id: 'thua-thien-hue',
    name: 'Thừa Thiên Huế',
    path: 'M565 455L585 450L595 475L585 490L570 485L565 455Z',
    neighbors: ['quang-tri', 'da-nang', 'quang-nam'],
  },
  {
    id: 'da-nang',
    name: 'Đà Nẵng',
    path: 'M585 485L600 480L605 495L600 505L590 500L585 485Z',
    neighbors: ['thua-thien-hue', 'quang-nam'],
  },
  {
    id: 'quang-nam',
    name: 'Quảng Nam',
    path: 'M570 495L595 490L605 520L590 540L570 530L570 495Z',
    neighbors: ['thua-thien-hue', 'da-nang', 'quang-ngai', 'kon-tum'],
  },
  {
    id: 'quang-ngai',
    name: 'Quảng Ngãi',
    path: 'M575 535L595 530L605 560L595 575L580 570L575 535Z',
    neighbors: ['quang-nam', 'binh-dinh', 'gia-lai', 'kon-tum'],
  },

  // Tây Nguyên
  {
    id: 'kon-tum',
    name: 'Kon Tum',
    path: 'M555 515L575 510L585 540L575 555L560 550L555 515Z',
    neighbors: ['quang-nam', 'quang-ngai', 'gia-lai'],
  },
  {
    id: 'gia-lai',
    name: 'Gia Lai',
    path: 'M555 555L575 550L585 585L570 605L555 595L555 555Z',
    neighbors: ['kon-tum', 'quang-ngai', 'binh-dinh', 'phu-yen', 'dak-lak'],
  },
  {
    id: 'dak-lak',
    name: 'Đắk Lắk',
    path: 'M545 600L570 595L580 630L565 650L545 640L545 600Z',
    neighbors: ['gia-lai', 'phu-yen', 'khanh-hoa', 'lam-dong', 'dak-nong'],
  },
  {
    id: 'dak-nong',
    name: 'Đắk Nông',
    path: 'M535 645L560 640L570 670L555 685L540 680L535 645Z',
    neighbors: ['dak-lak', 'lam-dong', 'binh-phuoc'],
  },
  {
    id: 'lam-dong',
    name: 'Lâm Đồng',
    path: 'M545 680L570 675L580 710L565 730L545 720L545 680Z',
    neighbors: ['dak-lak', 'dak-nong', 'khanh-hoa', 'ninh-thuan', 'binh-thuan', 'dong-nai', 'binh-phuoc'],
  },

  // Nam Trung Bộ
  {
    id: 'binh-dinh',
    name: 'Bình Định',
    path: 'M585 570L605 565L615 595L605 610L590 605L585 570Z',
    neighbors: ['quang-ngai', 'gia-lai', 'phu-yen'],
  },
  {
    id: 'phu-yen',
    name: 'Phú Yên',
    path: 'M580 610L600 605L610 635L600 650L585 645L580 610Z',
    neighbors: ['binh-dinh', 'gia-lai', 'dak-lak', 'khanh-hoa'],
  },
  {
    id: 'khanh-hoa',
    name: 'Khánh Hòa',
    path: 'M575 650L595 645L605 680L595 700L580 695L575 650Z',
    neighbors: ['phu-yen', 'dak-lak', 'lam-dong', 'ninh-thuan'],
  },
  {
    id: 'ninh-thuan',
    name: 'Ninh Thuận',
    path: 'M570 700L590 695L600 725L590 740L575 735L570 700Z',
    neighbors: ['khanh-hoa', 'lam-dong', 'binh-thuan'],
  },
  {
    id: 'binh-thuan',
    name: 'Bình Thuận',
    path: 'M565 735L585 730L595 760L580 775L565 770L565 735Z',
    neighbors: ['ninh-thuan', 'lam-dong', 'dong-nai', 'ba-ria-vung-tau'],
  },

  // ========== MIỀN NAM ==========

  // Đông Nam Bộ
  {
    id: 'binh-phuoc',
    name: 'Bình Phước',
    path: 'M525 685L545 680L555 710L545 725L530 720L525 685Z',
    neighbors: ['dak-nong', 'lam-dong', 'dong-nai', 'binh-duong', 'tay-ninh'],
  },
  {
    id: 'binh-duong',
    name: 'Bình Dương',
    path: 'M515 720L535 715L545 740L535 755L520 750L515 720Z',
    neighbors: ['binh-phuoc', 'dong-nai', 'ho-chi-minh', 'tay-ninh', 'long-an'],
  },
  {
    id: 'dong-nai',
    name: 'Đồng Nai',
    path: 'M540 740L560 735L570 765L560 780L545 775L540 740Z',
    neighbors: ['binh-phuoc', 'lam-dong', 'binh-thuan', 'ba-ria-vung-tau', 'ho-chi-minh', 'binh-duong'],
  },
  {
    id: 'ba-ria-vung-tau',
    name: 'Bà Rịa - Vũng Tàu',
    path: 'M560 770L575 765L585 790L575 805L560 800L560 770Z',
    neighbors: ['binh-thuan', 'dong-nai', 'ho-chi-minh'],
  },
  {
    id: 'ho-chi-minh',
    name: 'TP. Hồ Chí Minh',
    path: 'M530 755L550 750L560 775L550 790L535 785L530 755Z',
    neighbors: ['binh-duong', 'dong-nai', 'ba-ria-vung-tau', 'long-an', 'tien-giang'],
  },
  {
    id: 'tay-ninh',
    name: 'Tây Ninh',
    path: 'M500 715L520 710L530 735L520 750L505 745L500 715Z',
    neighbors: ['binh-phuoc', 'binh-duong', 'long-an'],
  },
  {
    id: 'long-an',
    name: 'Long An',
    path: 'M510 750L530 745L540 770L530 785L515 780L510 750Z',
    neighbors: ['tay-ninh', 'binh-duong', 'ho-chi-minh', 'tien-giang', 'dong-thap'],
  },
  {
    id: 'tien-giang',
    name: 'Tiền Giang',
    path: 'M530 780L550 775L560 800L550 815L535 810L530 780Z',
    neighbors: ['long-an', 'ho-chi-minh', 'ben-tre', 'dong-thap', 'vinh-long'],
  },
  {
    id: 'ben-tre',
    name: 'Bến Tre',
    path: 'M545 810L565 805L575 830L565 845L550 840L545 810Z',
    neighbors: ['tien-giang', 'tra-vinh', 'vinh-long'],
  },
  {
    id: 'dong-thap',
    name: 'Đồng Tháp',
    path: 'M505 780L525 775L535 800L525 815L510 810L505 780Z',
    neighbors: ['long-an', 'tien-giang', 'vinh-long', 'an-giang'],
  },
  {
    id: 'vinh-long',
    name: 'Vĩnh Long',
    path: 'M525 810L545 805L555 830L545 845L530 840L525 810Z',
    neighbors: ['dong-thap', 'tien-giang', 'ben-tre', 'tra-vinh', 'can-tho', 'an-giang'],
  },
  {
    id: 'tra-vinh',
    name: 'Trà Vinh',
    path: 'M545 840L565 835L575 860L565 875L550 870L545 840Z',
    neighbors: ['ben-tre', 'vinh-long', 'soc-trang'],
  },
  {
    id: 'an-giang',
    name: 'An Giang',
    path: 'M490 805L510 800L520 825L510 840L495 835L490 805Z',
    neighbors: ['dong-thap', 'vinh-long', 'kien-giang', 'can-tho'],
  },
  {
    id: 'kien-giang',
    name: 'Kiên Giang',
    path: 'M475 830L495 825L505 855L495 875L480 870L475 830Z',
    neighbors: ['an-giang', 'can-tho', 'hau-giang', 'bac-lieu', 'ca-mau'],
  },
  {
    id: 'can-tho',
    name: 'Cần Thơ',
    path: 'M510 835L530 830L540 855L530 870L515 865L510 835Z',
    neighbors: ['an-giang', 'vinh-long', 'hau-giang', 'kien-giang'],
  },
  {
    id: 'hau-giang',
    name: 'Hậu Giang',
    path: 'M520 865L540 860L550 885L540 900L525 895L520 865Z',
    neighbors: ['can-tho', 'vinh-long', 'soc-trang', 'bac-lieu', 'kien-giang'],
  },
  {
    id: 'soc-trang',
    name: 'Sóc Trăng',
    path: 'M540 885L560 880L570 905L560 920L545 915L540 885Z',
    neighbors: ['tra-vinh', 'hau-giang', 'bac-lieu'],
  },
  {
    id: 'bac-lieu',
    name: 'Bạc Liêu',
    path: 'M520 900L540 895L550 920L540 935L525 930L520 900Z',
    neighbors: ['hau-giang', 'soc-trang', 'ca-mau', 'kien-giang'],
  },
  {
    id: 'ca-mau',
    name: 'Cà Mau',
    path: 'M510 930L530 925L540 955L530 970L515 965L510 930Z',
    neighbors: ['bac-lieu', 'kien-giang'],
  },
];

export const findProvinceById = (id: string) => PROVINCES.find(p => p.id === id);
