import CategoryCard from "@/components/homeLayout/CategoryCard";
import Footer from "@/components/homeLayout/Footer";
import NewDealSlider from "@/components/homeLayout/NewDealSlider";
import Navbar from "@/components/navbar/Navbar";
import { categories } from "@/data/categories";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16">
        <Navbar />
      </div>
      <main className="flex flex-1 flex-col ">
        <section className="h-[50vh] md:h-[calc(100vh-4rem)]">
          <NewDealSlider />
        </section>

        <section className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
