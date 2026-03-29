class MyArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        if(this.length === 0) return undefined
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        return this.data[index];
    }
    shift(){
        if(this.length === 0) return undefined;
        const item = this.data[0];
        for(let i = 0; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return item;
    }
    deleteByIndex(index){
        if(index < 0 || index >= this.length) return undefined
        const item = this.data[index]
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return item;
    }
    unshift(item){
        for(let i = this.length - 1; i >= 0; i++){
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }
    insert(index, item){
        if(index < 0 || index > this.length) return undefined;
        for(let i = this.length - 1; i >= index; i++){
            this.data[i + 1] = this.data[i]
        }
        this.data[index] = item;
        this.length++;
        return this.length;
    }
    reverse(){
        let left = 0;
        let right = this.length - 1;
        while(left < right){
            const temp = this.data[left];
            this.data[left] = this.data[right];
            this.data[right] = temp;
            left++;
            right--;
        }
        return this.data
    }
    map(callback){
        const newArray = new MyArray();
        for(let i = 0; i < this.length; i++){
            newArray.push(callback(this.data[i], i, this));
        }
        return newArray;
    }

    filter(callback){
        const newArray = new MyArray();
        for(let i = 0; i < this.length; i++){
            if(callback(this.data[i], i, this)){
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    }

    reduce(callback, initialValue){
        let accumulator = initialValue;
        let startIndex = 0;

        if(accumulator === undefined){
            if(this.length === 0) return undefined;
            accumulator = this.data[0];
            startIndex = 1;
        }

        for(let i = startIndex; i < this.length; i++){
            accumulator = callback(accumulator, this.data[i], i , this);
        }
        return accumulator;
    }
}