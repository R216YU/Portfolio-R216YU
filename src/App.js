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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
