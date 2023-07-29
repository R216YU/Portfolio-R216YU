import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRecoilState } from "recoil";

export const useHeaderHooks = () => {
  // MUI theme
  const [mode, setMode] = useRecoilState(modeAtom);
  const toggleModeHandle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  // NavBar page
  const navLinks = [
    {
      text: "About",
      url: "",
    },
    {
      text: "Skills",
      url: "skills",
    },
    {
      text: "Works",
      url: "works",
    },
  ];
  const [page] = useRecoilState(pageAtom);

  // Responsive
  const isWide = useMediaQuery("(min-width:750px)");

  // Hamburger + Drawer
  const [drawerOpened, setDrawerOpened] = useState(false);

  return {
    mode,
    setMode,
    toggleModeHandle,
    navLinks,
    page,
    isWide,
    drawerOpened,
    setDrawerOpened,
  };
};
