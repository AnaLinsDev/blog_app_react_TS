import styles from "./Avatar.module.css";
import {ImgHTMLAttributes} from 'react'


/* 
extends ImgHTMLAttributes<HTMLImageElement> 
Permite que todos os atributos originais da img, possam ser recebidos como props
*/
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
      alt={props.alt}
    />
  );
}
