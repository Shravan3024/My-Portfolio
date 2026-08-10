import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;
  const maxDistance = 2.5;

  const [positions, lines, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }

    const ls = [];
    const cls = [];
    const color = new THREE.Color();
    const color1 = new THREE.Color('#00e5ff');
    const color2 = new THREE.Color('#bb86fc');

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          ls.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );

          const alpha = 1.0 - dist / maxDistance;
          color.lerpColors(color1, color2, Math.random());
          cls.push(color.r, color.g, color.b, alpha);
          cls.push(color.r, color.g, color.b, alpha);
        }
      }
    }

    return [pos, new Float32Array(ls), new Float32Array(cls)];
  }, [particleCount, maxDistance]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#bb86fc" transparent opacity={0.8} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lines, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 4]}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

export default NeuralNetwork;
