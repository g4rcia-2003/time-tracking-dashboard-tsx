import { useEffect, useState } from "react";
import { CardArea, ProfileCard } from "./components";
import { InterfaceData } from "@/interfaces/index";

import "./app.scss";

const App = () => {
  const [nameDates, setNameDates] = useState<string>("Weekly");
  const [dataJSON, setDataJSON] = useState<InterfaceData[]>([]);

  const handleClick = (name: string) => {
    setNameDates(name);
  };

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDataJSON(data);
      });
  }, []);

  return (
    <div className="Layout">
      <div className="Layout__Container">
        <ProfileCard handleClick={handleClick} nameDates={nameDates} />
        {dataJSON.map(({ background, title, icon, timeframes }) => (
          <CardArea
            key={title}
            date={nameDates.toLowerCase()}
            icon={icon}
            title={title}
            background={background}
            data={timeframes}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
