import React from 'react';
import './styles.scss'


// Declaring type of props - see "Typing Component Props" for more examples
type BloodTypeProps = {
  type: string;
};


const BLOOD_TYPES = {
  "0−": ["0−", "0+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
  "0+": ["0+", "A+", "B+", "AB+"],
  "A−": ["A−", "A+", "AB−", "AB+"],
  "A+": ["A+", "AB+"],
  "B−": ["B−", "B+", "AB−", "AB+"],
  "B+": ["B+", "AB+"],
  "AB−": ["AB−", "AB+"],
  "AB+": ["AB+"]
};


function BloodType({ type }: BloodTypeProps) {



  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function showBloddTypes() {

    await timeout(1000);
    //@ts-ignore
    const listTypes: string[] = BLOOD_TYPES[type];
    console.log(listTypes, type, BLOOD_TYPES)
    if (!listTypes) return
    const blood_vias = document.querySelectorAll("#humans .human .blood_via");
    const blood_body = document.querySelectorAll("#humans .human .scribble .body");
    const center_via = document.querySelector(".center_via > .blood_via");
    const blood_bag = document.querySelector("#blood_content > div.main_bag > div");
    //@ts-ignore
    center_via.style.height = "100%";
    //@ts-ignore
    blood_bag.style.height = "50px";
    if (listTypes)
      for (let item of listTypes) {
        const recipent_index = Object.keys(BLOOD_TYPES).indexOf(item);

        await timeout(100);
        //@ts-ignore
        blood_vias[recipent_index].style.width = "100%";
        //@ts-ignore
        blood_body[recipent_index].style["background-color"] = "#b51e23"
      }
  }
  showBloddTypes();
  return (
    <div>

      <div id="blood_content">
        <div className="bar"></div>
        <div className="main_bag">
          <div className="blood">
            <h2 className="title">{type}</h2>
          </div>
        </div>
      </div>
      <div id="center_via_c">
        <div className="center_via">
          <div className="blood_via"></div>
        </div>
      </div>
      <div id="humans">
        {Object.keys(BLOOD_TYPES).map((e: string, i: number) =>
          <div className={i % 2 === 0 ? "human left" : "human right"}>
            <div className="scribble"><span className="blood_type">{e}</span>
              <div className="head"></div>
              <div className="body" ></div>
            </div>
            <div className="via"></div>
            <div className="blood_via" ></div>
          </div>
        )}
      </div>

    </div>
  );

}

export default BloodType;
