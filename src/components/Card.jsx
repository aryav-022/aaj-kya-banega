import Data from "@/data/data.json";

export default function Card({date}) {
    const day = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
    ]).get(date.getDay());

    const data = Data[`${date.getDate()}/1`];

    const keyword = data[1].name.split(" ").join("-");

    return (
        <div className="rounded-lg min-w-[10rem]">
            <h1 className="text-xl text-center font-normal mb-2">{day}</h1>
            <img src={`https://source.unsplash.com/random/?${keyword}`} alt="" className="rounded-lg aspect-square object-cover" />
            <h1 className="text-xl text-center font-normal mb-2">{data[1].name}</h1>
        </div>
    )
}
