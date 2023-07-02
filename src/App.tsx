import { Box, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Card } from './components/Card'

// TODO: some overlay html => demo name, author
// TODO: create/find some nice scene
// TODO: replace Orbit controls
// TODO: v1 => scroll and focus using useScroll with some html

export const FirstScene = () => {
  return (
    <Card bgColor="#ffffff">
      <Box args={[1, 1, 1]} position={[0, 0, -3]}>
        <meshStandardMaterial color="red" />
      </Box>
      <Environment preset="sunset" background />
    </Card>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls makeDefault />
        <color attach="background" args={['#000000']} />
        <FirstScene />

        <Environment preset="forest" />
      </Canvas>
    </div>
  )
}

export default App
