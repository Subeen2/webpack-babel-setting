import React, {useState} from 'react';

function Home() {
  const [item, setItem] = useState("hi");

  const onClick = () => {
    setItem("hello");
  }

  return <h2 onClick={onClick}>
    {item}
  </h2>;
}

export default Home;