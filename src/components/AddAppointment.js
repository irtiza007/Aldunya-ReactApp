import React from 'react';
import { createNotification, ToastContainer } from './Toast';
import { useForm } from 'react-hook-form';

export default function AddAppointment() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <ToastContainer />
      <form className='col-sm-12 text-center' onSubmit={handleSubmit(onSubmit)}>
        <h3>Add Appointment</h3>
        <div className='col-sm-12 d-flex'>
          <div className='col-sm-6'>
            <div className='d-flex'>
              Date
              <div className='ml-3 w-100 border-bottom-custom'>
                <input
                  name='date'
                  ref={register({ required: true })}
                  type='text'
                  className='border-0 w-100'
                />
              </div>
              {errors.date && (
                <span className='font-weight-bold text-danger'>*</span>
              )}
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='d-flex'>
              Time
              <div className='ml-3 w-100 border-bottom-custom'>
                <input
                  type='text'
                  className='border-0 w-100'
                  name='time'
                  ref={register({ required: true })}
                />
              </div>
              {errors.time && (
                <span className='font-weight-bold text-danger'>*</span>
              )}
            </div>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='d-flex p-3'>
            Doctor
            <div className='ml-3 w-100 border-bottom-custom'>
              <input
                type='text'
                className='border-0 w-100'
                name='doctor'
                ref={register({ required: true })}
              />
            </div>
            {errors.doctor && (
              <span className='font-weight-bold text-danger'>*</span>
            )}
          </div>
        </div>
        <div className='col-sm-12 text-center py-3'>
          <button
            className='btn btn-custom'
            type='submit'
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
