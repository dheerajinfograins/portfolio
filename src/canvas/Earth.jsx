/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Preload, Float } from '@react-three/drei';
import * as THREE from 'three';

// Generate 5000 random points in a sphere radius of 3.5 for more parallax depth.
// We compute this outside the component so we don't call the impure function
// Math.random() during the React render phase, which causes errors/warnings.
const randomSpherePoints = (() => {
  const positions = new Float32Array(5000 * 3);

  // This is purely for a visual particle effect (stars). There is no security 
  // risk in predicting star positions, so Math.random() is perfectly safe here.
  const secureRandom = () => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296; // 4294967296 is 2^32
    }

    return Math.random(); // NOSONAR
  };

  for (let i = 0; i < 5000; i++) {
    const r = 3.5 * Math.cbrt(secureRandom());
    const theta = secureRandom() * 2 * Math.PI;
    const phi = Math.acos(2 * secureRandom() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
})();

const Stars = () => {
  const ref = useRef();

  const sphere = randomSpherePoints;

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* NOSONAR */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const EarthMesh = () => {
  const earthRef = useRef();

  const [colorMap] = useLoader(THREE.TextureLoader, [
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
  ]);

  useFrame(() => {
    if (earthRef.current) {
      // Smooth, constant earth rotation
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef} scale={1.3}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        roughness={0.4}
        metalness={0.3}
        emissive={new THREE.Color(0x1a1a1a)}
      />
    </mesh>
  );
};

// Component to handle Camera Parallax based on mouse movement
const CameraRig = ({ children }) => {
  const group = useRef();

  useFrame((state) => {
    // Smoothly interpolate the group's position/rotation based on mouse pointer
    // state.pointer holds normalized mouse coordinates [-1, 1]
    const targetX = (state.pointer.x * Math.PI) / 12;
    const targetY = (state.pointer.y * Math.PI) / 12;

    // Lerp camera group position for mouse parallax
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.4, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, state.pointer.y * 0.4, 0.05);

    // Lerp camera group rotation
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
  });

  return <group ref={group}>{children}</group>;
};

const Earth = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
      <Suspense fallback={
        <mesh scale={1.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#0ea5e9" wireframe />
        </mesh>
      }>
        <CameraRig>
          {/* Particle Stars Background */}
          <Stars />

          {/* Cinematic Lights */}
          <ambientLight intensity={1.5} color="#bcdcff" />
          <directionalLight position={[10, 10, 5]} intensity={3.5} color="#ffffff" />
          <directionalLight position={[-10, -5, -5]} intensity={2.0} color="#06b6d4" />

          {/* Floating Animation Wrapper for Earth */}
          <Float
            speed={2} // Animation speed
            rotationIntensity={0.2} // XYZ rotation intensity
            floatIntensity={0.5} // Up/down float intensity
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
          >
            <EarthMesh />
          </Float>
        </CameraRig>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false} // Disabled autoRotate on OrbitControls as we handle it custom now
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.1}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Earth;
