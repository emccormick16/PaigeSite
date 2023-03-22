import db from "./db";
import User from "./User";
import Note from "./Note";

const data = {
  Note,
  User,
  db,
};

User.hasMany(Note);
Note.belongsTo(User);

export default data;
