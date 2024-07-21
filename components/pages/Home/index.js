import { useEffect, useRef } from 'react';

import Scene from 'utils/coding-1';

import s from './Home.module.scss';

export default function Home() {
  const scene = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    scene.current = new Scene(canvas.current, ['/images/clouds.jpg', '/images/buddha.jpg']);

    window.addEventListener('resize', scene.current.resize);
    window.addEventListener('mousemove', scene.current.onMouseMove);

    return () => {
      window.removeEventListener('resize', scene.current.resize);
      window.removeEventListener('mousemove', scene.current.onMouseMove);
      scene.current.dismiss();
    };
  }, []);

  return (
    <div className={s.canvasHolder}>
      <canvas ref={canvas} />
    </div>
  );
}
