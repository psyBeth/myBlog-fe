import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
const iconIn = {
  color: "black",

  "&:hover": {
    color: "blue",
  },
};
const iconGh = {
  color: "black",
  "&:hover": {
    color: "#593d88",
  },
};
// const iconIns = {
//   color: "black",
//   "&:hover": {
//     color: "#E1306C",
//   },
// };
// const iconYu = {
//   color: "black",
//   "&:hover": {
//     color: "red",
//   },
// };

const About = () => {
  return (
    <Grid
      container
      align="center"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Card
          sx={{
            maxWidth: 415,
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <CardMedia
            sx={{ objectFit: "contain" }}
            height={150}
            component="img"
            alt="image"
            image="https://i.pinimg.com/originals/42/b6/74/42b6748cff77bc863ebf418f621a1041.jpg"
          />
          <CardContent>
            <Typography
              variant="h2"
              align="center"
              sx={{ fontFamily: "fantasy", fontWeight: 300 }}
            >
              Betul Koru
            </Typography>
          </CardContent>
          <Typography variant="h5" align="center">
            Full Stack Developer
          </Typography>
          <CardActions>
            <a href="https://www.linkedin.com/in/betul-koru-2303192ab/" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <LinkedInIcon sx={iconIn} fontSize="large" />
              </IconButton>
            </a>
            <a href="https://github.com/psyBeth" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <GithubIcon sx={iconGh} fontSize="large" />
              </IconButton>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;