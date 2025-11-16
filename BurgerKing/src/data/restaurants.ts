export type OpeningHours = {
  open: string;   // "10:30"
  close: string;  // "23:00"
};

export type Restaurant = {
  id: number;
  name: string;
  street: string;
  postalCode: string;
  city: string;
  isOpenNow: boolean;
  openingHours: OpeningHours;
  latitude: number;
  longitude: number;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Burger King",
    street: "Leopoldlaan",
    postalCode: "1930",
    city: "Zaventem",
    isOpenNow: false,
    openingHours: { open: "08:00", close: "00:00" },
    latitude: 50.883,
    longitude: 4.472,
  },
  {
    id: 2,
    name: "Burger King",
    street: "Boulevard Michel Debauque 12",
    postalCode: "7100",
    city: "La Louvière",
    isOpenNow: true,
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
    isOpenNow: true,
    openingHours: { open: "10:30", close: "23:00" },
    latitude: 50.408,
    longitude: 4.138,
  },
];
