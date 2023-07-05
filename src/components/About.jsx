import { Box, Container, Typography } from "@mui/material";
import aboutImage from "../images/profileImage.png";
import { useSetRecoilState } from "recoil";
import { pageAtom } from "../recoil/pageAtom";
import { useEffect } from "react";

const About = () => {
  const setPage = useSetRecoilState(pageAtom);
  useEffect(() => {
    setPage("About");
  });

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Abel", fontSize: { xs: 36, sm: 42 } }}
          >
            About
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            sx={{
              flex: 1,
              maxHeight: { xs: "40%", sm: "30%" },
              maxWidth: { xs: "40%", sm: "30%" },
              minHeight: "200px",
              minWidth: "200px",
              objectFit: "cover",
              borderRadius: "100%",
              border: "4px solid white",
            }}
            src={aboutImage}
          />
          <Box sx={{ flex: 1 }}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
