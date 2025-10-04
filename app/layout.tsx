import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eco-Friendly Water Bottles | Sustainable Hydration',
  description: 'Premium eco-friendly water bottles for a sustainable lifestyle. Shop our collection of reusable, BPA-free bottles.',
  keywords: 'eco-friendly, water bottle, sustainable, reusable, BPA-free',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}