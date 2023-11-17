
export const getStory = async () => {
  try {
    const res = await fetch("https://b9bb-199-79-53-246.ngrok.io/story", { method: "GET", cache: 'no-store' })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
};
