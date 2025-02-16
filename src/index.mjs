export class GaugeChart {
    constructor(selector, percentages, color = "#3FABFF",options = {}) {
        this.canvas = typeof selector === "string" ? document.querySelector(selector) : selector;
        this.color = color;
        if (!(this.canvas instanceof HTMLCanvasElement)) {
            throw new Error("Invalid selector: Expected a <canvas> element.");
        }

        this.ctx = this.canvas.getContext('2d');
        this.percentages = percentages || [0.15, 0.5, 0.2, 0.15];
        this.strokeWidthFactor = options.strokeWidthFactor || 0.4;

        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        this.draw();
    }

    draw() {
        const { ctx, canvas, percentages, strokeWidthFactor } = this;
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const size = Math.min(width, height - 10);
        const baseLineWidth = (size * 2 / 10) * strokeWidthFactor;
        const maxRadius = Math.min(width, (height - baseLineWidth / Math.PI));
        const radius = (maxRadius - baseLineWidth) / 2;
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.clearRect(0, 0, width, height);
        const spaceBetweenPerc = 0.01 + parseFloat(((baseLineWidth) / (2 * radius * Math.PI)).toFixed(3));

        let last = 0;
        for (const i of percentages) {
            ctx.lineCap = 'round';
            ctx.strokeStyle = this.color;
            ctx.lineWidth = baseLineWidth;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, (last + (spaceBetweenPerc / 2)) * 2 * Math.PI, (last + i - spaceBetweenPerc / 2) * 2 * Math.PI, false);
            ctx.stroke();

            ctx.lineCap = 'square';
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - (baseLineWidth / 2) - ctx.lineWidth - 2, (last + 0.0075) * 2 * Math.PI, (last + i - 0.0075) * 2 * Math.PI, false);
            ctx.stroke();
            last += i;
        }
    }
}

export default GaugeChart;
