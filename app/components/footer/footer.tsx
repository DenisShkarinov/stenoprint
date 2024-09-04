import CatComponent from "@/app/components/catalog/catComponent";
import {ServicesComponent} from "@/app/components/servicesComponent/servicesComponent";
import Links from "@/app/components/footer/links";
import './footer.css'
import InfoComponent from "@/app/components/footer/infoComponent";

export default function Footer () {
   return (
      <footer className="container">
          <div className="flex">
              <div className="column">
                  <CatComponent></CatComponent>
              </div>
              <div className="column">
                  <ServicesComponent></ServicesComponent>
              </div>
              <div className="column">
                  <Links></Links>
              </div>
              <div className="column">
                  <InfoComponent></InfoComponent>
              </div>
          </div>

      </footer>
   )
}