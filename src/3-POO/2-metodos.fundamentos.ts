export class MyDate {

    public year: number;
    public month: number;
    public day: number;
    public leapYear: boolean = false;

    private nameMonth : { [key: number] : string } = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
    }

    private monthWith31Day : number[] = [0, 2, 4, 6, 7, 9, 11];

    constructor(year: number, month: number, day:number ){
        this.year = this._validYear(year);
        this.month = this._validMonth(month);
        this.day = this._validaDay(day);
        this.isLeapYear();
    }

    private _validYear( year: number ) {
        if ( year > 1900 ) {
            return year;
        }
        return 1900;
    }

    private _validMonth( month: number ) : number {
        if ( month >= 0 && month <= 11 ) return month;
        return 0
    }

    private _validaDay( day : number ) : number {
        if ( day > 0 ){
            if (this.month === 1){
                let lastDayFebrary : number = this.leapYear ? 29 : 28;
                return day <= lastDayFebrary ? day : 1;
            } else {
                let lastDayMonth : number = this.monthWith31Day.includes(this.month) ? 31 : 30;
                return day <= lastDayMonth ? day : 1;
            }
        }
        return 1;
    }

    private isLeapYear() {
        if ( this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)) this.leapYear = true;
    }

    sumDay ( numberOfDay : number ) {

        let newDay = this.day + numberOfDay;
        let loopAdd = true;
        do {

        } while ( loopAdd )
    }

    toString() : string {
        return `${this.year}-${this.month}-${this.day}`;
    }

}

const date = new MyDate(2022, 100, 40)
console.log(date.toString());