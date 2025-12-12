import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CallForPapers from "@/components/CallForPapers";
import ImportantDates from "@/components/ImportantDates";
import Tracks from "@/components/Tracks";
import Committee from "@/components/Committee";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ICAITSC 2026 | International Conference on AI Techniques & Smart Computing</title>
        <meta
          name="description"
          content="Join ICAITSC 2026 at Periyar University, Salem. International Conference on Artificial Intelligence Techniques and Smart Computing. 26-27 February 2026."
        />
        <meta
          name="keywords"
          content="ICAITSC 2026, AI conference, smart computing, Periyar University, Salem, artificial intelligence, machine learning, deep learning"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Tracks />
          <CallForPapers />
          <ImportantDates />
          <Speakers />
          <Committee />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
