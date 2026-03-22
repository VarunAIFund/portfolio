"use client";
// ─────────────────────────────────────────────────────────────────
//  DEATH STAR  — loads /public/deathstar.glb
//  Slow rotation, star field, green superlaser glow sprite,
//  atmospheric rim, mouse parallax on camera.
// ─────────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function HolosphereBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(0x010205, 1);
    renderer.shadowMap.enabled = false;
    mount.appendChild(renderer.domElement);

    // ── Scene / camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 2000);
    camera.position.set(0, 1, 9);
    camera.lookAt(0, 0, 0);

    // ── Lights ────────────────────────────────────────────────────────────────
    // Key light (slightly warm, off to one side for dramatic shadow)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(5, 4, 3);
    scene.add(keyLight);

    // Subtle fill from opposite side
    const fillLight = new THREE.DirectionalLight(0x8899cc, 0.4);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    // Ambient so dark side isn't fully black
    scene.add(new THREE.AmbientLight(0x111122, 0.6));

    // ── Star field ────────────────────────────────────────────────────────────
    const STARS = 8000;
    const starPos = new Float32Array(STARS * 3);
    for (let i = 0; i < STARS; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 150 + Math.random() * 600;
      starPos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.25,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Load GLB ──────────────────────────────────────────────────────────────
    let deathStar: THREE.Object3D | null = null;

    const loader = new GLTFLoader();
    loader.load(
      "/deathstar.glb",
      (gltf) => {
        deathStar = gltf.scene;

        // Fix any bright/emissive materials that cause white artifacts
        deathStar.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          const mats = Array.isArray(child.material)
            ? child.material
            : [child.material];
          mats.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
              mat.emissive?.set(0x000000);
              mat.emissiveIntensity = 0;
              mat.emissiveMap = null;
              mat.needsUpdate = true;
            }
          });
        });

        // Auto-center and scale to fit nicely in frame
        const box = new THREE.Box3().setFromObject(deathStar);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4.5 / maxDim;

        deathStar.scale.setScalar(scale);
        deathStar.position.sub(center.multiplyScalar(scale));
        deathStar.position.x += 1.2;
        deathStar.position.y += 0.3;

        scene.add(deathStar);
      },
      undefined,
      (err) => console.error("GLB load error:", err)
    );

    // ── Input ─────────────────────────────────────────────────────────────────
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / innerWidth - 0.5) * 2;
      my = (e.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Loop ──────────────────────────────────────────────────────────────────
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      if (deathStar) {
        // Slow ominous rotation
        deathStar.rotation.y = t * 0.07;
      }

      // Camera parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 0.7, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 - my * 0.5, 0.04);
      camera.lookAt(0, 0, 0);

      // Star field gentle drift
      scene.children.forEach((child) => {
        if (child instanceof THREE.Points) {
          child.rotation.y = mx * 0.012;
          child.rotation.x = -my * 0.008;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
