import React from 'react';

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div className="social">
            <ul>
                <li>
                    <a 
            href="https://www.linkedin.com/in/farahzahi"
            target="_blank"
            rel="noopener noreferrer"
            title= "linkedin"><FaLinkedinIn className="icon__links"/>
            </a>
                </li>
                <li>
                <a 
            href="https://github.com/FarahMint"
            target="_blank"
            rel="noopener noreferrer"
            title= "github repo"><FaGithub className="icon__links"/>
            </a>
            </li>
            </ul>
        </div>
    )
}
