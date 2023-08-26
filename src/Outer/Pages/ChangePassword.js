import React from 'react'
import OuterTemplate from '../Utils/OuterTemplate'
import OuterInput from '../Utils/OuterInput'
import OuterButton from '../Utils/OuterButton'
import lock_gif from '../Images/lock.gif'
export default function ChangePassword() {
  return (
      <OuterTemplate image2={lock_gif} title="RESET PASSWORD">
          <OuterInput type="password" placeholder="NEW PASSWORD" >
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
          <OuterInput type="password" placeholder="CONFIRM PASSWORD" >
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
                      fill='grey'
                  />
                  <path
                      d="M6.32029 9.16666V5.83333C6.32029 4.72826 6.76465 3.66845 7.5556 2.88705C8.34655 2.10565 9.41932 1.66666 10.5379 1.66666C11.6565 1.66666 12.7292 2.10565 13.5202 2.88705C14.3111 3.66845 14.7555 4.72826 14.7555 5.83333V9.16666"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"

                  />
              </svg>
          </OuterInput>
          <OuterButton label="SUBMIT" redirect="/" />
      </OuterTemplate>
  )
}
