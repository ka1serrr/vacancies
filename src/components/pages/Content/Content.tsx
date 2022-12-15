import React, {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";

import {GetVacancies} from "@/services/GetVacancies";
import {Card} from "@/components/UI/Card/Card";
import {IData} from "@/types/vacancies.interface";
import {LoaderComponent} from "@/components/UI/LoaderComponent/LoaderComponent";
import {useTitle} from '@/imports/hooks';

const Content: FC = () => {
	const getVacancies = new GetVacancies;
	useTitle('All vacancies')
	const {data:vacancies, isError, isLoading } = useQuery(['products'], () => getVacancies.getData())

	const loading = isLoading && [...Array(5)].map((item, i) => <LoaderComponent key={i}/>)

	const content = !isLoading && vacancies.map((item: IData) => (
		<Card key={item.id}
			  {...item}
			item = {item}
		/>
	))

	return (
		<div className='content'>
			<div className="container">
				<h1 className="title">List of vacancies</h1>
				{loading}
				{content}
			</div>
		</div>
	);
};
export default Content;
