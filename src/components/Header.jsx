import React from "react";
import { useRecoilState } from "recoil";
import { modeAtom } from "../recoil/modeAtom";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import navIcon from "../images/navicon.png";
import { blue, green, pink, purple } from "@mui/material/colors";

const Header = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  const toggleModeHandle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  const navLinks = [
    {
      text: "About",
      url: "about",
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
    <AppBar sx={{ py: 1 }}>
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
              <Box
                component="img"
                sx={{ maxWidth: "45px", maxHeight: "45px" }}
                src={navIcon}
              />
              <Typography variant="h5">RYU's Portfolio</Typography>
            </Box>

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
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={link.url}>
                      <ListItemText>{link.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  href="mailto:r216yu@outlook.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon sx={{ color: blue[500] }} fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/r216yu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ color: pink[500] }} fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://github.com/R216YU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ color: purple[500] }} fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
