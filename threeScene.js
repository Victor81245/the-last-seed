import * as THREE from "three";

const container = document.getElementById("seed3d");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
100
);

camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.SphereGeometry(1,64,64);
const position = geometry.attributes.position;

for (let i = 0; i < position.count; i++) {

    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);

    // Taper the top to form a seed shape
    if (y > 0) {
        position.setX(i, x * (1 - y * 0.25));
        position.setZ(i, z * (1 - y * 0.25));
    }

    // Slightly widen the lower half
    if (y < 0) {
        position.setX(i, x * 1.08);
        position.setZ(i, z * 1.08);
    }
}

position.needsUpdate = true;
geometry.computeVertexNormals();

// Material
const material = new THREE.MeshStandardMaterial({
color:0x7CFF6B,
emissive:0x22c55e,
emissiveIntensity:2.5,
roughness:0.05,
metalness:0.8
});

const seed = new THREE.Mesh(
geometry,
material
);

seed.scale.set(0.45,0.8,0.45);

scene.add(seed);
const glowGeometry = new THREE.SphereGeometry(1.25,32,32);

const glowMaterial = new THREE.MeshBasicMaterial({
    color:0x22c55e,
    transparent:true,
    opacity:0.12
});

const glow = new THREE.Mesh(glowGeometry,glowMaterial);

glow.scale.copy(seed.scale);

scene.add(glow);

// Lights
const light1 = new THREE.PointLight(0xffffff,8);
const greenLight = new THREE.PointLight(0x22c55e,4);
greenLight.position.set(-3,-2,2);
scene.add(greenLight);
light1.position.set(3,3,5);

scene.add(light1);

const light2 = new THREE.AmbientLight(
0xffffff,
1.5
);

scene.add(light2);

// Animation
function animate(){

requestAnimationFrame(animate);

seed.rotation.y += 0.002;
seed.rotation.z = Math.sin(Date.now()*0.001)*0.08;

glow.rotation.copy(seed.rotation);

const pulse = 1 + Math.sin(Date.now() * 0.002) * 0.05;
glow.scale.set(
    seed.scale.x * pulse,
    seed.scale.y * pulse,
    seed.scale.z * pulse
);


camera.position.x = Math.sin(Date.now() * 0.0003) * 0.12;
camera.position.y = Math.sin(Date.now() * 0.0008) * 0.08;
camera.lookAt(0, 0, 0);

renderer.render(scene,camera);

}

animate();

// Resize
window.addEventListener("resize",()=>{

camera.aspect =
container.clientWidth /
container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(
container.clientWidth,
container.clientHeight
);

});
