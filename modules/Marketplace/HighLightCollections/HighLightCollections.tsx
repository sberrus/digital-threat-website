import Image from "next/image";
import React from "react";
import style from "./HighLightCollections.module.scss";

const HighLightCollections = () => {
	return (
		<div className={style.highlightCollections}>
			<h5>POPULAR COLECTIONS:</h5>
			<div className={style.collectionsContainer}>
				<div className={style.assetContainer}>
					<Image src="/assets/img/placeholder-1_1.svg" layout="fill" alt="asset" />
				</div>
				<div className={style.assetContainer}>
					<Image src="/assets/img/placeholder-1_1.svg" layout="fill" alt="asset" />
				</div>
			</div>
		</div>
	);
};

export default HighLightCollections;
