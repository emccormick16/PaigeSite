import Note from "../Note";

const noteSeed = async (users: any) => {
  console.log("SEEDING NOTES");

  //creating recipes for the database to be seeded with

  const [
    moeNote1,
    moeNote2,
    moeNote3,
    lucyNote1,
    lucyNote2,
    lucyNote3,
    lucyNote4,
    lucyNote5,
    lucyNote6,
    lucyNote7,
  ] = await Promise.all([
    Note.create({
      text: "Instant Pot Butter Chicken",
      sessionLength: 30,
    }),
    Note.create({
      text: "Instant Pot Mushroom Risotto",
      sessionLength: 45,
    }),
    Note.create({
      text: "Shrimp Scampi with Broccoli",
      sessionLength: 60,
    }),
    Note.create({
      text: "Chicken Parm Lasagna",
      sessionLength: 45,
    }),
    Note.create({
      text: "Vegetarian Enchiladas",
      sessionLength: 45,
    }),
    Note.create({
      text: "Spaghetti Squash Parmesan Mushrooms",
      sessionLength: 90,
    }),
    Note.create({
      text: "Crock Pot Chicken Fajitas",
      sessionLength: 30,
    }),
    Note.create({
      text: "Chipotle Sweet Potato Bowls",
      sessionLength: 75,
    }),
    Note.create({
      text: "Chicken Tinga Bowls",
      sessionLength: 60,
    }),
    Note.create({
      text: "Tofu Stir Fry Noodles",
      sessionLength: 30,
    }),
  ]);

  // Destruct users out of users object
  const { moe, lucy } = users;

  // Create associations using magic methods
  await moe.addRecipe(moeNote1);
  await moe.addRecipe(moeNote2);
  await moe.addRecipe(moeNote3);
  await lucy.addRecipe(lucyNote1);
  await lucy.addRecipe(lucyNote2);
  await lucy.addRecipe(lucyNote3);
  await lucy.addRecipe(lucyNote4);
  await lucy.addRecipe(lucyNote5);
  await lucy.addRecipe(lucyNote6);
  await lucy.addRecipe(lucyNote7);

  console.log("DONE SEEDING RECIPES");
};

export default noteSeed;
