import React, { useMemo, useRef, useEffect } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { IcosahedronBufferGeometry } from 'three'
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls} from 'three-stdlib'
extend({ OrbitControls, TransformControls, IcosahedronBufferGeometry })

const BlobComponent = () => {
  const mesh = useRef();
  const hover = useRef(false);
  const audioData = useRef({ volume: 0 });
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_intensity: { value: 0.6 }, //0.3 is default
  }));

  useEffect(() => {
    if (!navigator.mediaDevices.getUserMedia) {
      console.error("getUserMedia not supported on your browser!");
      return;
    }
    
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256; // Change this value as needed 
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const processAudio = () => {
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for(let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          audioData.current.volume = sum / bufferLength;
          requestAnimationFrame(processAudio);
        };

        processAudio();
      })
      .catch(err => console.error('The following error occurred: ' + err));
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      const targetIntensity = hover.current ? 1 : Math.max(0.15, Math.min(1, audioData.current.volume / 128));
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        targetIntensity,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1} // Originally 1.5 
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <IcosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );

};

export default BlobComponent;