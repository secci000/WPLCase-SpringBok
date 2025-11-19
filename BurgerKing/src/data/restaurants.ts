export type OpeningHours = {
  open: string;
  close: string;
};

export type DayOpening = {
  dayShort: string;
  hours: string;
  isToday?: boolean;
};

type RestaurantBase = {
  id: number;
  name: string;
  street: string;
  postalCode: string;
  city: string;
  openingHours: OpeningHours;
  latitude: number;
  longitude: number;

  weeklySchedule?: DayOpening[];
  description?: string;
  paymentMethods?: string[];
  tags?: string[];
};

export type Restaurant = RestaurantBase & {
  isOpenNow: boolean;
};


function isOpenNow(openingHours: OpeningHours): boolean {
  const now = new Date();
  const [openH, openM] = openingHours.open.split(":").map(Number);
  const [closeH, closeM] = openingHours.close.split(":").map(Number);

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  if (closeMinutes < openMinutes) {
    return nowMinutes >= openMinutes || nowMinutes <= closeMinutes;
  }

  return nowMinutes >= openMinutes && nowMinutes <= closeMinutes;
}

const rawRestaurants: RestaurantBase[] = [
  {
    id: 1,
    name: "Burger King",
    street: "Leopoldlaan",
    postalCode: "1930",
    city: "Zaventem",
    openingHours: { open: "08:00", close: "21:00" },
    latitude: 50.883,
    longitude: 4.472,
    weeklySchedule: [
      { dayShort: "zo.", hours: "08:00 - 21:00" },
      { dayShort: "ma.", hours: "08:00 - 21:00" },
      { dayShort: "di.", hours: "08:00 - 21:00" },
      { dayShort: "wo.", hours: "08:00 - 21:00" },
      { dayShort: "do.", hours: "08:00 - 21:00" },
      { dayShort: "vr.", hours: "08:00 - 21:00" },
      { dayShort: "za.", hours: "08:00 - 21:00" },
    ],
    description:
      "Créé en 1954 à Miami, BURGER KING® accueille aujourd'hui 11 millions de clients par jour dans le monde grâce à un concept unique : de la viande de boeuf grillée à la flamme, des ingrédients frais et de délicieux burgers préparés selon les goûts du client.",
    paymentMethods: [
      "American Express",
      "CREDIT",
      "Debit",
      "MasterCard",
      "NFC",
      "Visa",
    ],
    tags: ["burger", "drive", "fastfood", "snacks", "Whopper"],
  },
  {
    id: 2,
    name: "Burger King",
    street: "Boulevard Michel Debauque 12",
    postalCode: "7100",
    city: "La Louvière",
    openingHours: { open: "10:30", close: "00:00" },
    latitude: 50.473,
    longitude: 4.191,
  },
  {
    id: 3,
    name: "Burger King",
    street: "Route de Charleroi 195",
    postalCode: "7134",
    city: "Binche",
    openingHours: { open: "10:30", close: "23:00" },
    latitude: 50.408,
    longitude: 4.138,
  },
];

export const restaurants: Restaurant[] = rawRestaurants.map((r) => ({
  ...r,
  isOpenNow: isOpenNow(r.openingHours),
}));
