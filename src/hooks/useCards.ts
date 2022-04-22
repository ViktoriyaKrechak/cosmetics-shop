import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/productsActions';

function useCards() {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      dispatch(fetchProducts())
    })()
  }, []);

}

export default useCards;