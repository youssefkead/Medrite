function getSelectedValue()
{
    var selectedValue = document.getElementById("select-tool").value;
    var btn = document.getElementById("selected-link")

    btn.setAttribute("href", selectedValue)
}
