"use client";
import { CopyBtn } from "../CopyBtn/CopyBtn";
import styles from "./style.module.css";

type ColorDetails = {
  color: string;
  weight: number;
  brightness: number;
  type: string;
};

type Props = {
  details: ColorDetails;
};

export const Card = ({ details }: Props) => {
  const { color, weight, brightness, type } = details;

  const borderColor =
    type === "base" ? "2px solid #18181b" : `2px solid #${color}`;
  const backgroundColor = type === "base" ? "#f4f4f5" : `#${color}`;
  const contrastColor = brightness < 50 ? "#f4f4f5" : "#18181b";

  return (
    <div className={styles.container}>
      <div className={styles.ruler}>
        <span />
      </div>
      <div
        className={styles.card}
        style={{ border: borderColor, background: backgroundColor }}
        aria-label={`Color card for ${color}`}
      >
        <div className={styles.color} style={{ backgroundColor: `#${color}` }}>
          <div className={styles.details} style={{ color: contrastColor }}>
            <p>{color}</p>
            <CopyBtn contrast={contrastColor} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};
