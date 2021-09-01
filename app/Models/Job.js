import { generateId } from "../Utils/generateId.js";

export class Job {
    constructor(jobData) {
        this.id = jobData.id || generateId()
        this.city = jobData.city
        this.job = jobData.job
        this.wage = jobData.wage
        this.startDate = jobData.startDate
        this.yearsExp = jobData.yearsExp
        this.img = jobData.img
        this.description = jobData.description
    }


    get CardTemplate() {
        return /*html*/ `
    <div class="col-lg-3 mb-4 listing">
        <div class="card bg-secondary">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
            <h5 class="d-flex justify-content-between">
                <span>${this.job}</span><span>${this.city}</span>
                <span>$ ${this.wage}</span>
            </h5>
            <p>${this.description}</p>
            </div>
        </div>
        </div>
        `
    }
}