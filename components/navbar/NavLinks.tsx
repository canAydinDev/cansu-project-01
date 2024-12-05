import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/news", name: "News" },
  { href: "/contact", name: "Contact" },
];

function NavLinks() {
  return (
    <div>
      {links.map((link, index) => {
        return (
          <Link
            className="relative font-primary text-sm   text-accent items-center  uppercase overflow-hidden hover:text-gray-500 mx-3 transition-all"
            href={link.href}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
