const Device = require("../models/deviceModel");


exports.getAllDevices =async (req, res) => {
    try {
      const devices = await Device.find();
  
      res.status(200).json({
        status: "success",
        result: devices.length,
        data: {
          devices,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };


  exports.createDevice=async (req, res) => {
    try {
      const newDevice = await Device.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          device: newDevice,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }

  exports.deleteDevice =async (req, res) => {
    try {
      const devices = await Device.delete();
  
      res.status(200).json({
        status: "success",
        result: devices.length,
        data: {
          devices,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };


  