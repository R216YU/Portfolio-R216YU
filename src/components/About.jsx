import { Box, Card, Container, Typography } from "@mui/material";
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
          <Typography variant="h3" sx={{ fontFamily: "Abel", fontSize: { xs: 36, sm: 42 } }}>
            About
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            sx={{
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
          <Box sx={{}}>
            <Card sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: 25,
                    md: 36,
                  },
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                Ryu Suzuki
              </Typography>
              <Box sx={{ marginBottom: "1rem" }}>
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                  {`Ryu Suzukiのポートフォリオへようこそ。\n私は独学でプログラミングを学習している大学生です。\n現在はWebに関する言語、フレームワークをメインに学習しています。\nこのサイトでは、独学エンジニアである私の経歴や技術、作品をご紹介していきます。\nどうぞごゆっくりご覧ください。`}
                </Typography>
              </Box>

              <Box sx={{ marginBottom: "1rem" }}>
                <Typography
                  variant="h6"
                  sx={{
                    borderBottom: "4px solid grey",
                    display: "inline-block",
                    marginBottom: "5px",
                  }}
                >
                  Bio
                </Typography>
                <Typography variant="body1">
                  <Typography variant="span" sx={{ fontWeight: "bold", marginRight: "1rem" }}>
                    2000
                  </Typography>
                  静岡県浜松市にて生誕
                </Typography>
                <Typography variant="body1">
                  <Typography variant="span" sx={{ fontWeight: "bold", marginRight: "1rem" }}>
                    2024
                  </Typography>
                  24年に日本大学経済学部経済学科を卒業予定
                </Typography>
              </Box>

              <Box sx={{ marginBottom: "1rem" }}>
                <Typography
                  variant="h6"
                  sx={{
                    borderBottom: "4px solid grey",
                    display: "inline-block",
                    marginBottom: "5px",
                  }}
                >
                  Fav
                </Typography>
                <Typography variant="body1">ゲーム, ドラマ, 邦画, アニメ, 音楽, 筋トレ, 犬</Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
