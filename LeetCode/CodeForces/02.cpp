#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n; 
  while (n--)
  {
    string word; 
    cin >> word; 
    int wl = word.length();

    if (wl > 10)
    {
      cout << word[0] << wl - 2 << word[wl - 1] << endl; 
    }
    else
    {
      cout << word << endl; 
    }
  }
  return 0;
}
