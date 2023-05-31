import { iMenu } from "./Menu"

const MenuItem = ({title,category, price,img,desc}:iMenu) => {
  return (
    <article className={`menu-item ${category}`}>
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">SAR {price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem