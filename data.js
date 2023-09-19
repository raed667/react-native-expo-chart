export const getDataFromAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: ["January", "February", "March", "April", "May", "June"],
        values: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      });
    }, 500);
  });
};
