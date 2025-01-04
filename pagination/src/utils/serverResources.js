let API_URL = "https://dummyjson.com/products?limit=10";

const fetchiServerProducts = async () => {
  const response = await fetch(API_URL);
  const retriveData = response.json();
  return retriveData;
};

export { fetchiServerProducts };
