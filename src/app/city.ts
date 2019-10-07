export class City {
    userId: number;
    name: string;
    temperature?: number;
    humidity?: number;
    pressure?: number;
    windspeed?: number;
    winddeg?: number;

    constructor(name: string, userId: number) {
        this.name = name;
        this.userId = userId;
    }
}
