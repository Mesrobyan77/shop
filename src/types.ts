export type Testimonial = {
  avatar: string;
  name: string;
  role: string;
  text: string;
  rating?: number; // 0-5
  smallPreview?: { avatar: string };
};
