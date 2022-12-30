import { ReactElement } from "react";
import { Aligner } from "@Components/Common/Aligner/Aligner";
import { Footer } from "@Components/Common/Footer/Footer";
import { Navigation } from "@Components/Common/Navigation/Navigation";
import { SocialLinks } from "@Components/Common/SocialLinks/SocialLinks";
import { NameTitle } from "@Components/Common/Title/NameTitle";
import { Title } from "@Components/Common/Title/Title";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@Components/Common/ThemeToggle/ThemeToggle";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import { homePageSocialLinks } from "@Components/Common/SocialLinks/LinkData";
import classes from "./Home.module.css";
import data from "./HomeData.json";

export const Home = (): ReactElement => {
    const header: String[] = data.header;
    const techList: Technology[] = data.technologies.list;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="Kartik | " page="home" />
                    <ThemeToggle className={classes.themeToggle} />
                </div>
                <Navigation />
                {header.map((item, idx) => (
                    <Paragraph key={idx}>{item}</Paragraph>
                ))}
                <div className={classes.technologies}>
                    <Title>👨‍💻 Technologies</Title>
                    {techList.map((skill, index) => (
                        <Paragraph key={index} className={classes.skills}>
                            <LinkTo
                                href={skill.url}
                                target="_blank"
                                isActive
                                isArrow
                                className={classes.link}
                            >
                                {skill.name}
                            </LinkTo>
                            {skill.description}
                        </Paragraph>
                    ))}
                    <Paragraph>{data.technologies.text}</Paragraph>
                </div>
                <div className={classes.connect}>
                    <Title>🔗 Connect With Me</Title>
                    <Paragraph className={classes.paragraph}>
                        {data.connectMeText}
                    </Paragraph>
                    <SocialLinks
                        className={classes.socialLinks}
                        links={homePageSocialLinks}
                    />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
