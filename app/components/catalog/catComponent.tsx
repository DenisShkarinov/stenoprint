import Link from "next/link";
import {catalog} from "@/catalog";
export default function CatComponent() {
    return (
        <>
            <h3>Каталог товаров</h3>
            <ul>
                {
                    catalog.map((cat, index) => (
                        <li key={index}><Link href={'/'}>{cat}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}