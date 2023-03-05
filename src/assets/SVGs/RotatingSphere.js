export default function RotatingSphere(){
    return (
        <div>
            <svg
            height="600"
            width="600"
            >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="50%" x2="50%" y2="0%">
                <stop offset="0%"  stop-color="rgba(255,0,0,0)"/>
                <stop offset="100%" stop-color="rgba(255,0,0,1)"/>
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="50%" x2="50%" y2="0%">
                <stop offset="0%"  stop-color="rgba(255,0,0,1)"/>
                <stop offset="100%" stop-color="rgba(255,0,0,0)"/>
              </linearGradient>
            </defs>
            <circle
                stroke="url(#gradient1)"
                stroke-dasharray="425 1275"
                stroke-dashoffset="850"
                stroke-linecap="round"
                stroke-width="20"
                fill="transparent"
                r="270"
                cx="300"
                cy="300"
                class="circle-border2"
            />
            <circle
                stroke="url(#gradient4)"
                stroke-dasharray="425 1275"
                stroke-linecap="round"
                stroke-width="20"
                fill="transparent"
                r="270"
                cx="300"
                cy="300"
                class="circle-border3"
            />
            </svg>
        </div>

    )
}