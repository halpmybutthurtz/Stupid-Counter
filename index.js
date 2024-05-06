let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-count")
let count = 0

function increment()
{
    count++;
    countEl.textContent = count;
    //console.log(count)
}

function save()
{
    if (count != 0)
    {
    saveEl.textContent += " " + count + " -";
    count = 0;
    countEl.textContent = count;
    }
}
