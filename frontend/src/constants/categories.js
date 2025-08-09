import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faCouch,
  faShirt,
  faFootball,
  faBicycle,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";

const CATEGORIES = [
  {
    name: "Electronics & Gadgets",
    id: 11,
    icon: faPlug,
    href: "/electronics",
  },
  {
    name: "Study Essentials",
    id: 12,
    icon: faRuler,
    href: "/study-essentials",
  },
  {
    name: "Room & Hostel Stuff",
    id: 13,
    icon: faCouch,
    href: "/room-hostel",
  },
  {
    name: "Clothing & Accessories",
    id: 14,
    icon: faShirt,
    href: "/clothing-accessories",
  },
  {
    name: "Sports & Fitness",
    id: 15,
    icon: faFootball, // You'll need to import a sports-related icon
    href: "/sports-fitness",
  },
  {
    name: "Cycles & Transport",
    id: 16,
    icon: faBicycle, // You'll need to import a bicycle icon
    href: "/cycles-transport",
  },
];

export default CATEGORIES;
