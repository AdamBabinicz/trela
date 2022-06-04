import Clients from "./components/Clients";
import Home from "./components/Home";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/Choose";
import Marketplace from "./components/Marketplace";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <Marketplace />
      <Subscribe />
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </div>
  );
}

export default App;
