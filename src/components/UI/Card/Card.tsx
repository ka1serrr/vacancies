import React, {FC} from 'react';
import {IVacancies} from "../../../types/vacancies.interface";

export const Card: FC <IVacancies> = ({id, salary, snippet, alternate_url, schedule, address, name}) => {
    return (
        <div>
            {name}
        </div>
    );
};

