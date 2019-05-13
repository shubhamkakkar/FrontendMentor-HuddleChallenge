import React from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
export default () => (
  <div
    style={{
      display: "flex",
      margin: "auto",
      backgroundColor: "white",
      borderRadius: 20,
      boxShadow: "0px 2px 5px #ccc",
      padding: 20,
      justifyContent: "center",
      position: "relative",
      top: -175
    }}
  >
    <Grid
      container
      style={{
        textAlign: "center",
        paddingTop: 50,
        paddingBottom: 50
      }}
    >
      <Grid item xs={12}>
        <h1>Ready To Build Your Own Community</h1>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Fab
          variant="extended"
          style={{
            backgroundColor: "hsl(322, 100%, 66%)",
            color: "white"
          }}
        >
          Get Started For Free
        </Fab>
      </Grid>
    </Grid>
  </div>
);
