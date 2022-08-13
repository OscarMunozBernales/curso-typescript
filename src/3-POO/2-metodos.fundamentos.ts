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

    private veryfyLastDayForMonth( lastDayMonth: number){
        if ((this.day + 1) <= lastDayMonth){
            this.day++;
        } else {
            this.day = 1;
            this.month++;
            if ( this.month > 11) {
                this.month = 0;
                this.year++;
            }
        }

    }

    public sumDay ( numberOfDay : number ) : void {

        for ( let add = 1 ; add <= numberOfDay ; add++ ) {
            if (this.month === 1) {
                this.veryfyLastDayForMonth(this.leapYear ? 29 : 28);
            } else if ( this.monthWith31Day.includes(this.month) ) {
                this.veryfyLastDayForMonth(31);
            } else {
                this.veryfyLastDayForMonth(30);
            }
        }
        
    }

    public sumMonth( numberofMonth : number ) : void {
        for ( let month = 0 ; month < numberofMonth ; month++ ) {
            if(( this.month + 1 ) > 12 ){
                this.month = 0;
                this.year++;
            } else {
                this.month++;
            }
        } 
    }

    private formatMonth() : string {
        let month = this.month;
        month++;
        return month <= 8 ? `0${month}` : `${month}`;
    }

    private formatDay() : string {
        let day = this.day;
        return day <= 9 ? `0${day}` : `${day}`;
    }

    toString( format? : string ) : string {
        
        if ( typeof format !== 'undefined' ){
            if ( format === 'yyyy.mm.dd' ){
                return `${this.year}.${this.formatMonth()}.${this.formatDay()}`;
            } else if( format === 'yyyy/mm/dd' ) {
                return `${this.year}/${this.formatMonth()}/${this.formatDay()}`;
            } else if ( format === 'yyyy-mm-dd' ) {
                return `${this.year}-${this.formatMonth()}-${this.formatDay()}`;    
            } else {
                console.log(this.month);
                return `${this.formatDay()} de ${this.nameMonth[this.month]} del ${this.year}`;
            }
        } else {
            return `${this.year}-${this.formatMonth()}-${this.formatDay()}`;
        }
    }

}

const date = new MyDate(2022, 11, 11)
console.log(date.toString(''));