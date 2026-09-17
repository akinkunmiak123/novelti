type Town = {
  name: string
  x: number
  y: number
  isHq?: boolean
}

// Rough relative positions from real coordinates, simplified into a clean
// schematic rather than an accurate geographic map. Order follows the
// approximate route from Cheltenham down to Bristol.
const towns: Town[] = [
  { name: 'Cheltenham', x: 300, y: 60, isHq: true },
  { name: 'Gloucester', x: 205, y: 120 },
  { name: 'Yate', x: 115, y: 330 },
  { name: 'Bristol', x: 40, y: 430 },
]

const routeD = towns.map((t) => `${t.x},${t.y}`).join(' L ')

export default function AreaMap() {
  return (
    <div className="flex min-h-[280px] items-center justify-center bg-moss-pale p-8 lg:min-h-full">
      <svg
        viewBox="0 0 340 480"
        role="img"
        aria-label="Map showing Novelti's coverage area: Cheltenham, Gloucester, Yate and Bristol"
        className="h-full max-h-[440px] w-full max-w-[300px]"
      >
        {/* soft coverage area behind the route, not a literal boundary */}
        <path
          d="M 300 60 C 260 40, 230 90, 205 120 C 240 190, 160 260, 115 330 C 150 370, 70 400, 40 430
             C 10 400, 0 350, 30 300 C 0 240, 40 180, 80 140 C 120 60, 200 20, 260 10 C 300 10, 330 30, 300 60 Z"
          fill="var(--color-moss)"
          opacity={0.08}
        />

        {/* route between towns */}
        <path
          d={`M ${routeD}`}
          fill="none"
          stroke="var(--color-moss)"
          strokeWidth={2.5}
          strokeDasharray="1 8"
          strokeLinecap="round"
        />

        {towns.map((town) => (
          <g key={town.name}>
            <circle
              cx={town.x}
              cy={town.y}
              r={town.isHq ? 9 : 6.5}
              fill={town.isHq ? 'var(--color-amber)' : 'var(--color-moss)'}
              stroke="var(--color-paper)"
              strokeWidth={town.isHq ? 3 : 2.5}
            />
            <text
              x={town.x + (town.x > 170 ? -16 : 16)}
              y={town.y + 5}
              textAnchor={town.x > 170 ? 'end' : 'start'}
              className="font-display"
              fontSize={town.isHq ? 17 : 15}
              fontWeight={700}
              fill="var(--color-ink)"
            >
              {town.name}
            </text>
            {town.isHq && (
              <text
                x={town.x + (town.x > 170 ? -16 : 16)}
                y={town.y + 22}
                textAnchor={town.x > 170 ? 'end' : 'start'}
                fontSize={11}
                fill="var(--color-moss-deep)"
              >
                Home base
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
