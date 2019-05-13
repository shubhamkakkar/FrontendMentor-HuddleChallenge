import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { renderToStaticMarkup } from "react-dom/server";
import DesktopSG from "../../components/DesktopBG";
import { Button, Fab } from "@material-ui/core";

import classes from "./LandingSection.module.css";

import illustrationMochupUri from "../../assets/images/mockup.png";

import HuddleAndIcon from "../../components/huddle-and-icon";

export default class Landing extends React.Component {
  navbarRender = () => (
    <HuddleAndIcon huddleColor="black" xs={6}>
      <Grid
        item
        xs={6}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          display: "flex"
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "white", borderRadius: 20 }}
        >
          <b>Try it free</b>
        </Button>
      </Grid>
    </HuddleAndIcon>
  );

  landingDataRenderHelper = () => (
    <Grid container className={classes.textAlign}>
      <Grid item sm={4} xs={12}>
        <Fragment>
          <Grid
            item
            xs={12}
            className={classes.serviceContent}
            style={{
              textTransform: "capitalize",
              fontWeight: 600,
              lineHeight: 1.55
            }}
          >
            build the community your fan will love
          </Grid>

          <Grid
            item
            style={{ marginTop: 25, color: "#00000091", lineHeight: 1.5 }}
          >
            Hudle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </Grid>
          <Grid
            item
            style={{
              marginTop: 10
            }}
          >
            <Fab
              variant="extended"
              style={{
                backgroundColor: "hsl(322, 100%, 66%)",
                color: "white"
              }}
            >
              get started for free
            </Fab>
          </Grid>
        </Fragment>
      </Grid>
      <Grid item sm={8} xs={12} className={classes.imgAlign}>
        <img
          className={classes.imgSize}
          src={illustrationMochupUri}
          alt="mockup"
        />
      </Grid>
    </Grid>
  );

  renderHelper = () => {
    return (
      <Fragment>
        <Grid container className={classes.padding}>
          {this.navbarRender()}
        </Grid>
        <Grid
          container
          style={{
            paddingRight: 50,
            paddingLeft: 50,
            paddingTop: 50,
            paddingBottom: 40
          }}
        >
          <Grid
            item
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flex: 1
            }}
          >
            {this.landingDataRenderHelper()}
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<DesktopSG />));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
      <Grid
        contianer
        style={{
          height: "100vh",
          backgroundColor: "hsl(193, 100%, 96%)",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItem: "center",
          paddingBottom: 30
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            background: dataUri,
            width: window.innerWidth,
            height: 500
          }}
        >
          {this.renderHelper()}
        </Grid>
      </Grid>
    );
  }
}
