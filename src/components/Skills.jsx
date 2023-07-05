import { Box, Container, Typography, Card, IconButton } from "@mui/material";
import { pageAtom } from "../recoil/pageAtom";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { SiPython, SiFlask, SiDjango, SiFastapi, SiStreamlit } from "react-icons/si";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import { SiPhp, SiLaravel } from "react-icons/si";
import { SiHtml5, SiCss3, SiTailwindcss, SiMui } from "react-icons/si";
import { SiVisualstudiocode, SiGit, SiGithub, SiSourcetree } from "react-icons/si";
import { blue, cyan, green, grey, orange, purple, red, yellow } from "@mui/material/colors";

const Skills = () => {
  const setPage = useSetRecoilState(pageAtom);
  useEffect(() => {
    setPage("Skills");
  });

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h3" sx={{ fontFamily: "Abel", fontSize: { xs: 36, sm: 42 } }}>
            Skills
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6">Python</Typography>
          </Card>
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SiPython size="2rem" color={blue[500]} />
              <SiFlask size="2rem" color={grey[600]} />
              <SiDjango size="2rem" color={green[500]} />
              <SiFastapi size="2rem" color={cyan[300]} />
              <SiStreamlit size="2rem" color={red[500]} />
            </Card>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SiJavascript size="2rem" color={yellow[500]} />
              <SiTypescript size="2rem" color={blue[500]} />
              <SiReact size="2rem" color={cyan[500]} />
              <SiNextdotjs size="2rem" color={grey[50]} />
            </Card>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SiPhp size="2rem" color={purple[500]} />
              <SiLaravel size="2rem" color={red[500]} />
            </Card>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SiHtml5 size="2rem" color={orange[500]} />
              <SiCss3 size="2rem" color={cyan[500]} />
              <SiTailwindcss size="2rem" color={cyan[800]} />
              <SiMui size="2rem" color={blue[500]} />
            </Card>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SiVisualstudiocode size="2rem" color={blue[500]} />
              <SiGit size="2rem" color={red[500]} />
              <SiGithub size="2rem" color={grey[50]} />
              <SiSourcetree size="2rem" color={blue[500]} />
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
