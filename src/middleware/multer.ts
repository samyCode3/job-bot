import * as multer from 'multer'

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set a unique filename for each uploaded file
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });
