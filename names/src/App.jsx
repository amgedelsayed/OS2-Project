import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Shape from "./commponents/Shape";

const random = (
  start = Number.MIN_SAFE_INTEGER,
  end = Number.MAX_SAFE_INTEGER
) => Math.round(Math.random() * (start - end) + end);

function App() {
  const [childElements, setChildElements] = useState([]);
  const [names] = useState([
    "امجد السيد عبدالعزيز السيد",
    "احمد يسرى عبدالمنعم البندارى",
    "امجد صلاح الدين مصلحى",
    "احمد محمد سنوسى عبدالجواد",
  ]);
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

  return (
    <div className={styles.page}>
      <div className={styles.names}>
        {names.map((name, index) => (
          <div key={index} className={styles.name}>{name}</div>
        ))}
      </div>
      {childElements}
    </div>
  );
}

export default App;
