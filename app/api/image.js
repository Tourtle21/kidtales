
export const getImage = async () => {
  try {
    const res = await fetch("https://b9bb-199-79-53-246.ngrok.io/image", { method: "GET", cache: 'no-store' })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
};


export const getBulkImages = async () => {
  const arrayOfPromises = [];

  for (let i = 0; i < 10; i++) {
    arrayOfPromises.push(getImage());
  }

  try {
    const responses = await Promise.all(arrayOfPromises);
    console.log("All responses:", responses);
    return responses;
  } catch (error) {
    console.error("Error making multiple calls:", error);
  }
};
