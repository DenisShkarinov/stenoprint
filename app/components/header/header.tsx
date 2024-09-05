import Logo from "@/app/components/header/Logo";
import Links from "@/app/components/footer/links";
import './header.css'
export default function Header () {
   return (
      <header >
          <Logo></Logo>
          <div className="menu">

              <nav>
                  <button className="btn ">Каталог товаров</button>
                  <Links></Links>
              </nav>
          </div>


      </header>
   )
}