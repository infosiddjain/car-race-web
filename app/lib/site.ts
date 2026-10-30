/** Site-wide info. Keep in sync with CarRaceGame/src/config.ts. */
export const site = {
  name: "Nitro Rush",
  tagline: "Highway racing, done right.",
  description:
    "Nitro Rush is a fast top-down highway racer for iPhone and Android. Weave through traffic, hit nitro and beat the AI crew. No ads, no tracking, works offline.",
  version: "1.0.1",
  supportEmail: "infosiddjain@gmail.com",
  developer: "Siddharth Jain",
  privacyLastUpdated: "29 October 2026",
  copyrightYear: 2026,
  // Add the store links when the app is live. Empty means "Coming soon".
  appStoreUrl: "",
  playStoreUrl: "",
};

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#cars", label: "Cars" },
  { href: "/#how-to-play", label: "How to play" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export type Car = {
  name: string;
  tagline: string;
  body: string;
  color: string;
  stats: { speed: number; accel: number; handling: number; nitro: number };
};

// Same roster and stat formula as CarRaceGame/src/game/cars.ts.
const raw = [
  { name: "Vortex GT", tagline: "Balanced street weapon", body: "GT", topSpeed: 42, accel: 10, handling: 11, nitroTank: 1, color: "#ff5a1f" },
  { name: "Iron Brute", tagline: "Raw V8 torque, heavy steering", body: "Muscle", topSpeed: 44, accel: 12, handling: 8.5, nitroTank: 1.15, color: "#e53935" },
  { name: "Phantom X", tagline: "Highest top speed on the grid", body: "Hypercar", topSpeed: 47, accel: 8.5, handling: 9.5, nitroTank: 0.9, color: "#3b9eff" },
  { name: "Dust Runner", tagline: "Agile and quick off the line", body: "Rally", topSpeed: 40, accel: 11.5, handling: 13.5, nitroTank: 1.1, color: "#2ed47a" },
  { name: "Apex F", tagline: "Open-wheel monster, tiny nitro", body: "Open-wheel", topSpeed: 45.5, accel: 10.5, handling: 12.5, nitroTank: 0.75, color: "#ffc233" },
];

const clamp = (v: number) => Math.max(0.05, Math.min(1, v));

export const cars: Car[] = raw.map((c) => ({
  name: c.name,
  tagline: c.tagline,
  body: c.body,
  color: c.color,
  stats: {
    speed: clamp((c.topSpeed - 36) / 12),
    accel: clamp((c.accel - 7) / 6),
    handling: clamp((c.handling - 7) / 7),
    nitro: clamp((c.nitroTank - 0.6) / 0.6),
  },
}));
