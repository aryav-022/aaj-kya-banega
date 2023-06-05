import Card from "@/components/Card";

export default function Week() {
    const now = new Date();
    const currentHour = now.getHours();
    let datesArray = [];

    if (currentHour < 18) {
        for (let i = 1; i < 7; i++) {
            const tomorrow = new Date();
            tomorrow.setDate(now.getDate() + i);
            datesArray.push(tomorrow);
        }
    } else {
        for (let i = 2; i < 8; i++) {
            const tomorrow = new Date();
            tomorrow.setDate(now.getDate() + i);
            datesArray.push(tomorrow);
        }
    }

    return (
        <section>
            <h2 className="text-4xl mb-6 py-3 border-slate-200 border-b text-center md:text-left">
                This Week
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] place-items-center gap-8 overflow-x-auto">
                {
                    datesArray.map((date, idx) => (
                        <Card key={idx} date={date} />
                    ))
                }
            </div>
        </section>
    );
}
