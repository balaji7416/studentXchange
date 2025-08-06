import clsx from "clsx";
import Card from "../../shared/Card";

const tempFeed = [
  {
    imgSrc: "/img1.jpg",
    alt: "img1",
    title: "phone 1",
    price: "$100",
    location: "bangalore",
    id: 1,
  },
  {
    imgSrc: "/img2.jpg",
    alt: "img2",
    title: "phone 3",
    price: "$300",
    location: "mumbai",
    id: 2,
  },
  {
    imgSrc: "/img3.jpg",
    alt: "img3",
    title: "phone 4",
    price: "$500",
    location: "chennai",
    id: 3,
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 4,
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 5,
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 6,
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 7,
  },
];

function MainFeed() {
  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-center",
          "text-2xl font-bold",
          "mb-5"
        )}
      >
        Fresh Recommendations
      </div>
      <div className={clsx("px-4 lg:px-8 xl:px-14")}>
        <div
          className={clsx(
            "grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5",
            "mx-auto",
            "max-w-screen-xl",
            "place-items-center"
          )}
        >
          {tempFeed.map(({ imgSrc, alt, title, price, location, id }) => (
            <Card
              imgSrc={imgSrc}
              alt={alt}
              title={title}
              price={price}
              location={location}
              id={id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainFeed;
