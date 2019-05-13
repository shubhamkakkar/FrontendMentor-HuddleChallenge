import React from "react";
import { Grid, Fab } from "@material-ui/core";
import HuddleAndIcon from "../huddle-and-icon";

import email from "../../assets/images/icon-email.png";
import location from "../../assets/images/icon-location.png";
import phone from "../../assets/images/icon-phone.png";

const COLUMN_ONE = [
  {
    icon: location,
    content: "location text, random text, just to add words"
  },
  {
    icon: phone,
    content: "+51458963"
  },
  {
    icon: email,
    content: "example@huddle.com"
  }
];
const columnOne = () =>
  COLUMN_ONE.map(({ icon, content }, index) => (
    <Grid container key={index} style={{ marginBottom: 20 }}>
      <Grid
        item
        xs={2}
        style={{
          fontSize: 18,
          color: "white",
          lineHeight: 1.5
        }}
      >
        <img
          src={icon}
          alt="icon"
          style={{ width: 20, height: 20, position: "relative", top: 5 }}
        />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          fontSize: 18,
          color: "white",
          lineHeight: 1.5
        }}
      >
        {content}
      </Grid>
    </Grid>
  ));
const NAVIGATION_LINK = [
  {
    itemOne: "About Us",
    itemTwo: "What we do",
    itemThree: "FAQ"
  },
  { itemOne: "Career", itemTwo: "Blog", itemThree: "Contact Us" }
];
const navigationLinkRender = () =>
  NAVIGATION_LINK.map(({ itemOne, itemTwo, itemThree }, index) => (
    <Grid key={index} item xs={12} sm={4}>
      <Grid container>
        <Grid item xs={12} style={{ marginBottom: 20, color: "white" }}>
          {itemOne}
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 20, color: "white" }}>
          {itemTwo}
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 20, color: "white" }}>
          {itemThree}
        </Grid>
      </Grid>
    </Grid>
  ));
const ICONS = ["facebook", "twitter", "instagram"];
const iconRender = () => (
  <Grid container style={{ textAlign: "center" }}>
    {ICONS.map(icon => (
      <Grid item key={icon} xs={4}>
        <Fab
          size="small"
          style={{ backgroundColor: "transparent", border: "1px solid white" }}
        >
          <i
            className={`fa fa-${icon}`}
            aria-hidden="true"
            style={{ color: "white" }}
          />
        </Fab>
      </Grid>
    ))}
  </Grid>
);

export default () => (
  <Grid container style={{}}>
    <Grid item xs={12} style={{ padding: 20 }}>
      <HuddleAndIcon huddleColor="white" xs={12} />
    </Grid>
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} sm={4} style={{ padding: 20 }}>
          {columnOne()}
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: 20 }}>
          <Grid container>
            {navigationLinkRender()}
            <Grid item xs={12} sm={4}>
              {iconRender()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid
      item
      xs={12}
      style={{ textAlign: "center", color: "white", marginTop: 20 }}
    >
      &copy; Copyright 2018 Huddle.All rights reserved
    </Grid>
  </Grid>
);
