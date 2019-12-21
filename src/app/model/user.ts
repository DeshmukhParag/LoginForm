export class User {
    constructor(
        public firstName: string = null,
        public lastName: string = null,
        public email: string = null,
        public password: string = null,
        public dateofbirth: string = null,
        public gender: string = null,
        public state: string = null,
        public city: string = null
    ) {

    }
}


export class Page {
    constructor(
        public size: number = 10,
        public count: number = 0,
        public number: number = 1,
    ) {

    }
}

export class Login {
    constructor(public userId: string = null,
        public password: string = null) {
    }
}
