import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const highlights = [
  {
    icon: CodeIcon,
    title: "Development",
    text: "C# .NET and React, unit testing, CI/CD on Azure, agentic and spec-driven development.",
  },
  {
    icon: SchoolIcon,
    title: "Graduate",
    text: "Bachelor of Business, Information Systems Management, Victoria University.",
  },
  {
    icon: WorkIcon,
    title: "Work",
    text: "Software Engineer @ WooliesX.",
  },
];

export default function Highlights() {
  return (
    <Box component="section" sx={{ bgcolor: "#6c757d", py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          {highlights.map(({ icon: Icon, title, text }) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", bgcolor: "background.default", textAlign: "center" }}>
                <CardContent sx={{ p: 4 }}>
                  <Icon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    {title}
                  </Typography>
                  <Typography color="text.secondary">{text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
