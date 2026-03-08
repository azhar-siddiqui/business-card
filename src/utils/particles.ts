/**
 * Utility: Animated floating particles background
 */

import type { Particle } from "../types";

interface ParticlesConfig {
  count: number;
  maxRadius: number;
  minRadius: number;
  maxVelocity: number;
  minVelocity: number;
  color: string;
}

const defaultConfig: ParticlesConfig = {
  count: 40,
  maxRadius: 2,
  minRadius: 0.8,
  maxVelocity: 0.4,
  minVelocity: 0.1,
  color: "rgba(0, 212, 255, 0.45)",
};

export class ParticlesAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private config: ParticlesConfig;
  private animationId: number | null = null;

  constructor(canvasId: string, config: Partial<ParticlesConfig> = {}) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas)
      throw new Error(`Canvas element with id "${canvasId}" not found`);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.config = { ...defaultConfig, ...config };

    this.resize();
    this.initParticles();
    this.setupEventListeners();
  }

  private resize = (): void => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  private setupEventListeners = (): void => {
    window.addEventListener("resize", this.resize);
  };

  private initParticles = (): void => {
    this.particles = [];
    for (let i = 0; i < this.config.count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r:
          Math.random() * (this.config.maxRadius - this.config.minRadius) +
          this.config.minRadius,
        vy:
          Math.random() * (this.config.maxVelocity - this.config.minVelocity) +
          this.config.minVelocity,
      });
    }
  };

  private animate = (): void => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.config.color;

    this.particles.forEach((p) => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fill();

      p.y -= p.vy;
      if (p.y < -p.r) p.y = this.canvas.height + p.r;
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  public start = (): void => {
    if (!this.animationId) {
      this.animate();
    }
  };

  public stop = (): void => {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  };

  public destroy = (): void => {
    this.stop();
    window.removeEventListener("resize", this.resize);
  };
}
