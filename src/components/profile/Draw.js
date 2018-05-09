import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Icon from "material-ui/Icon";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";

class Draw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  togglePanels = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { title, Icon, classes } = this.props;
    return (
      <ExpansionPanel expanded={this.state.open} className={classes.draw}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={this.togglePanels}
        >
          <Icon className={classes.icon}>{Icon}</Icon>

          <Typography className={classes.header}>{title}</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.data}>{this.props.children}</ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

Draw.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

const styles = {
  icon: {
    paddingRight: 15,
    lineHeight: 29
  },
  header: {
    fontSize: 20
  },
  draw: {
    maxWidth: 400,
    marginTop: 0,
    flexGrow: 1,
    maxWidth: 400,
    position: "relative",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  data: {
    padding: 0,
  }
};
export default withStyles(styles)(Draw);
