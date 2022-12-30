import { FC, ReactElement } from "react";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { Subtitle } from "@Components/Common/Title/Subtitle";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import classes from "./Experience.module.css";

type Props = {
    experience: Experience[];
};

export const WorkEx: FC<Props> = ({ experience }): ReactElement => {
    return (
        <div className={classes.timelineContainer}>
            {experience.map((obj, index) => (
                <div className={classes.workex} key={index}>
                    <LinkTo target="_blank" href={obj.url} isArrow>
                        <Subtitle className={classes.companyName}>
                            {obj.company}
                        </Subtitle>
                    </LinkTo>

                    <h6 className={classes.secondaryText}>{obj.role}</h6>
                    <h6 className={classes.secondaryText}>{obj.duration}</h6>
                    <Paragraph>{obj.description}</Paragraph>
                    <Paragraph>
                        <span className={classes.skills}>Skills: </span>
                        {obj.skills}
                    </Paragraph>
                    <span className={classes.circle} />
                </div>
            ))}
        </div>
    );
};
