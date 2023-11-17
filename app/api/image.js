
export const getImage = async () => {
  // Should we have a global consts or something for the url?
  console.log("getting image: ")
  try {
    const res = await fetch("http://localhost:6969/image", { method: "GET", cache: 'no-store', mode: 'no-cors' })
    return res.body
  } catch (error) {
    console.log(error)
  }
};


export const getBulkImages = async () => {

  const res = await Promise.all(Array(10).fill(getImage))
  console.log("res: ", res)
  return res
}
