export class Quotes {
    show!:boolean;
  
    constructor(  public name:string,
        public author:string,
        public quote:string){
            this.show = false;

    }


}
