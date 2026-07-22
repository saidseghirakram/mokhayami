import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Dua from "@/components/Dua";
import Documents from "@/components/Documents";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Rules />
        <Documents />
        <RegistrationForm />
        <Dua />
      </main>
      <Footer />
    </div>
  );
}
