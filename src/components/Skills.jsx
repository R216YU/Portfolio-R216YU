import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { pageAtom } from "../recoil/pageAtom";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

const Skills = () => {
  const setPage = useSetRecoilState(pageAtom);
  useEffect(() => {
    setPage("Skills");
  });

  const skillList = [
    {
      language: "Python",
      frameworks: ["Flask", "Django", "FastAPI", "streamlit"],
      detail: `私が一番最初に学習した言語です。\n主にFlask, Django, FastAPI等のWebフレームワークを学習しています。`,
    },
    {
      language: "JavaScript",
      frameworks: ["React", "Next.JS", "TypeScript"],
      detail: `私が一番最初に学習した言語です。\n主にFlask, Django, FastAPI等のWebフレームワークを学習しています。`,
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Abel", fontSize: { xs: 36, sm: 42 } }}
          >
            Skills
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ p: 2, minWidth: "300px" }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Python
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                  {`私が一番最初に学習した言語です.\n主にFlask, Django, FastAPI等のWebフレームワークを学習しています.`}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
