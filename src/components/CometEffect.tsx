import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CometParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = Math.random() * -15 - 5; // z (behind camera)
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
        color="#00d4ff"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function CometTrails() {
  const trails = useMemo(() => {
    const trailsArray = [];
    for (let i = 0; i < 15; i++) {
      const points = [];
      const startX = (Math.random() - 0.5) * 20;
      const startY = (Math.random() - 0.5) * 20;
      const startZ = -15 - Math.random() * 10;
      
      for (let j = 0; j < 8; j++) {
        points.push(
          new THREE.Vector3(
            startX + (Math.random() - 0.5) * 0.3,
            startY + (Math.random() - 0.5) * 0.3,
            startZ + j * 0.8
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
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const starsPosition = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      positions[i * 3 + 2] = Math.random() * -20 - 5; // z (behind camera)
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += delta * 3; // Slower movement for stars
        
        if (positions[i + 2] > 5) {
          positions[i] = (Math.random() - 0.5) * 30;
          positions[i + 1] = (Math.random() - 0.5) * 30;
          positions[i + 2] = -25;
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={starsPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

const CometEffect = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <CometParticles />
        <CometTrails />
      </Canvas>
    </div>
  );
};

export default CometEffect;