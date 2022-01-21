// title,
// type,
// completed_in,
// coffee_required,
// description,
// number_of_images,
// web_link,
// playstore_link,
// github_link

const projects = [
  new Project(
    "Mockback",
    "mockback",
    "MERN Stack Application",
    "3 weeks",
    "July 2021",
    43,
    1,
    "Mockback is a simple application to make backend apis and monitor those routes. It allows you to define custom routes and the response it would give when called. You can make routes which few clicks and use it anywhere. One nifty feature is, you could also define the type of data, say firstname and application will provide you with a different firstname anytime you call. You could also require authorization and provide the ids in the header which will be authorized. All in all its a simple application to allow use to develop your front end while your backend catches up requests.",
    6,
    "https://mockback.tusharyaar.me/",
    "https://play.google.com/store/apps/details?id=com.tusharyaar.mockback",
    ""
  ),
  new Project(
    "Docdepo",
    "docdepo",
    "JAM Stack Application",
    "2 weeks",
    "June 2021",
    20,
    1,
    "Docdepo allows users to send files from any device to any device easily and quickly. Writes notes and see them on any device in real time. Easy to login and use. Easy Drag and Drop files system with parallel uploading. With the mobile app, you can also transfer any image from device to any other device. ",
    5,
    "https://docdepo.tusharyaar.me/",
    "https://play.google.com/store/apps/details?id=com.tusharyaar.docdepo",
    "https://github.com/TusharYaar/DocDepo"
  ),
  new Project(
    "Arga",
    "arga",
    "JAM Stack Application",
    "2 weeks",
    "March 2021",
    16,
    1,
    "Manage your tasks for your project easily and quickly, from anywhere with arga. Create multiple projects, at ease, and login with Google or Github for easy access. Share your projects with your collegues with temporary access tokens and share the work in real time",
    6,
    "https://arga.tusharyaar.me/",
    "",
    "https://github.com/TusharYaar/tasker"
  ),
];
