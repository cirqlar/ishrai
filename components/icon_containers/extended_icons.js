import cn from "classnames";

import styles from "./css/home_icons.module.css";
import HomeIcon from "./home_icons";

export default function ExIcon({ icon, title, className, alignRight, text }) {
  return (
    <div className={cn("flex justify-start", { "flex-row-reverse": alignRight }, className)}>
      <HomeIcon className={cn("pb-4", alignRight ? "ml-6" : "mr-6")} icon={icon} title={title} big />
      <p className="body-text text-left">{text}</p>
    </div>
  );
}
