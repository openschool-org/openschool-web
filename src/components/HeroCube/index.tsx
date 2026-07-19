import React, {useEffect, useRef, useState} from 'react';
import {UsersRound, GraduationCap, UserRound, ShieldCheck, CalendarCheck, Waves} from 'lucide-react';
import styles from './styles.module.css';

type Face = {
  cls: string;
  icon: React.ComponentType<{className?: string; strokeWidth?: number}>;
  label: string;
};

// The 3 people this platform is for (visible from the default camera
// angle: top, front, right) + 3 things that make OpenSchool itself
// distinct (on the faces you find by dragging the cube around).
const FACES: Face[] = [
  {cls: styles.faceTop, icon: UsersRound, label: 'Teachers'},
  {cls: styles.faceBottom, icon: CalendarCheck, label: 'Attendance, digitized'},
  {cls: styles.faceLeft, icon: ShieldCheck, label: 'Bearer-token security'},
  {cls: styles.faceRight, icon: UserRound, label: 'Parents'},
  {cls: styles.faceFront, icon: GraduationCap, label: 'Students'},
  {cls: styles.faceBack, icon: Waves, label: 'A/L stream management'},
];

const BASE_TILT_X = -22;
const BASE_TILT_Y = 34;
const ENTRANCE_MS = 1700;
const AUTO_SPIN_DEG_PER_MS = 360 / 24000; // one turn every 24s, matches the old CSS spin
const DRAG_SENSITIVITY = 0.4;
const MAX_TILT_X = 70;

export default function HeroCube(): React.ReactElement {
  const [rotation, setRotation] = useState({x: BASE_TILT_X, y: BASE_TILT_Y});
  const rotationRef = useRef(rotation);
  const draggingRef = useRef(false);
  const lastPointerRef = useRef({x: 0, y: 0});
  const mountedAtRef = useRef(0);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    mountedAtRef.current = performance.now();
    let prevTime = mountedAtRef.current;
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - mountedAtRef.current;
      const dt = now - prevTime;
      prevTime = now;

      if (!draggingRef.current && elapsed > ENTRANCE_MS) {
        const next = {x: rotationRef.current.x, y: rotationRef.current.y + AUTO_SPIN_DEG_PER_MS * dt};
        rotationRef.current = next;
        setRotation(next);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastPointerRef.current = {x: e.clientX, y: e.clientY};
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = {x: e.clientX, y: e.clientY};
    const next = {
      x: Math.max(-MAX_TILT_X, Math.min(MAX_TILT_X, rotationRef.current.x - dy * DRAG_SENSITIVITY)),
      y: rotationRef.current.y + dx * DRAG_SENSITIVITY,
    };
    rotationRef.current = next;
    setRotation(next);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.stageGlow} />
      <div className={`${styles.floatWrap} os-float`}>
        <div
          className={styles.cube}
          style={{transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`}}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}>
          {FACES.map((f) => (
            <div key={f.cls} className={`${styles.face} ${f.cls}`} title={f.label}>
              <span className={styles.sheen} />
              <f.icon className={styles.roleIcon} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
