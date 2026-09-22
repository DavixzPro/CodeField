import ArenaDecode from "./ArenaDecode.ts";
import ArenaBiobuzz from "./ArenaBiobuzz.ts";

export type ArenaType =
    | "DECODE"
    | "BIOBUZZ";

export default class Arena {

    private type: ArenaType;

    private decode: ArenaDecode;

    private biobuzz: ArenaBiobuzz;

    constructor(
        type: ArenaType = "DECODE"
    ) {

        this.type =
            type;

        this.decode =
            new ArenaDecode();

        this.biobuzz =
            new ArenaBiobuzz();
    }


    draw(
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) {

        if (
            this.type === "BIOBUZZ"
        ) {

            this.biobuzz.draw(
                ctx,
                canvasWidth,
                canvasHeight
            );

            return;
        }

        this.decode.draw(
            ctx,
            canvasWidth,
            canvasHeight
        );
    }


    drawForeground(
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) {

        if (
            this.type === "BIOBUZZ"
        ) {

            this.biobuzz.drawHiveForeground(
                ctx,
                canvasWidth,
                canvasHeight
            );
        }
    }
}