"use strict";

function DatePicker(id,callback){
    this.id=id;
    this.callback=callback;
}

DatePicker.prototype.render=function (date){
    const changeMonth=(num)=>{
        const temp=new Date(date);
        temp.setMonth(date.getMonth()+num);
        this.render(temp);
    }

    const container=document.getElementById(this.id);
    container.innerHTML="";

    const title=document.createElement("span");
    title.className="title";
    title.textContent=date.getMonth() + 1 + '/' + date.getFullYear()

    const prevButton=document.createElement("button");
    prevButton.textContent="<";
    prevButton.className="button";
    prevButton.addEventListener("click",()=>{changeMonth(-1);})

    const nextButton=document.createElement("button");
    nextButton.textContent=">";
    nextButton.className="button";
    nextButton.addEventListener("click",()=>{changeMonth(1);})

    container.appendChild(prevButton);
    container.appendChild(title);
    container.appendChild(nextButton);

    const header=document.createElement("div");
    header.className="header";
    const week=["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    week.forEach((day)=>{
        const ele=document.createElement("span");
        ele.className="days";
        ele.textContent=day;
        header.appendChild(ele);
    });
    container.appendChild(header);

    const grid=document.createElement("div");
    grid.className="grid";

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDay = new Date(firstDay);
    startDay.setDate(firstDay.getDate()-firstDay.getDay());
    const endDay = new Date(lastDay);
    endDay.setDate(lastDay.getDate()+(6-lastDay.getDay()));

    let curr=new Date(startDay);
    while (curr<=endDay){
        const ele=document.createElement("span");
        ele.className="days";
        
        if (curr.getMonth()!=firstDay.getMonth()){
            ele.classList.add("dim");
        }else{
            ele.addEventListener("click",()=>{
                if (this.callback){
                    this.callback(this.id,{
                        day:curr.getDate(),
                        month:curr.getMonth(),
                        year:curr.getFullYear()
                    });
                }
            })
        }
        ele.textContent=curr.getDate();
        grid.appendChild(ele);
        curr.setDate(curr.getDate()+1)
    }
    container.appendChild(grid);

}