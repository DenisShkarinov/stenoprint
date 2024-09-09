import Logo from "@/app/components/header/Logo";
import Links from "@/app/components/footer/links";
import './header.css'

import Search from "@/app/components/header/search";
import InfoComponent from "@/app/components/footer/infoComponent";

export default function Header () {
   return (
      <header >
          <Logo></Logo>
          <div className="menu">
              <div className="top-menu">
                  <Search></Search>
                  <InfoComponent></InfoComponent>
              </div>
              <nav>
                  <button className="btn ">Каталог товаров</button>
                  <Links></Links>
              </nav>
          </div>

      </header>
   )
}