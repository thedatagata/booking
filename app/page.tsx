import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1bd9c4]"> 
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5x text-xl text-[#4a5864]">Plan your Next Client Onsite</h2>
        <h3 className= "text-[#4a5864] py-5 text-xl">Search for the best accomadation WT will expense that is not too close to the client office</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-[#1c77c3] rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold text-white">Our Greater WT Family Locations</h3> 
          <p className="font-light text-white">Explore one of the many WT Forests that are a part of our growing ecoystem</p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
