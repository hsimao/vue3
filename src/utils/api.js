export const getResult = keyword => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        data: `Your search results is by [ ${keyword} ], and Length: ${keyword.length}`,
        status: 200
      };

      resolve(res);
    }, 1500);
  });
};
