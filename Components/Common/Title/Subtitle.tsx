import { FC, ReactElement } from "react";
import classes from "./Title.module.css";

export const Subtitle: FC<GeneralProps> = ({children, style, className}):ReactElement=>{
    return(
        <>
            <h2 style={style} className={`${classes.subTitle} ${className}`}>{children}</h2>
        </>
    )
}