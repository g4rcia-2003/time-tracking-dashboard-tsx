import "./cardarea.style.scss";
import { PropsCard } from "./InterfacesCard";

const CardArea = ({ icon, title, background, date, data }: PropsCard) => {
  return (
    <>
      <div className="CardData" style={{ background: `${background}` }}>
        <div className="CardData__Icon">
          <img src={`${icon}`} alt={`Icon Section ${title}`} />
        </div>

        <div className="CardData__Info">
          <div className="CardData__Info--title">
            <p>{title}</p>
            <div>
              <img src="/icons/icon-ellipsis.svg" />
            </div>
          </div>
          <div className="CardData__Info--date">
            <p className="CardData__Info--date--title">
              {data[date].current} hrs
            </p>
            <p className="CardData__Info--date--next">
              Last Week - {data[date].previous}hrs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArea;
