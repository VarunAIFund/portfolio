"use client";
// ─────────────────────────────────────────────────────────────────
//  OPTION 3 — HYPERSPACE  (Star Wars jump-to-lightspeed)
//  Stars tunnel toward the camera as LineSegments.
//  Speed auto-oscillates: calm starfield → full warp → calm.
//  Scroll accelerates warp. Mouse subtly steers the tunnel.
// ─────────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HyperspaceBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(0x010208, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.01, 500);
    camera.position.set(0, 0, 0);

    // ── Star tunnel using LineSegments ───────────────────────────────────────
    // Each star = 2 vertices: tail (far) and head (near).
    // We store x,y per star and animate z each frame.
    const COUNT = 4000;
    const TUNNEL_R = 2.5;   // tunnel radius
    const Z_FAR = -300;
    const Z_NEAR = 1.5;

    // Per-star state: [x, y, z, speed]
    const starData = new Float32Array(COUNT * 4);
    const linePositions = new Float32Array(COUNT * 6); // 2 verts × 3 floats

    const resetStar = (i: number, z?: number) => {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * TUNNEL_R;
      starData[i * 4 + 0] = Math.cos(angle) * r;         // x
      starData[i * 4 + 1] = Math.sin(angle) * r;         // y
      starData[i * 4 + 2] = z !== undefined ? z : THREE.MathUtils.randFloat(Z_FAR, Z_NEAR - 1); // z
      starData[i * 4 + 3] = THREE.MathUtils.randFloat(0.3, 1.2); // individual speed factor
    };

    for (let i = 0; i < COUNT; i++) resetStar(i);

    // LineSegments geometry
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", linePosAttr);

    // Colors: blue-white, brighter near camera
    const lineColors = new Float32Array(COUNT * 6);
    const lineColorAttr = new THREE.BufferAttribute(lineColors, 3);
    lineColorAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("color", lineColorAttr);

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ── Subtle background static star field ──────────────────────────────────
    const bgCount = 3000;
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 80 + Math.random() * 200;
      bgPos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      bgPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      bgPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute("position", new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({
      color: 0xaaccff,
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });
    scene.add(new THREE.Points(bgGeo, bgMat));

    // ── Input ────────────────────────────────────────────────────────────────
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / innerWidth - 0.5) * 2;
      my = (e.clientY / innerHeight - 0.5) * 2;
    };
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll);

    const onResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Loop ─────────────────────────────────────────────────────────────────
    let raf = 0;
    let prevTime = performance.now();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - prevTime) * 0.001, 0.05);
      prevTime = now;
      const t = now * 0.001;

      // Speed: slow sine wave + scroll boost
      const scrollSpeed = scrollY * 0.0003;
      const baseSpeed = (Math.sin(t * 0.3) * 0.5 + 0.6) * 18; // 3..21
      const warpSpeed = baseSpeed + scrollSpeed * 40;

      // Trail length proportional to speed
      const trailLen = Math.min(warpSpeed * 0.012, 0.9);

      // Camera subtle steering
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 0.25, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -my * 0.25, 0.04);
      camera.lookAt(camera.position.x * 0.1, camera.position.y * 0.1, -1);

      // Update stars
      for (let i = 0; i < COUNT; i++) {
        const sx = starData[i * 4 + 0];
        const sy = starData[i * 4 + 1];
        let sz = starData[i * 4 + 2];
        const sp = starData[i * 4 + 3];

        sz += warpSpeed * sp * dt;

        if (sz > Z_NEAR) {
          resetStar(i, Z_FAR + Math.random() * 20);
          starData[i * 4 + 2] = Z_FAR + Math.random() * 20;
          continue;
        }
        starData[i * 4 + 2] = sz;

        // Depth-based brightness
        const depth = (sz - Z_FAR) / (Z_NEAR - Z_FAR); // 0=far 1=near
        const bright = depth * depth;

        // Color: dim blue at far, bright blue-white near
        const r = bright * 0.7;
        const g = bright * 0.85;
        const b = 1.0;

        // Tail vertex (old position)
        const i6 = i * 6;
        linePositions[i6 + 0] = sx;
        linePositions[i6 + 1] = sy;
        linePositions[i6 + 2] = sz - trailLen * sp * 8;  // stretched tail

        // Head vertex (current position)
        linePositions[i6 + 3] = sx;
        linePositions[i6 + 4] = sy;
        linePositions[i6 + 5] = sz;

        // Tail: dim
        lineColors[i6 + 0] = r * 0.1;
        lineColors[i6 + 1] = g * 0.1;
        lineColors[i6 + 2] = b * 0.15;
        // Head: bright
        lineColors[i6 + 3] = r;
        lineColors[i6 + 4] = g;
        lineColors[i6 + 5] = b;
      }

      linePosAttr.needsUpdate = true;
      lineColorAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      lineGeo.dispose();
      lineMat.dispose();
      bgGeo.dispose();
      bgMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
