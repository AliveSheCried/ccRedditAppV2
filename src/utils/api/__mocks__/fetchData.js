const fetchData = (endpoint) => {
  // console.log("using mock...");
  return Promise.resolve({ endpoint: "/r/pics" });
};

exports.fetchData = fetchData;
