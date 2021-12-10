
exports.up = async function(knex) {
  return await knex.schema
    .createTable("project", table => {
      table.increments("project_id")
    })
    .createTable("resource", table => {
      table.increments("resource_id")
    })
    .createTable("task", table => {
      table.increments("task_id")
    })
    .createTable("resource_assignment", table => {
      table.increments("resource_assignment_id")
    })
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTableIfExists("resource_assignment")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project")
};
