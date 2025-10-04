// import ABTestHeadline from './components/ABTestHeadline';
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <ABTestHeadline /> */}
      <Features />
      <ProductGrid />
      <ContactForm />
      <Footer />
    </main>
  );
}