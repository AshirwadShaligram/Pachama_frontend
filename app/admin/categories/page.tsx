import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { adminCategories } from "@/data/categories";
import { Bezier2, Edit, EyeClosed, EyeOpen, Plus, Shop3 } from "reicon-react";

const AdminCategories = () => {
  const totalActive = adminCategories.filter(
    (category) => category.isVisible,
  ).length;

  const itemMapped = adminCategories.reduce(
    (total, category) => total + category.activeProducts,
    0,
  );

  const hiddenStructures = adminCategories.filter(
    (category) => !category.isVisible,
  ).length;

  return (
    <div className="h-full flex flex-col items-center border-l">
      {/* Header */}
      <div className="w-full h-16 md:p-8 flex items-center justify-center text-2xl mt-1 md:justify-end md:ml-5">
        <Input className="w-52" placeholder="Search deals..." />
      </div>
      <div className="w-full flex-1 p-6">
        {/* Details */}
        <div className="flex justify-between items-center gap-2">
          <div className=" flex flex-col gap-2">
            <h1 className="text-5xl md:w-6xl font-semibold">Categories</h1>
            <p className="text-gray-500 text-sm md:text-xl">
              Orgainze and control the visibility of product taxonomy. Changes
              reflect immediately on the global storefront.
            </p>
          </div>

          <div>
            <Button className="md:w-40 md:h-12 font-semibold md:text-lg">
              <Plus />
              New Category
            </Button>
          </div>
        </div>

        {/* Cards  */}
        <div className="flex flex-col md:flex-row gap-3 mt-6 mb-3 justify-between">
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">TOTAL ACTIVE</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{totalActive}</h1>
              <Bezier2 size={32} />
            </CardContent>
          </Card>
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">ITEMS MAPPED</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{itemMapped}</h1>
              <Shop3 size={32} />
            </CardContent>
          </Card>
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">HIDDEN STRCTRS</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{hiddenStructures}</h1>
              <EyeClosed size={32} />
            </CardContent>
          </Card>
        </div>

        {/* Category Data */}
        <div className="mt-8 space-y-6">
          <section>
            {adminCategories.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No categories</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {adminCategories.map((deal) => {
                  const Logo = deal.logo;

                  return (
                    <div
                      key={deal.id}
                      className="relative h-160 rounded-xl border bg-card p-5 shadow-sm flex flex-col"
                    >
                      {/* Category Logo */}
                      <span className="absolute w-12 h-12 bottom-74 left-10 border-2 flex items-center justify-center rounded-lg text-white bg-black">
                        <Logo size={28} />
                      </span>

                      <div className="flex-1">1</div>

                      <div className="flex-1 flex justify-center flex-col p-3 gap-3">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-3xl font-bold">{deal.title}</h1>

                          <p className="text-gray-600">{deal.description}</p>
                        </div>

                        <div className="border-t flex flex-col gap-2">
                          <span className="flex justify-between mt-3">
                            <h1 className="font-semibold">SUB-CATEGORIES</h1>
                            <p>{deal.subCategories.length}</p>
                          </span>

                          <span className="flex justify-between mt-3">
                            <h1 className="font-semibold">ACTIVE PRODUCTS</h1>
                            <p>{deal.activeProducts}</p>
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <Button className="w-24 md:w-32 md:h-10">
                            <Edit />
                            <span className="font-semibold">Edit</span>
                          </Button>

                          <Button className="w-24 md:w-32 md:h-10">
                            {deal.isVisible ? (
                              <span className="flex gap-2 items-center justify-center">
                                <EyeClosed />
                                <span className="font-semibold">Hide</span>
                              </span>
                            ) : (
                              <span className="flex gap-2 items-center justify-center">
                                <EyeOpen />
                                <span className="font-semibold">Show</span>
                              </span>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
