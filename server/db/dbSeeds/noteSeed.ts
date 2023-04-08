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
      text: "Patient presented with dysarthria and reduced oral motor strength. Recommended exercises to improve speech clarity.",
      sessionLength: 30,
    }),
    Note.create({
      text: "Patient with stuttering history. Used fluency shaping techniques to reduce disfluency and increase confidence in communication.",
      sessionLength: 45,
    }),
    Note.create({
      text: "Diagnosed patient with apraxia of speech. Developed individualized treatment plan targeting phoneme production and prosody.",
      sessionLength: 60,
    }),
    Note.create({
      text: "Evaluated patient with voice disorder. Identified vocal nodules and provided education on vocal hygiene and therapy to reduce nodules.",
      sessionLength: 45,
    }),
    Note.create({
      text: "Assessed patient with language delay. Developed a therapy plan focused on expressive and receptive language skills.",
      sessionLength: 45,
    }),
    Note.create({
      text: "Patient with traumatic brain injury exhibiting aphasia. Used visual aids and cues to improve comprehension and expression.",
      sessionLength: 90,
    }),
    Note.create({
      text: "Evaluated patient with dysphagia. Recommended modified diet and swallowing exercises to improve safety and efficiency.",
      sessionLength: 30,
    }),
    Note.create({
      text: "Diagnosed patient with Parkinson's disease exhibiting hypophonia. Recommended voice therapy to improve vocal loudness.",
      sessionLength: 75,
    }),
    Note.create({
      text: "Patient with cleft palate and velopharyngeal dysfunction. Developed speech therapy plan focused on resonance and articulation.",
      sessionLength: 60,
    }),
    Note.create({
      text: "Assessed patient with hearing loss and communication difficulties. Recommended hearing aids and communication strategies for improved quality of life.",
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
