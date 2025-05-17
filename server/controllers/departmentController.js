import Department from "../models/Department.js";

// new code
const addDepartment = async (req, res) => {};

const { dep_name, description } = req.body;
const newDep = new Department({
  dep_name,
  description,
});

await newDep.save();
return res.status(200).json({ success: true, department: newDep });

export { addDepartment };

//old code
// try {
//   const { dep_name, description } = req.body;
//   const newDep = new Department({
//     dep_name,
//     description,
//   });
//   await newDep.save();
//   return res.status(200).json({ success: true, department: newDep });
// } catch (error) {
//   return res
//     .status(500)
//     .json({ success: false, error: "add department server error" });
// }
