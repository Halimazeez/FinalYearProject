import React from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import styled from "styled-components";

class sideNav extends React.Component {
	constructor() {
		super();
		this.state = {
			open: true
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Drawer variant="permanent" classes={{ paper: classes.paper }}>
					<List>
						<ListItem button>
							<InboxIcon />
							{/* }<ListItemText primary="One-Rep-Max" /> */}
						</ListItem>
						<ListItem button>
							<InboxIcon />
							{/* <ListItemText primary="Workout Calculator" />  */}
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							{/*<ListItemText primary="About Us" /> */}
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							{/*<ListItemText primary="Contact" /> */}
						</ListItem>
					</List>
				</Drawer>
			</div>
		);
	}
}

sideNav.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = {
	paper: {
		position: "static",
		width: 60
	}
};

export default withStyles(styles)(sideNav);
