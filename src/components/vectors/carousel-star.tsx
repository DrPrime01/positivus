export default function CarouselStar(props: React.SVGProps<SVGSVGElement>) {
  const { fill, ...otherProps } = props;
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
        fill={fill ?? '#B9FF66'}
      />
    </svg>
  );
}
