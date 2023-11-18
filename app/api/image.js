import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export const getImage = async () => {
  try {
    const res = await fetch("https://89eb-199-79-53-246.ngrok.io/image", { method: "GET", cache: 'no-store' })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const getBulkImages = async () => {
  const arrayOfPromises = [];

  for (let i = 0; i < 10; i++) {
    arrayOfPromises.push(getImage())
  }

  try {
    const responses = await Promise.all(arrayOfPromises)
    console.log("All responses:", responses)
    return responses
  } catch (error) {
    console.error("Error making multiple calls:", error)
  }
}

export const realGetImage = async () => {
  const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  })
  image_url = response.data.data[0].url
  console.log(image_url)
  return image_url
}

export const realGetBulkImages = async () => {
  const arrayOfPromises = [];

  for (let i = 0; i < 10; i++) {
    arrayOfPromises.push(realGetImage());
  }

  try {
    const responses = await Promise.all(arrayOfPromises);
    console.log("All responses:", responses);
    return responses;
  } catch (error) {
    console.error("Error making multiple calls:", error);
  }
}
