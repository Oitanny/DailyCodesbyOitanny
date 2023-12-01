#include <bits/stdc++.h>

using namespace std;


int main(){
    //6x6 2d array/vector required
    vector<vector<int>> arr(6);

    vector<int> sums;
    int sum;
    for(int i=0; i<6;i++){
        if(i+3>6){
            break;
        }
        for(int j=0; j<6;j++){
            if(j+3>6){
                break;
            }
            else{
                //cout<<"i="<<i<<", j="<<j<<endl;
                sum=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
                sums.push_back(sum);
                //cout<<sum<<endl;
            }
        }
                   // cout<<endl;

    }
    cout<<*max_element(sums.begin(), sums.end());


}