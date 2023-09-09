// Decorators

// Class Decorators
function apiVersion(version:string){
    return (target:any ) => {
        Object.assign(target.prototype, {__version: version})
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version)


console.log("-------------------")

// Attribute Decorator
function minLength(length: number){
    return (target:any, key: string) => {
        let _value = target[key]

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Api2{
    @minLength(3)
    name:string

    constructor(name:string){
        this.name = name
    }
}

const api2 = new Api2("produtos")
console.log(api2.name)