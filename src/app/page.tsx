import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/Form/ContactForm";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Interests from "@/components/Interests/Interests";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Gallery />
      <Interests />
      <ContactForm />
      <Footer />
    </main>
  );
}
