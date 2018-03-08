import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div>
		<h1>Home Page</h1>
		<Link to="/login">Login</Link>
		<br />
		<Link to="/register">Register</Link>
		<br />
	</div>
);

export default HomePage;
