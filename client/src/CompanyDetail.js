import React, { useState, useEffect } from 'react';
import { loadCompany } from './requests'
import {JobList} from './JobList'

const CompanyDetail = ({match}) =>{
  const [company, setCompany] = useState(null)

  useEffect(()=>{
    (async ()=>{
      const result = await loadCompany(match?.params?.companyId)
      setCompany(result)
    })()
  }, [])

  if(!company) return null;

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <div className="title is-5">{company.description}</div>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetail;