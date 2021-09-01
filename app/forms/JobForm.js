export function getJobForm() {
    return /*html*/ `
    <form class="bg-white rounded p-3 shadow" onsubmit="app.jobsController.addJob()">
    <div class="form-group">
    <label for="city" class="sr-only">City</label>
    <input type="text" placeholder="City" class="form-control" name="city" id="city" required>
    </div>
    <div class="form-group">
    <label for="job" class="sr-only">Job</label>
    <input type="text" placeholder="Job" class="form-control" name="job" id="job" required>
    </div>
    <div class="form-group">
    <label for="wage" class="sr-only">Wage</label>
    <input type="number" placeholder="Wage" class="form-control" name="wage" id="wage" required>
    </div>
    <div class="form-group">
    <label for="startDate" class="">Start Date</label>
    <input type="date" class="form-control" name="startDate" id="startDate">
    </div>
    <div class="form-group">
    <label for="description" class="sr-only">Description</label>
    <textarea type="text" placeholder="Description" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
    <div class="form-group">
    <label for="img" class="sr-only">Image</label>
    <input type="url" placeholder=":// Image URL" class="form-control" name="img" id="img" required>
    </div>
    <div class="form-group">
    <label for="yearsExp" class="sr-only">Years of Experience</label>
    <input type="number" placeholder="Years of Experience" class="form-control" name="yearsExp" id="yearsExp" required>
    </div>
    <div class="button-group my-3">
        <button type="reset" class="btn btn-secondary">Clear</button>
        <button type="submit" class="btn btn-primary">Add</button>
    </div>
    </form>
    `
}