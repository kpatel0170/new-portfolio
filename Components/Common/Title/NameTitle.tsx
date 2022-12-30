import { FC, ReactElement } from "react";
import classes from "./Title.module.css";

interface Props{
    name: string,
    page: string
}

export const NameTitle: FC<Props> = ({name, page}):ReactElement=>{
    return(
        <>
            <div className={classes.nameTitleContainer}>
                <h1 className={classes.name}>{name}</h1>
                <h1 className={classes.page}>{page}</h1>
            </div>
        </>
    )
}