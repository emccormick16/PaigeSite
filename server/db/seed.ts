import db from "./db";
import User from "./User";
import noteSeed from "./dbSeeds/noteSeed";

const seed = async () => {
  await db.sync({ force: true });

  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);

  const users = { moe, lucy, larry, ethyl };

  await noteSeed(users);

  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
    },
  };
};

seed();
