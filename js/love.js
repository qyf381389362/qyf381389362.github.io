!function(e,t,a){
    //function n()开始
    function n(){
        c("
        .heart{
            width: 10px;
            height: 10px;
            position: fixed;
            background: #f00;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
        }
        .heart:after,.heart:before{
            content: '';
            width: inherit;
            height: inherit;
            background: inherit;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            position: fixed;
        }
        .heart:after{
            top: -5px;
        }
        .heart:before{
            left: -5px;
        }"),o(),r()
    }
    //function n()结束

    //function r()开始
    function r(){
        for(var e=0;e<d.length;e++)
            d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");
        requestAnimationFrame(r)
    }
    //function r()结束

    //function o()开始
    function o(){
        var t="function"==typeof e.onclick&&e.onclick;
        e.onclick=function(e){
            t&&t(),i(e)
        }
    }
    //function o()结束

    //function i()开始，创建class为heart的div标签
    function i(e){
        var a=t.createElement("div");
        a.className="heart",
        d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),
        t.body.appendChild(a)
    }
    //function i()结束

    //function c()开始,创建样式表，将其加入到head标签里
    function c(e){
        var a=t.createElement("style");
        a.type="text/css";
        try{
            a.appendChild(t.createTextNode(e))
        }catch(t){
            a.styleSheet.cssText=e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    //function c()结束

    //function s()开始，返回一个随机的rgb值
    function s(){
        return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
    }
    //function s()结束

    var d=[];
    e.requestAnimationFrame=function(){
        return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||
        e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}
    }(),n()
}(window,document);