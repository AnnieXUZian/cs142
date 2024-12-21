class TableTemplate {
    static fillIn(id,dict,columnName){
        const table=document.getElementById(id);

        const rows=table.querySelectorAll("tr");
        const header = rows[0];
        let col=-1;
        const headers=Array.from(header.children);

        headers.forEach((cell,index)=>{
            const processor=new Cs142TemplateProcessor(cell.textContent);
            cell.textContent = processor.fillIn(dict);
            if (cell.textContent===columnName){
                col=index;
            }
        });

        if (columnName && col === -1) {
            return;
        }

        for (let row of rows){
            let cells=Array.from(row.children);
            cells.forEach((cell,index)=>{
                if (col===index || col===-1){
                    const processor=new Cs142TemplateProcessor(cell.textContent);
                    cell.textContent = processor.fillIn(dict);
                }
            });
        }
        if (table.style.visibility === "hidden") {
            table.style.visibility = "visible";
        }
    }
}