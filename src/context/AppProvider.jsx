import React, { useState, useEffect } from "react";
import { AppContext } from ".";
import App from "../App";
import Home from '../component/Home'
import Reservation from '../component/Reservation'
import Gallery from '../component/Gallery'
import Menu from '../component/Menu'
import About from '../component/About'
import Events from '../component/Events'
import Cart from "../component/Cart";
const getInitialTheme = () => {

  if (typeof window !== "undefined" && window.localStorage) {
    const storedProfs = window.localStorage.getItem("color-theme");
    if (typeof storedProfs === "string") {
      return storedProfs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme:dark");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const AppProvider = ({ initialTheme, children }) => {

  const [currency, setCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(1);
  const [newproduct,setnewproduct]=useState([])
  const [itemsquantity,setItemsquantity]=useState(0)


  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/61b353311773b1ac5441908b/latest/USD"
        );
        const data = await response.json();

        const rates = data.conversion_rates;
        const rate = rates[currency];
        setConversionRate(rate);
      } catch (error) {
        console.error("Failed to fetch conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [currency]);






  const features = [
    {
      id: 1,
      title: "Home",
      to: "/",
      component: Home,
    },
    {
      id: 2,
      title: "Menu",
      to: "./Menu",
      component: Menu,

    },
    {
      id: 3,
      title: "Events ",
      to: "./Events",
      component: Events,

    },
    {
      id: 4,
      title: "Gallery",
      to: "./Gallery",
      component: Gallery,

    },
    
    {
      id: 5,
      title: "Reservation",
      to: "./Reservation",
      component: Reservation,
    },
  
  ];
  const [theme, setTheme] = useState(getInitialTheme);
  const [nav, setNav] = useState(false);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        nav,
        setNav,
        features,
        currency,
        setCurrency,
        conversionRate,
        newproduct,
        setnewproduct,
        itemsquantity,
        setItemsquantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
