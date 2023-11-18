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

export const getBulkImages = async (sentences) => {
  const arrayOfPromises = [];

  for (let i = 0; i < 1; i++) {
    arrayOfPromises.push(getImage(sentences[i]))
  }

  try {
    const responses = await Promise.all(arrayOfPromises)
    console.log("All responses:", responses)
    return responses
  } catch (error) {
    console.error("Error making multiple calls:", error)
  }
}

export const realGetImage = async (sentence) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: sentence,
    n: 1,
    size: "1024x1024",
  })
  console.log(response)
  const image_url = response.data[0].url
  console.log(image_url)
  return image_url
}

export const realGetBulkImages = async (sentences) => {
  const arrayOfPromises = [];

  for (let i = 0; i < sentences.length; i++) {
    arrayOfPromises.push(realGetImage(sentences[i]))
  }

  try {
    const responses = await Promise.all(arrayOfPromises);
    console.log("All responses:", responses);
    return responses;
  } catch (error) {
    console.error("Error making multiple calls:", error);
  }
}
