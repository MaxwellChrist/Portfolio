import './RotatingSphere.css'

export default function RotatingSphere({heading, size}) {
  return (
    <div className="linkObject">
      <svg height="600" width="600">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="50%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,0,0,0)" />
            <stop offset="100%" stopColor="rgba(255,0,0,1)" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="50%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,0,0,1)" />
            <stop offset="100%" stopColor="rgba(255,0,0,0)" />
          </linearGradient>
        </defs>
        <circle
          stroke="url(#gradient1)"
          strokeDasharray="425 1275"
          strokeDashoffset="850"
          strokeLinecap="round"
          strokeWidth="20"
          fill="transparent"
          r="270"
          cx="300"
          cy="300"
          className="circle-border2"
        />
        <circle
          stroke="url(#gradient4)"
          strokeDasharray="425 1275"
          strokeLinecap="round"
          strokeWidth="20"
          fill="transparent"
          r="270"
          cx="300"
          cy="300"
          className="circle-border3"
        />
      </svg>
      <h1>{heading}</h1>
      <svg height="600" width="600">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="50%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,0,0,0)" />
            <stop offset="100%" stopColor="rgba(255,0,0,1)" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="50%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,0,0,1)" />
            <stop offset="100%" stopColor="rgba(255,0,0,0)" />
          </linearGradient>
        </defs>
        <circle
          stroke="url(#gradient1)"
          strokeDasharray="425 1275"
          strokeDashoffset="850"
          strokeLinecap="round"
          strokeWidth="20"
          fill="transparent"
          r="270"
          cx="300"
          cy="300"
          className="circle-border2"
        />
        <circle
          stroke="url(#gradient4)"
          strokeDasharray="425 1275"
          strokeLinecap="round"
          strokeWidth="20"
          fill="transparent"
          r="270"
          cx="300"
          cy="300"
          className="circle-border3"
        />
      </svg>
    </div>
  );
}
