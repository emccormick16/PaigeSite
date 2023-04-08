import db from "./db";
import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

const { UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

interface NoteModel
  extends Model<
    InferAttributes<NoteModel>,
    InferCreationAttributes<NoteModel>
  > {
  id: CreationOptional<number>;
  text: string;
  sessionLength: number;
}

const Note = db.define<NoteModel>("note", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  text: {
    type: TEXT,
    allowNull: false,
  },
  sessionLength: {
    type: INTEGER,
    allowNull: false,
  },
});

export default Note;
