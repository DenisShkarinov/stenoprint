import {links} from "@/catalog";
import Link from "next/link";

export default function Links () {
    return (
        <ul className="links">
            {
                links.map(link => (
                    <li key={link.id}><Link href={link.href}>{link.linkName}</Link></li>
                ))
            }
        </ul>
    )
}