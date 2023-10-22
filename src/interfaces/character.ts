export interface ICharecterByIdRoot {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: ICharecterByIdOrigin 
    location: ICharecterByIdLocation
    image: string
    episode: string[]
    url: string
    created: string
  }
  
  export interface ICharecterByIdOrigin {
    name: string
    url: string
  }
  
  export interface ICharecterByIdLocation {
    name: string
    url: string
  }