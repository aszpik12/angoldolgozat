import { useState } from "react";
import MondatKiegeszit from "./MondatKiegeszit";

export default function Kiegeszit(props) {
  const [mondat, setMondat] = useState(props.model.jelenlegiMondat);
  const [gomb, setGomb] = useState("inaktiv");
  const [helyes, setHelyes] = useState("X");
  const setInaktiv = () => {
    setGomb("inaktiv");
    setHelyes("X");
  };
  return (
    <div>
      <h2>{props.model.fejlec}</h2>
      <MondatKiegeszit
        mondat={mondat}
        gomb={gomb}
        helyes={helyes}
        onChange={(value) => {
          if (props.model.helyes(value)) {
            setGomb("aktiv");
            setHelyes("✔");
          } else {
            setInaktiv();
          }
        }}
        gombOnClick={() => {
          props.model.MondatLeptet();
          setMondat(props.model.jelenlegiMondat);
          setInaktiv();
        }}
      />
    </div>
  );
}
