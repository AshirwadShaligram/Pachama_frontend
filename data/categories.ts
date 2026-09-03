import { AdminCategories, Category } from "@/types/CategoryTypes";
import {
  Airpods,
  Computer,
  Game,
  Gamepad2,
  GamingButtons,
  Headphones2,
  Keyboard3,
  Laptop4,
  Mouse2Newicons,
  SignalStream,
  Sofa3,
} from "reicon-react";

export const categories: Category[] = [
  {
    title: "Consoles",
    description: "PlayStation • Xbox • Nintendo",
    image:
      "https://imgs.search.brave.com/XIxLnXV9EqIZpG2hFHRNHAp6xNgyI6X0RHAQeKVZtHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/NDU2NTk4NC9waG90/by9jaGliYS1qYXBh/bi1zb255LXBsYXlz/dGF0aW9uLTUtcHJv/LWFuZC1wbGF5c3Rh/dGlvbi01LWRpZ2l0/YWwtZWRpdGlvbi12/aWRlby1nYW1lLWNv/bnNvbGVzLWFyZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VVlrTlY2dkZ6cjN2/aHE4bFhha240VzBP/MmswQWFaLVp2WGx1/UDl4Rjl6WT0",
    icon: Gamepad2,
    href: "/products/consoles",
  },
  {
    title: "Accessories",
    description: "Controllers & Headsets",
    image:
      "https://imgs.search.brave.com/U--3NRuFijQtzcaWFkH9wfN15pOOyyxuEocIxvvClSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzA5LzAxLzA0/LzM2MF9GXzEyMDkw/MTA0MjdfNmJiUHFw/bmt3U1VOcTJCNmc5/eEVYVFZiYlZBU0Vy/NVguanBn",
    icon: Headphones2,
    href: "/products/accessories",
  },
  {
    title: "Gaming PCs",
    description: "Desktop & Laptops",
    image:
      "https://imgs.search.brave.com/UPQ0kicSyrMWWPl3yZnuBE4S3pWBFIUaC0Rm55uSFas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZ2Ft/aW5nLXBjLWJhY2tn/cm91bmQtd3B1N2p2/ZDJ6cWQ5cWR3aC5q/cGc",
    icon: Computer,
    href: "/products/pcs",
  },
  {
    title: "Keyboards",
    description: "Mechanical RGB",
    image:
      "https://imgs.search.brave.com/3r8Iqu7lOgdyNFm9L7rkeWbEOqgCz4b-1ND8JAQFVUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vbW9kZXJuLWtl/eWJvYXJkc18xMTk3/NzIxLTE4MTYyLmpw/Zz9zZW10PWFpc190/ZXN0X2Imdz03NDAm/cT04MA",
    icon: Keyboard3,
    href: "/products/keyboards",
  },
  {
    title: "Mouse",
    description: "Wireless & Gaming",
    image:
      "https://imgs.search.brave.com/Y0IXatze0-xLt80Lbc_jJ-aFtift7NNWWOEoS0Infoo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJvbmljcy5j/b20vY2RuL3Nob3Av/ZmlsZXMvUG9ydHJv/bmljc19Ub2FkX0lJ/SV9wbHVzX0JsdWV0/b290aF9XaXJlbGVz/c19Nb3VzZV9CbGFj/ay5qcGc_dj0xNzM3/NzI0NDczJndpZHRo/PTUzMw",
    icon: Mouse2Newicons,
    href: "/products/mouse",
  },
];

