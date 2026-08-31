import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Banknote2, Shop3, Star } from "reicon-react";

const Sellers = () => {
  return (
    <div className="h-full flex flex-col items-center border-l">
      <div className="w-full h-16 md:p-8 flex items-center justify-center text-2xl mt-1 md:justify-end md:ml-5">
        <Input className="w-52" />
      </div>
      <div className="w-full flex-1 p-6">
        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:w-6xl font-semibold">Verified Sellers</h1>
          <p className="text-gray-500">
            Monitor performance metrics and manage active vendors accounts
            across the network.
          </p>
        </div>
        {/* Cards  */}
        <div className="flex flex-col md:flex-row gap-3 mt-3 mb-3 justify-between">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-gray-600">Active Vendors</CardTitle>
              <CardAction>
                <Shop3 className="text-teal-500" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h1 className="text-2xl">1,428</h1>
            </CardContent>
            <CardFooter className="flex gap-2">
              <h1 className="text-teal-500">+12% </h1>
              <span>vs last month</span>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-gray-600">Total volume</CardTitle>
              <CardAction>
                <Banknote2 className="text-purple-600" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h1 className="text-2xl">₹4.2M</h1>
            </CardContent>
            <CardFooter className="flex gap-2">
              <h1 className="text-teal-500">+8.4% </h1>
              <span>vs last month</span>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-gray-600">AVG RATING</CardTitle>
              <CardAction>
                <Star className="text-yellow-400" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h1 className="text-2xl">4.8</h1>
            </CardContent>
            <CardFooter className="flex gap-2">
              <span>Across 12k recent reviews</span>
            </CardFooter>
          </Card>
        </div>

        {/* Sellers Info */}
        <div className="border rounded-xl">
          <div className="h-16 flex justify-between items-center bg-gray-200 rounded-t-xl p-2">
            <h1 className="text-xl font-semibold">Top Performer</h1>
            <Button>Export Data</Button>
          </div>
          <div className="">2</div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
