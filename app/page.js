import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import exploreData from "@/data/explore.json";
export const metadata = {
  title: "Airbnb",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function Home() {

  return (
    <>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
          
                <SmallCard 
                key={item.location}
                img={item.img}
                location={item.location}
                distance={item.distance}

                />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
