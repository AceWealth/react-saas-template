import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Monthly"
              pricing={
                <span>
                  $34.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Lose", "Weight", "Fast"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Quarterly"
              pricing={
                <span>
                  $88.97
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Lose", "More", "Weight"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Annual"
              pricing={
                <span>
                  $299.88
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Get", "Drafted", "In the NFL"]}
            />
          </Grid>
         
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
