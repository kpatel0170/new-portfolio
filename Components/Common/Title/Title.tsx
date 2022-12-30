import { FC, ReactElement } from "react";
import classes from "./Title.module.css";

export const Title: FC<GeneralProps> = ({children, style, className}):ReactElement=>{
    return(
        <>
            <h2 style={style} className={`${classes.sectionTitle} ${className}`}>{children}</h2>
        </>
    )
}