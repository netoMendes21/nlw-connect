import Image from "next/image";
import Medal_gold from "../../../assets/Medal_gold.svg";
import Medal_silver from "../../../assets/Medal_silver.svg";
import Medal_cooper from "../../../assets/Medal_cooper.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {
  const data = await getRanking();
  console.log("dados ranking", data);

  const ranking = data?.ranking ?? [];
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((ranking, index) => {
          const rankingPosition = index + 1;

          return (
            <div
              key={ranking.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{" "}
                {ranking.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {ranking.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={Medal_gold}
                  alt="medalho de ouro"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={Medal_silver}
                  alt="medalho de ouro"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={Medal_cooper}
                  alt="medalho de ouro"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          );
        })}

        {ranking.length === 0 && (
          <p className="text-gray">Nenhuma indicação registrada</p>
        )}
      </div>
    </div>
  );
}
