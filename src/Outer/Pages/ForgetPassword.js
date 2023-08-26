import React from 'react'
import OuterTemplate from '../Utils/OuterTemplate'
import OuterInput from '../Utils/OuterInput'
import OuterButton from '../Utils/OuterButton'
import shield_gif from '../Images/shield.gif'
export default function ForgetPass() {
    return (
        <OuterTemplate image2={shield_gif} title="FORGET PASSWORD">
            <OuterInput type="text" placeholder="REGISTERED EMAIL" name="email" >
                <svg width="60"
                    height="30"
                    transform="translate(16, 12)" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_25_239)">
                        <path d="M7 5H20C20.7956 5 21.5587 5.31607 22.1213 5.87868C22.6839 6.44129 23 7.20435 23 8V17C23 17.7956 22.6839 18.5587 22.1213 19.1213C21.5587 19.6839 20.7956 20 20 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5ZM7 6C6.5 6 6.06 6.17 5.72 6.47L13.5 11.5L21.28 6.47C20.94 6.17 20.5 6 20 6H7ZM13.5 12.71L5.13 7.28C5.05 7.5 5 7.75 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V8C22 7.75 21.95 7.5 21.87 7.28L13.5 12.71Z" fill="black" />
                    </g>
                    {/* <defs>
                        <filter id="filter0_d_25_239" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_239" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_239" result="shape" />
                        </filter>
                    </defs> */}
                </svg>
            </OuterInput>
            <OuterButton label="Send" redirect="/mailsend" />
        </OuterTemplate>
    )
}

