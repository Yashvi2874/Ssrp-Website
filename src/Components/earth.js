import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let scene, camera, renderer, sphere, controls;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    85,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  loadTexture(require("../img/2k_earth_daymap.jpg")); // Adjust the path accordingly
  scene.add(sphere);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.id = "c";

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 5;
  controls.maxDistance = 100;

  camera.position.z = 20;
}

function loadTexture(texture) {
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const loader = new THREE.TextureLoader();
  const earthTexture = loader.load(texture);
  const material = new THREE.MeshBasicMaterial({ map: earthTexture });

  sphere = new THREE.Mesh(geometry, material);
}

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.002;
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
