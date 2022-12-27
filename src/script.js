import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Red Cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.x = 0.7;
cubeMesh.position.y = -0.6;
cubeMesh.position.z = 1;
scene.add(cubeMesh);

cubeMesh.position.normalize();
console.log(cubeMesh.position.length());

const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// WebGL Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
