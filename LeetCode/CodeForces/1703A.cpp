#include <bits/stdc++.h>
using namespace std;

int main()
{
  int t;
  cin >> t;
  while (t--)
  {
    string input;
    cin >> input;

    if (input.length() == 3 &&
        (input[0] == 'y' || input[0] == 'Y') &&
        (input[1] == 'e' || input[1] == 'E') &&
        (input[2] == 's' || input[2] == 'S'))
    {
      cout << "YES" << endl;
    }
    else
    {
      cout << "NO" << endl;
    }
  }
  return 0;
}
