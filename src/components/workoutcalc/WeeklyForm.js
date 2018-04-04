import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

import Loading from "../../components/helpers/loading";

class WeeklyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: [],

      //convert 1RM's to 90% of 1RM (Required for 5/3/1 workout base)
      bench: this.props.bench * 0.9,
      dead: this.props.dead * 0.9,
      squat: this.props.squat * 0.9,
      ohp: this.props.ohp * 0.9
    };
  }
  componentDidMount() {
    let firstrep,
      secondrep,
      thirdrep,
      bench,
      squat,
      dead,
      ohp = 0;

    switch (this.props.week) {
      case 1:
        firstrep = 5;
        secondrep = 5;
        thirdrep = 5;
        this.setState({
          loading: false
        });
        break;
      case 2:
        firstrep = 3;
        secondrep = 3;
        thirdrep = 3;
        this.setState({
          loading: false
        });
        break;
      case 3:
        firstrep = 5;
        secondrep = 3;
        thirdrep = 1;
        this.setState({
          loading: false
        });
        break;
      case 4:
        firstrep = 5;
        secondrep = 5;
        thirdrep = 5;
        this.setState({
          loading: false
        });
        break;
    }
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.formData);
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.header}>
            Week: {this.props.week}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container className={classes.lifts}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Compound</TableCell>
                    <TableCell numeric>Set 1</TableCell>
                    <TableCell numeric>Set 2</TableCell>
                    <TableCell>Set 3</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody />
              </Table>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

WeeklyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    marginTop: 50
  },
  header: {
    fontSize: 30,
    fontWeight: "250"
  },
  Table: {
    minWidth: 800
  }
});

export default withStyles(styles)(WeeklyForm);
