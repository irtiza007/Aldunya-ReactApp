import React from "react";

export default function Model(props) {
  const { id, width, height } = props;
  return (
    <>
      <div
        className="modal fade"
        id={id}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ minWidth: width }}
        >
          <div className="modal-content" style={{ minHeight: height }}>
            <div className="modal-header p-2 border-0 text-center">
              <div className="col-sm-11 text-center">
                <h5 className="modal-title">{props.title}</h5>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-1">{props.children}</div>
            {/* <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
