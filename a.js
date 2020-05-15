class car
{
    constructor()
    {
        this.speed=20;
    }
    acc()
    {
        this.speed+=50;
    }
    cspeed()
    {
        console.log(`The speed is ${this.speed}`);
    }
}
let obj=new car;

obj.cspeed();
obj.acc();
obj.cspeed();