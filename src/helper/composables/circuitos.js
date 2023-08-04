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

const updateRutina = async (rutinaId, circuitos) => {
  try {
    const res = await fetch(`${URL.CIRCUITOSUPDATERUTINA}/${rutinaId}`, {
      method: 'POST',
      body: circuitos,
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

const disableRutina = async (rutinaId) => {
  try {
    const res = await fetch(`${URL.CIRCUITOSDISABLERUTINA}/${rutinaId}`, {
      method: 'POST',
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
  updateRutina,
  disableRutina,
}
