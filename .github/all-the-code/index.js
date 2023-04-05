import drawing from "../../drawing.mjs";
import { createCanvas } from "canvas";
import { createWriteStream } from "fs";

const WIDTH = 720;
const HEIGHT = 480;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

drawing(ctx);

canvas.createPNGStream().pipe(createWriteStream("../drawing.png"));
