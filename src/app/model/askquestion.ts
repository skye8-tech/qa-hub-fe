export interface QuestionRequest{
    title:string
    content:string
    tag:string
}

export interface QuestionResponse{
    id:number
    title:string
    author:string
    content:string
    tag:string
}

// export abstract class BaseEntity {
//     constructor(
//       public  id?: number
//     ){}
// }

// export class QuestionResponseEntity extends BaseEntity {
//     constructor(
//         public title: string
//     ){
//         super()
//     }
// }