export const BikeRider = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 pointer-events-none z-10 overflow-hidden">
      <div className="absolute bottom-2 animate-bike-ride">
        {/* Bike rider character */}
        <div className="relative w-16 h-16">
          {/* Rider body */}
          <div className="absolute bottom-4 left-2 w-6 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg border-2 border-blue-400">
            {/* Head */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full border-2 border-pink-300">
              {/* Helmet */}
              <div className="absolute -top-1 left-0 w-4 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-t-full border border-red-400" />
            </div>
            {/* Arms */}
            <div className="absolute -left-2 top-1 w-2 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full border border-pink-300 -rotate-45" />
            <div className="absolute -right-2 top-1 w-2 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full border border-pink-300 rotate-45" />
          </div>

          {/* Bike */}
          <div className="absolute bottom-0 left-0 w-14 h-8">
            {/* Frame */}
            <div className="absolute bottom-2 left-2 w-8 h-1 bg-gradient-to-r from-gray-700 to-gray-800 rotate-12" />
            <div className="absolute bottom-0 left-3 w-1 h-4 bg-gradient-to-b from-gray-700 to-gray-800" />
            <div className="absolute bottom-2 left-7 w-1 h-3 bg-gradient-to-b from-gray-700 to-gray-800 -rotate-45" />
            
            {/* Front wheel */}
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700 animate-spin-wheel">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full" />
            </div>
            
            {/* Back wheel */}
            <div className="absolute bottom-0 left-8 w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700 animate-spin-wheel">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Handlebar */}
            <div className="absolute bottom-3 -left-1 w-3 h-1 bg-gradient-to-r from-gray-700 to-gray-800 -rotate-12" />
          </div>

          {/* Motion lines */}
          <div className="absolute bottom-6 -left-4 w-8 h-0.5 bg-blue-400/50 rounded-full" />
          <div className="absolute bottom-8 -left-6 w-6 h-0.5 bg-blue-300/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
