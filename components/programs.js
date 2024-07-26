const programs = [
    {
      id: 4,
      name: 'Program-4',
      code: String.raw`
  #include <stdio.h>
  int main() {
    int n, a[20][20], i, j, min, u, v, s[10], d[10], k;
    printf("Enter the number of vertices\n");
    scanf("%d", &n);
    printf("Enter adjacency matrix\n");
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= n; j++) {
        scanf("%d", &a[i][j]);
      }
    }
    printf("Enter source vertex\n");
    scanf("%d", &v);
    for (i = 1; i <= n; i++) {
      s[i] = 0;
      d[i] = a[v][i];
    }
    d[v] = 0;
    s[v] = 1;
    for (k = 2; k <= n; k++) {
      min = 999;
      for (i = 1; i <= n; i++) {
        if (d[i] < min && s[i] == 0) {
          min = d[i];
          u = i;
        }
      }
      s[u] = 1;
      for (i = 1; i <= n; i++) {
        if (s[i] == 0) {
          if (d[i] > d[u] + a[u][i]) {
            d[i] = d[u] + a[u][i];
          }
        }
      }
    }
    for (i = 1; i <= n; i++) {
      printf("%d---->%d=%d\n", v, i, d[i]);
    }
  }`
    },
    {
      id: 5,
      name: 'Program-5',
      code: String.raw`
  #include<stdio.h>
  void ts(int a[20][20], int n) {
    int t[10], vis[10], stack[10], i, j, indeg[10], top = 0, ele, k = 1;
    for (i = 1; i <= n; i++) {
      t[i] = 0;
      vis[i] = 0;
      indeg[i] = 0;
    }
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= n; j++) {
        if (a[i][j] == 1) {
          indeg[j] = indeg[j] + 1;
        }
      }
    }
    printf("Indegree Array:");
    for (i = 1; i <= n; i++)
      printf("%d ", indeg[i]);
    for (i = 1; i <= n; i++) {
      if (indeg[i] == 0) {
        stack[++top] = i;
        vis[i] = 1;
      }
    }
    while (top > 0) {
      ele = stack[top--];
      t[k++] = ele;
      for (j = 1; j <= n; j++) {
        if (a[ele][j] == 1 && vis[j] == 0) {
          indeg[j] = indeg[j] - 1;
          if (indeg[j] == 0) {
            stack[++top] = j;
            vis[j] = 1;
          }
        }
      }
    }
    printf("\nTopological Ordering is:");
    for (i = 1; i <= n; i++)
      printf("%d", t[i]);
  }
  int main() {
    int n, a[20][20], i, j;
    printf("Enter the number of nodes\n");
    scanf("%d", &n);
    printf("Enter Adjacency matrix\n");
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= n; j++) {
        scanf("%d", &a[i][j]);
      }
    }
    ts(a, n);
  }`
    },
    {
      id: 6,
      name: 'Program-6',
      code: String.raw`
  #include<stdio.h>
  int w[10], p[10], n;
  int max(int a, int b) {
    return a > b ? a : b;
  }
  int knap(int i, int m) {
    if (i == n) return w[i] > m ? 0 : p[i];
    if (w[i] > m) return knap(i + 1, m);
    return max(knap(i + 1, m), knap(i + 1, m - w[i]) + p[i]);
  }
  int main() {
    int m, i, max_profit;
    printf("\nEnter the no. of objects:");
    scanf("%d", &n);
    printf("\nEnter the knapsack capacity:");
    scanf("%d", &m);
    printf("\nEnter profit followed by weight:\n");
    for (i = 1; i <= n; i++)
      scanf("%d %d", &p[i], &w[i]);
    max_profit = knap(1, m);
    printf("\nMax profit = %d", max_profit);
    return 0;
  }`
    },
    {
      id: 7,
      name: 'Program-7',
      code: String.raw`
  #include <stdio.h>
  #define MAX 50
  int p[MAX], w[MAX], x[MAX];
  double maxprofit;
  int n, m, i;
  void greedyKnapsack(int n, int w[], int p[], int m) {
    double ratio[MAX];
    
    // Calculate the ratio of profit to weight for each item
    for (i = 0; i < n; i++) {
      ratio[i] = (double)p[i] / w[i];
    }
    // Sort items based on the ratio in non-increasing order
    for (i = 0; i < n - 1; i++) {
      for (int j = i + 1; j < n; j++) {
        if (ratio[i] < ratio[j]) {
          double temp = ratio[i];
          ratio[i] = ratio[j];
          ratio[j] = temp;
          
          int temp2 = w[i];
          w[i] = w[j];
          w[j] = temp2;
          
          temp2 = p[i];
          p[i] = p[j];
          p[j] = temp2;
        }
      }
    }
    int currentWeight = 0;
    maxprofit = 0.0;
    // Fill the knapsack with items
    for (i = 0; i < n; i++) {
      if (currentWeight + w[i] <= m) {
        x[i] = 1; // Item i is selected
        currentWeight += w[i];
        maxprofit += p[i];
      } else {
        // Fractional part of item i is selected
        x[i] = (m - currentWeight) / (double)w[i];
        maxprofit += x[i] * p[i];
        break;
      }
    }
    printf("Optimal solution for greedy method: %.1f\n", maxprofit);
    printf("Solution vector for greedy method: ");
    for (i = 0; i < n; i++)
      printf("%d\t", x[i]);
  }
  int main() {
    printf("Enter the number of objects: ");
    scanf("%d", &n);
    printf("Enter the objects' weights: ");
    for (i = 0; i < n; i++)
      scanf("%d", &w[i]);
    printf("Enter the objects' profits: ");
    for (i = 0; i < n; i++)
      scanf("%d", &p[i]);
    printf("Enter the maximum capacity: ");
    scanf("%d", &m);
    greedyKnapsack(n, w, p, m);
    return 0;
  }`
    },
    {
      id: 8,
      name: 'Program-8',
      code: String.raw`
  #include <stdio.h>
  #define MAX 10
  int s[MAX], x[MAX], d;
  void sumofsub(int p, int k, int r) {
    int i;
    x[k] = 1;
    if ((p + s[k]) == d) {
      for (i = 1; i <= k; i++)
        if (x[i] == 1) printf("%d ", s[i]);
      printf("\n");
    } else if (p + s[k] + s[k + 1] <= d)
      sumofsub(p + s[k], k + 1, r - s[k]);
    if ((p + r - s[k] >= d) && (p + s[k + 1] <= d)) {
      x[k] = 0;
      sumofsub(p, k + 1, r - s[k]);
    }
  }
  int main() {
    int i, n, sum = 0;
    printf("\nEnter the n value:");
    scanf("%d", &n);
    printf("\nEnter the set in increasing order:");
    for (i = 1; i <= n; i++) scanf("%d", &s[i]);
    printf("\nEnter the max subset value:");
    scanf("%d", &d);
    for (i = 1; i <= n; i++) sum = sum + s[i];
    if (sum < d || s[1] > d) printf("\nNo subset possible");
    else
    sumofsub(0, 1, sum);
    return 0;
  }`
    },
    {
      id: 9,
      name: 'Program-9',
      code: String.raw`
  #include <stdio.h>
  void towers(int, char, char, char);
  int main() {
    int num;
    printf("Enter the number of disks : ");
    scanf("%d", &num);
    printf("The sequence of moves involved in the Tower of Hanoi are :\n");
    towers(num, 'A', 'C', 'B');
    return 0;
  }
  void towers(int num, char frompeg, char topeg, char auxpeg) {
    if (num == 1) {
      printf("\n Move disk 1 from peg %c to peg %c", frompeg, topeg);
      return;
    }
    towers(num - 1, frompeg, auxpeg, topeg);
    printf("\n Move disk %d from peg %c to peg %c", num, frompeg, topeg);
    towers(num - 1, auxpeg, topeg, frompeg);
  }`
    },
    {
      id: 10,
      name: 'Program-10',
      code: String.raw`
  #include <stdio.h>
  #include <stdlib.h>
  #define MAX 100
  #define initial 1
  #define waiting 2
  #define visited 3
  int n; // Number of vertices in the graph
  int adj[MAX][MAX]; // Adjacency Matrix
  int state[MAX]; // can be initial, waiting, or visited
  void create_graph();
  void BF_Traversal();
  void BFS(int v);
  int queue[MAX], front = -1, rear = -1;
  void insert_queue(int vertex);
  int delete_queue();
  int isEmpty_queue();
  int main() {
    create_graph();
    BF_Traversal();
    return 0;
  }
  void BF_Traversal() {
    int v;
    for (v = 0; v < n; v++)
      state[v] = initial;
    printf("Enter Start Vertex for BFS: \n");
    scanf("%d", &v);
    BFS(v);
  }
  void BFS(int v) {
    int i;
    insert_queue(v);
    state[v] = waiting;
    while (!isEmpty_queue()) {
      v = delete_queue();
      printf("%d ", v);
      state[v] = visited;
      for (i = 0; i < n; i++) {
        if (adj[v][i] == 1 && state[i] == initial) {
          insert_queue(i);
          state[i] = waiting;
        }
      }
    }
    printf("\n");
  }
  void insert_queue(int vertex) {
    if (rear == MAX - 1)
      printf("Queue Overflow\n");
    else {
      if (front == - 1)
        front = 0;
      rear = rear + 1;
      queue[rear] = vertex;
    }
  }
  int isEmpty_queue() {
    if (front == -1 || front > rear)
      return 1;
    else
      return 0;
  }
  int delete_queue() {
    int delete_item;
    if (front == -1 || front > rear) {
      printf("Queue Underflow\n");
      exit(1);
    } else {
      delete_item = queue[front];
      front = front + 1;
      return delete_item;
    }
  }
  void create_graph() {
    int i, max_edges, origin, destin;
    printf("Enter number of vertices: ");
    scanf("%d", &n);
    max_edges = n * (n - 1);
    for (i = 1; i <= max_edges; i++) {
      printf("Enter edge %d( -1 -1 to quit ) : ", i);
      scanf("%d %d", &origin, &destin);
      if ((origin == -1) && (destin == -1))
        break;
      if (origin >= n || destin >= n || origin < 0 || destin < 0) {
        printf("Invalid edge!\n");
        i--;
      } else {
        adj[origin][destin] = 1;
      }
    }
  }`
    },
    {
      id: 11,
      name: 'Program-11',
      code: String.raw`
  #include <stdio.h>
  #include <stdlib.h>
  #define MAX 100
  #define initial 1
  #define visited 2
  #define finished 3
  int n; // Number of vertices in the graph
  int adj[MAX][MAX]; // Adjacency Matrix
  int state[MAX]; // can be initial, visited, finished
  void create_graph();
  void DF_Traversal();
  void DFS(int v);
  int main() {
    create_graph();
    DF_Traversal();
    return 0;
  }
  void DF_Traversal() {
    int v;
    for (v = 0; v < n; v++)
      state[v] = initial;
    printf("Enter Start Vertex for DFS: \n");
    scanf("%d", &v);
    DFS(v);
    printf("\n");
  }
  void DFS(int v) {
    int i;
    printf("%d ", v);
    state[v] = visited;
    for (i = 0; i < n; i++) {
      if (adj[v][i] == 1 && state[i] == initial)
        DFS(i);
    }
    state[v] = finished;
  }
  void create_graph() {
    int i, max_edges, origin, destin;
    printf("Enter number of vertices: ");
    scanf("%d", &n);
    max_edges = n * (n - 1);
    for (i = 1; i <= max_edges; i++) {
      printf("Enter edge %d( -1 -1 to quit ) : ", i);
      scanf("%d %d", &origin, &destin);
      if ((origin == -1) && (destin == -1))
        break;
      if (origin >= n || destin >= n || origin < 0 || destin < 0) {
        printf("Invalid edge!\n");
        i--;
      } else {
        adj[origin][destin] = 1;
      }
    }
  }`
    },
    {
      id: 12,
      name: 'Program-12',
      code: String.raw`
  #include <stdio.h>
  #include <stdlib.h>
  int board[20], count;
  void print(int n) {
    int i, j;
    printf("\n\nSolution %d:\n\n", ++count);
    for (i = 1; i <= n; i++) printf("\t%d", i);
    for (i = 1; i <= n; i++) {
      printf("\n\n%d", i);
      for (j = 1; j <= n; j++) {
        if (board[i] == j)
          printf("\tQ");
        else
          printf("\t-");
      }
    }
  }
  int place(int row, int column) {
    int i;
    for (i = 1; i <= row - 1; i++) {
      if (board[i] == column)
        return 0;
      else if (abs(board[i] - column) == abs(i - row))
        return 0;
    }
    return 1;
  }
  void queen(int row, int n) {
    int column;
    for (column = 1; column <= n; column++) {
      if (place(row, column)) {
        board[row] = column;
        if (row == n)
          print(n);
        else
          queen(row + 1, n);
      }
    }
  }
  int main() {
    int n;
    printf("Enter number of Queens:");
    scanf("%d", &n);
    queen(1, n);
  }`
    }
  ];
  
  module.exports = programs;
  