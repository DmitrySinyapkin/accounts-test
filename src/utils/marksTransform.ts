import type { Mark } from "../types/account"

export const marksToString = (marks: Mark[]): string =>
    marks.reduce((str, mark, index, arr) => index === arr.length - 1 ? str + mark.text : str + `${mark.text}; `, '')

export const stringToMarksArray = (str: string): Mark[] =>
    str.split(';').map(sub => ({ text: sub.trim() }))
