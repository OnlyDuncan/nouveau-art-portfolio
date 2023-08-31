"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const ArtworkModal = ({ artwork }) => {
    const { name, image, medium, size, year } = artwork;
    const [isOpen, setIsOpen] = useState(false);
    
    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404355',
            width: '70vw',
            height: '80vw',
            position: 'relative'
        }
    }

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                <div style={{ width: "10vw", height: "15vw" }}>
                    <Image
                        alt="Artwork"
                        src={image}
                        placeholder="blur"
                        loading="lazy"
                        quality={100}
                        style={{ oveflowX: "hidden", objectFit: "cover", width: "100%", height: "15vw", border: "2px solid white" }}
                    />
                </div>
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="flex-col">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto" style={{ padding: "2vw" }}>
                            <Image
                                src="/SiteImages/Close.svg"
                                style={{ width: "5vw", height: "5vw" }}
                            />
                        </button>
                    </div>
                    <div className="flex">
                        <Image
                            src={image}
                            alt="Artwork"
                            style={{ width: "25vw", height: "100%", padding: "2vw", border: "5px solid white" }}
                        />
                        <div className="flex-col">
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw" }}>Title: {name}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw" }}>Medium: {medium}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw" }}>Size: {size}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw" }}>Year: {year}</h2>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default ArtworkModal;