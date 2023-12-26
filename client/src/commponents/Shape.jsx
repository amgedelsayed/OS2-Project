/* eslint-disable react/prop-types */
import styles from "./shape.module.css";
const shapes = [
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
];
const Shape = ({ index, postion }) => {
  return (
    <div
      style={{ clipPath: shapes[index], left: `${postion}%` }}
      className={styles.shape}
    ></div>
  );
};

export default Shape;
