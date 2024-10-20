const clone1 = {}
const clone2 = {}
const samePerson = person
Object.assign(clone1, person)
Object.assign(clone2, person)
Object.freeze(clone1)
Object.freeze(clone2)
person.age++
person.country = "FR"

