import React from "react";
import { Appointments } from "../components/Appointments";
const Client = props => {
  return (
    <div className="fluid-container">
      <div className="col-sm-12 my-2 p-3 border-radius-custom shadow overflow-auto">
        <Appointments title="Excercises" row={true} modelId="addExcersices" />
      </div>
      <div className="col-sm-12 p-3 d-flex">
        <div className="col-sm-6 text-center p-3 border-radius-custom shadow mr-2">
          <video controls className="w-45vw">
            <source
              src="https://www.youtube.com/watch?v=A99obr2Jmac"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="col-sm-6 p-3 border-radius-custom shadow">
          <h3>Description</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
