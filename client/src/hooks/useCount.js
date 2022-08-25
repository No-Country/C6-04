import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => setCount(count + 1);

  return [count, {handleCount}];
};

export default useCount;
