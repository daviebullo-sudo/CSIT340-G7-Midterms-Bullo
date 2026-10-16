import { useState } from "react";
export default function RepoCard({ name, description, stars }) {
  const [starCount, setStarCount] = useState(stars);

  function handleStar() {
    setStarCount(starCount + 1);
  }

  return (
    <div className="rounded-xl border-2 border-[#222222] p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{name}</h3>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
          onClick={handleStar}
        >
          ★ {starCount}
        </button>
      </div>
      <p className="mt-2 text-xl">{description}</p>
    </div>
  );
}