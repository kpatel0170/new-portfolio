import { ReactElement } from "react";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import classes from "./Footer.module.css";

export const Footer = (): ReactElement => {
    return (
        <>
            <footer className={classes.container}>
                <span>
                    © 2023{" "}
                    <LinkTo
                        className={classes.link}
                        href="https://github.com/kartikpatel0170/"
                        isActive
                        target="_blank"
                    >
                        Kartik Patel
                    </LinkTo>
                    ! All rights reserved.
                </span>
            </footer>
        </>
    );
};
