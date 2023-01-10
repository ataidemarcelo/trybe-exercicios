import { Model, INTEGER, STRING } from "sequelize";

import db from '.';

class Genre extends Model {
  declare id: number;
  declare genre: string;
}

Genre.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  genre: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'genres',
  timestamps: false,
});

export default Genre;
