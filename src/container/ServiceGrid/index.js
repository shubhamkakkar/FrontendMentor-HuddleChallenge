import React, { PureComponent } from "react";
import { Grid } from "@material-ui/core";

import illusrationUser from "../../assets/images/illustrationUsers.png";
import illusrationConversation from "../../assets/images/illustrationConversation.png";
import illusrationGrow from "../../assets/images/illustrationGrowTogether.png";
import classes from "./serviceGrid.module.css";

const SERVICE = [
  {
    heading: "grow together",
    description:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightfull conversations you miss out with a feedback form.",
    image: illusrationGrow
  },
  {
    heading: "flowing conversation",
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just in time loading for more than neutral flow",
    image: illusrationConversation
  },
  {
    heading: "your users",
    description:
      "it take no time at all to integrate Huddlle with your app's authentication solution. This means once signed in to your app, your users can start chatting immediately",
    image: illusrationUser
  }
];

class ServiceGrid extends PureComponent {
  componentDidMount() {
    console.log(classes);
  }
  render() {
    return (
      <Grid
        container
        style={{
          marginTop: 80,
          marginBottom: 80,
          paddingLeft: 50,
          paddingRight: 50
        }}
      >
        {SERVICE.map(({ heading, description, image }, index) => (
          <Grid
            key={index}
            container
            style={{
              boxShadow: "0px 2px 5px #ccc",
              padding: 50,
              marginBottom: 20,
              borderRadius: 10
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              className={
                index === 1 ? classes.imgGridRearrange : classes.imgGridDefault
              }
            >
              <img
                src={image}
                alt={description}
                className={classes.imgWidth}
                style={{
                  height: "100%"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ alignSelf: "center" }}>
              <h3
                className={classes.textCenterGridServiceContent}
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                {heading}{" "}
              </h3>
              <p
                className={classes.textCenterGridServiceContent}
                style={{ color: "#00000091", lineHeight: 1.5 }}
              >
                {description}
              </p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ServiceGrid;
