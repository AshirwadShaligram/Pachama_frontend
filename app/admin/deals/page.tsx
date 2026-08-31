"use client";

import CreateDealPage from "@/components/admin/deal/CreateDealPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreatedDeal } from "@/types/deal";
import { useState } from "react";
import { Plus } from "reicon-react";

const AdminDeals = () => {
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const [deals, setDeals] = useState<CreatedDeal[]>([]);

  const handleDealCreated = (deal: CreatedDeal) => {
    setDeals((prev) => [deal, ...prev]);
    setShowCreateDeal(false);
  };

  if (showCreateDeal) {
    return (
      <CreateDealPage
        onBack={() => setShowCreateDeal(false)}
        onCreated={handleDealCreated}
      />
    );
  }

  const now = new Date();

  const activeDeals = deals.filter(
    (deal) => new Date(deal.startsAt) <= now && new Date(deal.endsAt) >= now,
  );

  const pendingDeals = deals.filter((deal) => new Date(deal.startsAt) > now);

  const expiredDeals = deals.filter((deal) => new Date(deal.endsAt) < now);

  return (
    <div className="h-full flex flex-col items-center border-l">
      {/* Header */}
      <div className="w-full h-16 md:p-8 flex items-center justify-center text-2xl mt-1 md:justify-end md:ml-5">
        <Input className="w-52" placeholder="Search deals..." />
      </div>

      <div className="w-full flex-1 p-6">
        {/* Details */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col">
            <h1 className="text-5xl md:w-6xl font-semibold">Active Deals</h1>

            <p className="text-gray-500 text-sm md:text-xl">
              Monitor and manage ongoing promotions, discount codes and seasonal
              sales across all hardware categories.
            </p>
          </div>

          <div>
            <Button
              className="md:w-32 md:h-12 font-semibold md:text-lg"
              onClick={() => setShowCreateDeal(true)}
            >
              <Plus />
              Create Deal
            </Button>
          </div>
        </div>

        {/* Deals */}
        <div className="mt-8 space-y-6">
          {/* Active Deals */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Active Deals</h2>

              <span className="text-sm text-muted-foreground">
                {activeDeals.length} deals
              </span>
            </div>

            {activeDeals.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No active deals yet.</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activeDeals.map((deal) => (
                  <div
                    key={`${deal.title}-${deal.startsAt}`}
                    className="rounded-xl border bg-card p-5 shadow-sm"
                  >
                    {/* Image */}
                    {deal.imagePreview && (
                      <img
                        src={deal.imagePreview}
                        alt={deal.title}
                        className="mb-4 h-40 w-full rounded-lg object-cover"
                      />
                    )}

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{deal.title}</h3>

                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {deal.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                          {deal.dealType}
                        </span>

                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                          {deal.discountType}: {deal.discountValue}
                          {deal.discountType === "Percentage" ? "%" : ""}
                        </span>
                      </div>

                      {deal.promocode && (
                        <div className="rounded-md bg-muted p-3">
                          <p className="text-xs text-muted-foreground">
                            Promo Code
                          </p>

                          <p className="font-mono font-semibold">
                            {deal.promocode}
                          </p>
                        </div>
                      )}

                      <div className="text-sm text-muted-foreground">
                        <p>
                          Starts: {new Date(deal.startsAt).toLocaleDateString()}
                        </p>

                        <p>
                          Ends: {new Date(deal.endsAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Pending Deals */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Pending Deals</h2>

              <span className="text-sm text-muted-foreground">
                {pendingDeals.length} deals
              </span>
            </div>

            {pendingDeals.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No pending deals.</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pendingDeals.map((deal) => (
                  <div
                    key={`${deal.title}-${deal.startsAt}`}
                    className="rounded-xl border bg-card p-5 shadow-sm"
                  >
                    {deal.imagePreview && (
                      <img
                        src={deal.imagePreview}
                        alt={deal.title}
                        className="mb-4 h-40 w-full rounded-lg object-cover"
                      />
                    )}

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{deal.title}</h3>

                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {deal.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                          {deal.dealType}
                        </span>

                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                          {deal.discountType}: {deal.discountValue}
                          {deal.discountType === "Percentage" ? "%" : ""}
                        </span>
                      </div>

                      {deal.promocode && (
                        <div className="rounded-md bg-muted p-3">
                          <p className="text-xs text-muted-foreground">
                            Promo Code
                          </p>

                          <p className="font-mono font-semibold">
                            {deal.promocode}
                          </p>
                        </div>
                      )}

                      <div className="text-sm text-muted-foreground">
                        Starts: {new Date(deal.startsAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDeals;
