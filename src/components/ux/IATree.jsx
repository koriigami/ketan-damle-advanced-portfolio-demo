/**
 * Compact IA / site-map tree. Layout is computed in one pass so it renders
 * cleanly at any width. Data shape:
 *   { label, children?: [...] }
 */
function layout(root) {
  const nodes = []
  const edges = []
  let counter = 0

  function walk(node, depth = 0) {
    const kids = (node.children || []).map((c) => walk(c, depth + 1))
    const id = counter++
    let x
    if (kids.length === 0) x = leafX++
    else x = (kids[0].x + kids[kids.length - 1].x) / 2
    const y = depth
    const n = { id, x, y, label: node.label, meta: node.meta }
    nodes.push(n)
    kids.forEach((k) => edges.push({ from: n, to: k }))
    return n
  }

  let leafX = 0
  walk(root)
  const width = leafX
  return { nodes, edges, width }
}

export default function IATree({ root }) {
  const { nodes, edges, width } = layout(root)
  const depth = Math.max(...nodes.map((n) => n.y))
  // Convert to viewBox coords
  const stepX = 160
  const stepY = 88
  const paddingX = 24
  const paddingY = 24
  const vbW = Math.max(360, width * stepX + paddingX * 2)
  const vbH = (depth + 1) * stepY + paddingY * 2

  const nodeW = 132
  const nodeH = 48

  const toXY = (n) => ({
    cx: paddingX + n.x * stepX + nodeW / 2,
    cy: paddingY + n.y * stepY + nodeH / 2,
  })

  return (
    <div className="overflow-x-auto rounded-3xl border border-line bg-card p-4 md:p-6">
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="mx-auto block h-auto w-full"
        style={{ minWidth: vbW * 0.6, maxWidth: 900 }}
      >
        {edges.map((e, i) => {
          const a = toXY(e.from)
          const b = toXY(e.to)
          const midY = (a.cy + b.cy) / 2
          return (
            <path
              key={i}
              d={`M ${a.cx} ${a.cy + nodeH / 2} C ${a.cx} ${midY}, ${b.cx} ${midY}, ${b.cx} ${b.cy - nodeH / 2}`}
              fill="none"
              stroke="var(--line-strong)"
              strokeWidth="1.25"
            />
          )
        })}
        {nodes.map((n) => {
          const p = toXY(n)
          const isRoot = n.y === 0
          return (
            <g key={n.id} transform={`translate(${p.cx - nodeW / 2}, ${p.cy - nodeH / 2})`}>
              <rect
                width={nodeW}
                height={nodeH}
                rx="10"
                fill={isRoot ? 'var(--ink)' : 'var(--bg)'}
                stroke={isRoot ? 'var(--ink)' : 'var(--line)'}
              />
              <text
                x={nodeW / 2}
                y={nodeH / 2 + 4}
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fill={isRoot ? 'var(--bg)' : 'var(--ink)'}
                fontWeight="500"
              >
                {n.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
