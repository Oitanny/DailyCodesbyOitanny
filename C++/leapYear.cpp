#include <iostream>

using namespace std;

bool leapYear(int year){
    if(year%4==0 && (year%100!=0 || year%400==0) ){
        return true;
    }
    return false;
    
}

int main()
{
    int x;
    cout<<"Enter the year: ";
    cin>>x;
    cout<<leapYear(x);

    return 0;
}
