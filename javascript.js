function writemenu(pagename)
{
    var title = ["홈", "역사", "종류", "비교", "주문하기"];
    var page = ["index.html", "history.html", "type.html", "comparison.html", "order.html"];

    // 10.22
    var i = 0;
    while (i < 5)
    {
        if(title[i] == pagename)
            document.write("<span class=menuselected>" + title[i] + "</span>"); 
        else
            document.write("<span class=menu><a href=" + page[i] + ">" + title[i] + "</a></span>"); 
        i++;
    }
}

function writefooter()
{
    document.write("<footer>2510392 생명시스템학부 김재희</footer>");
}