import { FC, ReactElement } from "react";
import { Aligner } from "@Components/Common/Aligner/Aligner";
import { Footer } from "@Components/Common/Footer/Footer";
import { Navigation } from "@Components/Common/Navigation/Navigation";
import { NameTitle } from "@Components/Common/Title/NameTitle";
import { Title } from "@Components/Common/Title/Title";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@Components/Common/ThemeToggle/ThemeToggle";;
import { EduList } from "./EduList";
import data from "./EducationData.json";
import classes from "./Education.module.css";

export const Education: FC = (): ReactElement => {
    const header: string[] = data.header;
    const education: Education[] = data.education;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="Kartik | " page="education" />
                    <ThemeToggle />
                </div>
                <Navigation />
                {header.map((item, idx) => (
                    <Paragraph key={idx}>{item}</Paragraph>
                ))}
                <div className={classes.workexContainer}>
                    <Title>💼 Education</Title>
                    <EduList education={education} />
                </div>

                <Footer />
            </>
        </Aligner>
    );
};
