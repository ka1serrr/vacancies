import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { favSlice } from '@/slices/favSlice/favSlice';
import { paginationSlice } from '@/slices/paginationSlice/paginationSlice';
import { userSlice } from '@/slices/userSlice/useSliceTypes';

const rootAction = {
  ...favSlice.actions,
  ...paginationSlice.actions,
  ...userSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
