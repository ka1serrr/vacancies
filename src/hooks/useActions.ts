import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {favSlice} from "../store/slice";

const rootAction = {
    ...favSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
}