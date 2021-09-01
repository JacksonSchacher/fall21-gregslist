import { ProxyState } from "../AppState.js"
import { getJobForm } from "../forms/JobForm.js"
import { jobsService } from "../Services/JobsService.js"

function _drawJobs() {
    let template = ''

    ProxyState.jobs.forEach(job => template += job.CardTemplate)
    document.getElementById('listings').innerHTML = template
}

export class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
    }

    addJob() {
        event.preventDefault()

        /**
         * @type {HTMLFormElement}
         */
        // @ts-ignore
        const form = event.target

        const jobData = {
            city: form.city.value,
            job: form.job.value,
            wage: form.wage.value,
            startDate: form.startDate.value,
            yearsExp: form.yearsExp.value,
            img: form.img.value,
            description: form.description.value
        }

        try {
            jobsService.addJob(jobData)
        } catch (e) {
            console.log("Ehhh, it'sa  spicy meatball")
            return
        }

        form.reset()
    }

    showJobs() {
        _drawJobs()
        document.getElementById('controls').innerHTML = `
        <button class="btn btn-warning" onclick="app.jobsController.toggleJobForm()">Add Job</button>
        `
        document.getElementById('forms').innerHTML = getJobForm()
    }

    toggleJobForm() {
        document.getElementById('forms').classList.toggle('visually-hidden')
    }
}