#include <cstdlib>
#include <string> 

class Solution {
public:
    int myAtoi(string s) {
        string fin="";
        for(int i=0; i<s.length(); i++){
            if(s[i]==' '){
                continue;
            }
            else if(s[i]=='-'){
                fin+="-";
            }
            else if(isdigit(s[i])){
                fin+=s[i];
            }
        }
        if(atoi(fin)<(-1*pow(2, 31))){
            return (-1*pow(2, 31))
        }
        else if(atoi(fin)>(pow(2, 31)-1)){
            return (pow(2, 31)-1);
        }
        else if(fin==" "){
            return 0;
        }
        return atoi(fin);
    }
};