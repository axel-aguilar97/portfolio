import { GlobalStyle, DivGlobal, MainGlobal } from "./Styles";

import Header from "./components/Header";
import Router from "./Router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />

      <DivGlobal>
        <Header />

        <MainGlobal>
          <Router />
        </MainGlobal>

        <Footer />
      </DivGlobal>
    </>
  );
}

export default App;
