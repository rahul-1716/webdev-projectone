class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    shift(){
        const firstItem = this.data[0];
        for(let i = 0; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]
        this.length--;
        return firstItem;
    }
    deleteByIndex(index){
        for(let i = index ; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    get(item){
        return this.data[item];
    }
}