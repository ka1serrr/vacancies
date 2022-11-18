import React, {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import {GetVacancies} from "../../../services/GetVacancies";
import {Card} from "../../UI/Card/Card";
import {IData} from "../../../types/vacancies.interface";
import {Loader} from "../../UI/Loader/Loader";


export const Content: FC = () => {
	const getVacancies = new GetVacancies;

	const {data:vacancies, isError, isLoading } = useQuery(['products'], () => getVacancies.getData())


	const loading = isLoading && [...Array(5)].map((item, i) => <Loader key={i}/>)

	const content = !isLoading && vacancies.map((item: IData) => (
		<Card key={item.id}
			  {...item}
			item = {item}
		/>
	))

	return (
		<div className='content'>
			<div className="container">
				{loading}
				{content}
			</div>
		</div>
	);
};

