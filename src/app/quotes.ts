export class Quotes {
    show!:boolean;
  
    constructor(  public name:string,
        public author:string,
        public quote:string,
        public date:Date,
        public upvote:number,
        public downvote:number,){
            this.show = false;

    }


}
