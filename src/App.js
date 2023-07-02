import React from "react";

import { useRecoilState } from "recoil";
import { modeAtom } from "./recoil/modeAtom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  // MUIテーマの管理
  const [mode] = useRecoilState(modeAtom);
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: ["Poppins", "Noto Sans JP", "sans-serif"].join(","),
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
  
      h1: { fontSize: 60 },
      h2: { fontSize: 48 },
      h3: { fontSize: 42 },
      h4: { fontSize: 36 },
      h5: { fontSize: 20 },
      h6: { fontSize: 18 },
      subtitle1: { fontSize: 18 },
      body1: { fontSize: 16 },
      button: { textTransform: 'none' },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 750,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <About />
      {/* <Skills />
      <Works /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
