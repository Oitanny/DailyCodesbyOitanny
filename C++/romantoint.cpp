#include <stdlib.h>
#include <string.h>
#include <iostream>
#include <map>


class Solution {
public:
    int romanToInt(string s) {
        map<char, int> mp= {
            {'I',1},
            {'V',5},
            {'X',10},
            {'L',50},
            {'C',100},
            {'D',500},
            {'M',1000}
        };
        
        int result=0;

        // int result=mp[s[s.length()-1]];

        if(s.length()==1){
            return mp[s[0]];
        }

        for(int i=0; i<s.length()-1; i++){
            
            if(mp[s[i]]<mp[s[i+1]]){
                result-=mp[s[i]];
            }
            else{
                result+=mp[s[i]];
            }

        }
        
        return result+mp[s[s.length()-1]];
    }   
};