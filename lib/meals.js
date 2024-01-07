import xss from "xss";
import fs from "node:fs";
import slugify from "slugify";
import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
};

export const saveMeals = async (meal) => {
  meal.ingredients = xss(meal.ingredients);

  meal.slug = slugify(`(${meal.title}-${Math.random() + Date.now()}`, {
    lower: true,
  });

  const extention = meal.image.name.split(".").pop();

  console.log(meal.image.name.split(".").at(-1));

  const filename = `${meal.slug}.${extention}`;

  const bufferedImage = await meal.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${filename}`);

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Uploading image failed");
    }
  });

  meal.image = `/images/${filename}`;

  return db
    .prepare(
      `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug ) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
    )
    .run(meal);
};


/*


Balogun MuhammadAwwal Umar
G50, Balogun gambari,
Ilorin, Kwara, Nigeria.
balogunmuhammadawwal@gmail.com.
09166537641.
6th, January, 2024.


Dear Hiring Team at Indagare,

I am writing to express my enthusiastic interest in the Front-End Developer Intern position at Indagare, as advertised. With over two years of hands-on experience as a Typescript, MERN stack (MongoDB, Express, Reactjs (Nextjs) , Node) developer, I am excited about the opportunity to contribute my skills and passion for creating visually appealing websites to your dynamic and growing software development team.

In my previous projects, I have successfully designed and developed clean, top-quality user interfaces using and JavaScript, Reactjs, TypeScript, MongoDB and Express and Stripe API. Working collaboratively within Agile methodologies, I have effectively broken down complex product requirements, provided accurate development estimates, and delivered high-quality code that has undergone thorough testing. My experience extends to working with libraries such as and React and Tailwind showcasing my versatility in web UI development.

What I bring to the table aligns closely with the qualifications outlined in your job description. I possess a strong foundation in web UI development and a familiarity with both pure JavaScript and various libraries. My passion for creating responsive websites and webapps, coupled with my ability to work with REST and JSON, makes me well-suited for the challenges of building innovative and brand-forward digital platforms.

I am a team player with excellent interpersonal skills, accustomed to working in fast-paced environments. My strong analytical capabilities, independent thinking, and decision-making skills have allowed me to contribute meaningfully to the success of previous projects. Moreover, I am no stranger to remote work environments, having acquired valuable experience that enhances my adaptability and collaboration skills.

As a self-starter, problem solver, and excellent communicator, I am confident in my ability to take initiative, collaborate effectively with team members, and pay meticulous attention to detail. I am excited about the opportunity to contribute to Indagare's mission of inspiring and empowering people to change their lives through travel.

Thank you for considering my application. I am eager to bring my technical expertise, creativity, and commitment to excellence to Indagare. I look forward to the possibility of discussing how my skills align with your team's goals in more detail.

Sincerely,

Balogun MuhammadAwwal




Dear Hiring Team at Indagare,

I am thrilled at the prospect of joining the Indagare team as a Front-End Developer Intern, and I'm eager to share a cherished travel memory that reflects my passion for exploration and discovery.

One of my favorite travel memories takes me back to a solo trip I embarked on to Abu Dhabi, Dubai. The enchanting blend of rich history, traditional culture, and modern innovation left an indelible mark on my heart. What made this journey special was the immersive and great experience of wandering through the talest builing on the planet, Burj Khalifa. 


This travel memory holds a special place in my heart because it encapsulates the essence of exploration, cultural exchange, and the beauty of unexpected moments. It reinforced my belief in the transformative power of travel to broaden perspectives and foster genuine connections.

I am excited about the opportunity to contribute my technical skills and creativity to Indagare's mission of inspiring and empowering individuals through travel. I look forward to bringing this same spirit of exploration and connection to the innovative projects at Indagare.

Thank you for considering my application, and I am enthusiastic about the possibility of contributing to the incredible experiences that Indagare offers its members.

Sincerely,

Balogun MuhammadAwwal

*/