import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Requirement from '@/components/Requirement';
import Products from '@/components/Products';
import Package from '@/components/Package';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';

export default function Home() {
  return (
    <div id="content">
      <Header />
      <main>
        <Hero />
        <About />
        <Requirement />
        <Products />
        <Package />
        <Cta />
      </main>
      <Footer />
      <Modals />
    </div>
  );
}