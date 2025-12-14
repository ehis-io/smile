import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
