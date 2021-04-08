import cn from "classnames";

import styles from "./css/home_icons.module.css";

export default function HomeIcon({ icon, title, className, big }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "flex justify-center items-center rounded-full bg-green-600 text-white",
          big ? "w-24 h-24" : "w-20 h-20"
        )}
      >
        {icon}
      </div>
      <p className={cn("text-sm pt-2 text-center", styles.title)}>{title}</p>
    </div>
  );
}
