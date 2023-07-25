const express = require("express");
const router = express.Router();
let { people } = require("../data");

const {
  createPersonPostman,
  createPerson,
  updatePersonPostman,
  getPeople,
  deletePerson,
} = require("../controller/people");

//parse json
// router.use(express.json());
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePersonPostman);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").delete(deletePerson).put(updatePersonPostman);

module.exports = router;
