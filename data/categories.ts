import { Category } from "@/types/CategoryTypes";
import {
  Computer,
  Gamepad2,
  Headphones2,
  Keyboard3,
  Mouse2Newicons,
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
