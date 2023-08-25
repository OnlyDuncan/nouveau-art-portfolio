"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, ListGroup, ListGroupItem, NavLink } from 'reactstrap';
import { ArtworkModal } from './';
import {
    selectAllTraditionalPaintings,
    selectAllSculptures,
    selectAllDigitalArt,
    selectAllOtherArt
} from './PortfolioSlice';

const Portfolio = () => {

    const traditionalPaintings = useSelector(selectAllTraditionalPaintings);
    const sculptures = useSelector(selectAllSculptures);
    const digitalArt = useSelector(selectAllDigitalArt);
    const otherArt = useSelector(selectAllOtherArt);

    return (
        <>
            <Row style={{ width: '60vw' }}>
                <Col sm='3'>
                    <ListGroup>
                        <ListGroupItem className='list-group-item'>
                            <NavLink href='#traditionalPaintings' className="text-white">
                                Traditional Paintings
                            </NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item'>
                            <NavLink href='#sculptures' className="text-white">
                                Sculptures
                            </NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item'>
                            <NavLink href='#digitalArt' className="text-white">
                                Digital Art
                            </NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item'>
                            <NavLink href='#otherArt' className="text-white flex-wrap">
                                Other Art
                            </NavLink>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm='9' style={{ height: '60vw', overflowY: 'scroll' }}>
                    <Row className='ms-auto' id='traditionalPaintings'>
                        <h1 className="text-white">
                            Traditional Paintings
                        </h1>                   
                        {traditionalPaintings.map((traditionalPainting) => {
                            return (
                                <Col md='4' key={traditionalPainting.id}>
                                    <ArtworkModal artwork={traditionalPainting} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='sculptures'>
                        <h1 className="text-white">
                            Sculptures
                        </h1>
                        {sculptures.map((sculpture) => {
                            return (
                                <Col md='4' key={sculpture.id}>
                                    <ArtworkModal artwork={sculpture} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='digitalArt'>
                        <h1 className="text-white">
                            Digital Art
                        </h1>
                        {digitalArt.map((digitalArt) => {
                            return (
                                <Col md='4' key={digitalArt.id}>
                                    <ArtworkModal artwork={digitalArt} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='otherArt'>
                        <h1 className="text-white">
                            Other Art
                        </h1>
                        {otherArt.map((otherArt) => {
                            return (
                                <Col md='4' key={otherArt.id}>
                                    <ArtworkModal artwork={otherArt} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default Portfolio;