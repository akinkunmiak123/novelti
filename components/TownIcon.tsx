type TownIconProps = {
  town: 'cheltenham' | 'gloucester' | 'yate' | 'bristol'
  className?: string
}

/**
 * A small line-art landmark per town, drawn in the brand palette rather than
 * photographed or AI-generated. Swap any of these for a real local photo
 * later by replacing the <TownIcon> call in app/areas/page.tsx with <Photo>.
 */
export default function TownIcon({ town, className = '' }: TownIconProps) {
  return (
    <div
      className={`flex items-center justify-center bg-moss-pale p-10 ${className}`}
    >
      <svg
        viewBox="0 0 200 160"
        className="h-auto w-full max-w-[220px]"
        role="img"
        aria-label={`Illustration representing ${town}`}
      >
        {icons[town]}
      </svg>
    </div>
  )
}

const stroke = {
  stroke: 'var(--color-moss-deep)',
  strokeWidth: 2.5,
  fill: 'none',
  strokeLinejoin: 'round' as const,
  strokeLinecap: 'round' as const,
}

const icons: Record<TownIconProps['town'], React.ReactNode> = {
  // Regency terrace: repeated arched windows and a shallow curved facade,
  // the look Cheltenham is known for.
  cheltenham: (
    <g {...stroke}>
      <path d="M20 130 V70 Q100 40 180 70 V130 Z" />
      {[45, 78, 111, 144].map((x) => (
        <g key={x}>
          <path d={`M${x} 130 V90 Q${x + 8.5} 82 ${x + 17} 90 V130`} />
        </g>
      ))}
      <line x1="10" y1="130" x2="190" y2="130" />
    </g>
  ),

  // Gloucester Cathedral: central tower with a pointed roofline and
  // lancet-style windows.
  gloucester: (
    <g {...stroke}>
      <path d="M70 130 V60 H130 V130" />
      <path d="M70 60 L100 20 L130 60" />
      <rect x="92" y="75" width="16" height="35" />
      <path d="M40 130 V95 H70 V130" />
      <path d="M130 130 V95 H160 V130" />
      <line x1="25" y1="130" x2="175" y2="130" />
    </g>
  ),

  // Yate: a market-town silhouette — a simple church spire beside low
  // rooftops, standing in for a smaller town centre.
  yate: (
    <g {...stroke}>
      <path d="M60 130 V80 L85 60 L110 80 V130" />
      <line x1="85" y1="60" x2="85" y2="35" />
      <path d="M78 35 L85 22 L92 35 Z" />
      <path d="M110 130 V100 H150 V130" />
      <path d="M110 100 L130 85 L150 100" />
      <line x1="30" y1="130" x2="170" y2="130" />
    </g>
  ),

  // Bristol: the Clifton Suspension Bridge, the city's clearest visual
  // shorthand.
  bristol: (
    <g {...stroke}>
      <line x1="45" y1="35" x2="45" y2="120" />
      <line x1="155" y1="35" x2="155" y2="120" />
      <path d="M20 105 Q100 40 180 105" />
      <line x1="60" y1="90" x2="60" y2="60" />
      <line x1="80" y1="82" x2="80" y2="55" />
      <line x1="100" y1="78" x2="100" y2="52" />
      <line x1="120" y1="82" x2="120" y2="55" />
      <line x1="140" y1="90" x2="140" y2="60" />
      <line x1="20" y1="120" x2="180" y2="120" />
    </g>
  ),
}
