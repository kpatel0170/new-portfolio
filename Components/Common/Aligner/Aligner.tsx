import { FC, ReactElement } from "react";
import classes from "./Aligner.module.css";

interface Props{
    children: ReactElement
}

export const Aligner: FC<Props> = ({children}):ReactElement=>{
    return(
        <>
            <div className={classes.container}>
                {children}
            </div>
        </>
    )
}