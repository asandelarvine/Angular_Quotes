export class Quotes {
    show-details!:boolean;
  
    constructor(  public name:string,
        public author:string,
        public quote:string){
            this.show-details = false;

    }


}
