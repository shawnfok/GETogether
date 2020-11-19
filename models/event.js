// Creating our Event model
module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define("Event", {
    // The event name cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The description
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 256]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });

  Event.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Event.hasMany(models.Userevent, {
      onDelete: "cascade"
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database

  return Event;
};
