const projects = [
  {
    project_name: "Build and sail a paper boat",
    project_description: "Building a small paper boat to sail on water for fun",
    project_completed: 0
  },
  {
    project_name: "Build a pull-up bar",
    project_description: "Creating a pull-up bar for working out",
    project_completed: 1
  },
]

const resources = [
  { resource_name: "Paper", resource_description: "An 8.5in x 11in sheet of paper" },
  { resource_name: "Wooden Post", resource_description: "A 4in x 6in x 10ft pressure treated wooden post" },
  { resource_name: "Steel Pipe", resource_description: "A 1in x 6ft galvanized steel pipe" },
  { resource_name: "Iron Pipe Caps", resource_description: "A pair of 1in x 1in iron pipe caps" },
  { resource_name: "Concrete Mix", resource_description: "A 50lbs bag of concrete mix" },
]

const tasks = [
  // Tasks for Project 1
  {
    task_description: "Fold a sheet of paper into a boat like shape",
    task_notes: "Follow a guide if you are unsure of how to make a paper boat",
    task_completed: 0,
    project_id: 1
  },
  {
    task_description: "Place created boat into any body of water",
    task_notes: "A small pond would work best for this task",
    task_completed: 0,
    project_id: 1
  },
  // Tasks for Project 2
  {
    task_description: "Drill a 4in - 6in hole below the top of your two wooden posts",
    task_notes: "Hole should big enough for the steel pipe to fit in tightly",
    task_completed: 1,
    project_id: 2
  },
  {
    task_description: "Push pipe through post holes and tighten the iron caps at the ends",
    task_notes: "Make sure that the caps are tightened VERY well",
    task_completed: 1,
    project_id: 2
  },
  {
    task_description: "Dig two 2ft - 3ft holes into the ground for the posts",
    task_notes: "Take your time to take measure out the space between the two posts, that way the holes are aligned correctly",
    task_completed: 1,
    project_id: 2
  },
  {
    task_description: "Place assembled pull-up bar into the two holes",
    task_notes: "Drop some tiny rocks at the bottom for extra stability",
    task_completed: 1,
    project_id: 2
  },
  {
    task_description: "Mix concrete mix with water and pour it into the two holes",
    task_notes: "Reference the bag instructions for mixing and wait time.",
    task_completed: 1,
    project_id: 1
  },
]

const project_resources = [
  // Project 1 Resources
  { project_id: 1, resource_id: 1 },
  // Project 2 Resources
  { project_id: 2, resource_id: 2 },
  { project_id: 2, resource_id: 3 },
  { project_id: 2, resource_id: 4 },
  { project_id: 2, resource_id: 5 },
]

exports.seed = async function (knex) {
  await knex("recipes").insert(projects)
  await knex("ingredients").insert(resources)
  await knex("steps").insert(tasks)
  await knex("step_ingredients").insert(project_resources)
}
