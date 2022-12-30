import { FC, ReactElement } from "react";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { Subtitle } from "@Components/Common/Title/Subtitle";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import classes from "./Education.module.css";

type Props = {
    education: Education[];
};

export const EduList: FC<Props> = ({ education }): ReactElement => {
    return (
        <div className={classes.timelineContainer}>
            {education.map((obj, index) => (
                <div className={classes.workex} key={index}>
                    <LinkTo target="_blank" href={obj.url} isArrow>
                        <Subtitle className={classes.companyName}>
                            {obj.institute}
                        </Subtitle>
                    </LinkTo>

                    <h6 className={classes.secondaryText}>{obj.course}</h6>
                    <h6 className={classes.secondaryText}>{obj.duration}</h6>
                    <Paragraph>{obj.description}</Paragraph>
                    <Paragraph>
                        <span className={classes.skills}>Achievements: </span>
                        {obj.achievement}
                    </Paragraph>
                    <span className={classes.circle} />
                </div>
            ))}
        </div>
    );
};
