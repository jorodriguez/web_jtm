import URL from '../Urls'

const getCircuitosUser = async (idUser) => {
  try {
    const res = await fetch(URL.CIRCUITOSUSER + idUser)

    const data = res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

const saveCircuitos = async (rutina) => {
  try {
    const res = await fetch(URL.CIRCUITOSSAVE, {
      method: 'POST',
      body: rutina,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  getCircuitosUser,
  saveCircuitos,
}
