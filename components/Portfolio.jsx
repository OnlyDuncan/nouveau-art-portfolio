"use client";

import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { useSelector } from 'react-redux';
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
            <div style={{ width: '60vw' }}>
                <div className='flex justify-center align-center'>
                    <a href='#traditionalPaintings' className="text-white baltica mx-5" style={{ fontSize: '1.5vw' }}>
                        Paintings
                    </a>
                    <a href='#sculptures' className="text-white baltica mx-5" style={{ fontSize: '1.5vw' }}>
                        Sculptures
                    </a>
                    <a href='#digitalArt' className="text-white baltica mx-5" style={{ fontSize: '1.5vw' }}>
                        Digital Art
                    </a>
                    <a href='#otherArt' className="text-white baltica mx-5" style={{ fontSize: '1.5vw' }}>
                        Other Art
                    </a>
                </div>
                <div>
                    <ImageList sx={{ width: '60vw', height: '60vw', overflowY: 'scroll', marginTop: '3vw' }} cols={4} rowHeight='20vw'>
                        <ImageListItem key="Subheader" cols={4}>
                            <h1 className="scribe text-white bg-inherit" id="traditionalPaintings" component="div" style={{ fontSize: '3vw' }}>Paintings</h1>
                        </ImageListItem>
                        {traditionalPaintings.map((traditionalPainting) => {
                            return (
                                <ImageListItem key={traditionalPainting.id}>
                                    <ArtworkModal artwork={traditionalPainting} />
                                </ImageListItem>
                            );
                        })}
                        <ImageListItem key="Subheader" cols={4}>
                            <h1 className="scribe text-white bg-transparent" id="sculptures" component="div" style={{ fontSize: '3vw', marginTop: '2vw' }}>Sculptures</h1>
                        </ImageListItem>
                        {sculptures.map((sculpture) => {
                            return (
                                <ImageListItem key={sculpture.id}>
                                    <ArtworkModal artwork={sculpture} />
                                </ImageListItem>
                            );
                        })}
                        <ImageListItem key="Subheader" cols={4}>
                            <h1 className="scribe text-white bg-transparent" id="digitalArt" component="div" style={{ fontSize: '3vw', marginTop: '2vw' }}>Digital Art</h1>
                        </ImageListItem>
                        {digitalArt.map((digitalArt) => {
                            return (
                                <ImageListItem key={digitalArt.id}>
                                    <ArtworkModal artwork={digitalArt} />
                                </ImageListItem>
                            );
                        })}
                        <ImageListItem key="Subheader" cols={4}>
                            <h1 className="scribe text-white bg-transparent" id="otherArt" component="div" style={{ fontSize: '3vw', marginTop: '2vw' }}>Other Art</h1>
                        </ImageListItem>
                        {otherArt.map((otherArt) => {
                            return (
                                <ImageListItem key={otherArt.id}>
                                    <ArtworkModal artwork={otherArt} />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                </div>
            </div>
        </>
    )
}

export default Portfolio;