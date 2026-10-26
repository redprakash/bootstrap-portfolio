import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  { name: "Email", detail: "bhaktpoudel@gmail.com", href: "mailto:bhaktpoudel@gmail.com", icon: EmailIcon },
  { name: "GitHub", detail: "redprakash", href: "https://github.com/redprakash", icon: GitHubIcon },
  { name: "LinkedIn", detail: "prakashpoudel", href: "https://www.linkedin.com/in/prakashpoudel/", icon: LinkedInIcon },
];

export const linkTarget = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default contacts;
