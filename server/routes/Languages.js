// routes/languages.js

const express = require("express");
const router = express.Router();
const Language = require("../schemas/Language");

// Get all languages
router.get("/", async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single language
router.get("/:id", getLanguage, (req, res) => {
  res.json(res.language);
});

// Create new language
router.post("/", async (req, res) => {
  const language = new Language({
    name: req.body.name,
    nativeName: req.body.nativeName,
    description: req.body.description,
  });

  try {
    const newLanguage = await language.save();
    res.status(201).json(newLanguage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update language
router.patch("/:id", getLanguage, async (req, res) => {
  if (req.body.name != null) {
    res.language.name = req.body.name;
  }
  if (req.body.nativeName != null) {
    res.language.nativeName = req.body.nativeName;
  }
  if (req.body.exercises != null) {
    res.language.exercises.push(req.body.exercises);
  }
  try {
    const updatedLanguage = await res.language.save();
    res.json(updatedLanguage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete language
router.delete("/:id", getLanguage, async (req, res) => {
  try {
    await res.language.remove();
    res.json({ message: "Deleted language" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getLanguage(req, res, next) {
  let language;
  try {
    language = await Language.findById(req.params.id);
    if (language == null) {
      return res.status(404).json({ message: "Cannot find language" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.language = language;
  next();
}

module.exports = router;
