import React from 'react'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap'
import { SiGithub } from "react-icons/si";
import CSS from 'csstype';

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
        <Row className="project" style={props.alternate ? { flexDirection: 'row-reverse', textAlign: 'left' } : { flexDirection: 'row', textAlign: 'right' }}>
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
                <div className="project-content" style={props.alternate ? { position: 'relative', left: '18%', marginLeft: '-18%' } : { position: 'relative', right: '18%', marginRight: '-18%' }}>
                    <h3 className="project-title">
                        <a href={props.link} target={'_blank'} rel="noreferrer">{props.title}</a>
                    </h3>
                    <div className="project-description">
                        <p>{props.description}</p>
                    </div>
                    <ul className="project-tech-list" style={props.alternate ? { justifyContent: 'flex-start', width: '90%' } : { justifyContent: 'flex-end'}}>
                        {props.tech_list.map(i => (
                            <li key={i} style={props.alternate ? { margin: '0px 20px 5px 0px' } : { margin: '0px 0px 5px 20px' }}>{i}</li>
                        ))}
                    </ul>
                    <div className="project-button">
                        <a href={props.link} target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'2em'} /></a>
                    </div>
                </div>
            </Col>
        </Row >
    )
}
