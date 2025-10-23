import { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

export const AnimatedCharacter = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState<Position>({ x: 1, y: 1 });
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(Date.now());

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastUpdateRef.current) / 16; // Normalize to ~60fps
      lastUpdateRef.current = now;

      setPosition((prevPos) => {
        setVelocity((prevVel) => {
          let newVelX = prevVel.x;
          let newVelY = prevVel.y;

          // Calculate distance to mouse
          const dx = mousePos.x - prevPos.x;
          const dy = mousePos.y - prevPos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Repel from mouse if too close
          const repelDistance = 150;
          if (distance < repelDistance && distance > 0) {
            const force = (repelDistance - distance) / repelDistance;
            newVelX -= (dx / distance) * force * 0.5;
            newVelY -= (dy / distance) * force * 0.5;
          }

          // Random wandering
          newVelX += (Math.random() - 0.5) * 0.1;
          newVelY += (Math.random() - 0.5) * 0.1;

          // Speed limit
          const speed = Math.sqrt(newVelX * newVelX + newVelY * newVelY);
          if (speed > 3) {
            newVelX = (newVelX / speed) * 3;
            newVelY = (newVelY / speed) * 3;
          }

          // Friction
          newVelX *= 0.98;
          newVelY *= 0.98;

          return { x: newVelX, y: newVelY };
        });

        let newX = prevPos.x + velocity.x * deltaTime;
        let newY = prevPos.y + velocity.y * deltaTime;

        // Bounce off walls
        const margin = 60;
        if (newX < margin || newX > window.innerWidth - margin) {
          setVelocity((v) => ({ ...v, x: -v.x }));
          newX = Math.max(margin, Math.min(window.innerWidth - margin, newX));
        }
        if (newY < margin || newY > window.innerHeight - margin) {
          setVelocity((v) => ({ ...v, y: -v.y }));
          newY = Math.max(margin, Math.min(window.innerHeight - margin, newY));
        }

        // Flip character based on direction
        if (velocity.x < -0.5) setIsFlipped(true);
        else if (velocity.x > 0.5) setIsFlipped(false);

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePos, velocity]);

  return (
    <div
      className="fixed pointer-events-none z-0 transition-transform duration-100"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isFlipped ? "scaleX(-1)" : ""}`,
      }}
    >
      {/* Cute cartoon character */}
      <div className="relative">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full blur-sm" />
        
        {/* Character body */}
        <div className="relative animate-bounce-subtle">
          {/* Main body - round and cute */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-4 border-white shadow-lg">
            {/* Cute eyes */}
            <div className="absolute top-5 left-3 w-3 h-4 bg-black rounded-full">
              <div className="absolute top-0 left-1 w-1.5 h-1.5 bg-white rounded-full" />
              <div className="absolute top-2 left-0.5 w-1 h-1 bg-white/50 rounded-full" />
            </div>
            <div className="absolute top-5 right-3 w-3 h-4 bg-black rounded-full">
              <div className="absolute top-0 left-1 w-1.5 h-1.5 bg-white rounded-full" />
              <div className="absolute top-2 left-0.5 w-1 h-1 bg-white/50 rounded-full" />
            </div>
            
            {/* Blush */}
            <div className="absolute top-8 left-1 w-3 h-2 bg-pink-500/40 rounded-full" />
            <div className="absolute top-8 right-1 w-3 h-2 bg-pink-500/40 rounded-full" />
            
            {/* Cute smile */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-b-full" />
          </div>
          
          {/* Cute ears */}
          <div className="absolute -top-1 left-2 w-4 h-5 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full border-2 border-white" />
          <div className="absolute -top-1 right-2 w-4 h-5 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full border-2 border-white" />
          
          {/* Little arms */}
          <div className="absolute top-10 -left-3 w-3 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white animate-float" />
          <div className="absolute top-10 -right-3 w-3 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white animate-float" style={{ animationDelay: "0.5s" }} />
          
          {/* Little legs */}
          <div className="absolute -bottom-2 left-4 w-3 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full border-2 border-white" />
          <div className="absolute -bottom-2 right-4 w-3 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full border-2 border-white" />
        </div>

        {/* Sparkles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
        <div className="absolute top-3 -left-3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
      </div>
    </div>
  );
};
