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
import Divider from "material-ui/Divider";

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

          <Typography className={classes.header}>{title}</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>{this.props.children}</ExpansionPanelDetails>
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
    paddingRight: 15,
    lineHeight: 29
  },
  header: {
    fontSize: 20
  }
};
export default withStyles(styles)(Panels);
