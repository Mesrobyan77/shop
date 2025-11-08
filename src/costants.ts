import type { Testimonial } from "./types";
import inst1 from "./assets/images/insta/image.png";
import inst2 from "./assets/images/insta/image (1).png";
import inst3 from "./assets/images/insta/image (2).png";
import inst4 from "./assets/images/insta/image (3).png";
import inst5 from "./assets/images/insta/image (4).png";
import inst6 from "./assets/images/insta/image (5).png";
import inst7 from "./assets/images/insta/image (6).png";

export const LogoName: string = "Fashion Sana";

export const testimonials: Testimonial[] = [
  {
    avatar: inst6,
    name: "James K.",
    role: "Traveler",
    text: "You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
  },
  {
    avatar: inst3,
    name: "Ava R.",
    role: "Designer",
    text: "I was looking for this. Thank you for making it so awesome! Most of all hassle free! All the features are great.",
    rating: 5,
  },
  {
    avatar: inst1,
    name: "Ethan W.",
    role: "Engineer",
    text: "This is exactly what I needed. Great UI, smooth performance, and the experience feels premium.",
    rating: 4,
  },
  {
    avatar: inst4,
    name: "Sophia L.",
    role: "Photographer",
    text: "Beautiful design and fantastic quality! I love the attention to detail in every product.",
    rating: 5,
  },
  {
    avatar: inst2,
    name: "Liam M.",
    role: "Entrepreneur",
    text: "Highly recommended! The customer service is top-notch and the product exceeded my expectations.",
    rating: 5,
  },
  {
    avatar: inst5,
    name: "Olivia S.",
    role: "Fashion Blogger",
    text: "Absolutely love it! The collection is trendy and elegant. I’ve already received so many compliments.",
    rating: 4,
  },
  {
    avatar: inst7,
    name: "Noah T.",
    role: "Traveler",
    text: "Excellent product! Very comfortable and stylish. Definitely will buy again.",
    rating: 5,
  },
  {
    avatar: inst1,
    name: "Emma B.",
    role: "Designer",
    text: "Great craftsmanship and attention to detail. Love the design and colors!",
    rating: 5,
  },
  {
    avatar: inst3,
    name: "Oliver P.",
    role: "Engineer",
    text: "Very satisfied with my purchase. The product feels premium and works exactly as described.",
    rating: 4,
  },
];

export const instaImages = [inst1, inst2, inst3, inst4, inst5, inst6, inst7];
