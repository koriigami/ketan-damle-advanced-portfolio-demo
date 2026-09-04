import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import useReducedMotion from '../../hooks/useReducedMotion'

function Cloud({ count = 1600 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Uniform in a sphere shell
      const r = 3.5 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, dt) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.05
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.15
    // Gentle mouse drift
    const p = state.pointer
    ref.current.position.x += (p.x * 0.5 - ref.current.position.x) * 0.02
    ref.current.position.y += (p.y * 0.5 - ref.current.position.y) * 0.02
  })

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          depthWrite={false}
          color={new THREE.Color('#ffffff')}
          size={0.03}
          sizeAttenuation
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ParticleField({ className = '' }) {
  const reduced = useReducedMotion()
  if (reduced) return null
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Cloud />
        </Suspense>
      </Canvas>
    </div>
  )
}
