class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        vector<int> nums2;
        int win1=0;
        int win2;
        for(int i=1; i<nums.size(); i++){
            if(nums[i]!=nums[i-1]){
              x++;
              cout<<x;
            }
            
            cout<<nums[i]<<endl;
        }
        return x;
    }
};