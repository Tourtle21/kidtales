import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export const getStory = async () => {
  try {
    const res = await fetch("https://89eb-199-79-53-246.ngrok.io/story", { method: "GET", cache: 'no-store' })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const realGetStory = async (options) => {
  const { names, ages, lessons, style, slade, genre } = options
  const message = `Make up a 10-sentence story about ${names}, for kids age ${ages},
    focused on the theme of ${lessons}, based in a ${genre} setting also, add a hero character named
    ${slade} use language appropriate to toddlers. Make each sentence a bullet point. Use gender specific language.`
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": message },
    ],
    model: "gpt-3.5-turbo",
  })

  console.log(completion)
  return completion.choices[0]
}
