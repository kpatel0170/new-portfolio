import React, { FC, ReactElement } from "react";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import classes from "./SocialLinks.module.css";
import SVG from "@public/Assets/SVG";

export const SocialLinks: FC<SocialLinksProps> = ({
    links,
    style,
    className,
}): ReactElement => {
    return (
        <>
            <ul
                style={style}
                className={`${classes.listContainer} ${className}`}
            >
                {links.map((link, index) => (
                    <li className={classes.listItem} key={index}>
                        {link.svg && React.createElement(SVG[link.svg])}
                        <LinkTo
                            className={classes.link}
                            href={link.url}
                            target="_blank"
                        >
                            {link.name}
                        </LinkTo>
                        {index < links.length - 1 && <span> | </span>}
                    </li>
                ))}
            </ul>
        </>
    );
};
