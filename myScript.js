
var select = document.getElementById("select-tool");
function getSelectedValue()
{
    var selectedValue = document.getElementById("select-tool").value;
    var btn = document.getElementById("selected-link")

btn.setAttribute("href", selectedValue)

    console.log(selectedValue);
}
getSelectedValue();
