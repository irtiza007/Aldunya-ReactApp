import React, { useState } from "react";
export default function AddExercise() {
  return (
    <div className="col-sm-12 text-center">
      <h3>Add Excercise</h3>
      <div className="col-sm-12 text-left d-flex">
        <div className="col-sm-4 justify-content-center align-items-center d-flex flex-column">
          <div className="plus-circle img-circle background-active shadow client-image d-flex text-center justify-content-center align-items-center p-2 mr-2">
            <i className="fas fa-plus text-grey font-36px text-light"></i>
          </div>
          <h4 className="py-2">Add Media</h4>
        </div>
        <div className="col-sm-8 justify-content-center d-flex flex-column">
          <div className="d-flex">
            Name
            <div className="ml-3 w-50 border-bottom-custom">
              <input type="text" className="border-0 w-100" />
            </div>
          </div>
          <div className="d-flex flex-column py-3">
            Discription
            <div className="border-active mt-2 w-75 h-100">
              <textarea className="w-100 h-100 p-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center pb-3">
        <button className="btn btn-custom" type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
