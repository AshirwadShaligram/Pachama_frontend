"use client";

import { ChevronLeft, ChevronRight } from "reicon-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { newDeals } from "@/data/newDeals";
import Link from "next/link";

const NewDealSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDeal = newDeals[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? newDeals.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === newDeals.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={currentDeal.image}
        alt={currentDeal.title}
        fill
        fetchPriority="high"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-24 text-white md:p-10 md:pb-28">
        <h2 className="text-3xl font-bold md:text-5xl">{currentDeal.title}</h2>
        <p className="mt-3 max-w-md text-sm text-white/80 md:text-base">
          {currentDeal.description}
        </p>

        {/* View Deal */}
        <Link
          href={currentDeal.href}
          className="mt-5 w-fit rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium transition hover:bg-emerald-700"
        >
          View Deal
        </Link>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-6 z-20 flex gap-2 md:bottom-10 md:right-10">
        <Button
          variant="secondary"
          size="icon"
          onClick={handlePrevious}
          aria-label="Previous deal"
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={handleNext}
          aria-label="Next deal"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default NewDealSlider;
