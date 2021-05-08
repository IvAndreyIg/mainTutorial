let res=[];


for (var i =0; i < 5; i++) {
    var j=i;
    res.push(
        function () {
            console.log(j);
        }
    )
}

res[1]()

for (var i =0; i < 5; i++) {
    var j=i;
    res.push(
        function () {
            console.log(j);
        }
    )
}