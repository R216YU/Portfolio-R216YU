import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRecoilState } from "recoil";
import { modeAtom } from "../recoil/modeAtom";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MenuIcon from "@mui/icons-material/Menu";
import { yellow, pink, purple } from "@mui/material/colors";
import navIcon from "../images/navicon.png";
import { pageAtom } from "../recoil/pageAtom";
import { motion } from "framer-motion";

const Header = () => {
  // MUI theme
  const [mode, setMode] = useRecoilState(modeAtom);
  const toggleModeHandle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  // NavBar page
  const [page] = useRecoilState(pageAtom);

  // Responsive
  const isWide = useMediaQuery("(min-width:750px)");

  // Hamburger + Drawer
  const [drawerOpened, setDrawerOpened] = useState(false);

  // Components
  const Computer = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <List
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton component={Link} to={link.url}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  {page === link.text ? (
                    <ListItemText primaryTypographyProps={{ fontWeight: "bold" }}>{link.text}</ListItemText>
                  ) : (
                    <ListItemText>{link.text}</ListItemText>
                  )}
                </motion.div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton href="mailto:r216yu@outlook.jp" target="_blank" rel="noopener noreferrer">
              <EmailIcon sx={{ color: yellow[500], "&:hover": { color: yellow[300] } }} fontSize="large" />
            </IconButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton href="https://www.instagram.com/r216yu/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: pink[500], "&:hover": { color: pink[300] } }} fontSize="large" />
            </IconButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton href="https://github.com/R216YU" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ color: purple[500], "&:hover": { color: purple[300] } }} fontSize="large" />
            </IconButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton onClick={() => toggleModeHandle()}>
              <InvertColorsIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box>
        <IconButton onClick={() => setDrawerOpened(true)}>
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          PaperProps={{ style: { width: "50%" } }}
        >
          <Slide direction="left" in={drawerOpened}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <List
                component="nav"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {navLinks.map((link) => (
                  <ListItem key={link.text} disablePadding>
                    <ListItemButton component={Link} to={link.url}>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        {page === link.text ? (
                          <ListItemText primaryTypographyProps={{ fontWeight: "bold" }}>{link.text}</ListItemText>
                        ) : (
                          <ListItemText>{link.text}</ListItemText>
                        )}
                      </motion.div>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Divider variant="middle" flexItem />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton href="mailto:r216yu@outlook.jp" target="_blank" rel="noopener noreferrer">
                    <EmailIcon
                      sx={{
                        color: yellow[500],
                        "&:hover": { color: yellow[300] },
                      }}
                      fontSize="large"
                    />
                  </IconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton href="https://www.instagram.com/r216yu/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ color: pink[500], "&:hover": { color: pink[300] } }} fontSize="large" />
                  </IconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton href="https://github.com/R216YU" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon
                      sx={{
                        color: purple[500],
                        "&:hover": { color: purple[300] },
                      }}
                      fontSize="large"
                    />
                  </IconButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton onClick={() => toggleModeHandle()}>
                    <InvertColorsIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </Box>
          </Slide>
        </Drawer>
      </Box>
    );
  };

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

  return (
    <AppBar position="static" sx={{ py: 1 }}>
      <Toolbar>
        <Container>
          <Box
            component="header"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <motion.div animate={{ y: 0 }} transition={{ type: "spring" }} initial={{ y: "-10vh" }}>
                <motion.div whileHover={{ rotate: 360 }}>
                  <Box
                    component="img"
                    sx={{
                      maxWidth: "45px",
                      maxHeight: "45px",
                      border: "3px solid white",
                      borderRadius: "100%",
                    }}
                    src={navIcon}
                  />
                </motion.div>
              </motion.div>
              <Typography variant="h5" sx={{ fontFamily: "Abel" }}>
                RYU SUZUKI
              </Typography>
            </Box>

            {isWide ? <Computer /> : <Mobile />}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
