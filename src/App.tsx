import {
  Box,
  Environment,
  MeshWobbleMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useIntersect,
  useScroll,
} from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './App.css'
import { Card } from './components/Card'
import { useRef, useState } from 'react'
import { MathUtils, Vector3 } from 'three'

// TODO: 1. focus the scene
// TODO: tilt card on mouse move
// TODO: heading
// TODO: loading

// TODO: some overlay html => demo name, author
// TODO: create/find some nice scene
// TODO: v1 => scroll and focus using useScroll with some html
const usefulVector = new Vector3()
export const FirstScene = ({ position, scale = new Vector3(1, 1, 1) }) => {
  const visible = useRef(false)

  const scroll = useScroll()

  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { width, height } = useThree((state) => state.viewport)

  console.log(scroll)

  console.log('visible', visible.current)
  const scaleBig = new Vector3(width, height, 1)

  useFrame((_, dt) => {
    const progress = scroll.curve(0, 1 / 2)
    const currentScale = usefulVector.lerpVectors(scale, scaleBig, progress)

    ref.current.scale.copy(currentScale)
  })

  // TODO: scale needs to keep aspect ratio
  return (
    <group
      ref={ref}
      position={position}
      // scale={[width, width * 1.61803398875, 0.1]}
    >
      <Card bgColor="#ffffff">
        <Box args={[1, 1, 1]} position={[0, 0, -10]}>
          <meshStandardMaterial color="red" />
        </Box>
        <Environment preset="park" background="only" />
      </Card>
    </group>
  )
}

export const SecondScene = ({ position }) => {
  return (
    <group position={position}>
      <Card bgColor="#ffffff">
        <Box args={[1, 1, 1]} position={[0, 0, -2]}>
          <meshStandardMaterial color="blue" />
        </Box>
        <Environment preset="sunset" background="only" />
      </Card>
    </group>
  )
}

export const Content = () => {
  const { width, height } = useThree((state) => state.viewport)

  console.log('height', height)
  return (
    <Scroll>
      <FirstScene position={[0, 0, 0]} />
      <SecondScene position={[0, -height, 0]} />
    </Scroll>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Environment preset="sunset" />
        <PerspectiveCamera position={[0, 0, 0]} />
        {/* <OrbitControls /> */}
        <color attach="background" args={['#000000']} />
        <ScrollControls damping={1} pages={2}>
          <Content />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
