import React from "react";
import { Container, Grid } from "@mui/material";
import LoaderHOC from "../../components/LoaderHOC/LoaderHOC";
import ProductCardItem from "../../components/ProductCardItem/ProductCardItem";

const Home = () => {

  return (
    <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ height: "100%", paddingTop: 5 }}
      >
        Test
      </Grid>
    </Container>
  );
};

export default Home;
