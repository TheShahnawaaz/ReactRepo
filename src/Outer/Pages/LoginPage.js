import React from 'react'
import OuterTemplate from '../Utils/OuterTemplate'
import OuterInput from '../Utils/OuterInput'
import { Link } from 'react-router-dom'
import Pass_gif from '../Images/Password.gif'
import OuterButton from '../Utils/OuterButton'
export default function LoginPage() {
    return (
        <OuterTemplate image2={Pass_gif} title="WELCOME BACK">
            <OuterInput placeholder="EMAIL" type="text" name_="email">
                <svg
                    width="60"
                    height="30"
                    transform="translate(16, 9)"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.4156 23.7222V21.463C23.4156 20.2646 22.931 19.1153 22.0683 18.2679C21.2057 17.4205 20.0356 16.9444 18.8156 16.9444H9.61565C8.39565 16.9444 7.22563 17.4205 6.36296 18.2679C5.50029 19.1153 5.01565 20.2646 5.01565 21.463V23.7222"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14.2157 12.4259C16.7562 12.4259 18.8156 10.4029 18.8156 7.9074C18.8156 5.4119 16.7562 3.38889 14.2157 3.38889C11.6751 3.38889 9.61565 5.4119 9.61565 7.9074C9.61565 10.4029 11.6751 12.4259 14.2157 12.4259Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </OuterInput>
            <OuterInput placeholder="PASSWORD" type="password" name_="password">
                <svg
                    width="60"
                    height="30"
                    transform="translate(19, 13)"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="20.2445"
                        height="20"
                        transform="translate(0.415649)"
                        fill="white"
                    />
                    <path
                        d="M16.4425 9.16666H4.63325C3.70153 9.16666 2.94621 9.91286 2.94621 10.8333V16.6667C2.94621 17.5871 3.70153 18.3333 4.63325 18.3333H16.4425C17.3743 18.3333 18.1296 17.5871 18.1296 16.6667V10.8333C18.1296 9.91286 17.3743 9.16666 16.4425 9.16666Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6.32029 9.16666V5.83333C6.32029 4.72826 6.76465 3.66845 7.5556 2.88705C8.34655 2.10565 9.41932 1.66666 10.5379 1.66666C11.6565 1.66666 12.7292 2.10565 13.5202 2.88705C14.3111 3.66845 14.7555 4.72826 14.7555 5.83333V9.16666"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </OuterInput>
            <div className="outer-ForgetPass"><Link to="/forgetpassword">Forgot Password?</Link></div>
            <OuterButton label="LOGIN" type="submit" />
        </OuterTemplate>
    )
}

