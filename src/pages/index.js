import Today from "@/components/Today";
import Week from "@/components/Week";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8 md:p-12">
      <h1 className="text-4xl mb-12 self-center md:self-start md:text-5xl">Aaj Kya Banega</h1>
      <Week />
      <Today />
    </main>
  );
}
