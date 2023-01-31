import React from 'react'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap'
import { SiGithub } from "react-icons/si";

interface propsInterface {
    title: string;
    image_src: string;
    link: string;
    description: string;
    tech_list: string[];
    alternate: boolean
}

export default function NormalProjectCard(props: propsInterface) {
    return (
        <Row className="project" style={props.alternate ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
            <Col xs={12} md={7}>
                <div className="project-image">
                    <a href={props.link} target={'_blank'} rel="noreferrer">
                        <Image
                            src={props.image_src}
                            alt={`A screenshot of ${props.title} homepage`}
                            className="image"
                            fill
                        />
                    </a>
                </div>
            </Col>
            <Col>
                <div className="project-content">
                    <h3 className="project-title">
                        <a href={props.link} target={'_blank'} rel="noreferrer">{props.title}</a>
                    </h3>
                    <div className="project-description">
                        <p>{props.description}</p>
                    </div>
                    <ul className="project-tech-list">
                        {props.tech_list.map(i => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                    <div className="project-button">
                        <a href={props.link} target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
