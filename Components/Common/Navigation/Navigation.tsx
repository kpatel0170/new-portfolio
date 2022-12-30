import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import classes from "./Navigation.module.css";

const pages = [
    {
        url: "/",
        name: "Home",
    },
    {
        url: "/education",
        name: "Education",
    },
    {
        url: "/experience",
        name: "Experience",
    },
    {
        url: "/project",
        name: "Project",
    },
    {
        url: "/resume.pdf",
        name: "Resume"
    }
];

export const Navigation: FC = (): ReactElement => {
    const router = useRouter();

    return (
        <>
            <nav className={classes.navContainer}>
                <ul className={classes.list}>
                    {pages.map((page, index) => (
                        <Link key={index} href={page.url}>
                            <li
                                className={
                                    router.pathname == page.url
                                        ? classes.listItemActive
                                        : classes.listItem
                                }
                            >
                                {page.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </>
    );
};
