import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Shape from "./commponents/Shape";
import axios from "axios";

const random = (
  start = Number.MIN_SAFE_INTEGER,
  end = Number.MAX_SAFE_INTEGER
) => Math.round(Math.random() * (start - end) + end);

function App() {
  const [childElements, setChildElements] = useState([]);
  const [visits, setVisits] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKey((key) => ++key);
      const newChildElement = (
        <Shape key={key} index={random(0, 1)} postion={random(10, 90)} />
      );
      setChildElements((prevElements) => [...prevElements, newChildElement]);
      const removeTimerId = setTimeout(() => {
        setChildElements((prevElements) =>
          prevElements.filter((element) => element.key !== newChildElement.key)
        );
      }, 15000);
      return () => clearTimeout(removeTimerId);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [childElements, key]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/register`)
      .then((response) => response.data)
      .then((res) => setVisits(res.visits));
  }, []);

  return (
    <div className={styles.page}>
      <div
        className={styles.text}
      >{`The site has been visited ${visits} times`}</div>
      {childElements}
    </div>
  );
}

export default App;
