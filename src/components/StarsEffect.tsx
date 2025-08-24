import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BlinkingStars() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(150 * 3); // Poucas estrelas
    
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Efeito piscante lento usando seno
      const time = state.clock.elapsedTime;
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.3 + Math.sin(time * 0.5) * 0.3; // Pisca devagar
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02} // Estrelas pequenas
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

const StarsEffect = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <BlinkingStars />
      </Canvas>
    </div>
  );
};

export default StarsEffect;