export const GoldMedal = () => {
  return (
    <svg fill='none' height='45' viewBox='0 0 45 45' width='45' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_66_478)'>
        <circle cx='17' cy='17' fill='url(#paint0_linear_66_478)' r='15.5' stroke='#765C00' />
        <circle cx='17' cy='17' fill='#A88300' r='11.7089' />
        <mask height='24' id='mask0_66_478' maskUnits='userSpaceOnUse' width='25' x='5' y='6'>
          <circle cx='17.625' cy='18.25' fill='#C28B37' r='11.7361' />
        </mask>
        <g mask='url(#mask0_66_478)'>
          <circle cx='17' cy='17' fill='#C09525' r='11.7361' />
        </g>
        <path
          d='M17.0633 8.83545L19.595 13.8987L24.6583 14.5317L21.1815 18.4304L22.1266 24.0253L17.0633 21.4937L12 24.0253L12.9536 18.4304L9.46838 14.5317L14.5317 13.8987L17.0633 8.83545Z'
          fill='url(#paint1_linear_66_478)'
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='44.536'
          id='filter0_d_66_478'
          width='44.536'
          x='0.216502'
          y='0.216502'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dx='5.48449' dy='5.48449' />
          <feGaussianBlur stdDeviation='3.13399' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0' />
          <feBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow_66_478' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_66_478' mode='normal' result='shape' />
        </filter>
        <linearGradient gradientUnits='userSpaceOnUse' id='paint0_linear_66_478' x1='17' x2='17' y1='2' y2='32'>
          <stop stopColor='#FFC600' />
          <stop offset='1' stopColor='#FFDE69' />
        </linearGradient>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint1_linear_66_478'
          x1='17.0633'
          x2='17.0633'
          y1='8.83545'
          y2='24.0253'
        >
          <stop stopColor='#FFFCDD' />
          <stop offset='1' stopColor='#FFE896' />
        </linearGradient>
      </defs>
    </svg>
  );
};
