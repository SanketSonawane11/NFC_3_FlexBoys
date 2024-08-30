import { FocusCards } from "../Components/ui/Focus-Carss";

export default function Categories() {
  const cards = [
    {
      title: "Playful Puppies",
      src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=3072&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hamsters",
      src: "https://images.unsplash.com/photo-1655527291171-73c4677c3281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbXN0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Charming Parrots",
      src: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww",
    },
    {
      title: "Rabbits",
      src: "https://images.unsplash.com/photo-1533514114760-4389f572ae26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Elegant Felines",
      src: "https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Friendly Turtles",
      src: "https://images.unsplash.com/photo-1568660357733-823cbddb0f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1cnRsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  // const showCategory = () => {
  //   if (cards.title.trim()) {
  //     navigate(`/products/${cards.title}`);
  //   } else {
  //     navigate("/products");
  //   }
  // };

  return (
    <div className="w-full h-fit px-[2rem] flex items-center justify-center flex-col">
      <div className="my-[1rem]">
        <h2 className="text-[2.5rem] font-semibold transition-all ease-out duration-200 hover:text-blue-600 text-[#1a1a1a]">
          Categories
        </h2>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
