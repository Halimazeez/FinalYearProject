import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Lift from "./Lift";
import { Home } from "material-ui-icons/";
import Icon from "material-ui/Icon";
import Grid from "material-ui/Grid";

class Panels extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, Icon, classes } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Icon className={classes.icon}>{Icon}</Icon>
          <Grid item xs={4}>
            <Typography>{title}</Typography>
          </Grid>
        </ExpansionPanelSummary>
        {this.props.children}
        <ExpansionPanelDetails />
      </ExpansionPanel>
    );
  }
}

Panels.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};
const styles = {
  root: {
    flexGrow: 1
  },
  icon: {
    paddingRight: 10
  }
};
export default withStyles(styles)(Panels);
