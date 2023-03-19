'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Title cannot not be empty`
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `URL cannot not be empty`
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Image cannot not be empty`
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `Image cannot not be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};