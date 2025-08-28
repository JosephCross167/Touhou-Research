//排名补充
function rankupdate()
{
    for (let i = 1; i < document.getElementById("exceltable").rows.length; i++) 
    {
        document.getElementById("exceltable").rows[i].cells[0].innerHTML = i;
    }
}

//音乐音量
let audio = document.getElementsByTagName('audio')[0];
audio.volume = 0.5; // 设置音量为50%
audio.loop = true; // 循环播放

//添加
function addrow()
{
    let table = document.getElementById("exceltable");
    console.log(table);
    // 添加新行
    let newtable = table.insertRow(table.rows.length);
    let cell1 = newtable.insertCell(0);
    let cell2 = newtable.insertCell(1);
    let cell3 = newtable.insertCell(2);
    let cell4 = newtable.insertCell(3);
    let cell5 = newtable.insertCell(4);
    // 添加单元格内容
    cell2.innerHTML = "新角色";
    cell3.innerHTML = "出场作品";
    cell4.innerHTML = 
    `
        <label>
            <input type="radio" name="rating${table.rows.length}" value="1">1
            <input type="radio" name="rating${table.rows.length}" value="2">2
            <input type="radio" name="rating${table.rows.length}" value="3">3
            <input type="radio" name="rating${table.rows.length}" value="4">4
            <input type="radio" name="rating${table.rows.length}" value="5">5
        </label>
    `;
    cell5.innerHTML = 
    `
        <button onclick="editrow(this)">修改</button>
        <button onclick="deleterow(this)">删除</button>
    `;
    rankupdate();
}

//删除
function deleterow(r)
{
    let table = document.getElementById("exceltable");
    table.deleteRow(r.parentNode.parentNode.rowIndex);
    rankupdate();
}

//修改
function editrow(r)
{
    let row = r.parentNode.parentNode;
    // 获取当前行的单元格
    let name = row.cells[1].innerHTML;
    let work = row.cells[2].innerHTML;
    // 原地修改单元格
    row.cells[1].innerHTML = `<input id="text_input" type="text" value="${name}" placeholder="请输入角色名">`;
    row.cells[2].innerHTML = `<input id="text_input" type="text" value="${work}" placeholder="请输入作品名">`;
    row.cells[4].innerHTML = 
    `
        <button onclick="saverow(this)">确定</button>
        <button onclick="deleterow(this)">删除</button>
    `;
}
function saverow(r)
{
    let row = r.parentNode.parentNode;
    let name = row.cells[1].children[0].value;
    let work = row.cells[2].children[0].value;
    row.cells[1].innerHTML = name;
    row.cells[2].innerHTML = work;
    row.cells[4].innerHTML = 
    `
        <button onclick="editrow(this)">修改</button>
        <button onclick="deleterow(this)">删除</button>
    `;
}

//导航栏
let present_option = document.getElementById("investigation");
present_option.style.fontWeight = "bold";