import Image from "next/image";
import logo from '../../../public/logo.png'
import Link from "next/link";

export default function Logo () {
    return (
        <div className='logo'>
            <Link href="/"><Image src={logo} alt={'Stenoprint'} style={{ width: 124, height: 124 }}></Image></Link>
        </div>
    )
}