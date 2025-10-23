export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark crystal black background with green/red shades */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #0a0f0a 0%, #000000 50%, #0d0505 100%)'
        }}
      />
      
      {/* Animated particles/stars - more stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 2 + 2) + 's',
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Green and red glow overlays */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(0, 255, 100, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 50, 50, 0.12) 0%, transparent 40%)'
        }}
      />

      {/* Shooting/Breaking stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute animate-shooting-star"
            style={{
              animationDelay: `${i * 4}s`,
              animationDuration: '2s',
            }}
          >
            <div className="relative">
              {/* Star head */}
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
              {/* Star trail */}
              <div className="absolute top-1 -right-12 w-12 h-0.5 bg-gradient-to-r from-white to-transparent opacity-70" 
                   style={{ transform: 'rotate(-45deg) translateY(-50%)' }} />
            </div>
          </div>
        ))}
        
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-reverse-${i}`}
            className="absolute animate-shooting-star-reverse"
            style={{
              animationDelay: `${i * 4 + 2}s`,
              animationDuration: '2s',
            }}
          >
            <div className="relative">
              {/* Star head */}
              <div className="w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_2px_rgba(0,255,255,0.6)]" />
              {/* Star trail */}
              <div className="absolute top-1 -left-12 w-12 h-0.5 bg-gradient-to-l from-cyan-300 to-transparent opacity-70" 
                   style={{ transform: 'rotate(45deg) translateY(-50%)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
