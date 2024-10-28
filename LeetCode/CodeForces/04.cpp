#include <bits/stdc++.h>
using namespace std;
int main()
{
  int n;
  cin >> n;
  int a = 0;
  while (n--)
  {
    string input;
    cin>>input;
    if(input[0]=='+' || input[2]=='+') a++;
    else a--;
  }
  cout << a << endl;

  return 0;
}