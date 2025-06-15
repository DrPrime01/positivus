import { type ReactNode } from 'react';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}
