import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">&copy;2023 S.RYU</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
