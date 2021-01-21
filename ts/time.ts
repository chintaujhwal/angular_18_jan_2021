class Time
{
    private h : number;
    private m : number;
    private s : number;

    constructor(h : number, m : number, s : number) {
        this.h = h;
        this.m = m ;
        this.s = s;
    }

    totalSeconds() : number {
        return  this.h * 3600 + this.m * 60 + this.s;
    }
}

var t1 = new Time(10,20,30)
console.log(t1.totalSeconds())
