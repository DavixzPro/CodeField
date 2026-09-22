import { useEffect, useRef } from "react";

import Arena, {
    type ArenaType
} from "../engine/Arena.ts";

import Renderer from "../engine/Renderer.ts";
import Simulation from "../engine/Simulation.ts";

type Props = {
    simulation: Simulation;
    arenaType: ArenaType;
};

export default function ArenaCanvas({
    simulation,
    arenaType
}: Props) {

    const canvasRef =
        useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvasElement =
            canvasRef.current;

        if (canvasElement === null)
            return;

        canvasElement.width = 900;
        canvasElement.height = 900;

        const context =
            canvasElement.getContext("2d");

        if (context === null)
            return;

        const canvas: HTMLCanvasElement =
            canvasElement;

        const ctx: CanvasRenderingContext2D =
            context;

        const arena =
            new Arena(arenaType);

        const renderer =
            new Renderer();

        let animationFrame: number;

        function draw() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            // 1. Campo
            arena.draw(
                ctx,
                canvas.width,
                canvas.height
            );

            // 2. Robô
            renderer.drawRobot(
                ctx,
                simulation.robot,
                canvas.width
            );

            // 3. Estruturas elevadas da Hive
            arena.drawForeground(
                ctx,
                canvas.width,
                canvas.height
            );

            animationFrame =
                requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(
                animationFrame
            );
        };

    }, [
        simulation,
        arenaType
    ]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: 900,
                height: 900,
                background: "white"
            }}
        />
    );
}