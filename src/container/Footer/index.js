import React, { PureComponent } from "react";
import CTO from "../../components/CTO";
import { Grid } from "@material-ui/core";
import FooterContent from "../../components/FooterContent";
import classes from "./Footer.module.css";
class Footer extends PureComponent {
  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "hsl(192, 100%, 9%)",
          padding: 50
        }}
        className={classes.marginTop}
      >
        <CTO />
        <FooterContent />
      </Grid>
    );
  }
}

export default Footer;
