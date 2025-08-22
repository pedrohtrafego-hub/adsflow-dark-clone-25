import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CometParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = Math.random() * -10 - 5; // z (behind camera)
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Move particles forward (towards camera)
        positions[i + 2] += delta * 8;
        
        // Reset particles that have moved past the camera
        if (positions[i + 2] > 5) {
          positions[i] = (Math.random() - 0.5) * 20; // Reset x
          positions[i + 1] = (Math.random() - 0.5) * 20; // Reset y
          positions[i + 2] = -15; // Reset z (far behind)
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff0000"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

function CometTrails() {
  const trails = useMemo(() => {
    const trailsArray = [];
    for (let i = 0; i < 20; i++) {
      const points = [];
      const startX = (Math.random() - 0.5) * 15;
      const startY = (Math.random() - 0.5) * 15;
      const startZ = -10 - Math.random() * 5;
      
      for (let j = 0; j < 10; j++) {
        points.push(
          new THREE.Vector3(
            startX + (Math.random() - 0.5) * 0.5,
            startY + (Math.random() - 0.5) * 0.5,
            startZ + j * 0.5
          )
        );
      }
      trailsArray.push(points);
    }
    return trailsArray;
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <CometTrail key={index} points={trail} />
      ))}
    </>
  );
}

function CometTrail({ points }: { points: THREE.Vector3[] }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 6;
      
      if (ref.current.position.z > 10) {
        ref.current.position.z = -15;
      }
    }
  });

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 20, 0.02, 8, false), [curve]);

  return (
    <group ref={ref}>
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial color="#ff0000" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

const CometEffect = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <CometParticles />
        <CometTrails />
      </Canvas>
    </div>
  );
};

export default CometEffect;