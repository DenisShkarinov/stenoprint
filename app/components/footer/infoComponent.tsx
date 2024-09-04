import Link from "next/link";

export default function InfoComponent () {
    return (
        <>
            <div className="info-block">
                <h4>Позвонить нам:</h4>
                <Link href="tel:+795558889866">+7 (555) 888-98-66</Link>
            </div>
            <div className="info-block">
                <h4>Написать нам:</h4>
                <Link href="mailto:info@stenoprint.ru">info@stenoprint.ru</Link>
            </div>
        </>
    )
}