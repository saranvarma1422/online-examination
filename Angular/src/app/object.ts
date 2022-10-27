export class Exam{
    name:string;
    addedBy:string;
}
export class Question{
    examId:number;
    question:string;
    answer:number;
    options:string[];
}