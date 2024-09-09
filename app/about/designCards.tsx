import {design} from "@/catalog";

export default function DesignCards () {
    return design.map(card => (
        <div key={Math.random() * 10000} className="card-body">
            <div className="card-image">
                <img src={card.imgSrc} alt={card.title}/>
            </div>
            <div className="card-title">
                <h3>{card.title}</h3>
            </div>
            <div className="card-message">
                {card.desc}
            </div>
        </div>
    ))
}