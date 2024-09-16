import Image from "next/image";
import DesignCards from "@/app/about/designCards";
import './about.css'

export default function About () {
   return (
      <main className="container">
         <div className="title">
             <h1>О студии</h1>
             <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
         </div>
          {/* секция №1 */}
          <section>
              <div className="img-block">
                  <Image className="img-block__image" src="/about/1.png" width={710} height={510} alt="How we work"/>
              </div>
              <div className="text-description">
                  <h2 className="text-description__title">Создаем красивые стены</h2>
                  <p className="text-description__message">
                      Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.
                  </p>
                  <p className="text-description__message">
                      Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. Принимая во внимание показатели успешности, реализация намеченных плановых заданий в значительной степени обусловливает важность анализа существующих паттернов поведения.
                  </p>
              </div>
          </section>
      {/*    */}
          <section id="description-cards">
              <DesignCards></DesignCards>
          </section>
          <section>
              <div className="text-description">
                  <h2 className="text-description__title">Мы используем разные техники оформления</h2>
                  <p className="text-description__message">
                      Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой
                      интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны:
                      базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует,
                      однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного
                      выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных
                      исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для
                      позиций, занимаемых участниками в отношении поставленных задач.
                  </p>
              </div>
              <div className="video-block">
                  <iframe width="930" height="523" src="https://www.youtube.com/embed/FQnDQbG24SU"
                          title="Задача от подписчика" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
          </section>

          <section>
              <div className="image-block">

              </div>
              <div className="text-description">
                  <h2 className="text-description__title">Дизайнерские обои для дома и бизнеса</h2>
                  <p className="text-description__message">

                  </p>
              </div>
          </section>
      </main>
   )
}