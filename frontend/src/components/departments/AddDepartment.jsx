import React from "react";

const AddDepartment = () => {
  return (
    <div className="max-w-3xl">
      <div>
        <h3>Add Department</h3>
        <form>
          <div>
            <label htmlFor="dep_name">Department Name</label>
            <input type="text" placeholder="Enter Dep Name" />
          </div>
          <div>
            <label htmlFor="description">Desctiption</label>
            <textarea
              name="description"
              placeholder="Description"
              id=""
            ></textarea>
            <button>Add Department</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
