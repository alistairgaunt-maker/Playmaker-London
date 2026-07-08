'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const C = {
  black:     '#111111',
  navy:      '#0D2340',
  blue:      '#1A5CA8',
  blueLight: '#4A90D9',
  white:     '#FFFFFF',
  grey:      '#CCCCCC',
  greyDim:   '#888888',
};
const sans = { fontFamily: "'Montserrat', sans-serif" };

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Development', href: '/development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Privacy', href: '/privacy' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-[80px] py-6 flex items-center justify-between"
      style={{
      background:'linear-gradient(to bottom,rgba(17,17,17,0.95)%200%25,rgba(17,17,17,0.75)60%25,rgba(17,17,17,0)100%25)',
      }}
    >
      <Link
        href="/"
        className="text-[15px] font-bold uppercase"
        style={{ ...sans, color: C.white, letterSpacing: '0.1em' }}
      >
        Playmaker London
      </Link>

      <div className="flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase"
              style={{
                ...sans,
                color: isActive ? C.blueLight : C.grey,
                letterSpacing: '0.08em',
                borderBottom: isActive ? `1px solid ${C.blueLight}` : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}