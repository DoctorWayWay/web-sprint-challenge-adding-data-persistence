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
  { task_description: "", task_notes: "", task_completed: 0, project_id: 1 }
]

module.exports = {
  projects,
  resources,
  tasks
}
