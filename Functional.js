function add()
{
    var node = document.createElement("LI");
    var textnode = document.getElementById("asd");
    node.appendChild(textnode);
    var li="<li>"+textnode+"</li">
    document.getElementById("id1").appendChild(li);  
}