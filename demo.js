document.addEventListener("DOMContentLoaded", function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
    
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x007bff, metalness: 0.6, roughness: 0.3 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    animate();
});
