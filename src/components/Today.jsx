import Data from "@/data/data.json";

export default function Today() {
  function getDateBasedOnTime() {
    const now = new Date();
    const currentHour = now.getHours();

    // Time is before 6 PM, return today's date
    if (currentHour < 18) {
      const currentDate = now.getDate();
      // const currentMonth = now.getMonth() + 1;
      return `${currentDate}/1`;
    }

    // Time is after 6 PM, return tomorrow's date
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const tommorowsDate = tomorrow.getDate();
    // const tommorowsMonth = tomorrow.getMonth() + 1;
    return `${tommorowsDate}/1`;
  }

  const date = getDateBasedOnTime();

  const data = Data[date];

  const keywords = [data[0].name.split(" ").join("-"), data[1].name.split(" ").join("-")];

  return (
    <section>
      <h2 className="text-4xl mt-12 mb-6 py-3 border-slate-200 border-b text-center md:text-left">
        Today
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-24 gap-y-8">
        <div>
          <h1 className="text-3xl font-normal mb-2">Breakfast</h1>
          <img
            className="mb-2 rounded-lg aspect-video object-center object-cover"
            src={`https://source.unsplash.com/random/?${keywords[0]}`}
            alt=""
          />
          <h2 className="text-2xl">{data[0].name}</h2>
        </div>
        <div>
          <h1 className="text-3xl font-normal mb-2">Lunch & Dinner</h1>
          <img
            className="mb-2 rounded-lg aspect-video object-center object-cover"
            src={`https://source.unsplash.com/random/?${keywords[1]}`}
            alt=""
          />
          <h2 className="text-2xl">{data[1].name}</h2>
        </div>
      </div>
    </section>
  );
}
