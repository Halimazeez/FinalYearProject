import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import HeaderButtons from "./headerButtons";

export const Header = () => (
	<div>
		<AppBar>
			<Toolbar>
				<IconButton style={styles.menuButton} color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography variant="title" color="inherit" style={styles.flex}>
					fit<b>Me</b>
				</Typography>
				<HeaderButtons />
			</Toolbar>
		</AppBar>
	</div>
);

const styles = {
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};
