import {services} from "@/catalog";
import Link from "next/link";

export function ServicesComponent () {
    return (
        <>
            <h3>Наши услуги</h3>
            <ul>
                {
                    services.map((service, index) => (
                        <li key={index}><Link href={'/'}>{service}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}