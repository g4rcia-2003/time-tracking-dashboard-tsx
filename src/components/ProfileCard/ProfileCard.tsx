import "./profilecard.style.scss";

interface PropsCard {
  handleClick: (e: string) => void;
  nameDates: string;
}

interface DatesProps {
  name: string;
}

const Dates: DatesProps[] = [
  {
    name: "Daily",
  },
  {
    name: "Weekly",
  },
  {
    name: "Monthly",
  },
];

const ProfileCard = ({ handleClick, nameDates }: PropsCard) => {
  return (
    <div className="Card">
      <div className="Card__Profile">
        <div className="Card__Profile--img">
          <img src="/image-jeremy.png" alt="image profile user" />
        </div>
        <div className="Card__Profile--data">
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <div className="Card__Dates">
        {Dates.map(({ name }) => (
          <p
            key={name}
            onClick={() => handleClick(name)}
            className={`${name === nameDates && "Card__Dates--active"}`}
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
