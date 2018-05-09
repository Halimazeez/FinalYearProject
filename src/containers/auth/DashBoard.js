import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import PrintTemplate from "react-print";

class DashBoard extends React.Component {
  render() {
    return (
      <PrintTemplate>
        <div id="react-no-print"> Hidden?</div>
        <div id="print-mount">
          <h3>All markup for showing on print</h3>
          <p>
            Write all of your "HTML" (really JSX) that you want to show on
            print, in here
          </p>
          <p>
            If you need to show different data, you could grab that data via
            AJAX on componentWill/DidMount or pass it in as props
          </p>
          <p>
            The CSS will hide the original content and show what is in your
            Print Template.
          </p>
        </div>
      </PrintTemplate>
    );
  }
}

const styles = {};

DashBoard.propTypes = {};

export default DashBoard;
