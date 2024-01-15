const getPosts = (req, res, next) => {
  console.log("I have been called");
  res.status(200).json({
    posts: [
      {
        title: "First Post",
        content: "This is the first posts!",
      },
    ],
  });
};
const postPost = (req, res, next) => {
  // create post in db
  const content = req.body.content;
  const chunks = content.replace("&gt;", " > ");
  const finaldata = chunks.replace("&lt;", " < ");
  res.status(201).json({
    message: "Cnverted Succesfully",
    post: {
      id: new Date().toISOString(),
      content: finaldata,
    },
  });
};
const postXML = (req, res, next) => {
  const inputString = req.body.content;
  let match = inputString.match(/<.*?>.*?<\/.*?>/);
  let cleanedString = match ? match[0] : "";
  res.status(201).json({
    message: "Cnverted Succesfully",
    post: {
      id: new Date().toISOString(),
      content: cleanedString,
    },
  });
};
module.exports = {
  getPosts,
  postPost,
  postXML,
};
