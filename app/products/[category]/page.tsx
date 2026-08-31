interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    brand?: string;
    model?: string;
  }>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { category } = await params;
  const { brand, model } = await searchParams;

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Brand: {brand ?? "All brands"}</p>
      <p>Model: {model ?? "All models"}</p>
    </div>
  );
};

export default CategoryPage;
