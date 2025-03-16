import { Framer } from "lucide-react";
import { Rocket } from "lucide-react";
import { Hammer } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Pointer } from "lucide-react";
import { FolderCode } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/project" },
  { label: "Mystory", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  {
    icon: <Framer />,
    text: "Custom Website Design and Development",
    description:
      "Create responsive, user-friendly websites using technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue.js.",
  },
  {
    icon: <Hammer />,
    text: "Product Re-Design",
    description:
      "Product re-design is your key to attract new and retain existing users. not adding new features. What if you can improve the visual appeal incrementally and gain the attention your business want? We have done just that.",
  },
  {
    icon: <ShieldHalf />,
    text: "Product Engineering",
    description:
      "We assemble engineering teams that are dependable and adaptable that match your requirements while keeping you in full control of people and product roadmap.",
  },
  {
    icon: <Rocket />,
    text: "MVP Development",
    description:
      "We can help you build a MVP to launch new products. But we are also open to flexible working models, co-investing in promising ideas and networking with industry leaders. We are eager to make it happen.",
  },
  {
    icon: <Pointer />,
    text: "Websites Development",
    description:
      "We create responsive, SEO-friendly websites with custom design, e-commerce solutions, CMS platforms, and secure backend development. Our goal is to enhance user engagement, performance, and experience for all web applications.",
  },
  {
    icon: <FolderCode />,
    text: "Software Development",
    description:
      "We develop desktop, mobile, applications with cross-platform compatibility, robust security, optimized performance, and scalable architecture, ensuring your business applications, SaaS platforms solutions are built for success.",
  },
];

