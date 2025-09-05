import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BlinkingStars() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(400 * 3); // Menos estrelas para deixar espaço para cometas
    
    for (let i = 0; i < 400; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z inicial
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Movimento para frente das estrelas
      const positions = ref.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        let z = positions.getZ(i);
        z += delta * 1; // Velocidade do movimento para frente
        if (z > 10) z = -15; // Reset quando sai da tela
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
      
      // Efeito piscante
      const time = state.clock.elapsedTime;
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.3 + Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function SpiralComets() {
  const meshRefs = useRef<THREE.Mesh[]>([]);
  
  const comets = useMemo(() => {
    const cometData = [];
    for (let i = 0; i < 6; i++) {
      cometData.push({
        id: i,
        angle: (i / 6) * Math.PI * 2,
        radius: 8 + Math.random() * 4,
        speed: 0.5 + Math.random() * 0.3,
        z: -15 + Math.random() * 25
      });
    }
    return cometData;
  }, []);

  useFrame((state, delta) => {
    comets.forEach((comet, index) => {
      if (meshRefs.current[index]) {
        // Movimento espiral
        comet.angle += delta * comet.speed * 0.5;
        const x = Math.cos(comet.angle) * comet.radius;
        const y = Math.sin(comet.angle) * comet.radius;
        
        // Movimento para frente
        comet.z += delta * 1.5;
        if (comet.z > 15) {
          comet.z = -15;
          comet.angle = Math.random() * Math.PI * 2;
        }
        
        meshRefs.current[index].position.set(x, y, comet.z);
        
        // Rotação do cometa
        meshRefs.current[index].rotation.z += delta * 1;
      }
    });
  });

  return (
    <>
      {comets.map((comet, index) => (
        <mesh
          key={comet.id}
          ref={(el) => {
            if (el) meshRefs.current[index] = el;
          }}
          position={[0, 0, comet.z]}
        >
          <sphereGeometry args={[0.05, 8, 6]} />
          <meshBasicMaterial 
            color="#00d4ff" 
            transparent 
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
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
        <SpiralComets />
      </Canvas>
    </div>
  );
};

export default StarsEffect;