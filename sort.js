/**
 * Created by Administrator on 2016/4/7 0007.
 */
function quickSort( arr ){
    if(arr.length<=1){
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for(var i=1;i<arr.length;i++){
        if( arr[i]<=arr[0] ){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

function arrTriangle(x){
    var arr=[];
    for(var i=1;i<=x;i=i+2){
        arr.push(i);
    }
    var arrNew = arr.slice(0);
    var arrReverse = reverseNew(arrNew);
    arr.pop();
    return( arr.concat(arrReverse ) )
}

function reverseNew(arrNew){
    var temp = 0;
    for(var i=0;i<Math.floor(arrNew.length/2);i++){
        temp = arrNew[i];
        arrNew[i] = arrNew[arrNew.length-i-1];
        arrNew[arrNew.length-i-1] = temp;
    }
    return arrNew;
}