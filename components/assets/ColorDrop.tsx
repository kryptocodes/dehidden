import React from 'react'

interface ColorDropProps {
    className?: string
}

const ColorDrop: React.FC<ColorDropProps> = ({className}) => {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1958"
            height="1958"
            className={className}
            fill="none"
            viewBox="0 0 1958 1958"
          >
            <g
              filter="url(#filter0_f_0_6)"
              transform="rotate(59.656 978.783 978.783)"
            >
              <circle cx="978.783" cy="978.783" r="478.573" fill="#FFBC57"></circle>
              <circle
                cx="978.783"
                cy="978.783"
                r="478.573"
                fill="url(#paint0_radial_0_6)"
              ></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_0_6"
                width="1957.3"
                height="1957.3"
                x="0.133"
                y="0.133"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_0_6"
                  stdDeviation="250"
                ></feGaussianBlur>
              </filter>
              <radialGradient
                id="paint0_radial_0_6"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(-41.552 1874.12 -268.062) scale(738.563 62980)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EE7C65"></stop>
                <stop offset="0.219" stopColor="#F7C39D"></stop>
                <stop offset="0.396" stopColor="#EAD899"></stop>
                <stop offset="0.578" stopColor="#87D5FF"></stop>
                <stop offset="0.792" stopColor="#9281F5"></stop>
                <stop offset="1" stopColor="#FA5284"></stop>
              </radialGradient>
            </defs>
          </svg>
        );
}

export default ColorDrop