import { useThree } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Background() {
  const height = useTexture("./displacement.jpg");
  const normal = useTexture("./NormalMap2.png");

  normal.anisotropy = 16; // anisotropy is the quality of the texture when zoomed in, which is used to prevent blurriness when zooming in

  normal.wrapS = normal.wrapT = THREE.RepeatWrapping; // this line and the next one are used to repeat the texture
  normal.repeat = new THREE.Vector2(3, 30); // this line and the previous one are used to repeat the texture

  height.wrapS = height.wrapT = THREE.RepeatWrapping; // this line and the next one are used to repeat the texture, wrapS and wrapT are used to repeat the texture
  height.repeat = new THREE.Vector2(1, 2); // this line and the previous one are used to repeat the texture

  height.anisotropy = 16; // anisotropy is the quality of the texture when zoomed in, which is used to prevent blurriness when zooming in
  const viewport = useThree((state) => state.viewport); // this line is used to get the viewport size

  return (
    <group>
      <Plane
        scale={[viewport.width / 2, viewport.height / 0.95, 1]} // this line is used to scale the plane to the viewport size
        rotation={[0, 0, 0]} // this line is used to rotate the plane, it is set to 0 because we don't want to rotate it
        position={[0, 0, 0]} // this line is used to position the plane, it is set to 0 because we don't want to position it
        args={[2, 1, 2, 2]} // this line is used to set the number of segments of the plane, the first 2 is the number of segments on the x axis, the second 2 is the number of segments on the y axis
      >
        <meshPhysicalMaterial
          color="#121423"
          metalness={0.9} // this line is used to set the metalness of the material
          roughness={0.3} // this line is used to set the roughness of the material, which is the opposite of smoothness
          displacementMap={height} // this line is used to set the displacement map of the material, which is the texture that will be used to displace the plane, it is set to the height texture
          displacementScale={0.1} // this line is used to set the displacement scale of the material, which is the intensity of the displacement, it is set to 0.1
          normalMap={normal} // this line is used to set the normal map of the material, which is the texture that will be used to give the plane a 3D look, it is set to the normal texture
          normalScale={0.3} // this line is used to set the normal scale of the material, which is the intensity of the normal map, it is set to 0.25
        />
      </Plane>
    </group>
  );
}
