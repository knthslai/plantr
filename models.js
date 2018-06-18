const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Date()
})

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})


db.sync({force: true}).then(db => db.close()).catch(error => console.log(error))

module.exports = {db, Gardener, Plot, Vegetable}
