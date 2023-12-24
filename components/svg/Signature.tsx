import React from 'react'

interface CommunicationProps {
    width?: string
    height?: string
    additionalClasses?: string
    fill?: string
}

const Signature = ({fill = 'white', width = '222', height = '195', additionalClasses = ''}: CommunicationProps) => {
  return (
    <svg width={width} height={height} className={additionalClasses} viewBox="0 0 310 272" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_239)">
        <path d="M56.8991 168.509C48.8592 173.772 41.7287 177.818 35.3216 182.833C25.649 190.388 13.6202 190.573 2.72814 194.247C2.00476 194.495 0.930024 193.628 0.0206299 193.298C0.640671 192.349 1.05403 190.842 1.90142 190.532C9.58993 187.746 17.4438 185.393 25.091 182.482C36.7684 178.024 46.1724 170.036 55.2456 161.759C57.8498 159.386 60.0613 155.609 60.6193 152.162C62.5415 140.438 63.6162 128.57 65.1043 116.763C65.9104 110.406 66.8818 104.069 67.7705 97.712C67.0471 97.4643 66.303 97.2167 65.5797 96.969C64.0709 100.375 62.2934 103.698 61.1774 107.248C60.6813 108.817 61.1567 110.984 61.8801 112.553C63.8642 116.928 63.6369 121.077 61.6321 125.329C60.4127 127.909 58.3252 129.251 55.907 128.26C54.4809 127.682 53.0342 125.453 52.8688 123.822C51.9388 115.174 53.3649 106.938 57.0438 98.8679C62.4381 87.0616 67.2538 75.0075 72.0488 62.9535C73.6815 58.8667 74.1982 54.3258 75.7897 50.2183C76.3684 48.7116 78.6005 47.824 80.068 46.6475C80.9774 48.3813 82.7962 50.1977 82.6101 51.8283C81.8454 58.9286 80.5847 65.967 79.3653 73.0054C76.079 91.7263 72.7101 110.447 69.4033 129.168C68.1838 136.083 67.0264 143.018 65.559 151.563C82.1348 131.191 97.7185 112.222 107.35 89.3114C113.571 74.5122 119.937 59.5891 118.697 42.9942C117.684 29.4953 113.757 17.4 100.612 10.6299C92.9648 6.68759 85.1936 5.01572 76.2237 6.2335C66.4684 7.55449 57.6225 10.4235 49.1486 15.0676C32.9862 23.943 21.6394 37.2355 14.1162 53.7685C5.58033 72.5307 7.29578 92.5932 7.64714 112.408C7.66781 114.101 9.11457 116.619 10.582 117.259C13.4549 118.559 14.5089 115.731 15.749 113.667C22.1561 103.14 22.8795 91.7469 21.04 79.9406C20.73 77.9385 19.8206 75.957 19.8206 73.9755C19.8206 72.4894 20.854 71.0239 21.4121 69.5378C22.3628 70.7143 23.8095 71.7463 24.1402 73.0673C25.029 76.6794 25.773 80.374 25.959 84.0687C26.2484 90.2402 26.4551 96.4736 25.9177 102.604C25.1736 111.025 22.1561 118.641 14.2816 122.976C8.78388 126.01 5.99369 124.896 3.84422 119.302C2.6248 116.144 1.36405 112.759 1.26071 109.456C0.682007 92.0153 0.785348 74.636 7.15111 57.9172C18.5185 27.906 39.0419 7.78154 70.788 1.32107C86.2477 -1.83692 101.79 0.0826467 113.488 12.921C118.841 18.8035 121.693 25.7387 123.202 33.8504C128.204 60.6211 118.035 83.532 105.531 105.638C98.3385 118.352 89.4513 130.138 80.936 142.089C77.9805 146.238 74.2396 149.994 70.2713 153.194C64.4636 157.858 62.3761 164.154 61.2394 170.924C58.3665 187.993 55.101 205.042 53.1995 222.236C51.9594 233.444 52.8688 244.879 52.8275 256.189C52.8275 260.318 52.9102 264.446 52.7035 268.553C52.6415 269.73 51.6701 270.844 51.1327 271.979C50.2646 271.154 49.0659 270.493 48.5905 269.482C45.573 262.98 46.1724 256.128 47.0198 249.296C47.4745 245.601 48.5492 241.886 48.4459 238.212C48.1565 226.199 50.0993 214.496 52.2488 202.731C54.2536 191.771 55.3076 180.625 56.9198 168.447L56.8991 168.509Z" fill={fill}/>
        <path d="M141.948 168.22C138.207 172.967 134.838 177.198 131.531 181.471C130.911 182.276 130.746 183.618 129.981 184.092C127.48 185.62 124.752 187.993 122.231 187.849C120.433 187.746 118.821 184.134 117.105 182.069C116.692 182.627 115.989 183.803 115.038 184.732C107.164 192.41 104.332 191.729 100.839 181.182C97.1398 184.299 93.7916 187.787 89.8233 190.305C83.4989 194.289 81.1221 193.112 78.4352 185.62C75.3143 189.294 72.2555 192.926 69.1759 196.559C68.7419 197.075 68.3492 197.674 67.8532 198.107C64.7736 200.708 60.64 201.327 59.6273 199.222C58.0152 195.816 59.896 192.328 62.3555 191.296C66.2411 189.645 68.3079 186.693 70.23 183.659C77.1331 172.699 85.483 162.606 89.8853 150.139C91.1047 146.671 93.4195 143.575 95.1763 140.293C96.6231 137.569 98.4832 135.732 101.687 137.61C104.849 139.447 102.844 141.8 101.935 143.823C98.6072 151.315 94.9283 158.663 91.8488 166.28C90.0093 170.862 89.0792 175.795 89.2239 181.223C90.7534 179.551 92.3241 177.9 93.7709 176.166C95.3003 174.35 96.4577 172.079 98.2972 170.676C100.033 169.334 102.513 167.972 104.498 168.178C107.68 168.488 108.466 171.46 108.507 174.432C108.507 175.774 108.693 177.116 108.9 179.696C112.083 175.258 114.377 171.563 117.208 168.344C118.366 167.023 120.887 165.846 122.417 166.197C123.574 166.465 124.298 169.19 124.98 170.924C125.414 172.059 125.414 173.38 125.682 175.072C129.754 170.635 133.226 166.486 137.091 162.771C141.865 158.168 144.904 158.519 148.748 163.906C150.277 166.052 151.373 168.529 152.695 170.944C166.977 159.055 180.515 147.043 194.879 136.144C204.903 128.549 216.064 122.439 226.79 115.793C250.166 101.324 275.608 91.0657 300.617 79.9405C302.787 78.9704 305.102 78.2479 307.437 77.7113C308.181 77.5462 309.132 78.3099 309.979 78.6608C309.504 79.4864 309.215 80.7248 308.512 81.055C301.402 84.4194 294.292 87.8045 287.038 90.8593C259.529 102.459 233.156 116.206 208.665 133.296C203.084 137.197 197.979 141.8 192.915 146.361C183.512 154.824 174.314 163.514 165.014 172.1C163.753 173.256 162.471 174.391 161.128 175.465C152.551 182.441 147.921 179.2 143.498 171.192C143.085 170.428 142.692 169.665 141.948 168.261V168.22Z" fill={fill}/>
        </g>
        <defs>
        <clipPath id="clip0_2_239">
        <rect width="310" height="272" fill={fill}/>
        </clipPath>
        </defs>
    </svg>
  )
}

export default Signature
