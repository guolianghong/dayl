class Dialog{
    constructor(title = "警告框", content = "是否购买此商品！"){
        this.title = title;
        this.content = content;
        this.init()
    }
    init(){
        this.createWrap()
    }
    boss(){
        let mack = document.querySelectorAll('.shade')[0]
        mack.style.display='none';
    }
    //关闭窗口
    hidel(){
        this.boss()
        location.href='wocom.html';
    }
    //确定买单
    hidez(){
         this.boss()
        location.href='cols.html';
    }
    //取消订单
     hides(){
        this.boss()
        location.href='qus.html';
    }
    addEven(){
        let cols = document.querySelectorAll('.dialog-cols')[0];
        let btnl = document.querySelectorAll('.btnl')[0];
        let btnz = document.querySelectorAll('.btnz')[0];
        cols.addEventListener('click',(event)=>{
            this.hidel()
        })
        btnl.addEventListener('click',(event)=>{
            this.hidez()
        })
        btnz.addEventListener('click',(event)=>{
            this.hides()
        })
    }
    createCols(){
        let cols = document.createElement('span');
        cols.className = "dialog-cols";
        cols.innerHTML='x';
        return cols; 
    }
    createTitle (){
        let hl = document.createElement('h4');
        hl.className = "dialog-title";
        hl.innerHTML= this.title;
        return hl;
    }
    createConten(){
        let content = document.createElement('p');
        content.className = "conten-main";
        content.innerHTML = this.content;
        return content;
    }
    createButtonl(txt){
        let btnl = document.createElement('button');
         btnl.className = 'btnl';
         btnl.innerHTML = txt;
         return btnl;
    }
    createButtonz(tx){
        let btnz = document.createElement('button');
         btnz.className = 'btnz';
         btnz.innerHTML = tx;
         return btnz;
    }
    createWrap(){
        let mack = document.createElement('div');
        let divs = document.createElement("div");
        let otit = this.createTitle();
        let ocont = this.createConten();
        let btnl = this.createButtonl('确定');
        let btnz = this.createButtonz('取消');
        let cols = this.createCols();
        divs.append(otit);
        divs.append(ocont);
        divs.append(btnl);
        divs.append(btnz);
        divs.append(cols);
        mack.className = 'shade';
        divs.className = 'dialog';
        document.body.append(mack)
        mack.append(divs)
        this.addEven()
    }
}
//实例
let dialog = new Dialog()