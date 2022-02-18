import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import {ScrollTop} from "primereact/scrolltop";

const Layout = (props: any) =>
{
	return (
		<>
			<Header />

			<main>{props.children}</main>

			{/*	 Footer */}
			<Footer />

			<ScrollTop />
		</>
	)
}

export default Layout