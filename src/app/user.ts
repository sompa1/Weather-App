import {City} from './city';

export class User {
    id: number;
    userName: string;
    password: string;
    cities?: City[];

    constructor(userName: string, password: string) { this.userName = userName; this.password = password; }
}
