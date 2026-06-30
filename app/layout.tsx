import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Playmaker London — Development done seriously.',
  description:
    'Playmaker London works with ambitious footballers aged 13 to 23 through structured individual assessment and evidence-informed development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}