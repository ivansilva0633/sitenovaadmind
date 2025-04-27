import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NovaAdMind - Marketing Digital com IA',
  description: 'Crie anúncios, textos e campanhas de marketing com IA inteligente, gratuita e ilimitada. Revolucione sua estratégia digital com o NovaAdMind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
