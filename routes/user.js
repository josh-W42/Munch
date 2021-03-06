const router = require("express").Router();
const ctrl = require("../controllers");
const passport = require("passport");
const multer = require("multer");
const uploads = multer({ dest: "./uploads" });

router.get("/test", ctrl.user.test);
router.get("/all", ctrl.user.all);
router.get("/:id/public", ctrl.user.publicInfo);
router.get(
  "/:id/private",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.privateInfo
);

router.post("/register", ctrl.user.register);
router.post("/login", ctrl.user.login);

router.put(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.edit
);
router.put(
  "/:id/profileImg",
  passport.authenticate("jwt", { session: false }),
  uploads.single('profileImg'),
  ctrl.user.changeProfileImg
);
router.put(
  "/:id/coverImg",
  passport.authenticate("jwt", { session: false }),
  uploads.single('coverImg'),
  ctrl.user.changeCoverImg
);
router.put(
  "/addFavorite/:restaurantId",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.addFavorite
);
router.put(
  "/removeFavorite/:restaurantId",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.removeFavorite
);
router.put(
  "/follow/:otherId",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.follow
);
router.put(
  "/unfollow/:otherId",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.unFollow
);

router.delete(
  "/:id/delete",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.remove
);

module.exports = router;
