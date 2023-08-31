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
            height: 'auto',
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
                                src="/Images/SiteImages/Close.svg"
                                style={{ width: "3vw", height: "3vw" }}
                            />
                        </button>
                    </div>
                    <div className="flex justify-center align-center" style={{ marginBottom: "3vw" }}>
                        <div style={{ marginRight: "2vw" }}>
                            <Image
                                src={image}
                                alt="Artwork"
                                style={{ width: "25vw", height: "100%", border: "3px solid white" }}
                            />
                        </div>
                        <div className="flex-col" style={{ width: "25vw" }}>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw", marginBottom: "1vw" }}>Title: {name}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw", marginBottom: "1vw" }}>Medium: {medium}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw", marginBottom: "1vw" }}>Size: {size}</h2>
                            <h2 className="baltica text-white text-center" style={{ fontSiz: "2vw", marginBottom: "1vw" }}>Year: {year}</h2>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default ArtworkModal;