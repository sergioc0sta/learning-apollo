const db = require('./db')

const Query = {
    company: (root, args) => db.companies.get(args.id),
    job: (root, args) => db.jobs.get(args.id),
    jobs: () => db.jobs.list()
}

const Mutation = {
    createJob: (root, {input}, {user}) => {
        if(!user){
            throw Error("Unautorized")
        }
        const id = db.jobs.create({...input, companyId: user.companyId})
        return db.jobs.get(id) 
    }
}

const Job = {
    company: (job) => db.companies.get(job.companyId)
}

const Company = {
    jobs: (company) => db.jobs.list().filter((job) => job.companyId === company.id)
}
module.exports = {
    Query,
    Job,
    Company,
    Mutation
}