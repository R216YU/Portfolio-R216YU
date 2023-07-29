import { Box, Container, Typography, Card, Link } from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useWorksHooks } from "../hooks/useWorksHooks";

const Works = () => {
  const { setPage, works } = useWorksHooks();
  useEffect(() => {
    setPage("Works");
  });

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Box sx={{ py: 8 }}>
        <Container>
          <Box sx={{ textAlign: "center", marginBottom: 4 }}>
            <Typography variant="h3" sx={{ fontFamily: "Abel", fontSize: { xs: 36, sm: 42 } }}>
              Works
            </Typography>
          </Box>
          <Box>
            {works.map((work) => (
              <Card
                key={work.title}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ cursor: "pointer" }}
                    >
                      {work.title}
                    </Link>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-wrap",
                      textAlign: { md: "left" },
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
    </motion.div>
  );
};

export default Works;
