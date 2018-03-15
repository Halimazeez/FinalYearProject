import React from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";

export default class sideNav extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div style={styles.root}>
				<Drawer variant="permanent" anchor="left" PaperProps={styles.list}>
					<List>
						<ListItem button>
							<ListItemText primary="One-Rep-Max" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="Workout Calculator" />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="About Us" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Contact" />
						</ListItem>
					</List>
				</Drawer>
			</div>
		);
	}
}

const styles = {
	list: {
		top: "64"
	}
};
