import {
  Box,
  Container,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import aboutImage from "../images/profileImage.png";

const About = () => {
  const rows = [
    {
      title: "名前",
      data: "鈴木 龍(スズキ リュウ)",
    },
    {
      title: "生年月日",
      data: "2000/02/16",
    },
    {
      title: "学歴",
      data: "日本大学経済学部(24年卒業予定)",
    },
    {
      title: "プログラミング学習歴",
      data: "2022/10 ~",
    },
    {
      title: "趣味・特技",
      data: "ゲーム/有酸素運動/筋トレ/音楽",
    },
    {
      title: "前職",
      data: "プロゲーマー",
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
            About
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
          <Box
            component="img"
            sx={{
              maxHeight: { xs: "40%", sm: "30%" },
              maxWidth: { xs: "40%", sm: "30%" },
              objectFit: "cover",
              borderRadius: "100%",
              border: "4px solid white",
            }}
            src={aboutImage}
          />
          <Box sx={{ flexGrow: 1 }}>
            <TableContainer component={Paper}>
              <Table sx={{ flexGrow: 1 }}>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell>{row.title}</TableCell>
                      <TableCell sx={{ whiteSpace: "pre-line" }}>
                        {row.data}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
