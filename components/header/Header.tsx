import React, {Component} from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Header.module.scss"
import HeaderMobile from "./header-mobile/header-mobile";

class Header extends Component<any, any>
{
	constructor(props: any)
	{
		super(props);
	}

	render()
	{
		return (
			<>
				<header className={styles.header_container}>
					<div className="container-lg">
						<div className={styles.header}>

							{/* Logo */}
							<div className={styles.logo_container}>
								<Link href={"/"}>
									<a>
										{/*<Image src={logoImage} width={50} height={50}*/}
										{/*       alt={"IOV Logo"} />*/}
									</a>
								</Link>
							</div>

							{/* Navigation */}
							<nav className={styles.navigation}>
								<ul className={styles.menuItems}>
									<li className={styles.has_sub_menu}>
										<Link href={'#'}>
											<a>
												<span>Products</span>
												<i className="la la-angle-down" />
											</a>
										</Link>

										<div className={styles.subMenu}>
											<ul className={styles.sub_menu_items}>
												<li>
													<Link href={"/products/boarding-flow"}>
														<a>
															<i className="la la-users" />
															<span>Boarding Flow</span>
														</a>
													</Link>
												</li>
												<li>
													<Link href={"/#"}>
														<a>
															<i className="la la-shield-alt" />
															<span>Safety Flow</span>
														</a>
													</Link>
												</li>
												<li>
													<Link href={"/#"}>
														<a>
															<i className="la la-shipping-fast" />
															<span>Delivery Flow</span>
														</a>
													</Link>
												</li>
												<li>
													<Link href={"/#"}>
														<a>
															<i className="la la-network-wired" />
															<span>Space Flow</span>
														</a>
													</Link>
												</li>
												{/*<li>
													<Link href={"/#"}>
														<a>
															<i className="la la-cogs" />
															<span>Process Flow</span>
														</a>
													</Link>
												</li>*/}
											</ul>
										</div>
									</li>
									{/*<li>
										<Link href={"#"}>
											<a>
												<span>Solutions</span>
												<i className="la la-angle-down" />
											</a>
										</Link>

										<div className={styles.subMenu}>
											<ul className={styles.sub_menu_items}>
												<li>
													<Link href={"/products/boarding-flow"}>
														<a>
															<i className="la la-users" />
															<span>Solution #1</span>
														</a>
													</Link>
												</li>
											</ul>
										</div>
									</li>*/}
									<li>
										<Link href={"/pricing"}>
											<a>
												<span>Pricing</span>
											</a>
										</Link>
									</li>
								</ul>

								<ul className={styles.profileItems}>
									<li>
										<a href="https://app.iovisitor.com/auth/login"
										   target="_blank" rel="noreferrer"
										   className={styles.logIn}>Log In</a>
									</li>
									<li>
										<a href="https://app.iovisitor.com/sign-up"
										   target="_blank" rel="noreferrer"
										   className={styles.signUp}>Sign Up</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<HeaderMobile />
			</>
		)
	}
}

export default Header
