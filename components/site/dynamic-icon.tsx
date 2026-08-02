import {
  Home,
  UtensilsCrossed,
  Sofa,
  BedDouble,
  Briefcase,
  Store,
  Armchair,
  PenTool,
  Ruler,
  Hammer,
  PackageCheck,
  HandHeart,
  Layers,
  Leaf,
  Receipt,
  Clock,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  kitchen: UtensilsCrossed,
  living: Sofa,
  bed: BedDouble,
  office: Briefcase,
  commercial: Store,
  sofa: Armchair,
  consultation: HandHeart,
  design: PenTool,
  execution: Hammer,
  handover: PackageCheck,
  layers: Layers,
  hammer: Hammer,
  leaf: Leaf,
  receipt: Receipt,
  clock: Clock,
  shield: ShieldCheck,
  ruler: Ruler,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Home;
  return <Icon className={className} aria-hidden />;
}
