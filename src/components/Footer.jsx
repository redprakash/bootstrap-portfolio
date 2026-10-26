import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import contacts, { linkTarget } from "../contacts";

const iconSx = {
  color: "muted.main",
  transition: "color 0.6s ease",
  "&:hover": { color: "common.white" },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 2 }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Prakash Poudel
        </Typography>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
          {contacts.map(({ name, href, icon: Icon }) => (
            <IconButton key={name} href={href} aria-label={name} {...linkTarget(href)} sx={iconSx}>
              <Icon />
            </IconButton>
          ))}
          <IconButton aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} sx={iconSx}>
            <ArrowCircleUpIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
