export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 170, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 170, 255, 0.05) 0%, transparent 50%)'
        }}
      />
    </div>
  );
};
