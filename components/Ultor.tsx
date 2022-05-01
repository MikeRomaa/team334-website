import React, { HTMLProps, useCallback, useEffect, useRef } from 'react';

export const Ultor: React.FC<HTMLProps<HTMLCanvasElement>> = ({ ...other }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestIdRef = useRef<number | null>(null);

    const [frames, setFrames] = React.useState<HTMLImageElement[]>();

    const createFrames = () => {
        const frames: HTMLImageElement[] = [];
        for (let i = 0; i < 100; i++) {
            const img = new Image();
            img.src = `/media/ultor/${(i + 1).toString().padStart(4, '0')}.png`;
            frames[i] = img;
        }
        setFrames(frames);
    };

    const paintFrame = () => {
        const frame = Math.floor(document.documentElement.scrollTop / document.documentElement.clientHeight * 99);
        const ctx = canvasRef.current!.getContext('2d');
        ctx?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        if (frames) {
            ctx?.drawImage(frames[frame], 0, 0);
        }
    };

    const updateFrame = useCallback(() => {
        if (!canvasRef.current || !frames) return;
        requestIdRef.current = window.requestAnimationFrame(paintFrame);
    }, [canvasRef, requestIdRef, frames]);

    useEffect(() => createFrames(), []);

    useEffect(() => {
        if (!frames) return;
        updateFrame();
        document.addEventListener('scroll', updateFrame);
        return () => {
            cancelAnimationFrame(requestIdRef.current!);
            document.removeEventListener('scroll', updateFrame);
        };
    }, [updateFrame]);

    return (
        <canvas width={1000} height={1000} ref={canvasRef} {...other} />
    );
};
