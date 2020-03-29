const getHHMM = (msec: string): string => {
    const d = new Date(Number(msec))
    const hh = (d.getHours() && d.getDay() == 0) ? '' : `${(d.getDate()-1)*24 + d.getHours()} ч `
    const mm = (d.getMinutes() == 0) ? '' : `${d.getMinutes()} мин`
    return hh + mm
  }

  const getPercent = (percentFrom : string, persentWhat: string): string => {
    const dAAT = new Date(Number(persentWhat));
    const dALT = new Date(Number(percentFrom));
    const mAAT = ((dAAT.getDate() - 1) * 24 + dAAT.getHours()) * 60 + dAAT.getMinutes()
    const mALT = ((dALT.getDate() - 1) * 24 + dALT.getHours()) * 60 + dALT.getMinutes()
    const percent = ((mAAT * 100 ) / mALT).toFixed(1)
    
    return ` (${percent}%)`
  }

  const getDDMMYYYY = (msec: string): string => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const d = new Date(Number(msec))

    return d.toLocaleString("ru", options).slice(0, -3)
  }

  const getNumberWithText = (num: number, world: string): string => {

    const numStr = num.toString();
    let textResult = "";
    let textForms = []
    switch (world) {
      case "сотрудник":
        textForms = ["сотрудник", "сотрудника", "сотрудников"];
        break;
      case "сценарий":
        textForms = ["сценарий", "сценария", "сценариев"];
        break;
      default:
        textForms = ["", "", ""];
        break;
    }

    if ((numStr[numStr.length - 1] === '1') && (numStr.substring(numStr.length - 2) !== "11")) {
      textResult = textForms[0]
    } else if ( /^[2-4]{1}$/.test(numStr[numStr.length - 1]) && (num !== 12 || 13 || 14)) {
      textResult = textForms[1]
    } else {
      textResult = textForms[2]
    }

    return `${num} ${textResult}`
}
  
export {
  getHHMM,
  getPercent,
  getDDMMYYYY,
  getNumberWithText
}