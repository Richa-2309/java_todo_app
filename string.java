class Solution {
    public int sortPermutation(int[] nums) {
        int ans = -1;
        int result=0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i) {
                ans &= nums[i] & i;
            }
        }

        return ans == -1 ? 0 : ans;
    }
}
