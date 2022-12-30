import { FC, ReactElement } from "react";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { SocialLinks } from "@Components/Common/SocialLinks/SocialLinks";
import { Subtitle } from "@Components/Common/Title/Subtitle";
import classes from "./Project.module.css";

export const ProjectItem: FC<Project> = ({
    name,
    description,
    techStack,
    links,
}): ReactElement => {
    return (
        <div className={classes.projectWrapper}>
            <Subtitle>{name}</Subtitle>
            <Paragraph>{description}</Paragraph>
            <Paragraph>
                <span className={classes.techStack}>Tech Stack: </span>
                {techStack}
            </Paragraph>
            {links && <SocialLinks isActive links={links} />}
        </div>
    );
};
