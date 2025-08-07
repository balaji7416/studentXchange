import clsx from "clsx";
import Card from "./Card";

const tempFeed = [
  {
    imgSrc: "/img1.jpg",
    alt: "img1",
    title: "phone 1",
    price: "$100",
    location: "bangalore",
    id: 1,
    postedDate: "2023-10-01T12:00:00Z",
  },
  {
    imgSrc: "/img2.jpg",
    alt: "img2",
    title: "phone 3",
    price: "$300",
    location: "mumbai",
    id: 2,
    postedDate: "2022-10-02T12:00:00Z",
  },
  {
    imgSrc: "/img3.jpg",
    alt: "img3",
    title: "phone 4",
    price: "$500",
    location: "chennai",
    id: 3,
    postedDate: "2023-10-03T12:00:00Z",
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 4,
    postedDate: "2015-10-04T12:00:00Z",
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 5,
    postedDate: "2010-10-05T12:00:00Z",
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 6,
    postedDate: "2016-10-06T12:00:00Z",
  },
  {
    imgSrc: "/img4.png",
    alt: "img4",
    title: "phone 5",
    price: "$700",
    location: "kolkata",
    id: 7,
    postedDate: "2017-10-07T12:00:00Z",
  },
];

function MainFeed() {
  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-center",
          " font-semibold",
          "md:text-xl",
          "lg:text-2xl",
          "mb-5"
        )}
      >
        Fresh Recommendations
      </div>
      <div className={clsx("px-4 lg:px-8 xl:px-14")}>
        <div
          className={clsx(
            "grid",
            "gap-5",
            "grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]",
            "md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]",
            "mx-auto",
            "max-w-screen-xl",
            "place-items-center"
          )}
        >
          {tempFeed.map(
            ({ imgSrc, alt, title, price, location, id, postedDate }) => (
              <Card
                imgSrc={imgSrc}
                alt={alt}
                title={title}
                price={price}
                location={location}
                id={id}
                postedDate={postedDate}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default MainFeed;