export const adminCategories: AdminCategories[] = [
  {
    id: "cat-001",
    title: "Console",
    description:
      "Gaming consoles and systems for an immersive gaming experience.",
    subCategories: [
      { id: 1, name: "PS5", isVisible: true },
      { id: 2, name: "Xbox Series X", isVisible: true },
      { id: 3, name: "Xbox Series S", isVisible: true },
      { id: 4, name: "Nintendo Switch", isVisible: true },
    ],
    activeProducts: 48,
    image: "/images/categories/console.jpg",
    logo: Gamepad2,
    isVisible: true,
  },
  {
    id: "cat-002",
    title: "Accessories",
    description:
      "Gaming accessories designed to enhance your gaming setup and experience.",
    subCategories: [
      { id: 1, name: "Gaming Mice", isVisible: true },
      { id: 2, name: "Gaming Keyboard", isVisible: true },
      { id: 3, name: "Gaming Headsets", isVisible: true },
      { id: 4, name: "Controllers", isVisible: true },
      { id: 1, name: "Mouse Pads", isVisible: true },
      { id: 1, name: "Webcams", isVisible: true },
    ],
    activeProducts: 126,
    image: "/images/categories/accessories.jpg",
    logo: Headphones2,
    isVisible: true,
  },
  {
    id: "cat-003",
    title: "Games",
    description: "Video games across different platforms, geners and editions",
    subCategories: [
      { id: 1, name: "PS5 Games", isVisible: true },
      { id: 2, name: "Xbox Games", isVisible: true },
      { id: 3, name: "PC Games", isVisible: true },
      { id: 4, name: "Nintendo Switch Games", isVisible: true },
    ],
    activeProducts: 214,
    image: "/images/categories/games.jpg",
    logo: Game,
    isVisible: true,
  },
  {
    id: "cat-004",
    title: "PC Gaming",
    description:
      "Hardware and peripherals build for high-performance PC gaming.",
    subCategories: [
      { id: 1, name: "Gaming PC", isVisible: true },
      { id: 2, name: "Graphics Card", isVisible: true },
      { id: 3, name: "Gaming Monitor", isVisible: true },
      { id: 4, name: "RAM", isVisible: true },
      { id: 5, name: "Storage", isVisible: true },
    ],
    activeProducts: 87,
    image: "/images/categories/pc-gaming.jpg",
    logo: Laptop4,
    isVisible: true,
  },
  {
    id: "cat-005",
    title: "Gaming Furniture",
    description:
      "Comfortable and stylish furniture designed for gaming setups.",
    subCategories: [
      { id: 1, name: "Gaming Chairs", isVisible: true },
      { id: 1, name: "Gaming Desks", isVisible: true },
      { id: 1, name: "Monitor Stands", isVisible: true },
      { id: 1, name: "Desk Accessories", isVisible: true },
    ],
    activeProducts: 34,
    image: "/images/categories/furniture.jpg",
    logo: Sofa3,
    isVisible: true,
  },
  {
    id: "cat-006",
    title: "Collectibles",
    description: "Gaming merchandise, collectibles, figures, and memorabilia.",
    subCategories: [
      { id: 1, name: "Action Figures", isVisible: true },
      { id: 1, name: "Statue", isVisible: true },
      { id: 1, name: "Posters", isVisible: true },
      { id: 1, name: "Gaming Merchandise", isVisible: true },
    ],
    activeProducts: 52,
    image: "/images/categories/collectibles.jpg",
    logo: Airpods,
    isVisible: false,
  },
  {
    id: "cat-007",
    title: "Gaming Audio",
    description:
      "Audio equipment designed for gaming, streaming and entertainment.",
    subCategories: [
      { id: 1, name: "Gaming Headsets", isVisible: true },
      { id: 1, name: "Gaming Speakers", isVisible: true },
      { id: 1, name: "Microphones", isVisible: true },
      { id: 1, name: "Soundbars", isVisible: true },
    ],
    activeProducts: 41,
    image: "/images/categories/audio.jpg",
    logo: Headphones2,
    isVisible: true,
  },
  {
    id: "cat-008",
    title: "Streaming",
    description:
      "Equipment and accessories for gaming content creators and streamers.",
    subCategories: [
      { id: 1, name: "Capture Card", isVisible: true },
      { id: 1, name: "Streaming Microphones", isVisible: true },
      { id: 1, name: "Lighting", isVisible: true },
      { id: 1, name: "Steam Decks", isVisible: true },
      { id: 1, name: "Webcams", isVisible: true },
    ],
    activeProducts: 29,
    image: "/images/categories/streaming.jpg",
    logo: SignalStream,
    isVisible: false,
  },
];
