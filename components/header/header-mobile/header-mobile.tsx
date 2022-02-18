import Link from 'next/link'
import Image from 'next/image'
import styles from './header-mobile.module.scss';
import logoImage from "../../../public/images/logos/iov_light.svg"
import {useState} from "react";

const HeaderMobile = () =>
{
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = () =>
	{
		setToggleMenu(!toggleMenu);
	}

	return (
		<>
			<header className={styles.header_mobile_container}>
				<div className="container-fluid">
					<div className={styles.header}>
						{/* Logo */}
						<div className={styles.logo}>
							<Link href={"/"}>
								<a>
									<Image src={logoImage} width={52} height={52}
									       alt="IOV Logo" />
								</a>
							</Link>
						</div>

						<div className={styles.btn_cta}>
							<a href="https://app.iovisitor.com/sign-up"
							   target="_blank" rel="noreferrer"
							   className={styles.signUp}>Get Started</a>
						</div>

						{/* Nav Menu Toggle*/}
						<button className={styles.btn_toggle} onClick={handleToggleMenu}>
							<i className="la la-bars" />
						</button>

						{/* Navigation */}
						<nav className={styles.navigation + (toggleMenu ? ' ' + styles.open : '')}>
							<ul className={styles.menuItems}>
								<li className={styles.has_sub_menu}>
									<span>Products</span>
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
												<Link href={"/products/safety-flow"}>
													<a>
														<i className="la la-shield-alt" />
														<span>Safety Flow</span>
													</a>
												</Link>
											</li>
											<li>
												<Link href={"/products/delivery-flow"}>
													<a>
														<i className="la la-shipping-fast" />
														<span>Delivery Flow</span>
													</a>
												</Link>
											</li>
											<li>
												<Link href={"/products/space-flow"}>
													<a>
														<i className="la la-building" />
														<span>Space Flow</span>
													</a>
												</Link>
											</li>
											{/*<li>
												<Link href={"/products/process-flow"}>
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
									<span>Solutions</span>
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
						</nav>

						{/* Screen Overlay */}
						<div className={styles.nav_overlay + (toggleMenu ? ' ' + styles.show : '')}
						     onClick={handleToggleMenu} />
					</div>
				</div>
			</header>
		</>
	)
}

export default HeaderMobile