import React from "react";
import { Container } from "react-bootstrap";
import style from "./SearchForm.module.scss";
const SearchForm = () => {
	return (
		<Container className={style.heroBottom}>
			<form action="">
				<div className={style.searchBarContainer}>
					<div className={style.searchBarIconContainer}>🔎</div>
					<input type="text" className={style.searchBarField} placeholder="SEARCH..." />
				</div>
			</form>
		</Container>
	);
};

export default SearchForm;
