import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { loadJob } from './requests'

const JobDetail = ({match})=>{
  const [job, setJob] = useState(null);

  useEffect(()=>{
    if(match?.params?.jobId){
      (async ()=>{
        const result = await loadJob(match?.params?.jobId)
        setJob(result)
      })()
    }  
  }, [])

  if(!job) return null;

  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
}

export default JobDetail
