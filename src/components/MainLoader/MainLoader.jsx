import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import s from './MainLoader.module.css';
import { selectIsLoading } from '../../redux/loadingSlice';
export const MainLoader = () => {
  const loading = useSelector(selectIsLoading);
  return (
    <div className={s.wrapper}>
      {loading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      )}

      <h1>Loading...</h1>
    </div>
  );
};
