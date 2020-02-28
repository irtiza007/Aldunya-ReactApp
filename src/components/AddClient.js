import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddCLient() {
  const inputFile = useRef(null);
  const [file, setFile] = useState("");
  const [imageData, setImagedata] = useState("");
  const { register, handleSubmit, errors } = useForm();
  // all form data is here
  const onSubmit = data => console.log(data);
  //to get image
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setFile(URL.createObjectURL(event.target.files[0]));
      setImagedata(img);
    }
  };

  const onImageClick = () => {
    inputFile.current.click();
  };

  return (
    <div className="col-sm-12 text-center">
      <h3>Add Client</h3>
      <form
        className="col-sm-12 text-left d-flex flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
        id="addClient"
      >
        <div className="col-sm-4 justify-content-center align-items-center d-flex flex-column">
          <div
            className={`plus-circle img-circle
             ${file ? "" : `background-active`}
              shadow client-image d-flex text-center justify-content-center align-items-center p-2 mr-2`}
            type="button"
            onClick={onImageClick}
          >
            <input
              type="file"
              id="file"
              accept="image/png/jpeg"
              ref={inputFile}
              style={{ display: "none" }}
              onChange={onImageChange}
              name="file"
            />
            {file ? (
              <img src={file} alt="" className="img-circle" />
            ) : (
              <i className="fas fa-plus text-grey font-36px text-light"></i>
            )}
          </div>
          <h4 className="py-2">Add Media</h4>
        </div>
        <div className="col-sm-8 justify-content-center d-flex flex-column">
          <div className="d-flex mb-3">
            {errors.name && (
              <span className="font-weight-bold text-danger">*</span>
            )}
            Name
            <div className="mx-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="name"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            {errors.lastname && (
              <span className="font-weight-bold text-danger">*</span>
            )}
            Last Name
            <div className="ml-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="lastname"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
          </div>
          <div className="d-flex mb-3">
            {errors.age && (
              <span className="font-weight-bold text-danger">*</span>
            )}{" "}
            Age &nbsp; &nbsp;
            <div className="mx-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="age"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            Height &nbsp; &nbsp; &nbsp;
            <div className="ml-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="height"
                ref={register({ required: false, maxLength: 20 })}
              />{" "}
            </div>
          </div>
          <div className="d-flex mb-3">
            {errors.number && (
              <span className="font-weight-bold text-danger">*</span>
            )}{" "}
            Number
            <div className="mx-3 w-68 border-bottom-custom">
              <input
                type="number"
                className="border-0 w-100"
                name="number"
                ref={register({ required: true, maxLength: 20 })}
              />{" "}
            </div>
          </div>

          <div className="d-flex mb-3">
            {errors.contactmethod && (
              <span className="font-weight-bold text-danger">*</span>
            )}{" "}
            Preferred Contact Method
            <div className="col-md-6">
              <select
                className="custom-select"
                name="contactmethod"
                ref={register({ required: true, maxLength: 20 })}
              >
                <option value="Whatsapp">Whatsapp</option>
                <option value="PhoneNumber">Phone Number</option>
              </select>
            </div>
          </div>
          <div className="d-flex mb-3">
            Weight
            <div className="mx-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="weight"
                ref={register({ required: false, maxLength: 20 })}
              />
            </div>
            {errors.passcode && (
              <span className="font-weight-bold text-danger">*</span>
            )}
            Passcode
            <div className="ml-3 w-25 border-bottom-custom">
              <input
                type="text"
                className="border-0 w-100"
                name="passcode"
                ref={register({ required: true, maxLength: 20 })}
              />{" "}
            </div>
          </div>

          <div className="d-flex flex-column py-3">
            Problem Discription
            <div className="border-active mt-2 w-75 h-100">
              <textarea
                className="w-100 h-100 p-0 border-0"
                rows="3"
                cols="50"
                name="problem"
                ref={register({ required: false, maxLength: 20 })}
              />
            </div>
          </div>
          <div className="d-flex mb-4">
            Excercises Assiged
            <div className="col-md-6">
              <select
                className="custom-select"
                name="excercise"
                ref={register({ required: true, maxLength: 20 })}
              >
                <option value="Whatsapp">Excercise1</option>
                <option value="PhoneNumber">Excercise2</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="col-sm-12 text-center p-3">
        <button
          className="btn btn-custom"
          type="submit"
          form="addClient"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
