import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const skills = [
  { name: "C#", description: "Backend development" },
  { name: ".NET", description: "ASP.NET Core APIs" },
  { name: "MongoDB", description: "Document databases" },
  { name: "React", description: "Front-end UIs" },
  { name: "Azure", description: "Cloud and DevOps" },
  { name: "Git", description: "Version control" },
  { name: "CI/CD", description: "Build and deploy pipelines" },
  { name: "ADLC", description: "Agentic development" },
  { name: "Spec Kit", description: "Spec-driven development" },
];

export default function TechStack() {
  return (
    <Box component="section" id="techstack" sx={{ bgcolor: "background.default", py: 8, scrollMarginTop: 72 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h2" color="primary" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Tech Stack
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {skills.map((skill) => (
            <Grid key={skill.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  color: "muted.main",
                  bgcolor: "transparent",
                  transition: "color 0.6s ease, border-color 0.6s ease",
                  "&:hover": { color: "common.white", borderColor: "primary.main" },
                }}
              >
                <Typography variant="h4" sx={{ color: "inherit" }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
