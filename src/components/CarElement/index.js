import React from 'react';

function CarElement({car}) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top"  alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src={car.img} data-holder-rendered="true" />
        <div className="card-body">
          <h3 className="card-text">{car.Brand}</h3>
          <p className="card-text">{car.Description}</p>
          <h4 className="card-text">{car.Price}</h4>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarElement;
