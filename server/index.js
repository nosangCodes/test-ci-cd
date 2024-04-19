const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is live");
});

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log("Server running on port 3000"));

/*
  MIIEogIBAAKCAQEAmGfLXr7NKT+S8HPpkrp77D7zJobCg+6rwNU//2hG88ec0MDy
QyrBafzoqMlDFKrpGIsIBuCH1yavOfXpmHXphwQISV0Ky56djuCHM/VpZ4aRzYnw
b0fkbfi5LmRvpUhch6nXPbsi8MftKxymAXjwMjn26n3IVAkSshaOElcYjyoYMybK
+65axyNCoXcbaOPACjHSAgPM+yujUi9HNW4uYgxOvbZyP8yHVvwZfj3CzzssjfWa
BDT505UcbCdMJkokGDyvW4mBFWkHplmRg2y+KDhM7s+cChvi6SaFXnzwHh6Q8O83
1tUycp8NGFLfQjEnaMO+d1hvnBOUFCODLt137wIDAQABAoIBAD5oIirFzpTZZ332
uOpQWnY+wKpB/Fyx2rq3l+Ep/gPM9TW2DH3cgB66ZTrYTxOjeJeINt06C+XZ/V6q
h+DaR6n1yL7hzo3agYIEBtkL4QF3ZTTZCw9GTQ+LDaklj2IK43jZ3z1z57bY5xEE
RiXMM+8dNTKIFwPyQymRetOfvnrAi9iS0epAgg7rRWUKyVN/XcdjZYOoVeoH8Zrh
VkXh53SKnty4FVkTLhQc1PVFegFJOYZDcTzeu5hhwg1ww2jc0tc459B9N9fs+P+Y
2F9WwY6C5XwnZfjg4wljTFSAu+vfXN/r4g1u7cNc+A0N1LQfBdBGlUITXkekyOYk
6d+P5uECgYEA0nlluKAe4pRfWpwpHw9QqGWVLZ958w/QEUwHhPqsIFuyiU0mWGTa
gH0OXJiNPnzxYTZy7OoHUppZO5Z7fqPg6n6pGUz9cs/+0YXKbQeMR9RVX5ScCv4M
/mlBJ/jvUP9WrjQCTHeJnsnc0m3cGKiodcD/RrPUr2r0P2XRmR4Yqt0CgYEAuV7z
m18pjB9BBb4Zw29bJBgkZgtUmzQlFa3oGcVOk6r7ON9/VH4aSoy+/Ac0+BqMFego
NYNXWuqnf3a+/OyGfqo3Ny74pj4K7D+aGBS06m3xni8mr+n+hhNkL0QUKVwbZ+CE
9YJ3nlJOMnsXocJJ+39HQf5Fgxxfnw99h0VLgzsCfyG1T5VCD7A6Ewtv9yYCTeiq
XDnyUJWc8rXSd2HUw7xq8y0KLhn6DQSHAsXRqM1ZNU9caQuIb6PLFH92mlCt7lef
8XUb33uD1Eu6IbFUhCL83q9wHY2lIm+ca9L7C1jti/RaYAPfIStNKRCKh7VrTY+O
WVP5eRafCn8cz3S2XT0CgYEAsv+RVNMLl5cGfrkWv7Vj2PLHExKV3Fj6BnkrytbQ
DZ/pfv2yQrCSSrKmKU/8QifAZdcMHMB7NfupSlgsDKeJJ/7N2qesyzrV6VNxRReZ
q1YHHqyBOxVFBcrrzwh6P4YFoMUZHsmhIGxxviVGqJioQAajlIIoNXbMjxeyK1Eq
nckCgYEAr2cH+RrJ/ZPSJEPB7j0nnPzvsBL+8T8e8nazhbS1YxsYMvCo8u9GnrmA
blqo2V4c4LKj84uMbcXNsPZGBSd02lE/9vKy6p+CtvOsUpqIjwgg0C5dApAIrfwj
EU23FXFY3p627V2FCUU0hRB05LCChec5rzKBxqYq6HeQbt72qqw=
*/ 