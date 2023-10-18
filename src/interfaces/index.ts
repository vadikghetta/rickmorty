export interface IRoot<T> {
    info: IInfoRoot
    results: T[]
  }
  
  export interface IInfoRoot {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  