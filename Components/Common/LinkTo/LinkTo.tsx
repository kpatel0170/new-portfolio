import { FC, CSSProperties, ReactElement } from "react";
import SVG from "@public/Assets/SVG";
import classes from "./LinkTo.module.css";

type Props = {
    children: ReactElement | string;
    href: string;
    target?: string;
    isActive?: boolean;
    isArrow?: boolean;
    style?: CSSProperties;
    className?: string;
};

export const LinkTo: FC<Props> = ({
    children,
    href,
    target,
    isActive,
    isArrow,
    style,
    className,
}): ReactElement => {
    return (
        <>
            <a
                href={href}
                rel="noreferrer"
                target={target}
                style={style}
                className={`${
                    isActive ? classes.linkWrapperActive : classes.linkWrapper
                } ${className}`}
            >
                <span>{children} {isArrow && <SVG.TopRight />}</span>
            </a>
        </>
    );
};
