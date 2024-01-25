import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdStarBorder } from "react-icons/md";

// Define a circular linked list of reviews
class Node {
  constructor(id, text, author, description, stars) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.description = description;
    this.stars = stars;
    this.next = null;
  }
}

const reviews = [
  {
    id: 1,
    text: "Delicious Delights",
    author: "John Doe",
    description:
      "This restaurant exceeded my culinary expectations. The dishes are well-prepared, flavorful, and the service is top-notch. I highly recommend it to food enthusiasts.",
    stars: 5,
  },
  {
    id: 2,
    text: "Savor Street",
    author: "Jane Smith",
    description:
      "Prompt service and excellent customer care. The quality of service provided is exceptional. I highly recommend this restaurant for its delectable dishes and professionalism.",
    stars: 4,
  },
  {
    id: 3,
    text: "Gourmet Gateway",
    author: "Alex Johnson",
    description:
      "I had an outstanding dining experience at this restaurant. The attention to detail and the diverse menu truly make it stand out. It's a must-try for food enthusiasts!",
    stars: 5,
  },
  {
    id: 4,
    text: "Culinary Creations",
    author: "Emily Davis",
    description:
      "The quality of the dishes at this restaurant is truly impressive. The flavors are exquisite, and it delivers on its promises. I'm thoroughly satisfied with my dining experience.",
    stars: 4,
  },
  {
    id: 5,
    text: "Flavor Fusion",
    author: "Chris Anderson",
    description:
      "The dining experience at this restaurant is exceptional. The flavors consistently exceed expectations, making it a top choice for anyone seeking a delightful culinary journey.",
    stars: 5,
  },
  // Add more restaurant reviews as needed
];

// Create a circular linked list from the reviews
const createCircularLinkedList = () => {
  let head = new Node(
    reviews[0].id,
    reviews[0].text,
    reviews[0].author,
    reviews[0].description,
    reviews[0].stars
  );
  let current = head;

  for (let i = 1; i < reviews.length; i++) {
    current.next = new Node(
      reviews[i].id,
      reviews[i].text,
      reviews[i].author,
      reviews[i].description,
      reviews[i].stars
    );
    current = current.next;
  }

  current.next = head; // Make it circular

  return head;
};

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(
    createCircularLinkedList()
  );

  const nextReview = () => {
    setCurrentReview(currentReview.next);
  };

  const prevReview = () => {
    let previousReview = currentReview;
    while (previousReview.next !== currentReview) {
      previousReview = previousReview.next;
    }
    setCurrentReview(previousReview);
  };

  return (
    <div className="h-[80vh] max-w-screen-lg mx-auto bg-gray-200 my-[10vh]">
      <div className="flex flex-col items-center justify-center mt-8 h-5/6 w-[50%] mx-auto py-20">
        <p className="flex justify-center items-center text-red-900 w-full text-center h-1/6">
          {/* <MdStarBorder size={50} /> */}
          {Array(currentReview.stars)
            .fill()
            .map((_, index) => (
              <MdStarBorder key={index} size={50} />
            ))}
        </p>
        <p className="  w-full h-1/6 text-center font-signature text-3xl text-red-900">
          {currentReview.text}
        </p>
        <p className="text-lg text-gray-500  w-full text-center h-3/6 leading-7">
          {currentReview.description}
        </p>
        <p className="text-xl text-gray-800 h-1/6 w-full text-center">
          {`- ${currentReview.author}`}
        </p>
      </div>

      <div className="text-center h-1/6 ">
        <button
          onClick={prevReview}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <IoIosArrowDropleftCircle
            size={50}
            className="text-red-900 active:scale-75 duration-300"
          />
        </button>
        <button
          onClick={nextReview}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <IoIosArrowDroprightCircle
            size={50}
            className="text-red-900 active:scale-75  duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
