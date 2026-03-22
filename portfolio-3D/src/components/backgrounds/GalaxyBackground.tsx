"use client";
// ─────────────────────────────────────────────────────────────────
//  OPTION 1 — GALAXY
//  120k-particle spiral galaxy. Sleek blue/indigo/white palette.
//  Mouse parallax tilts the disk. Scroll zooms gently in.
// ─────────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;

    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x020407, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 800);
    camera.position.set(0, 5.5, 10);
    camera.lookAt(0, 0, 0);

    // ── Galaxy geometry ──────────────────────────────────────────────────────
    const COUNT = 130_000;
    const ARMS = 3;
    const MAX_R = 10;
    const SPIN = 1.5;
    const CHAOS = 3.5;

    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);

    const inner = new THREE.Color("#c8ddff"); // white-blue core
    const mid = new THREE.Color("#4466cc");   // cool blue arms
    const outer = new THREE.Color("#0a0a22"); // near-black edge

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.4) * MAX_R;
      const angle = ((i % ARMS) / ARMS) * Math.PI * 2 + r * SPIN;

      const jx = Math.pow(Math.random(), CHAOS) * (Math.random() < 0.5 ? 1 : -1) * 0.7;
      const jy = Math.pow(Math.random(), CHAOS) * (Math.random() < 0.5 ? 1 : -1) * 0.15;
      const jz = Math.pow(Math.random(), CHAOS) * (Math.random() < 0.5 ? 1 : -1) * 0.7;

      pos[i3 + 0] = Math.cos(angle) * r + jx;
      pos[i3 + 1] = jy;
      pos[i3 + 2] = Math.sin(angle) * r + jz;

      const t = r / MAX_R;
      const c =
        t < 0.35
          ? inner.clone().lerp(mid, t / 0.35)
          : mid.clone().lerp(outer, (t - 0.35) / 0.65);

      col[i3 + 0] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;

      sz[i] = (1.0 - t) * 3.0 + Math.random() * 0.8;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sz, 1));

    const mat = new THREE.ShaderMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aSize;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float s = pow(1.0 - d * 2.0, 2.8);
          gl_FragColor = vec4(vColor, s);
        }
      `,
    });

    const galaxy = new THREE.Points(geo, mat);
    scene.add(galaxy);

    // ── Glowing core sprite ──────────────────────────────────────────────────
    const coreMat = new THREE.SpriteMaterial({
      color: new THREE.Color("#4466ee"),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const core = new THREE.Sprite(coreMat);
    core.scale.set(3.5, 3.5, 1);
    scene.add(core);

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
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      galaxy.rotation.y = t * 0.045;
      galaxy.rotation.x = THREE.MathUtils.lerp(galaxy.rotation.x, -my * 0.12 + scrollY * 0.0001, 0.04);

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 1.2, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5.5 - my * 0.6, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10 - scrollY * 0.003, 0.03);
      camera.lookAt(0, 0, 0);

      const pulse = Math.sin(t * 0.9) * 0.12 + 1;
      core.scale.set(3.5 * pulse, 3.5 * pulse, 1);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      coreMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
