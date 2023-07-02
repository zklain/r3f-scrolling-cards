import { MeshPortalMaterial } from '@react-three/drei'
import type { PropsWithChildren } from 'react'
import { extend } from '@react-three/fiber'
import { geometry } from 'maath'
import { FrontSide } from 'three'

extend(geometry)

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
