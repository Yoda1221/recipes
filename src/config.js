const TABLES = Object.freeze({
    recepts: "recepts",
    hozzavalok: "hozzavalok"
})

const TYPES = Object.freeze({
    soup: "l",
    cake: "s",
    main: "h",
    other: "e"
})
const COMPLEX = Object.freeze({
    e: "egyszerű",
    k: "könnyű",
    m: "macerás",
    n: "nehéz",
    g: "gyors",
    z: "közepesen nehéz",
})

export { COMPLEX, TABLES, TYPES }
