
exports.up = async function (knex) {
  return await knex.schema
    .createTable("project", table => {
      table.increments("project_id")
      table.string("project_name")
        .notNullable()
      table.string("project_description")
      table.boolean("project_completed")
        .defaultTo(0)
    })
    .createTable("resource", table => {
      table.increments("resource_id")
      table.string("resource_name")
        .unique()
        .notNullable()
      table.string("resource_description")
    })
    .createTable("task", table => {
      table.increments("task_id")
    })
    .createTable("resource_assignment", table => {
      table.increments("resource_assignment_id")
    })
};

exports.down = async function (knex) {
  return await knex.schema
    .dropTableIfExists("resource_assignment")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project")
};
