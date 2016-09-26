$(function () {
    var skill=$(".skill");
    console.log(skill)
    skill.hover(function () {
        var canvas=document.getElementsByTagName("canvas")[0];
        var cobj=canvas.getContext("2d");
        var speed=1,angle=0,x=100,y=100;
        var t;
        var num=0;
        function move(){
            angle+=speed;
            if(angle>340){
                angle=340;
                window.cancelAnimationFrame(t);
            }else{
                cobj.clearRect(0,0,200,200);
                cobj.save();
                cobj.translate(75,70);
                cobj.beginPath();
                cobj.lineWidth=10;
                cobj.strokeStyle="#666666";
                cobj.textAlign="center";
                cobj.textBaseline="hanging";
                cobj.arc(0,0,60,0,360*Math.PI/180);
                cobj.stroke();
                cobj.restore();
                cobj.save();
                cobj.translate(75,70);
                cobj.beginPath();
                cobj.lineWidth=9;
                cobj.textAlign="center";
                cobj.textBaseline="hanging";
                cobj.strokeStyle="orangered";
                cobj.arc(0,0,60,0,angle*Math.PI/180);
                cobj.stroke();
                cobj.lineWidth=1;
                cobj.strokeStyle="#fff";
                cobj.font="24px '微软雅黑'";
                var num=(angle/360*100).toFixed(2);
                cobj.strokeText(num+"%",0,0);
                cobj.restore();
                t=window.requestAnimationFrame(move)
            }
        }move();
//    第二个canvas
        var canvas1=document.getElementsByTagName("canvas")[1];
        var cobj1=canvas1.getContext("2d");
        function move1(){
            angle+=speed;
            if(angle>320){
                angle=320;
                window.cancelAnimationFrame(t);
            }else{
                cobj1.clearRect(0,0,200,200);
                cobj1.save();
                cobj1.translate(75,70);
                cobj1.beginPath();
                cobj1.lineWidth=10;
                cobj1.strokeStyle="#666666";
                cobj1.textAlign="center";
                cobj1.textBaseline="hanging";
                cobj1.arc(0,0,60,0,360*Math.PI/180);
                cobj1.stroke();
                cobj1.restore();
                cobj1.save();
                cobj1.translate(75,70);
                cobj1.beginPath();
                cobj1.lineWidth=9;
                cobj1.strokeStyle="orangered";
                cobj1.textAlign="center";
                cobj1.textBaseline="hanging";
                cobj1.arc(0,0,60,0,angle*Math.PI/180);
                cobj1.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj1.lineWidth=1;
                cobj1.strokeStyle="#fff";
                cobj1.font="24px '微软雅黑'";
                cobj1.strokeText(num+"%",0,0);
                cobj1.restore();
                t=window.requestAnimationFrame(move1)
            }
        }move1();
        //第三个
        var canvas2=document.getElementsByTagName("canvas")[2];
        var cobj2=canvas2.getContext("2d");
        function move2(){
            angle+=speed;
            if(angle>330){
                angle=330;
                window.cancelAnimationFrame(t);
            }else{
                cobj2.clearRect(0,0,200,200);
                cobj2.save();
                cobj2.translate(75,70);
                cobj2.beginPath();
                cobj2.lineWidth=10;
                cobj2.strokeStyle="#666666";
                cobj2.textAlign="center";
                cobj2.textBaseline="hanging";
                cobj2.arc(0,0,60,0,360*Math.PI/180);
                cobj2.stroke();
                cobj2.restore();
                cobj2.save();
                cobj2.translate(75,70);
                cobj2.beginPath();
                cobj2.lineWidth=9;
                cobj2.strokeStyle="orangered";
                cobj2.textAlign="center";
                cobj2.textBaseline="hanging";
                cobj2.arc(0,0,60,0,angle*Math.PI/180);
                cobj2.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj2.lineWidth=1;
                cobj2.strokeStyle="#fff";
                cobj2.font="24px '微软雅黑'";
                cobj2.strokeText(num+"%",0,0);
                cobj2.restore();
                t=window.requestAnimationFrame(move2)
            }
        }move2();
        //第四个
        var canvas3=document.getElementsByTagName("canvas")[3];
        var cobj3=canvas3.getContext("2d");
        function move3(){
            angle+=speed;
            if(angle>310){
                angle=310;
                window.cancelAnimationFrame(t);
            }else{
                cobj3.clearRect(0,0,200,200);
                cobj3.save();
                cobj3.translate(75,70);
                cobj3.beginPath();
                cobj3.lineWidth=10;
                cobj3.strokeStyle="#666666";
                cobj3.textAlign="center";
                cobj3.textBaseline="hanging";
                cobj3.arc(0,0,60,0,360*Math.PI/180);
                cobj3.stroke();
                cobj3.restore();
                //
                cobj3.save();
                cobj3.translate(75,70);
                cobj3.beginPath();
                cobj3.lineWidth=9;
                cobj3.strokeStyle="orangered";
                cobj3.textAlign="center";
                cobj3.textBaseline="hanging";
                cobj3.arc(0,0,60,0,angle*Math.PI/180);
                cobj3.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj3.lineWidth=1;
                cobj3.strokeStyle="#fff";
                cobj3.font="24px '微软雅黑'";
                cobj3.strokeText(num+"%",0,0);
                cobj3.restore();
                t=window.requestAnimationFrame(move3)
            }
        }move3();
        //第五个
        var canvas4=document.getElementsByTagName("canvas")[4];
        var cobj4=canvas4.getContext("2d");
        function move4(){
            angle+=speed;
            if(angle>350){
                angle=350;
                window.cancelAnimationFrame(t);
            }else{
                cobj4.clearRect(0,0,200,200);
                cobj4.save();
                cobj4.translate(75,70);
                cobj4.beginPath();
                cobj4.lineWidth=10;
                cobj4.strokeStyle="#666666";
                cobj4.textAlign="center";
                cobj4.textBaseline="hanging";
                cobj4.arc(0,0,60,0,360*Math.PI/180);
                cobj4.stroke();
                cobj4.restore();
                //
                cobj4.save();
                cobj4.translate(75,70);
                cobj4.beginPath();
                cobj4.lineWidth=9;
                cobj4.strokeStyle="orangered";
                cobj4.textAlign="center";
                cobj4.textBaseline="hanging";
                cobj4.arc(0,0,60,0,angle*Math.PI/180);
                cobj4.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj4.lineWidth=1;
                cobj4.strokeStyle="#fff";
                cobj4.font="24px '微软雅黑'";
                cobj4.strokeText(num+"%",0,0);
                cobj4.restore();
                t=window.requestAnimationFrame(move4)
            }
        }move4();
        //第六个
        var canvas5=document.getElementsByTagName("canvas")[5];
        var cobj5=canvas5.getContext("2d");
        function move5(){
            angle+=speed;
            if(angle>350){
                angle=350;
                window.cancelAnimationFrame(t);
            }else{
                cobj5.clearRect(0,0,200,200);
                cobj5.save();
                cobj5.translate(75,70);
                cobj5.beginPath();
                cobj5.lineWidth=10;
                cobj5.strokeStyle="#666666";
                cobj5.textAlign="center";
                cobj5.textBaseline="hanging";
                cobj5.arc(0,0,60,0,360*Math.PI/180);
                cobj5.stroke();
                cobj5.restore();
                //
                cobj5.save();
                cobj5.translate(75,70);
                cobj5.beginPath();
                cobj5.lineWidth=9;
                cobj5.strokeStyle="orangered";
                cobj5.textAlign="center";
                cobj5.textBaseline="hanging";
                cobj5.arc(0,0,60,0,angle*Math.PI/180);
                cobj5.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj5.lineWidth=1;
                cobj5.strokeStyle="#fff";
                cobj5.font="24px '微软雅黑'";
                cobj.fontSize=12;
                cobj5.strokeText(num+"%",0,0);
                cobj5.restore();
                t=window.requestAnimationFrame(move5)
            }
        }move5();
//第七个
        var canvas6=document.getElementsByTagName("canvas")[6];
        var cobj6=canvas6.getContext("2d");
        function move6(){
            angle+=speed;
            if(angle>290){
                angle=290;
                window.cancelAnimationFrame(t);
            }else{
                cobj6.clearRect(0,0,200,200);
                cobj6.save();
                cobj6.translate(75,70);
                cobj6.beginPath();
                cobj6.lineWidth=10;
                cobj6.strokeStyle="#666666";
                cobj6.textAlign="center";
                cobj6.textBaseline="hanging";
                cobj6.arc(0,0,60,0,360*Math.PI/180);
                cobj6.stroke();
                cobj6.restore();
                //
                cobj6.save();
                cobj6.translate(75,70);
                cobj6.beginPath();
                cobj6.lineWidth=9;
                cobj6.strokeStyle="orangered";
                cobj6.textAlign="center";
                cobj6.textBaseline="hanging";
                cobj6.arc(0,0,60,0,angle*Math.PI/180);
                cobj6.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj6.lineWidth=1;
                cobj6.strokeStyle="#fff";
                cobj6.font="24px '微软雅黑'";
                cobj6.strokeText(num+"%",0,0);
                cobj6.restore();
                t=window.requestAnimationFrame(move6)
            }
        }move6();
        //第八个
        var canvas7=document.getElementsByTagName("canvas")[7];
        var cobj7=canvas7.getContext("2d");
        function move7(){
            angle+=speed;
            if(angle>310){
                angle=310;
                window.cancelAnimationFrame(t);
            }else{
                cobj7.clearRect(0,0,200,200);
                cobj7.save();
                cobj7.translate(75,70);
                cobj7.beginPath();
                cobj7.lineWidth=10;
                cobj7.strokeStyle="#666666";
                cobj7.textAlign="center";
                cobj7.textBaseline="hanging";
                cobj7.arc(0,0,60,0,360*Math.PI/180);
                cobj7.stroke();
                cobj7.restore();
                //
                cobj7.save();
                cobj7.translate(75,70);
                cobj7.beginPath();
                cobj7.lineWidth=9;
                cobj7.strokeStyle="orangered";
                cobj7.textAlign="center";
                cobj7.textBaseline="hanging";
                cobj7.arc(0,0,60,0,angle*Math.PI/180);
                cobj7.stroke();
                var num=(angle/360*100).toFixed(2);
                cobj7.lineWidth=1;
                cobj7.strokeStyle="#fff";
                cobj7.font="24px '微软雅黑'";
                cobj7.strokeText(num+"%",0,0);
                cobj7.restore();
                t=window.requestAnimationFrame(move7)
            }
        }move7();
    },function () {

    })

})