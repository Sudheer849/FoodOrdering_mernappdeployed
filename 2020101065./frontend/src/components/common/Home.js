import { useState, useEffect } from "react";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Welcome to the Online Canteen");
  }, []);

  return <div style={{ textAlign: "center" }}>{name}</div>;
};

export default Home;
