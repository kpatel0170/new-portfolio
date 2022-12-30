import { FC, ReactElement } from "react";
import classes from "./Paragraph.module.css";


export const Paragraph: FC<GeneralProps> = ({ children, style, className }): ReactElement => {
    return (
        <p style={style} className={`${classes.paragraph} ${className}`}>
            {children}
        </p>
    );
};