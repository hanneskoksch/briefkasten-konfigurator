const BetaVersionLabel = () => {
  return (
    <div className="group w-max">
      <button className="px-2 text-red-600 bg-red-200 border-2 border-red-400 rounded hover:bg-red-300">
        Beta-Version
      </button>
      <span className="absolute px-2 mx-2 text-white transition-opacity bg-black rounded opacity-0 pointer-events-none arrow-left w-max group-hover:opacity-100">
        Es sind noch nicht alle Stempel und Farben verfügbar.
      </span>
    </div>
  );
};

export default BetaVersionLabel;
