import React from 'react';

export const UserInfo = ({
  firstname,
  lastname,
  age,
  height,
  weight,
  clientId
}) => {
  return (
    <>
      <div className='row px-4 py-5'>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>Name</span>
          <span className='ml-2'>{firstname}</span>
        </div>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>LastName</span>
          <span className='ml-2'>{lastname}</span>
        </div>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>Age</span>
          <span className='ml-2'>{age} years</span>
        </div>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>Height</span>
          <span className='ml-2'>{height} Feet</span>
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6 py-2'>
              <span className='text-muted'>Preferred Contact Method</span>
            </div>
            <div className='col-md-6 py-2'>
              <select className='custom-select'>
                <option value='Whatsapp'>Whatsapp</option>
                <option value='PhoneNumber'>Phone Number</option>
              </select>
            </div>
          </div>
        </div>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>Weight</span>
          <span className='ml-2'>{weight}lbs</span>
        </div>
        <div className='col-md-6 py-2'>
          <span className='text-muted'>Client Id</span>
          <span className='ml-2'>{clientId}</span>
        </div>
      </div>
    </>
  );
};
