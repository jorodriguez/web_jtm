const getWeek = (date) => {
    // Clonamos el objeto de fecha para no modificar el original
    const clonedDate = new Date(date)

    // Asegurémonos de estar trabajando con el primer día de la semana (lunes)
    clonedDate.setHours(0, 0, 0, 0)
    clonedDate.setDate(clonedDate.getDate() + 4 - (clonedDate.getDay() || 7))

    // Establecemos el primer día del año
    const yearStart = new Date(clonedDate.getFullYear(), 0, 1)

    // Calculamos el número de días transcurridos desde el primer día del año
    const daysSinceYearStart = Math.floor((clonedDate - yearStart) / 86400000)

    // Calculamos el número de la semana (semana 1, semana 2, etc.)
    const weekNumber = 1 + Math.floor(daysSinceYearStart / 7)

    return weekNumber
}

export {
    getWeek,
}
