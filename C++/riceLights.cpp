#include <iostream>
#include <vector>
#include <thread>
#include <chrono>
using namespace std;

class riceLights{
  vector<string> colors={"R","G","B","W","Y","P"};
  
  public:
    void slowMode(){
        int first=0;
        int second=3;

        while(true){
            std::this_thread::sleep_for(std::chrono::seconds(1));

            vector<string> colors2;
            
            for(int i=0; i<colors.size(); i++){
                if(i==first || i==second){
                    colors2.push_back(colors[i]);
                }
                else{
                    colors2.push_back("-");
                }
            }
            
            first++;
            second++;
            
            if(first==6){
                first=0;
            }
            if(second==6){
                second=0;
            }
            
            //printing
            for(int i=0; i<colors2.size(); i++){
                cout<<colors2[i]<<" ";
                
            }
            cout<<endl;
            for(int i=colors2.size()-1, j=0; i>=0, j<colors2.size(); i--, j++){
                cout<<colors2[i]<<"         "<<colors2[j]<<endl;
                
            }
            for(int i=colors2.size()-1; i>=0; i--){
                cout<<colors2[i]<<" ";
                
            }
            cout<<endl;
            cout<<endl;
           cout<<"\033[F\033[F\033[F\033[F\033[F\033[F\033[F\033[F\033[F\033[F";
            
        }
    }
    
};

int main()
{
    riceLights a;
    a.slowMode();

    return 0;
}