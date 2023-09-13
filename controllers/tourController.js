const Tour = require('./../models/tourModel');


exports.getAllTours = async (req, res, next) => {
  const tours = await Tour.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
};

exports.getTour = async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.createTour = async (req, res, next) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
};

exports.updateTour = async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.deleteTour = async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);


  res.status(204).json({
    status: 'success',
    data: null
  });
};

