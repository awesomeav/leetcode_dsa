function maxSlidingWindow(nums: number[], k: number): number[] {
    
//nums = [1,3,-1,-3,5,3,6,7], k = 3 
// 1 st approadh i =0 to n and j=i and j<j+k-1;j++
// 2nd apporach 

// [1,3,-1,-3,5,3,6,7]
// ans
// i=0 ,j=0,  size=j-i+1;
//  1,3,-1 ,,  3,-1,-3, -1,-3,5

// queue-> [5,3] ,, current of j > last index of array {} then remove else put
// ans [3,3,5,5]
// window size reached mean we have to cal. answeer

//  ans.push(queue(arr[0])), and also check is curr i == queue of [0] casue 
// we need remove the max also , i++ j++
//[1,3,1,2,0,5]


let i=0; let j=0;
const  ans=[]
const queue=[]
while(j<nums.length){
// [3,1]
// make some cal.
// logic of adding the max number in queue and remove as well.
    // while()
       while(nums[j]>nums[queue[queue.length - 1]]&&queue.length>0 ){
        queue.pop();
       }
    queue.push(j)
    
if(j-i+1<k){
    j++
}else{
    // window reahed 
    ans.push(nums[queue[0]]);
    if(nums[queue[0]]==nums[i]){
        queue.shift();
    }
    i++;
    j++;
}

}
return ans;






};