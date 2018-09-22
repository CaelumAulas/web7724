const presets = [
    ["@babel/env", {
      targets: {
        chrome: "58",
        ie: '11'
      },
      useBuiltIns: "usage"
    }]
  ];
  
  module.exports = { presets };