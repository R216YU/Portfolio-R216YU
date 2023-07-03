import { Box, Container, Typography, Card, Link } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { pageAtom } from "../recoil/pageAtom";
import { useEffect } from "react";
import portfolioImage from "../images/works/portfolioImage.png";

const Works = () => {
  const setPage = useSetRecoilState(pageAtom);
  useEffect(() => {
    setPage("Works");
  });

  const works = [
    {
      title: "Portfolio",
      image: portfolioImage,
      text: `以前のポートフォリオを、Material-UIを用いてリニューアル.\nこちらのサイトでは、私の技術や作品をご紹介しています.\nまた主に利用しているライブラリはReact, Material-UI, Recoil等です.`,
      url: "",
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
            Works
          </Typography>
        </Box>
        <Box>
          {works.map((work) => (
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: 1,
                p: 1,
                my: 2,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={work.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "2px solid white",
                    borderRadius: "3px",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ py: 2, textAlign: { xs: "center", md: "left" } }}>
                  <Link
                    variant="h6"
                    color="inherit"
                    underline="hover"
                    href={work.url}
                    sx={{ cursor: "pointer" }}
                  >
                    {work.title}
                  </Link>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-wrap",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {work.text}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Works;
