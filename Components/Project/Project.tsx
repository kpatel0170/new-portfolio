import { FC, ReactElement } from "react";
import { Aligner } from "@Components/Common/Aligner/Aligner";
import { Footer } from "@Components/Common/Footer/Footer";
import { Navigation } from "@Components/Common/Navigation/Navigation";
import { SocialLinks } from "@Components/Common/SocialLinks/SocialLinks";
import { NameTitle } from "@Components/Common/Title/NameTitle";
import { Title } from "@Components/Common/Title/Title";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@Components/Common/ThemeToggle/ThemeToggle";
// import { Project } from "./Project";
import { ProjectItem } from "./ProjectItem";
import { codingProfilesLinks } from "@Components/Common/SocialLinks/LinkData";
import data from "./ProjectData.json";
import classes from "./Project.module.css";

export const Project: FC = (): ReactElement => {
    const header: string[] = data.header;
    const projectList: Project[] = data.projects.list;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="Kartik | " page="project" />
                    <ThemeToggle />
                </div>
                <Navigation />
                {/* {header.map((item, idx) => (    
                    <Paragraph key={idx}>{item}</Paragraph>
                ))} */}
                <div className={classes.projects}>
                    <Title>🛠️ Projects</Title>
                    <Paragraph>{data.projects.text}</Paragraph>
                    {projectList.map((project, index) => (
                        <ProjectItem
                            key={index}
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            links={project.links}
                        />
                    ))}
                </div>
                
                <div className={classes.profiles}>
                    <Title>🎯 Coding Profiles</Title>
                    <Paragraph>{data.codingProfiles}</Paragraph>
                    <SocialLinks
                        className={classes.socialLinks}
                        links={codingProfilesLinks}
                    />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
