import Image from "next/image";

const destinations = [
  {
    city: "New York, USA",
    tagline: "Coastal energy, modern Venue",
    popular: "Popular: Rooftop",
    price: "From $50 per hour",
    venues: "24 Venues",
    image: "/images/dest-newyork.jpg",
  },
  {
    city: "London, UK",
    tagline: "Coastal energy, modern Venue",
    popular: "Popular: Rooftop",
    price: "From $25 per hour",
    venues: "108 Venues",
    image: "/images/dest-london.jpg",
  },
  {
    city: "Dubai, UAE",
    tagline: "Coastal energy, modern Venue",
    popular: "Popular: Rooftop",
    price: "From $50 per hour",
    venues: "17 Venues",
    image: "/images/dest-dubai.jpg",
  },
];

export function Destinations() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-5 py-16 md:px-8 lg:px-[81px] lg:py-[100px]">
      <div className="mx-auto mb-10 max-w-[1200px] text-center lg:mb-[70px]">
        <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[36px] lg:text-[44px] lg:leading-[50px]">
          Discover Exceptional Destinations Across the Region
        </h2>
        <p className="mt-2.5 text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">
          From cosmopolitan cityscapes to cultural treasures, explore where celebrations come
          alive with local flavor.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1277px] grid-cols-1 gap-6 lg:grid-cols-3">
        {destinations.map((d) => (
          <div
            key={d.city}
            className="relative h-[420px] overflow-hidden rounded-[20px] bg-[#d9d9d9] lg:h-[500px]"
          >
            <Image src={d.image} alt={d.city} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-30% to-black" />
            <span className="absolute left-5 top-4 rounded-full bg-black/30 px-4 py-2 text-xs font-semibold text-white">
              {d.venues}
            </span>
            <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-2.5 text-white">
              <h3 className="text-[26px] font-semibold lg:text-[30px]">{d.city}</h3>
              <div className="flex flex-col gap-1 text-sm lg:text-base">
                <p>{d.tagline}</p>
                <div className="flex items-center justify-between">
                  <span>{d.popular}</span>
                  <span className="font-bold">{d.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
