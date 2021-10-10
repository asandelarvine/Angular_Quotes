export class Quotes {
    show!:boolean;
  
    constructor(  public name:string,
        public author:string,
        public quote:string,
        public upvote:number,
        public downvote:number,){
            this.show = false;

    }


}
