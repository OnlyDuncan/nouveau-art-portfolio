"use client";

import React from "react";
import Image from "next/image";

const ContactMe = () => {

    return (
        <div className="flex-col justify-center align-center" style={{ width: "60vw" }}>
            <p className="baltica text-white text-center" style={{ fontSize: "2vw" }}>
                For inquiries about pricing, piece availability, exhibitions, commissions, or prints, send me an email and I will get back to you as soon as possible. Thank you!
            </p>
            <div className="flex justify-center align-center" style={{ marginTop: "10vw" }}>
                <h2 className="baltica text-center text-white" style={{ fontSize: "3vw" }}>
                    Email:&nbsp;
                </h2>
                <a href="mailto: Duncan.C.Payne@gmail.com" className="baltica text-center text-white underline" style={{ fontSize: "3vw" }}>
                    Duncan.C.Payne@gmail.com
                </a>
            </div>
            <div className="flex justify-center align-center" style={{ marginTop: "25vw" }}>
                <a href="https://www.linkedin.com/in/duncan-payne-3493201ba/" target="_blank">
                    <Image
                        src="/Images/SiteImages/LinkedIn.svg"
                        alt="LinkedIn Logo"
                        className="p-3"
                        width={0}
                        height={0}
                        style={{ width: "13vw", height: "100%" }}
                    />
                </a>
                <a href="https://www.instagram.com/duncan.payne.art/" target="_blank">
                    <Image
                        src="/Images/SiteImages/Instagram.svg"
                        alt="Instagram Logo"
                        className="p-3"
                        width={0}
                        height={0}
                        style={{ width: "13vw", height: "100%" }}
                    />
                </a>
                <a href="https://vercel.com/onlyduncan" target="_blank">
                    <Image
                        src="/Images/SiteImages/Vercel.svg"
                        alt="Vercel Logo"
                        className="p-3"
                        width={0}
                        height={0}
                        style={{ width: "13vw", height: "100%" }}
                    />
                </a>
            </div>
        </div>
    )
}

export default ContactMe;