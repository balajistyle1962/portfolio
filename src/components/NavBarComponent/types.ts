export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items: NavItem[];
  scrolled?: boolean;
  onNavigate: (href: string) => void;
  ctaText?: string;
  ctaHref?: string;
}