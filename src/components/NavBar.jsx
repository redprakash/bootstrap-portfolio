import { useState } from "react";
import { Link } from "react-router";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { label: "Resume", href: "/PrakashPoudelResume.pdf" },
  { label: "Tech Stack", to: "/#techstack" },
  { label: "Contact", to: "/contact" },
];

// Internal pages go through the router; the resume opens in a new tab.
const linkProps = (link) =>
  link.to
    ? { component: Link, to: link.to }
    : { component: "a", href: link.href, target: "_blank", rel: "noopener noreferrer" };

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "background.default", py: 1 }} elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            Prakash Poudel
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {links.map((link) => (
              <Button key={link.label} color="inherit" {...linkProps(link)}>
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          {links.map((link) => (
            <ListItemButton key={link.label} onClick={() => setOpen(false)} {...linkProps(link)}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
