export default class ArenaBiobuzz {

    readonly FIELD_SIZE_CM = 365.76;


    draw(
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) {

        // =====================================================
        // FUNDO
        // =====================================================

        this.drawBackground(
            ctx,
            canvasWidth,
            canvasHeight
        );


        // =====================================================
        // TILES
        // =====================================================

        this.drawTiles(
            ctx,
            canvasWidth
        );


        // =====================================================
        // LOADING ZONES
        // =====================================================

        this.drawLoadingZones(
            ctx,
            canvasWidth,
            canvasHeight
        );


        // =====================================================
        // GARDENS
        // =====================================================

        this.drawGardens(
            ctx,
            canvasWidth,
            canvasHeight
        );


        // =====================================================
        // FLOWERS
        // =====================================================

        this.drawFlowers(
            ctx,
            canvasWidth,
            canvasHeight
        );


        // =====================================================
        // ESTRUTURA CINZA DA HIVE
        // =====================================================

        this.drawHiveSupport(
            ctx,
            canvasWidth,
            canvasHeight
        );


        // =====================================================
        // GOLS
        // =====================================================

        this.drawGoals(
            ctx,
            canvasWidth
        );


        // =====================================================
        // BORDA
        // =====================================================

        this.drawBorder(
            ctx,
            canvasWidth,
            canvasHeight
        );
    }


    // =========================================================
    // FOREGROUND DA HIVE
    // =========================================================

    drawHiveForeground(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        // Primeiro desenha a estrutura cinza
        this.drawHiveSupport(
            ctx,
            width,
            height
        );

        // Depois desenha os gols por cima dela
        this.drawGoals(
            ctx,
            width
        );
    }


    // =========================================================
    // GOLS
    // =========================================================

    private drawGoals(
        ctx: CanvasRenderingContext2D,
        width: number
    ) {

        const tile =
            width / 6;


        const goalLength =
            tile * (30.5 / 60.96);

        const goalWidth =
            tile * (53.5 / 60.96);


        // =====================================================
        // BLUE
        // =====================================================

        const blueY =
            tile * 2.5;

        const blueLeftX =
            tile * 2.2;

        const blueRightX =
            tile * 3.8;


        ctx.beginPath();

        ctx.moveTo(
            blueLeftX + goalLength / 2,
            blueY
        );

        ctx.lineTo(
            blueRightX - goalLength / 2,
            blueY
        );

        ctx.strokeStyle =
            "rgb(3, 0, 209)";

        ctx.lineWidth =
            6;

        ctx.lineCap =
            "round";

        ctx.stroke();


        ctx.fillStyle =
            "rgb(3, 0, 209)";

        ctx.fillRect(
            blueLeftX - goalLength / 2,
            blueY - goalWidth / 2,
            goalLength,
            goalWidth
        );

        ctx.fillRect(
            blueRightX - goalLength / 2,
            blueY - goalWidth / 2,
            goalLength,
            goalWidth
        );


        // =====================================================
        // RED
        // =====================================================

        const redY =
            tile * 3.5;

        const redLeftX =
            tile * 2.2;

        const redRightX =
            tile * 3.8;


        ctx.beginPath();

        ctx.moveTo(
            redLeftX + goalLength / 2,
            redY
        );

        ctx.lineTo(
            redRightX - goalLength / 2,
            redY
        );

        ctx.strokeStyle =
            "#ff0400";

        ctx.lineWidth =
            6;

        ctx.lineCap =
            "round";

        ctx.stroke();


        ctx.fillStyle =
            "#ff0400";

        ctx.fillRect(
            redLeftX - goalLength / 2,
            redY - goalWidth / 2,
            goalLength,
            goalWidth
        );

        ctx.fillRect(
            redRightX - goalLength / 2,
            redY - goalWidth / 2,
            goalLength,
            goalWidth
        );
    }


    // =========================================================
    // ESTRUTURA CINZA DA HIVE
    // =========================================================

