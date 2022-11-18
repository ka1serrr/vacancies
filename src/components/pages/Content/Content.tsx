import React, {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import {GetData} from "../../../services/ApiService";
import {Card} from "../../UI/Card/Card";
import {IVacancies} from "../../../types/vacancies.interface";
import {Loader} from "../../UI/Loader/Loader";

export const Content: FC = () => {

	const getData = new GetData;

	const {data: vacancies, isError, isLoading } = useQuery(['products'], () => getData.getData())


	const loading = isLoading && [...Array(5)].map((item, i) => <Loader key={i}/>)

	const content = !isLoading && vacancies.map((item: IVacancies) => (
		<Card key={item.id}
			  {...item}
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

