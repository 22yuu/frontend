import SvgTagProps from '@/types/SvgTagProps';

const HamBugerIcon = ({ className }: SvgTagProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43 15H5C3.9 15 3 14.1 3 13V11C3 9.9 3.9 9 5 9H43C44.1 9 45 9.9 45 11V13C45 14.1 44.1 15 43 15Z"
        fill="url(#paint0_linear_99_2231)"
      />
      <path
        d="M43 27H5C3.9 27 3 26.1 3 25V23C3 21.9 3.9 21 5 21H43C44.1 21 45 21.9 45 23V25C45 26.1 44.1 27 43 27Z"
        fill="url(#paint1_linear_99_2231)"
      />
      <path
        d="M43 39H5C3.9 39 3 38.1 3 37V35C3 33.9 3.9 33 5 33H43C44.1 33 45 33.9 45 35V37C45 38.1 44.1 39 43 39Z"
        fill="url(#paint2_linear_99_2231)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_99_2231"
          x1="12.066"
          y1="0.0659993"
          x2="34.891"
          y2="22.891"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.237" stopColor="#3BC9F3" />
          <stop offset="0.85" stopColor="#1591D8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_99_2231"
          x1="12.066"
          y1="12.066"
          x2="34.891"
          y2="34.891"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.237" stopColor="#3BC9F3" />
          <stop offset="0.85" stopColor="#1591D8" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_99_2231"
          x1="12.066"
          y1="24.066"
          x2="34.891"
          y2="46.891"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.237" stopColor="#3BC9F3" />
          <stop offset="0.85" stopColor="#1591D8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HamBugerIcon;
