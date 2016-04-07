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