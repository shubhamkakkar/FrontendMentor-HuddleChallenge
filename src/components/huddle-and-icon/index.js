import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import favIcon from "../../assets/images/favicon.png";
export default props => (
  <Fragment>
    <Grid item xs={props.xs} style={{ alignSelf: "center" }}>
      <span>
        <img src={favIcon} alt="icon" style={{ width: 20, height: 20 }} />
      </span>
      <span
        style={{
          fontWeight: 600,
          marginLeft: 10,
          fontFamily: "poppins",
          fontSize: "25px",
          color: props.huddleColor
        }}
      >
        Huddle
      </span>
    </Grid>
    {props.children}
  </Fragment>
);
