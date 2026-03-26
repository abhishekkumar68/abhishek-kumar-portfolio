import { useEffect, useRef } from 'react';

// Dark cloud shapes made from clusters of overlapping circles, drifting across screen
export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        // Generate bumpy cloud shape as a cluster of overlapping circle positions (local coords)
        function makeCloudPuffs(puffCount) {
            const puffs = [];
            let x = 0, y = 0;
            for (let i = 0; i < puffCount; i++) {
                const r = 28 + Math.random() * 40;
                puffs.push({ x, y, r });
                // Next puff to the right and slightly up/down
                x += r * 0.8;
                y += (Math.random() - 0.5) * 30;
            }
            // Centre the cloud horizontally
            const totalW = x;
            puffs.forEach(p => { p.x -= totalW / 2; });
            return puffs;
        }

        // Cloud objects
        const clouds = Array.from({ length: 5 }, (_, i) => {
            const puffCount = 5 + Math.floor(Math.random() * 4);
            const puffs = makeCloudPuffs(puffCount);
            const scale = 1.5 + Math.random() * 2;
            return {
                x: Math.random() * 1.3 - 0.15,  // fraction of canvas width
                y: 0.05 + Math.random() * 0.85,  // fraction of canvas height
                scale,
                puffs,
                speed: 0.00015 + Math.random() * 0.0001, // moves left→right
                direction: Math.random() > 0.5 ? 1 : -1,
                hue: [215, 230, 250, 270][i % 4],
                alpha: 0.28 + Math.random() * 0.18,
                pulsePhase: Math.random() * Math.PI * 2,
            };
        });

        let t = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        function drawCloud(cloud) {
            const W = canvas.width;
            const H = canvas.height;
            const cx = cloud.x * W;
            const cy = cloud.y * H;
            const s = cloud.scale;
            const pulse = 0.008 * Math.sin(t * 0.4 + cloud.pulsePhase);
            const alpha = Math.max(0, cloud.alpha + pulse);

            cloud.puffs.forEach(p => {
                const px = cx + p.x * s;
                const py = cy + p.y * s;
                const pr = p.r * s;

                // Radial gradient for each puff = cloud volume illusion
                const grad = ctx.createRadialGradient(px, py - pr * 0.2, pr * 0.1, px, py, pr);
                grad.addColorStop(0,   `hsla(${cloud.hue}, 40%, 70%, ${alpha})`);
                grad.addColorStop(0.5, `hsla(${cloud.hue}, 30%, 45%, ${alpha * 0.65})`);
                grad.addColorStop(1,   `hsla(${cloud.hue}, 20%, 20%, 0)`);

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(px, py, pr, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        const render = () => {
            const W = canvas.width;
            const H = canvas.height;

            // Deep space background
            const bg = ctx.createRadialGradient(W / 2, H * 0.4, 0, W / 2, H / 2, Math.max(W, H) * 0.8);
            bg.addColorStop(0, '#08080f');
            bg.addColorStop(1, '#000008');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Move and draw each cloud
            clouds.forEach(cloud => {
                cloud.x += cloud.speed * cloud.direction;

                // Wrap when fully off-screen
                if (cloud.direction > 0 && cloud.x > 1.3) cloud.x = -0.3;
                if (cloud.direction < 0 && cloud.x < -0.3) cloud.x = 1.3;

                drawCloud(cloud);
            });

            t += 1;
            animId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
