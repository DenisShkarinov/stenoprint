import Link from "next/link";
import { IoLogoInstagram } from "@react-icons/all-files/io/IoLogoInstagram";
import { IoLogoVk } from "@react-icons/all-files/io/IoLogoVk";

export default function SocialLinks() {
    return (
        <div className="info-block links">
            <Link href={'/'}><IoLogoInstagram /></Link>
            <Link href="/"><IoLogoVk /></Link>
        </div>
    )
}