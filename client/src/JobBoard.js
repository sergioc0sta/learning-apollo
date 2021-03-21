import React, {useEffect, useState} from 'react';
import { JobList } from './JobList';
import { loadJobs } from './requests'

const JobBoard = () =>{
  const [jobs, setJobs]=useState([])

  useEffect(()=> {
    (async () => {
        const result = await loadJobs()
        setJobs(result)
    })()
  }, [])

    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
};

export default JobBoard;