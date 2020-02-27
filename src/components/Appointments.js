import React from "react";
import AddAssignedExcercise from "./AddAssignedExcercise";
import AddExcercise from "./AddExercise";
import Model from "./Model";
import AddAppointment from "./AddAppointment";
export const Appointments = ({ title, row = false, modelId = "" }) => {
  const openModel = () => {
    switch (modelId) {
      case "addExcersices":
        return <AddExcercise />;
      case "appointmentModel":
        return <AddAppointment />;
      case "excerciseAssigned":
        return <AddAssignedExcercise />;

      default:
        return "";
    }
  };
  return (
    <>
      <Model id={modelId} width={"70%"}>
        {openModel()}
      </Model>
      <h3 className="custom-active font-weight-bold mb-0 pl-0">{title}</h3>
      <div
        className={`col-md-12 d-flex overflow-auto p-0  ${
          row ? `flex-row` : `flex-wrap`
        }`}
      >
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 background-active ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div className="appointment-circle background-grey shadow border img-circle d-flex justify-content-center align-items-center m-2 ">
          <span className="p-3 text-center text-light">27 January 2020</span>
        </div>
        <div
          className="appointment-circle border-grey-5 shadow border img-circle d-flex justify-content-center align-items-center m-2"
          type="button"
          data-toggle="modal"
          data-target={`#${modelId}`}
        >
          <i className="fas fa-plus text-muted font-36px "></i>
        </div>
      </div>
    </>
  );
};
