import { useState } from 'react';

export const useToggle = (initialState = false) => {

  const [state, setState] = useState(initialState);
  
  // const toggle = useCallback(() => setState(state => !state), []);
  const toggle = () => setState( state => !state)
  
  return [state, toggle]
}