import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="245, 34, 37"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
