import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Testimonials from "../Testimonials/Testimonials";

const testimony = [
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to usign 'Content here Content",
    name: "Winson Herry",
    place: "DHAKA",
  },
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to usign 'Content here Content",
    name: "Ruth R. McCracken",
    place: "California",
  },
  {
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to usign 'Content here Content",
    name: "Mary P. Salisbury",
    place: "California",
  },
];

const marginTop = {
    marginTop: '20px'
}
const Testimonial = () => {
  return (
    <Container>
      <Box sx={{flexGrow: 1, mt: 15}}>
        <Typography variant="p" style={marginTop}>Testimonial</Typography>
        <Typography variant="h4" style={marginTop}>Whats Our Patients Says</Typography>
        <Grid container spacing={4} style={marginTop}>
          {testimony.map((testimony) => (
            <Testimonials testimony={testimony}></Testimonials>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
