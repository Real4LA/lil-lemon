import "./App.css";
import "./Header.js";
import Header from "./Header.js";
import Chicago from "./Chicago.js";
import Chicago2 from "./Chicago2.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <meta name="description" content="your text goes here" />
      <meta name="og:title" content="" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="" />
      <main>
        <Header />
        <Chicago />
        <Specials />
        <Testimonials />
        <Chicago2 />
        <Footer />
      </main>
    </>
  );
}

export default App;
