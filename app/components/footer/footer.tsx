import CatComponent from "@/app/components/catalog/catComponent";
import {ServicesComponent} from "@/app/components/servicesComponent/servicesComponent";
import Links from "@/app/components/footer/links";

export default function Footer () {
   return (
      <footer>
          <CatComponent></CatComponent>
          <ServicesComponent></ServicesComponent>
          <Links></Links>
      </footer>
   )
}