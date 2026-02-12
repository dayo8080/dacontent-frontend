import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { GiSparkles } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() - 0.5 * 0.5,
        speedY: Math.random() * -0.5 * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <GiSparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">
              Welcome to Dacontent Engineering Limited
            </span>
          </div>
        </div>
        {/* typewrite text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          <TypeAnimation
            sequence={[
              "We Create Magic",
              2000,
              "We Build Dreams",
              2000,
              "We Engineer Solutions",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        {/* description */}
        <p className="text-base sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          We are passionate in delivering cutting-edge technology services that
          drive growth and success for our clients.
        </p>
        {/* get started button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="{#}"
            className="group inline-flex items-center justify-center space-x-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
