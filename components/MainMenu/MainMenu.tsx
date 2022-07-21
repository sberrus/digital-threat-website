// imports
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
// styles
import style from "./MainMenu.module.scss";

const MainMenu = () => {
	return (
		<div className={style.mainMenu}>
			<Container fluid className="h-100">
				<Row className="h-100">
					<Col md={4} className="h-100">
						<Link passHref href={"/home"}>
							<a className={style.brandTextContainer}>
								<Image src="/assets/img/the_oasis_project_banner.svg" alt="BrandText" layout="fill" />
							</a>
						</Link>
					</Col>
					<Col md={8} className="h-100">
						<nav>
							<div className={style.navItem}>
								<Link passHref href="#">
									<a className={style.navLink}>THE PROJECT</a>
								</Link>
							</div>
							<div className={style.navItem}>
								<Link passHref href="#">
									<a className={style.navLink}>BLOG AND NEWS</a>
								</Link>
							</div>
							<div className={style.navItem}>
								<Link passHref href="#">
									<a className={style.navLink}>ABOUT US</a>
								</Link>
							</div>
							<div className={style.navItem}>
								<Link passHref href="#">
									<a className={style.navLink}>JOBS</a>
								</Link>
							</div>
							<div className={style.navItemMarketplace}>
								<Link passHref href="/marketplace" prefetch={false}>
									<a className={style.buttonDecoration}>
										<div className={style.buttonBody}></div>
										<div className={style.buttonText}>
											<span>MARKETPLACE</span>
										</div>
									</a>
								</Link>
							</div>
						</nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MainMenu;
