import React from "react";
import Clients from "../components/Clients";
import { UserInfo } from "../components/UserInfo";
import { Progress } from "../components/Progress";
import { Appointments } from "../components/Appointments";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="col-md-12">
          <div className="col-sm-12 flex-wrap-xs p-0 d-flex justify-content-around">
            <div className="col-md-7 col-xs-12 p-2 mr-2 shadow border-radius-custom">
              <Clients />
            </div>
            <div className="col-md-5 col-xs-12 shadow border-radius-custom">
              <UserInfo
                firstname="Sam"
                lastname="Dar"
                age="18"
                height="5.11"
                weight="182"
                clientId="182342"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-2">
          <div className="col-sm-12 flex-wrap-xs p-0 d-flex justify-content-around">
            <div className="col-md-7 col-xs-12  p-2 mr-2 shadow border-radius-custom">
              <Progress />
            </div>
            <div className="col-md-5 col-xs-12 p-0">
              <div className="">
                <div className="p-3 mb-2 border-radius-custom shadow">
                  <Appointments
                    title="Appointments"
                    row={true}
                    modelId="appointmentModel"
                  />
                </div>

                <div className=" p-3 border-radius-custom shadow overflow-auto max-height-40vh">
                  <Appointments
                    title="Exercise Assigned"
                    modelId="excerciseAssigned"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
