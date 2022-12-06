

export class DateConverter {
    constructor() { }

    convertDate(date: Date): any {
        if (date) {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() - date.getTimezoneOffset()).toISOString();
        }
    }
}