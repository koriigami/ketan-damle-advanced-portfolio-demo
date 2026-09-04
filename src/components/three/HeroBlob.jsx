import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { useSettings } from '../../store/settings'
import useReducedMotion from '../../hooks/useReducedMotion'

// Reads the current CSS accent (var(--accent)) so the blob colour follows the theme.
function useAccent() {
  if (typeof window === 'undefined') return '#e85d2f'
  const styles = getComputedStyle(document.documentElement)
  const raw = styles.getPropertyValue('--accent').trim() || '#e85d2f'
  return raw
}

function Blob({ mouse }) {
  const meshRef = useRef()
  const matRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    // Slow drift
    meshRef.current.rotation.x = t * 0.08 + mouse.current.y * 0.4
    meshRef.current.rotation.y = t * 0.12 + mouse.current.x * 0.4
    // Distortion breathes with scroll
    if (matRef.current) {
      matRef.current.distort = 0.36 + Math.sin(t * 0.6) * 0.08
    }
  })

  return (
    <Float speed={1.05} rotationIntensity={0.28} floatIntensity={0.9}>
      <mesh ref={meshRef} scale={2.35}>
        <icosahedronGeometry args={[1, 96]} />
        <MeshDistortMaterial
          ref={matRef}
          color={useAccent()}
          distort={0.42}
          speed={1.4}
          roughness={0.15}
          metalness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  )
}

function MouseTracker({ mouseRef }) {
  useFrame(({ pointer }) => {
    // pointer is normalized [-1..1]; smooth toward it
    mouseRef.current.x += (pointer.x - mouseRef.current.x) * 0.08
    mouseRef.current.y += (pointer.y - mouseRef.current.y) * 0.08
  })
  return null
}

export default function HeroBlob() {
  const reduced = useReducedMotion()
  const audioOn = useSettings((s) => s.audioEnabled) // for a subtle wobble bias, harmless
  const mouseRef = useRef(new THREE.Vector2(0, 0))

  if (reduced) {
    // Static tinted card as fallback so we don't spin a WebGL context.
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(50% 50% at 60% 50%, color-mix(in oklch, var(--accent) 45%, transparent) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />
    )
  }

  return (
    <div className="absolute inset-0 -z-0" aria-hidden="true" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, audioOn ? 1.6 : 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} />
          <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#ffb98a" />
          <MouseTracker mouseRef={mouseRef} />
          <Blob mouse={mouseRef} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
