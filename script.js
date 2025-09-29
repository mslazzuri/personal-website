// Tab navigation
function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
  if (tabId === 'profile') {
    document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
    document.getElementById('profile').classList.add('active');
  } else if (tabId === 'skills') {
    document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
    document.getElementById('skills').classList.add('active');
  }
}

// On page load, show profile tab
showTab('profile');

// three.js basic spinning cube animation
function initThreeJS() {
  const container = document.getElementById('threejs-container');
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.z = 3;

  // Cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.5, metalness: 0.7 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 0.7);
  pointLight.position.set(2, 2, 3);
  scene.add(pointLight);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.013;
    renderer.render(scene, camera);
  }
  animate();
}

// Only initialize three.js when profile tab is visible
document.addEventListener('DOMContentLoaded', initThreeJS);