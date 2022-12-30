import { FC, ReactElement } from "react";
import { Aligner } from "@Components/Common/Aligner/Aligner";
import { Footer } from "@Components/Common/Footer/Footer";
import { Navigation } from "@Components/Common/Navigation/Navigation";
import { SocialLinks } from "@Components/Common/SocialLinks/SocialLinks";
import { NameTitle } from "@Components/Common/Title/NameTitle";
import { Title } from "@Components/Common/Title/Title";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@Components/Common/ThemeToggle/ThemeToggle";
import { WorkEx } from "./WorkEx";
import { codingProfilesLinks } from "@Components/Common/SocialLinks/LinkData";
import data from "./ExperienceData.json";
import classes from "./Experience.module.css";

export const Experience: FC = (): ReactElement => {
    const header: string[] = data.header;
    const experience: Experience[] = data.experience;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="Kartik | " page="experience" />
                    <ThemeToggle />
                </div>
                <Navigation />
                {header.map((item, idx) => (
                    <Paragraph key={idx}>{item}</Paragraph>
                ))}
                <div className={classes.workexContainer}>
                    <Title>💼 Work Experience</Title>
                    <WorkEx experience={experience} />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
