"use client";
import { StickyScrollRevamp } from "./StickyScroll";
import { ParallaxCard } from "./ui/CelebrityPosts";

export function ParallaxScroll() {
  return (
    <div className="h-fit w-full my-[5rem] ">
      <div>
        <h2 className="text-[3rem] w-full text-center my-[1rem] font-bold">
          Celebrities Adopting Street Dogs
        </h2>
      </div>
      <ParallaxCard images={images} />
      <div className="w-full flex items-center justify-center">
        <h2 className="text-[2rem] my-[2rem] px-5 py-1 w-fit rounded-xl text-center font-semibold">
          Ready to be a true Fan? Know where to find your "New Best Friend"! -{" "}
          <span className="hover:bg-orange-500 border-4 border-gradient from-purple-500 via-blue-500 to-violet-500 ease-out duration-200 transition-all px-3 py-1 rounded-xl">
            <a target="_blank" href="http://localhost:3000">
              Here
            </a>
          </span>
        </h2>
      </div>
    </div>
  );
}

const images = [
  "https://img.jagrantv.com/webstories/ws4468/1686505221-john-abraham.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505224-aditya-roy-kapur.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505220-raveena-tandon.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505223-anushka-ranjan.jpg",
  "https://static.toiimg.com/thumb/msid-88803799,width-960,height-1280,resizemode-6.cms",
  "https://static.toiimg.com/photo/88803885/88803885.jpg",
  "https://static.toiimg.com/thumb/imgsize-23456,msid-69441105,width-600,resizemode-4/69441105.jpg",
  "https://www.petaindia.com/wp-content/uploads/2014/03/ImranKhan300.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Aspi1Hq18pBfqpLWBldbQK0YcQ8jsMGcOQ&s",
  "https://people.com/thmb/1GKWlnovhjD0Wrkgkwn7wYLBKo8=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(378x203:380x205)/Camila-Alves-McConaughey-d9e967b222ae4e6d9c559f8ee4a17e74.jpg",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://imgeng.jagran.com/webstories/105135/436351584-18434591650056249-1229661991024041889-n-1724656968.jpeg",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://static.toiimg.com/photo/80423522.cms",
  "https://img.jagrantv.com/webstories/ws4468/1686505221-john-abraham.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505224-aditya-roy-kapur.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505220-raveena-tandon.jpg",
  "https://img.jagrantv.com/webstories/ws4468/1686505223-anushka-ranjan.jpg",
  "https://static.toiimg.com/thumb/msid-88803799,width-960,height-1280,resizemode-6.cms",
  "https://static.toiimg.com/photo/88803885/88803885.jpg",
  "https://static.toiimg.com/thumb/imgsize-23456,msid-69441105,width-600,resizemode-4/69441105.jpg",
  "https://www.petaindia.com/wp-content/uploads/2014/03/ImranKhan300.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Aspi1Hq18pBfqpLWBldbQK0YcQ8jsMGcOQ&s",
  "https://people.com/thmb/1GKWlnovhjD0Wrkgkwn7wYLBKo8=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(378x203:380x205)/Camila-Alves-McConaughey-d9e967b222ae4e6d9c559f8ee4a17e74.jpg",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://imgeng.jagran.com/webstories/105135/436351584-18434591650056249-1229661991024041889-n-1724656968.jpeg",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://i.ytimg.com/vi/xJpyysVClmE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDEY05-POdACffwgzh5Nrn4soyVuQ",
  "https://static.toiimg.com/photo/80423522.cms",
];
