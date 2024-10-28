// i solve this problem using matrix exponentiation in my vs code
#include <iostream>
using namespace std;

void solve()
{
  int t; // Number of games
  cin >> t;

  while (t--)
  {
    int n;
    cin >> n;

    int position = 0;
    int move_distance = 1; // Sakurako's first move is -1 (move_distance = 2*i-1)
    bool is_sakurako_turn = true;

    while (true)
    {
      if (is_sakurako_turn)
      {
        position -= move_distance;
      }
      else
      {
        position += move_distance;
      }

      // Check if the position is outside the range [-n, n]
      if (position < -n || position > n)
      {
        if (is_sakurako_turn)
        {
          cout << "Kosuke" << endl; // Kosuke made the last valid move
        }
        else
        {
          cout << "Sakurako" << endl; // Sakurako made the last valid move
        }
        break;
      }

      // Update for next move
      move_distance += 2;
      is_sakurako_turn = !is_sakurako_turn; // Alternate turns
    }
  }
}

int main()
{
  solve();
  return 0;
}
