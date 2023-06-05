import Data from "@/data/data";

export default function Home({ data }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-5xl mb-12">Aaj Kya Banega</h1>
      <div className="grid grid-cols-2 gap-x-24">
        <div>
          <h1 className="text-4xl font-normal mb-2">Breakfast</h1>
          <img
            className="mb-2"
            src="https://source.unsplash.com/IGfIGP5ONV0"
            alt=""
          />
          <h2 className="text-2xl">{data[0].name}</h2>
          <ul>
            {data[0].ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-4xl font-normal mb-2">Lunch & Dinner</h1>
          <img
            className="mb-2"
            src="https://source.unsplash.com/IGfIGP5ONV0"
            alt=""
          />
          <h2 className="text-2xl">{data[1].name}</h2>
          <ul>
            {data[1].ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
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

  return {
    props: {
      data,
    },
  };
}
