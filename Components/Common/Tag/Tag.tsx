import { FC, ReactElement } from "react";
import classes from "./Tag.module.css";

export const Tag: FC<GeneralProps> = ({children, style, className}):ReactElement=>{
    return(
        <>
            <div style={style} className={`${classes.tagWrapper} ${className}`}>
                <span className={classes.tagText}>{children}</span>
            </div>
        </>
    )
}