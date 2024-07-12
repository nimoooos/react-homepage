import { Link } from "react-router-dom";
import stylesheet from '../css/Resume.css'

export default function ResumeRoute() {
    const professionalSummary="Adaptive and versatile Full Stack Developer with comprehensive experience in web application development. Demonstrated success in leading projects to completion, migrating applications to new stacks, and improving user experiences. Proficient in JavaScript (React, TypeScript, jQuery, Node.js), Python, and Power Apps, with skills in tools including Node.js, Git, and Docker. Proven ability to streamline operations and contribute to collaborative development environments."
    const projects = [
        {
            "projectName": "COMP/CON",
            "repository": {
                "link": "https://github.com/massif-press/compcon/pull/2357",
                "imgAlt": "COMP/CON Pull Request",
                "imgSrc": "https://img.shields.io/badge/GitHub-Pull_Request-Black"
            },
            "technologies": "Javascript(TypeScript, Vue), Node.js, GitHub",
            "roles": [
                {
                    "role": "Open Source Contributor",
                    "longDescription": "Enhanced the open-source project COMP/CON (a companion app for LANCER RPG) by implementing a feature that provides detailed description in NPC export, while preserving original functionality. This streamlined user experience for players by reducing the need to reference an external source during gameplay.",
                    "bulletPoints": [
                        "Implemented non-breaking feature that adds expanded access to relevant information.",
                        "Reduced user reliance on external references during operation.",
                        "Followed commit guidelines and learned collaborative development practices during contribution."
                    ]
                }
            ]
        },
        {
            "projectName": "Electronic Training Resource Integration Council (eTRIC)",
            "repository": {
                "link": "",
                "imgAlt": "Decommissioned",
                "imgSrc": "https://img.shields.io/badge/Decommissioned-red"
            },
            "technologies": "Java (SpringBoot), Javascript (Angular), Database (Postgres), Docker, GitLab, Linux (WSL, Ubuntu)",
            "roles": [
                {
                    "role": "Maintainer, Transition Lead",
                    "longDescription": "Led the maintenance of eTRIC for 6 months. Faced challenges as the sole maintainer of the project with minimal documentation, and eventually led to decommissioning of eTRIC due to resource constraints. Following the determination, immediately began identifying alternate solutions to continue the functionality of the project.",
                    "bulletPoints": [
                        "Led the maintenance of eTRIC for 6 months, overcoming challenges as the sole maintainer with minimal documentation.",
                        "Strategically decommissioned eTRIC, initiating immediate efforts to identify alternative solutions for project continuity."
                    ]
                }
            ]
        },
        {
            "projectName": "Power App for Training Resource Integration Council (PATRIC)",

            "repository": {
                "link": "",
                "imgAlt": "Proprietary",
                "imgSrc": "https://img.shields.io/badge/Proprietary-lightgray"
            },
            "technologies": "Microsoft 365 Suite (Power App, SharePoint List)",
            "roles": [
                {
                    "role": "Lead Developer",
                    "longDescription": "Led development of PATRIC in accordance with regulatory and end user requirements. Utilized ODATA queries for data retrieval and implemented CRUD functionality for bids, enabling administrators and bidders to manage bids efficiently. Created user-friendly data visualization through consistent feedback cycle, facilitating resource management for 30 entities, including Joint Forces such as the US Army, Navy, Marines, and Air Force, encompassing over 300 ranges and providing visualization of bidding activities.",
                    "bulletPoints": [
                        "Led the development of PATRIC, ensuring compliance with regulatory and end-user requirements.",
                        "Implemented ODATA queries and CRUD functionality for efficient bid management by administrators and bidders.",
                        "Developed user-friendly data visualization through iterative feedback cycles.",
                        "Facilitated resource management for 30 entities, including Joint Forces branches, overseeing visualization of bidding activities for over 300 ranges."
                    ]
                }
            ]
        },
        {
            "projectName": "Tropic Lightning Week Homepage",

            "repository": {
                "link": "https://github.com/nimoooos/Guadalcanal-Cup-Scoring",
                "imgAlt": "Guadalcanal-Cup-Scoring Repository",
                "imgSrc": "https://img.shields.io/badge/GitHub-black"
            },
            "technologies": "Python (Flask), SQL (Postgres), HTML (CSS, bootstrap, Javascript), render.com",
            "roles": [
                {
                    "role": "Development Lead",
                    "longDescription": "Developed a web-based scoring application for managing scores in a sports tournament involving 20 teams and 18 events. Implemented CRUD operations and score calculation algorithms based on team placements and event weights. Identified bottleneck and optimized load time by implementing snapshotting for database access, resulting in an 85% reduction in load time. Implemented CSV export functionality for quick and easy data backup and sharing.",
                    "bulletPoints": [
                        "Developed a real-time web-based scoring application for 20 teams across 18 events",
                        "Implemented CRUD operations and score calculation algorithms",
                        "Identified and optimized database access bottleneck, reducing load time by up to 85%",
                        "Added CSV export functionality to meet user request"
                    ]
                }
            ]
        },
        
        {
            "projectName": "DFAC Dash",
            "repository": {
                "link": "",
                "imgAlt": "Proprietary",
                "imgSrc": "https://img.shields.io/badge/Proprietary-lightgray"
            },
            "technologies": "Javascript (React-CRA, bcrypt, Axios(REST API), Express, Node.js), Database (MongoDB, Postgres), HTML (CSS, bootstrap), GitHub, Docker",
            "roles": [
                {
                    "role": "Frontend Developer",
                    "longDescription": "Contributed to the development of a web application aimed at optimizing operations for military Dining Facilities (DFACs), facilitating the seamless handling of to-go orders from receipt to handoff. Primarily worked on frontend, attempting to minimize the number of clicks needed to perform primary function. Produced during Bravo 11 Hackathon.",
                    "bulletPoints": [
                        "Competed in Bravo 11 Hackathon, contributing to the week-long development of the web app",
                        "Reduced friction and streamlined user flow to improve efficiency and usability",
                        "Contributed to API design to ensure seamless communication between frontend and backend systems",
                        "Authored installation instructions in README.md, facilitating team collaboration, onboarding processes, and streamlined development practices"
                    ]
                },
                {
                    "role": "Database Transition Lead",
                    "longDescription": "Played an instrumental role in upgrading the database from PostgreSQL to MongoDB, enhancing code readability, maintainability, and scalability. This upgrade also involved the design and implementation of a REST API to enable efficient communication between components.",
                    "bulletPoints": [
                        "Adopted MongoDB for its JSON storage format, improving data compatibility with web standards",
                        "Refactored raw SQL queries and implemented ORM, enhancing code readability and maintainability",
                        "Designed and implemented a REST API to facilitate efficient communication between components"
                    ]
                }
            ],
        }
    ]

    return (
        <div className="container container-md border border-secondary" style={stylesheet}>
            <div className="todo d-none">
                <h1>TODO</h1>
                <li>Turn entries into reusable components</li>
                <li>Implement CSS for said components</li>
                <li>Make contact info section smaller</li>
            </div>

            <h1>Soomin Song</h1>
            <p className="contact-info">Wahiawa, HI 96786 | 510-606-0338 | <a target="_blank" rel="noreferrer" href="mailto:song.soomin.teapot418@gmail.com">song.soomin.teapot418@gmail.com</a> | <a href="https://nimoooos.work">https://nimoooos.work</a></p>
            <p>{professionalSummary}</p>
            <hr />
            <h2>Experiences</h2>
            <h3>Full Stack Developer - Lightning Labs (Jul 2023 - Current)</h3>
            <ul>
                <li>Led multiple projects from start to finish</li>
                <li>Coordinated with stakeholders to identify requirements</li>
                <li>Navigated regulations to find optimal solutions</li>
            </ul>
            <hr/>
            <h2>Projects</h2>
            {projects.map((x) => {
                return (<>
                    <h4 className="project">{x.projectName+" "}
                        {
                            x.repository.link ?
                                <Link to={x.repository.link}>
                                    <img className="shieldBadge" alt={x.repository.imgAlt} src={x.repository.imgSrc} />
                                </Link> :
                                <img className="shieldBadge" alt={x.repository.imgAlt} src={x.repository.imgSrc} />
                        }
                    </h4>
                    <h6 className="techStack">{x.technologies}</h6>
                    {x.roles.map((y) => {
                        return (
                            <>
                                <h5 className="jobTitle">{y.role}</h5>
                                {/* <p>{y.longDescription}</p> */}
                                <ul>
                                    {y.bulletPoints.map((z) => {
                                        return <li>{z}</li>
                                    })}
                                </ul>
                            </>
                        )
                    })}
                </>
                )
            })}

        </div>

    )
}