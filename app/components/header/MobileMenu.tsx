import {IoSearchOutline} from "@react-icons/all-files/io5/IoSearchOutline";
import Search from "@/app/components/header/search";
import Link from "next/link";

export default function MobileMenu () {
    return (
        <div className="mobile-menu">
            <Search><IoSearchOutline /></Search>
            <Link href="tel:+795558889866">+795558889866</Link>
            <div className="burger">
                <span></span>
            </div>
        </div>
    )
}