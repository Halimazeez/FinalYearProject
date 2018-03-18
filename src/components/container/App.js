export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navDrawerOpen: false
		};
	}
	render() {
		return (
			<div>
				<Header
					styles={styles.header}
					handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
						this
					)}
				/>

				<LeftDrawer
					navDrawerOpen={navDrawerOpen}
					menus={Data.menus}
					username="User Admin"
				/>

				<div style={styles.container}>{this.props.children}</div>
			</div>
		);
	}
}
