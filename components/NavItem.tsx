import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className="hover:underline">
        {text}
    </Link>
  );
};

export default NavItem;