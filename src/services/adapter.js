export const adapter = (response) => {
  
  return {
    id: response.id,
    name: response.name,
    img: response.poster_path,
  }
}

export default adapter