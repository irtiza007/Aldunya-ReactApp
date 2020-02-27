import React from "react";
import { Assets } from "../config/Asset-Config";
import Model from "./Model";
import AddClient from "./AddClient";

const Clients = () => {
  return (
    <>
      <Model id="clientModel" width={"70%"} height={"90vh"}>
        <AddClient />
      </Model>
      <h3 className="custom-active font-weight-bold">Clients</h3>
      <div className="col-sm-12 d-flex flex-row overflow-auto p-2">
        <div className="p-2">
          <img
            className="img-circle shadow client-image border-active filter"
            src={Assets.userAvatar}
            alt=""
          />
        </div>
        <div
          className="plus-circle border-grey-5 img-circle client-image d-flex text-center justify-content-center align-items-center p-2 mr-2"
          type="button"
          data-toggle="modal"
          data-target="#clientModel"
        >
          <i className="fas fa-plus font-36px text-muted"></i>
        </div>
      </div>
    </>
  );
};

export default Clients;
