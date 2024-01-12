const BetaVersionLabel = () => {
  return (
    <div className="group w-max">
      <button className="rounded border-2 border-red-400 bg-red-200 px-2 text-red-600 hover:bg-red-300">
        Beta-Version
      </button>
      <span className="arrow-left pointer-events-none absolute mx-2 w-max rounded bg-black px-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
        Es sind noch nicht alle Stempel und Farben verfügbar.
      </span>
    </div>
  );
};

export default BetaVersionLabel;
