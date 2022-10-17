import { useState } from 'react';
import { useEffect } from 'react';

function useKeyboard() {
  const [note, setNote] = useState();

  useEffect(() => {}, []);

  return { note };
}

export default useKeyboard;
