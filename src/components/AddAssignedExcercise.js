import React from "react";
import { useForm } from "react-hook-form";
export default function AddAssignedExcercises() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form className="col-sm-12 text-center" onSubmit={handleSubmit(onSubmit)}>
      <h3>Assign Excercise</h3>
      <div className="col-sm-12 d-flex">
        <div className="col-sm-6">
          <div className="d-flex">
            {errors.excercise && (
              <span className="font-weight-bold text-danger">*</span>
            )}
            Excercise
            <div className="ml-3 col-sm-7">
              <select
                className="custom-select"
                name="excerise"
                ref={register({ required: true })}
              >
                <option value="jointMobilisation">Joint Mobilisation</option>
                <option value="Excerise2">Excerise 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex">
            Sets
            <div className="ml-3 w-100 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="sets"
                ref={register({ required: false })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="d-flex p-3">
          Rips
          <div className="ml-3 w-100 border-bottom-custom">
            <input
              type="text"
              className="border-0 w-100"
              name="rips"
              ref={register({ required: false })}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center py-3">
        <button
          className="btn btn-custom"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </button>
      </div>
    </form>
  );
}
