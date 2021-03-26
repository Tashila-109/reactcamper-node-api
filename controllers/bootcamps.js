// @desc      Get all bootcamps
// @route     GET /api/vi/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps'});
};

// @desc      Get single bootcamp
// @route     GET /api/vi/bootcamp/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
};

// @desc      Create new bootcamp
// @route     POST /api/vi/bootcamp/:id
// @access    Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Create new bootcamp'});
};

// @desc      Update bootcamp
// @route     PUT /api/vi/bootcamp/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
};

// @desc      Delete bootcamp
// @route     DELETE /api/vi/bootcamp/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
};
