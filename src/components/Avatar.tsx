import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

/* com o uso da desestruturação, não utilizamos props dentro do parâmetro da função */

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  /*
  se a propriedade hasBorder for diferente de false, quer dizer que o componente terá borda
  const hasBorder = props.hasBorder !== false;
  */

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
