import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-between", textAlign: { xs: "center", sm: "left" } }}
        >
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Who is{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Prakash
              </Box>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2, fontWeight: 300 }}>
              Software Engineer @ WooliesX
            </Typography>
          </Box>
          <Avatar
            src="/images/pp.jpeg"
            alt="Prakash Poudel"
            sx={{
              width: { xs: 180, md: 260 },
              height: { xs: 180, md: 260 },
              display: { xs: "none", sm: "flex" },
              filter: "grayscale(1)",
              opacity: 0.6,
              transition: "filter 0.6s ease, opacity 0.6s ease",
              "&:hover": { filter: "none", opacity: 1 },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
