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
  const message = `Make up a 5-sentence story about ${names}, for kids age ${ages},
    focused on the theme of ${lessons}, based in a ${genre} setting also, add a hero character named
    ${slade} use language appropriate to toddlers. Make each sentence a bullet point. Use gender specific language.
    Every single time any pronoun or name is
    mentioned add curly braces afterward with a detailed description of the character put the same description in curly
    braces if the character is mentioned againFor example if I say Lily {a curious and adventurous 8-year-old girl alien
    with purple spots and two antennae on her head} went to the store. When Lily {a curious and adventurous 8-year-old
    girl alien with purple spots and two antennae on her head} arrived she found a cone. Then Lily {a curious and 
    adventurous 8-year-old girl alien with purple spots and two antennae on her head} ate some soup.`
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "user", "content": message },
    ],
    model: "gpt-4-1106-preview",
  })

  console.log(completion)
  return completion.choices[0]
}
