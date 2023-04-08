import db from "./db";
import User from "./User";
import Note from "./Note";

User.hasMany(Note);
Note.belongsTo(User);

const data = {
  Note,
  User,
  db,
};

export default data;
