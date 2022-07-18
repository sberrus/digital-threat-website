// imports
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import style from "./index.module.scss";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Welcome to Digital Threat</title>
				<meta name="description" content="Digital Threat Welcome Page" />
			</Head>
			<main className="bg-dark text-light vh-100">
				{/* Background Decoration */}
				<div className={style.decoration}>
					<div className={style.body}>
						{/* Content Body */}
						<Container className={style.content}>
							{/* Img */}
							<div className={style.imgContainer}>
								<Image
									src="/assets/img/the_oasis_project_banner.svg"
									width={1380}
									height={276}
									alt="Oasis project main banner"
								/>
							</div>
							{/* Button */}
							<div className={style.buttonContainer}>
								<Link passHref href="/home">
									<a className={style.buttonBackgroundImg}>
										<Image
											src="/assets/img/btn_continue.svg"
											width={700}
											height={170}
											alt="Continue button decoration mask"
										/>
									</a>
								</Link>
							</div>
						</Container>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
