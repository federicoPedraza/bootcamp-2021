function DisplayTable()
{
    //this is an extremedly ugly code
    let i_row0 = document.getElementsByClassName('i_row0');
    let i_row1 = document.getElementsByClassName('i_row1');
    let i_row2 = document.getElementsByClassName('i_row2');

    let row0 = document.getElementById('row0');
    let row1 = document.getElementById('row1');
    let row2 = document.getElementById('row2');

    for(let i = 0; i < i_row0.length; i++)
    {
        let newCell = document.createElement('td');
        newCell.append(document.createTextNode(i_row0[i].value));
        //newCell.textContent = i_row0[i].value;
        row0.appendChild(newCell);
    }

    for(let i = 0; i < i_row1.length; i++)
    {
        let newCell = document.createElement('td');
        newCell.append(document.createTextNode(i_row1[i].value));
        //newCell.textContent = i_row0[i].value;
        row1.appendChild(newCell);
    }

    for(let i = 0; i < i_row2.length; i++)
    {
        let newCell = document.createElement('td');
        newCell.append(document.createTextNode(i_row2[i].value));
        //newCell.textContent = i_row0[i].value;
        row2.appendChild(newCell);
    }
}