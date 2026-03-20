import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export default function Starfield() {
    const canvasRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out mouse movements for the parallax effect
    const springX = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 0.5 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let stars = [];
        const numStars = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    baseAlpha: Math.random() * 0.5 + 0.1,
                    parallaxFactor: Math.random() * 0.05 + 0.01
                });
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e) => {
            // Normalize mouse to center of screen: -0.5 to 0.5
            const rx = (e.clientX / window.innerWidth) - 0.5;
            const ry = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(rx * 100);
            mouseY.set(ry * 100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentX = springX.get();
            const currentY = springY.get();

            stars.forEach(star => {
                // Apply parallax shift based on star depth (parallaxFactor)
                let drawX = star.x - (currentX * star.parallaxFactor * canvas.width * 0.1);
                let drawY = star.y - (currentY * star.parallaxFactor * canvas.height * 0.1);

                // Wrap around screen
                if (drawX < 0) drawX += canvas.width;
                if (drawX > canvas.width) drawX -= canvas.width;
                if (drawY < 0) drawY += canvas.height;
                if (drawY > canvas.height) drawY -= canvas.height;

                ctx.fillStyle = `rgba(255, 255, 255, ${star.baseAlpha})`;
                ctx.beginPath();
                ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouseX, mouseY, springX, springY]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, #0a0a0f 0%, #000000 100%)' }}
        />
    );
}
