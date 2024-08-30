"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";

const content = [
  {
    title: "Unconditional Love",
    description:
      "Street dogs are incredibly grateful and often form strong, loving bonds with their adopters. They show affection in the most genuine ways and become loyal companions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white relative">
        <img
          src="https://images.pexels.com/photos/1289556/pexels-photo-1289556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Dog showing affection"
        />
      </div>
    ),
  },
  {
    title: "Low Adoption Fees",
    description:
      "Typically, street dogs have lower adoption fees compared to purebred dogs, making them more affordable. You can give a deserving dog a home without breaking the bank.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white relative">
        <img
          src="https://images.pexels.com/photos/3833052/pexels-photo-3833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Affordable adoption fees"
        />
      </div>
    ),
  },
  {
    title: "Health Benefits",
    description:
      "Many street dogs are already vaccinated and sterilized, saving you additional costs. They are often in good health and ready to become part of your family.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white relative">
        <img
          src="https://images.pexels.com/photos/7474855/pexels-photo-7474855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Healthy street dog"
        />
      </div>
    ),
  },
  {
    title: "Helping the Community",
    description:
      "By adopting, you help reduce the stray population and give a dog a second chance at life. Your decision to adopt makes a significant impact on the community and the dog's future.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white relative">
        <img
          src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Helping the community"
        />
      </div>
    ),
  },
];

export function StickyScrollRevamp() {
  return (
    <div className="w-full my-[4rem]">
      <div className="w-full flex items-center justify-center flex-row">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Why Adopt a Street Dog?
        </h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
