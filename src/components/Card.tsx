import { MeshPortalMaterial } from '@react-three/drei'
import { useRef, type PropsWithChildren, useEffect } from 'react'
import { Object3DNode, extend, useFrame, useThree } from '@react-three/fiber'
import { geometry } from 'maath'
import { FrontSide, Group, Mesh, Vector3 } from 'three'

extend(geometry)

declare module '@react-three/fiber' {
  interface ThreeElements {
    roundedPlaneGeometry: Object3DNode<
      geometry.RoundedPlaneGeometry,
      typeof geometry.RoundedPlaneGeometry
    >
  }
}

export const Card = ({
  children,
  width = 1,
  height = 1.61803398875,
  bgColor = '#2d1b50',
  ...props
}: PropsWithChildren & {
  width?: number
  height?: number
  bgColor?: string
}) => {
  const cardRef = useRef<Mesh>(null!)

  useFrame((state, dt) => {})

  return (
    <mesh ref={cardRef} {...props}>
      <roundedPlaneGeometry args={[width, height, 0.1]} />
      <MeshPortalMaterial side={FrontSide}>
        <ambientLight />
        <color attach="background" args={[bgColor]} />
        {children}
      </MeshPortalMaterial>
    </mesh>
  )
}
