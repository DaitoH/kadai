function countage(){
    const today = new Date();
    const birth = new Date(1997, 01, 01);


    const birthYear = 1997;
    const birthMonth = 2;
    const birthDay = 1;

    let nowYear = today.getFullYear();
    let nowMonth = today.getMonth() + 1;
    let nowDay = today.getDate();
    const nowHours = today.getHours();
    const nowMinutes = today.getMinutes();
    const nowSeconds = today.getSeconds();

    if(nowMonth === 1){
        nowMonth = 13;
        nowYear -= 1;
    };

    count = (`私が誕生してから${nowYear - birthYear}年${nowMonth - birthMonth}ヶ月${nowDay - birthDay}日${nowHours}時間${nowMinutes}分${nowSeconds}秒経ちました！`);

    document.getElementById("text-button").onclick = function(){
    document.getElementById("countAge").innerHTML = count;
    };
};
setInterval("countage();",1000);

