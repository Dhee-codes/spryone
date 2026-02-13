type ArrowIconProps = {
  className?: string;
};

export const ArrowIcon = ({ className }: ArrowIconProps) => {
  return (
    <svg
      viewBox="0 0 63 28"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M61.7227 27.5V25.0967L37.333 0.707031L33.6846 4.35547L50.7539 21.4238L51.6074 22.2773L0.5 22.2773L0.5 27.5L61.7227 27.5Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};
