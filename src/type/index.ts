// 将类型person进行暴露
export type Person = {
    id: number
    name: string
    age: number
    sex: '男' | '女'
}

export type PersonList = Person[]

