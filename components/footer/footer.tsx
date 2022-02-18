import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss'
import iovLogo from '../../public/images/logos/iov_light.svg';
import {route} from "next/dist/server/router";
import {useRouter} from "next/router";

const Footer = () =>
{
	const router = useRouter();

	return (
		<div id={"footer"}>
			<section className={styles.footer}>
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="text-center">
								<Image src={iovLogo} width={60} height={60}
								       alt={"IOV Logo"} />
								<p className="text-light text-sm mt-4">Enter a new dimension</p>
							</div>
						</div>
						<div className="col-md-3">
							<h4 className="h5 text-light mb-4">Products</h4>
							<ul className={styles.footer_links}>
								<li>
									<Link href={"/products/boarding-flow"}>
										<a>Boarding Flow</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Delivery Flow</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Space Flow</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Process Flow</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Safety Flow</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h4 className="h5 text-light mb-4">Solutions</h4>
							<ul className={styles.footer_links}>
								<li>
									<Link href={"/#"}>
										<a>Solution 1</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Solution 2</a>
									</Link>
								</li>
								<li>
									<Link href={"/#"}>
										<a>Solution 3</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h4 className="h5 text-light mb-4">Resources</h4>
							<ul className={styles.footer_links}>
								<li>
									<Link href={"/#"}>
										<a>About Us</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<div className={styles.appBottomFooter}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<div className={styles.languages}>
								<Link href={router.route} locale={'en'}>
									<a>English</a>
								</Link>
								<Link href={router.route} locale={'fr'}>
									<a>Français</a>
								</Link>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className={styles.copyrights}>
								<p>IOV © 2022. All rights reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer