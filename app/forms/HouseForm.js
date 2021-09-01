export function getHouseForm() {
    return /*html*/ `
    <form class="bg-white rounded p-3 shadow" onsubmit="app.housesController.addHouse()">
    <div class="form-group">
    <label for="bedrooms" class="sr-only">Bedrooms</label>
    <input type="number" placeholder="# of Bedrooms" class="form-control" name="bedrooms" id="bedrooms" required>
    </div>
    <div class="form-group">
    <label for="bathrooms" class="sr-only">Bathrooms</label>
    <input type="number" placeholder="# of Bathrooms" class="form-control" name="bathrooms" id="bathrooms" required>
    </div>
    <div class="form-group">
    <label for="address" class="sr-only">Address</label>
    <input type="text" placeholder="Address" class="form-control" name="address" id="address" required>
    </div>
    <div class="form-group">
    <label for="year" class="sr-only">Year</label>
    <input type="year" placeholder="Year" class="form-control" name="year" id="year">
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
    <label for="price" class="sr-only">Price</label>
    <input type="number" placeholder="Price" class="form-control" name="price" id="price" required>
    </div>
    <div class="button-group my-3">
        <button type="reset" class="btn btn-secondary">Clear</button>
        <button type="submit" class="btn btn-primary">Add</button>
    </div>
    </form>
    `
}