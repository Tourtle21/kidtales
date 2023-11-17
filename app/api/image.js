
export const getImage = async () => {
  try {
    const res = await fetch("http://localhost:6969/image", { method: "GET", cache: 'no-store' })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
};


export const getBulkImages = async () => {
  const res = await Promise.all(Array(10).fill(getImage()))
  return res
}
