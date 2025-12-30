import Page from "./components/layout/Page";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Learning from "./components/learning/Learning";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <Page>
      <Header />
      <Hero />
      <Skills />
      <Learning />
      <Portfolio githubusername="Mateusz-Chrabolowski" />
      <Footer />
    </Page>
  );
}

export default App;
