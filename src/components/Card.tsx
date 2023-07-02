import { MeshPortalMaterial } from '@react-three/drei'
import type { PropsWithChildren } from 'react'
import { Object3DNode, extend } from '@react-three/fiber'
import { geometry } from 'maath'
import { FrontSide } from 'three'

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
}: PropsWithChildren & {
  width?: number
  height?: number
  bgColor?: string
}) => {
  return (
    <>
      <mesh>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial side={FrontSide}>
          <ambientLight />
          <color attach="background" args={[bgColor]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </>
  )
}
