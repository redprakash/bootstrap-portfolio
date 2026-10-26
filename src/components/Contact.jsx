import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import contacts, { linkTarget } from "../contacts";

export default function Contact() {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", py: 8, flexGrow: 1 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h2" color="primary" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Contact
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {contacts.map(({ name, detail, href, icon: Icon }) => (
            <Grid key={name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                variant="outlined"
                component="a"
                href={href}
                {...linkTarget(href)}
                sx={{
                  display: "block",
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "muted.main",
                  bgcolor: "transparent",
                  transition: "color 0.6s ease, border-color 0.6s ease",
                  "&:hover": { color: "common.white", borderColor: "primary.main" },
                }}
              >
                <Icon sx={{ fontSize: 40 }} />
                <Typography variant="h4" sx={{ color: "inherit", mt: 1 }}>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