    private drawHiveSupport(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        const tile =
            width / 6;


        const left =
            tile * 2.2;

        const right =
            tile * 3.8;


        const top =
            tile * 2;

        const bottom =
            tile * 4;


        const centerX =
            width / 2;

        const centerY =
            height / 2;


        const gap =
            tile * 1.25;


        const topPointY =
            centerY - gap / 2;

        const bottomPointY =
            centerY + gap / 2;


        // =====================================================
        // TRIÂNGULO SUPERIOR
        // =====================================================

        ctx.beginPath();

        ctx.moveTo(
            left,
            top
        );

        ctx.lineTo(
            right,
            top
        );

        ctx.lineTo(
            centerX,
            topPointY
        );

        ctx.closePath();


        ctx.strokeStyle =
            "#707070";

        ctx.lineWidth =
            5;

        ctx.lineJoin =
            "round";

        ctx.stroke();


        // =====================================================
        // TRIÂNGULO INFERIOR
        // =====================================================

        ctx.beginPath();

        ctx.moveTo(
            left,
            bottom
        );

        ctx.lineTo(
            right,
            bottom
        );

        ctx.lineTo(
            centerX,
            bottomPointY
        );

        ctx.closePath();


        ctx.strokeStyle =
            "#707070";

        ctx.lineWidth =
            5;

        ctx.lineJoin =
            "round";

        ctx.stroke();


        // =====================================================
        // LINHA CENTRAL
        // =====================================================

        ctx.beginPath();

        ctx.moveTo(
            centerX,
            topPointY
        );

        ctx.lineTo(
            centerX,
            bottomPointY
        );


        ctx.strokeStyle =
            "#707070";

        ctx.lineWidth =
            7;

        ctx.stroke();
    }


    // =========================================================
    // FUNDO
    // =========================================================

    private drawBackground(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        ctx.fillStyle =
            "#151515";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );
    }


    private drawTiles(
    ctx: CanvasRenderingContext2D,
    width: number
) {

    const tile =
        width / 6;


    // =====================================================
    // TATAMES
    // =====================================================

    for (let row = 0; row < 6; row++) {

        for (let col = 0; col < 6; col++) {

            ctx.fillStyle =
                (row + col) % 2 === 0
                    ? "#1a1a1a"
                    : "#0c0c0c";


            ctx.fillRect(
                col * tile,
                row * tile,
                tile,
                tile
            );
        }
    }


    // =====================================================
    // LINHAS ENTRE OS TATAMES
    // =====================================================

    ctx.strokeStyle =
        "#2f2f2f";

    ctx.lineWidth =
        2;

    ctx.beginPath();


    // Linhas verticais

    for (let i = 1; i < 6; i++) {

        ctx.moveTo(
            i * tile,
            0
        );

        ctx.lineTo(
            i * tile,
            width
        );
    }


    // Linhas horizontais

    for (let i = 1; i < 6; i++) {

        ctx.moveTo(
            0,
            i * tile
        );

        ctx.lineTo(
            width,
            i * tile
        );
    }


    ctx.stroke();
}


    // =========================================================
    // LOADING ZONES
    // =========================================================

    private drawLoadingZones(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        const tile =
            width / 6;

        const zoneHeight =
            tile * 0.25;


        // BLUE

        ctx.fillStyle =
            "rgba(41, 121, 255, 0.15)";

        ctx.strokeStyle =
            "rgb(3, 0, 209)";

        ctx.lineWidth =
            3;

        ctx.fillRect(
            tile * 4,
            0,
            tile,
            zoneHeight
        );

        ctx.strokeRect(
            tile * 4,
            0,
            tile,
            zoneHeight
        );


        // RED

        ctx.fillStyle =
            "rgba(229, 57, 53, 0.15)";

        ctx.strokeStyle =
            "#fc0400";

        ctx.fillRect(
            tile,
            height - zoneHeight,
            tile,
            zoneHeight
        );

        ctx.strokeRect(
            tile,
            height - zoneHeight,
            tile,
            zoneHeight
        );
    }


    // =========================================================
    // GARDENS
    // =========================================================

    private drawGardens(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        const tile =
            width / 6;

        const offset =
            tile * 0.05;


        // BLUE GARDEN

        ctx.strokeStyle =
            "rgb(3, 0, 209)";

        ctx.lineWidth =
            10;

        ctx.beginPath();

        ctx.moveTo(
            offset,
            0
        );

        ctx.lineTo(
            offset,
            tile
        );

        ctx.stroke();


        // RED GARDEN

        ctx.strokeStyle =
            "#ff0400";

        ctx.beginPath();

        ctx.moveTo(
            width - offset,
            height - tile
        );

        ctx.lineTo(
            width - offset,
            height
        );

        ctx.stroke();
    }


    // =========================================================
    // FLOWERS
    // =========================================================

    private drawFlowers(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        const tile =
            width / 6;


        this.drawFlower(
            ctx,
            tile * 2,
            0
        );


        this.drawFlower(
            ctx,
            0,
            tile * 4
        );


        this.drawFlower(
            ctx,
            tile * 4,
            height
        );


        this.drawFlower(
            ctx,
            width,
            tile * 2
        );
    }


    private drawFlower(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number
    ) {

        ctx.save();

        ctx.translate(
            x,
            y
        );

        ctx.fillStyle =
            "#2cb833";

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            18,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();
    }


    // =========================================================
    // BORDA
    // =========================================================

    private drawBorder(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ) {

        ctx.strokeStyle =
            "#ffffff";

        ctx.lineWidth =
            3;

        ctx.strokeRect(
            0,
            0,
            width,
            height
        );
    }
}