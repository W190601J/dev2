$(document).ready(function () {
    var move = false;   //移动标志，true为可以移动
    var mouseX, mouseY, boxX, boxY;
    $("#Box").mousedown(function (evt) {
        mouseX = evt.clientX;   //这里的值是鼠标坐标
        mouseY = evt.clientY;
        boxX = parseInt($(this).css("margin-left"));    //只获取px之前的数字
        boxY = parseInt($(this).css("margin-top"));
        move = true;
    })
    $("#Box").mouseup(function (evt) {
        move = false;
    })
    $("#Box_Background").mousemove(function (evt) {
        if (!evt.buttons) { // 假如鼠标不是按下状态，那么取消移动，然后返回；因为在移动中鼠标取消按下，无法触发mouseup事件
            move = false;
            return;
        }
        var back = $("#Box_Background")[0];
        //限制盒子离开目标区域（实际上没有完全限制，会最多出去一半。因此可以更完美，只是我没写）
        if (evt.clientX < back.offsetLeft) {
            evt.clientX = back.offsetLeft
        } else if (evt.clientX > back.offsetLeft + back.clientWidth) {
            evt.clientX = back.offsetLeft + back.clientWidth;
        } else if (evt.clientY < back.offsetTop) {
            evt.clientY = back.offsetTop;
        } else if (evt.clientY > back.offsetTop + back.clientHeight) {
            evt.clientY = back.offsetTop + back.clientHeight;
        }
        // 这里是修改margin-left和margin-top的值来达到移动盒子的效果
        if (move) {
            $("#Box").css("margin-left", boxX + (evt.clientX - mouseX) + 'px');
            $("#Box").css("margin-top", boxY + (evt.clientY - mouseY) + 'px');
        }
    })
})