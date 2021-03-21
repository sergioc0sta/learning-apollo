import React, {useState } from 'react';
import {createJob} from './requests'

const JobForm = (props) =>{
  const [data, setData]= useState({title:'', description:''})

  const handleClick =(event) =>{
    event.preventDefault();
    const companyId = "HJRa-DOuG";
    const {title, description} = data
    createJob({title, description}).then((job)=>{
      props.history.push(`/jobs/${job.id}`)
    })
    console.log('should post a new job:', data);
  }

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" value={data.title}
                onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="input" style={{height: '10em'}}
                name="description" value={data.description} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={(event)=>{handleClick(event)}}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default JobForm