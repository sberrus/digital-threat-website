// imports
import Link from "next/link";
import { Container } from "react-bootstrap";
import MainMenu from "../../components/MainMenu/MainMenu";
// modules
import SearchForm from "../../modules/Marketplace/SearchForm/SearchForm";
import HighLightCollections from "../../modules/Marketplace/HighLightCollections/HighLightCollections";
// styles
import style from "./Marketplace.module.scss";
const index = () => {
	return (
		<main>
			<MainMenu />
			{/* Hero section */}
			<section className={style.heroSection}>
				{/* Top Section */}
				<Container fluid className={style.heroTop}>
					{/* left Side collections and buttons*/}
					<div className={style.collectionsCopy}>
						<h3 className={style.collectionsCopyText}>
							DISCOVER OUR NFT AND UI COLLECTIONS HERE This is the door to The Oasis
						</h3>
						<div className={style.collectionButtonsContainer}>
							<Link href="/marketplace" passHref>
								<a className={style.collectionButton}>EXPLORE COLLECTIONS</a>
							</Link>
							<Link href="/marketplace" passHref>
								<a className={style.collectionButton}>CREATE COLLECTION</a>
							</Link>
						</div>
					</div>
					{/* highlight collections module */}
					<HighLightCollections />
				</Container>
				{/* search form module */}
				<SearchForm />
			</section>
			<section className={style.collectionListSection}>
				<h2 className="display-3">collection list section</h2>
			</section>
		</main>
	);
};

export default index;
