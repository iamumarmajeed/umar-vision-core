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
      {/* Hayasaka anime character */}
      <div className="relative">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/30 rounded-full blur-sm" />
        
        {/* Character body */}
        <div className="relative animate-bounce-subtle">
          {/* Head with blonde hair */}
          <div className="relative">
            {/* Hair */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-full border-2 border-yellow-400" />
            
            {/* Face */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full border-2 border-pink-300 mx-auto mt-4">
              {/* Side hair strands */}
              <div className="absolute -left-3 top-2 w-4 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full border border-yellow-400 -rotate-12" />
              <div className="absolute -right-3 top-2 w-4 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full border border-yellow-400 rotate-12" />
              
              {/* Eyes - signature Hayasaka look */}
              <div className="absolute top-5 left-2 w-3 h-3 bg-blue-800 rounded-full">
                <div className="absolute top-0 left-1 w-1 h-1 bg-white rounded-full" />
              </div>
              <div className="absolute top-5 right-2 w-3 h-3 bg-blue-800 rounded-full">
                <div className="absolute top-0 left-1 w-1 h-1 bg-white rounded-full" />
              </div>
              
              {/* Blush */}
              <div className="absolute top-7 left-0 w-2 h-1.5 bg-pink-400/60 rounded-full" />
              <div className="absolute top-7 right-0 w-2 h-1.5 bg-pink-400/60 rounded-full" />
              
              {/* Mouth - slight smile */}
              <div className="absolute top-9 left-1/2 -translate-x-1/2 w-3 h-1 bg-red-400/60 rounded-full" />
            </div>
          </div>
          
          {/* Body - maid outfit inspired */}
          <div className="relative w-14 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mx-auto -mt-2 border-2 border-gray-700">
            {/* White collar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-t-full" />
            {/* Apron detail */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-white/20 rounded-lg border border-white/30" />
          </div>
          
          {/* Arms */}
          <div className="absolute top-18 -left-2 w-3 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full border border-pink-300 animate-float" />
          <div className="absolute top-18 -right-2 w-3 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full border border-pink-300 animate-float" style={{ animationDelay: "0.5s" }} />
          
          {/* Skirt */}
          <div className="w-16 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-lg mx-auto -mt-1 border-2 border-gray-700" />
          
          {/* Legs */}
          <div className="flex justify-center gap-3 mt-1">
            <div className="w-2.5 h-8 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full border border-pink-300" />
            <div className="w-2.5 h-8 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full border border-pink-300" />
          </div>
        </div>

        {/* Sparkles around Hayasaka */}
        <div className="absolute -top-4 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-2 -left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-4 right-3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
      </div>
    </div>
  );
};
