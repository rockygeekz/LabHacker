const adaprograms = [
    {
      id: 1,
      name: 'Program-1',
      code: String.raw`
#include <stdio.h>
#include <time.h>
int i, j, k, a, b, u, v, n, ne = 1;
int min, mincost = 0, cost[9][9], parent[9];
int find(int);
int uni(int, int);
void main() {
  printf("\n\tImplementation of Kruskal's algorithm\n");
  printf("\nEnter the no. of vertices:");
  scanf("%d", &n);
  printf("\nEnter the cost adjacency matrix:\n");
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      scanf("%d", &cost[i][j]);
      if (cost[i][j] == 0) cost[i][j] = 999;
    }
  }
  printf("The edges of Minimum Cost Spanning Tree are\n");
  clock_t start = clock();
  while (ne < n) {
    for (i = 1, min = 999; i <= n; i++) {
      for (j = 1; j <= n; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    u = find(u);
    v = find(v);
    if (uni(u, v)) {
      printf("%d edge (%d,%d) =%d\n", ne++, a, b, min);
      mincost += min;
    }
    cost[a][b] = cost[b][a] = 999;
  }
  printf("\n\tMinimum cost = %d\n", mincost);
  clock_t end = clock();
  printf("Start time is %lf\n", (double)start);
  printf("End time is %lf\n", (double)end);
  printf("Total time is %lf\n", (double)(end - start));
}
int find(int i) {
  while (parent[i]) i = parent[i];
  return i;
}
int uni(int i, int j) {
  if (i != j) {
    parent[j] = i;
    return 1;
  }
  return 0;
}
`
    },
    {
      id: 2,
      name: 'Program-2',
      code: String.raw`
#include <stdio.h>
#include <time.h>
int visited[10] = {0}, cost[10][10], min, mincost = 0;
int i, j, ne = 1, a, b, u, v;
;
int main() {
  int num;
  printf("\n\t\t\tPrim's Algorithm");
  printf("\n\nEnter the number of nodes= ");
  scanf("%d", &num);
  printf("\nEnter the adjacency matrix\n\n");
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      scanf("%d", &cost[i][j]);
      if (cost[i][j] == 0) cost[i][j] = 999;
    }
  }
  clock_t start = clock();
  visited[1] = 1;
  while (ne < num) {
    for (i = 1, min = 999; i <= num; i++)
      for (j = 1; j <= num; j++)
        if (cost[i][j] < min)
          if (visited[i] != 0) {
            min = cost[i][j];
            a = u = i;
            b = v = j;
          }
    printf("\n Edge %d:(%d - %d) cost:%d", ne++, a, b, min);
    mincost = mincost + min;
    visited[b] = 1;
    cost[a][b] = cost[b][a] = 999;
  }
  printf("\n\n\n Minimun cost=%d", mincost);
  clock_t end = clock();
  printf("\nStart time is %lf\n", (double)start);
  printf("End time is %lf\n", (double)end);
  printf("Total time is %lf\n", (double)(end - start));
  return 0;
}
`
    },
    {
      id: 3.1,
      name: 'Program-3a Floyd',
      code: String.raw`
#include <stdio.h>
int min(int, int);
void floyds(int p[10][10], int n) {
  int i, j, k;
  for (k = 1; k <= n; k++) {
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= n; j++) {
        if (i == j)
          p[i][j] = 0;
        else
          p[i][j] = min(p[i][j], p[i][k] + p[k][j]);
      }
    }
  }
}
int min(int a, int b) {
  if (a < b)
    return (a);
  else
    return (b);
}
void main() {
  int p[10][10], w, n, u, v, i, j;
  ;
  printf("\n Enter the number of vertices:");
  scanf("%d", &n);
  printf("\n Matrix of input data:\n");
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) scanf("%d", &p[i][j]);
    if (p[i][j] == 0) p[i][j] = 999;
  }
  floyds(p, n);
  printf("\n The shortest paths are:\n");
  for (i = 1; i <= n; i++)
    for (j = 1; j <= n; j++) {
      if (i != j) printf("\n <%d,%d>=%d", i, j, p[i][j]);
    }
}
`
    },
    {
      id: 3.2,
      name: 'Program-3b Warshal',
      code: String.raw`
#include<stdio.h>
 int max(int, int);
 void warshal(int p[10][10], int n) 
{
 int i, j, k;
 for (k = 1; k <= n; k++)
 for (i = 1; i <= n; i++)
 for (j = 1; j <= n; j++)
 p[i][j] = max(p[i][j], p[i][k] && p[k][j]);
 }
 int max(int a, int b) 
{
 if (a > b)
 return (a);
 else
 return (b);
 }
 void main() 
{
 int p[10][10] = { 0 }, n, e, u, v, i, j;
 printf("\n Enter the number of vertices:");
 scanf("%d", &n);
 printf("\n Enter the Matrix of input data: \n");
 for (i = 1; i <= n; i++) 
{
 for (j = 1; j <= n; j++)
 scanf("%d", &p[i][j]);
}
 warshal(p, n);
 printf("\n Transitive closure: \n");
 for (i = 1; i <= n; i++)
{
 for (j = 1; j <= n; j++)
 printf("%d\t", p[i][j]);
 printf("\n");
 }
}

`
    },
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
#include <stdlib.h>
#include <time.h>

void selectionsort(int A[], int n) {
    int i, j, min;
    for (i = 0; i < n - 1; i++) {
        min = i;
        for (j = i + 1; j < n; j++) {
            if (A[j] < A[min]) {
                min = j;
            }
        }
        if (min != i) {
            int temp = A[i];  // Corrected variable
            A[i] = A[min];
            A[min] = temp;
        }
    }
}

int main() {
    srand(time(NULL));  // Corrected function name
    int n = 30000;
    int elements[n];

    // Generate random elements
    for (int i = 0; i < n; i++) {
        elements[i] = rand() % 1000;
    }

    // Test the sorting algorithm on different sizes of the array
    for (int size = 5000; size <= n; size += 2000) {
        int arr[size];

        // Copy elements to the array to be sorted
        for (int i = 0; i < size; i++) {
            arr[i] = elements[i];
        }

        // Start the clock
        clock_t start = clock();

        // Perform selection sort
        selectionsort(arr, size);

        // Stop the clock
        clock_t stop = clock();

        // Calculate time taken
        double time_taken = ((double)(stop - start) / CLOCKS_PER_SEC);

        // Print the time taken
        printf("Time taken to sort %d elements is %f seconds\n", size, time_taken);
    }

    return 0;
}
`
    },
    {
      id: 10,
      name: 'Program-10',
      code: String.raw`
  #include <stdio.h>
#include <time.h>
#include <stdlib.h>

void quicksort(int a[], int low, int high);
int partition(int a[], int low, int high);
void swap(int* a, int* b);

void quicksort(int a[], int low, int high) {
    if (low < high) {
        int pi = partition(a, low, high);
        quicksort(a, low, pi - 1);
        quicksort(a, pi + 1, high);
    }
}

void swap(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}

int partition(int a[], int low, int high) {
    int pivot = a[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (a[j] <= pivot) {
            i++;
            swap(&a[i], &a[j]);
        }
    }
    swap(&a[i + 1], &a[high]);
    return (i + 1);
}

int main() {
    srand(time(NULL));
    int n = 100000;
    int elements[n];

    for (int i = 0; i < n; i++) {
        elements[i] = rand() % 1000;
    }

    for (int size = 5000; size <= n; size += 2000) {
        int arr[size];
        for (int i = 0; i < size; i++) {
            arr[i] = elements[i];
        }

        clock_t start = clock();
        quicksort(arr, 0, size - 1);
        clock_t end = clock();

        printf("Total time taken to sort %d elements is %lf seconds\n", size, ((double)(end - start) / CLOCKS_PER_SEC));
    }

    return 0;
}
`
    },
    {
      id: 11,
      name: 'Program-11',
      code: String.raw`
#include <stdlib.h>
#include <stdio.h>
#include <time.h>

void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    // Create temp arrays
    int L[n1], R[n2];

    // Copy data to temp arrays L[] and R[]
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        // Find the middle point
        int m = l + (r - l) / 2;

        // Recursively sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}

int main() {
    srand(time(NULL));
    int n = 100000;
    int elements[n];

    // Generate random elements
    for (int i = 0; i < n; i++)
        elements[i] = rand() % 1000;

    // Test the sorting algorithm on different sizes of the array
    for (int size = 5000; size <= n; size += 5000) {
        int arr[size];

        // Copy elements to the array to be sorted
        for (int i = 0; i < size; i++)
            arr[i] = elements[i];

        // Start the clock
        clock_t start = clock();

        // Perform merge sort
        mergeSort(arr, 0, size - 1);

        // Stop the clock
        clock_t end = clock();

        // Print the time taken
        printf("Total time taken to sort %d elements is %lf seconds\n", size, ((double)(end - start) / CLOCKS_PER_SEC));
    }

    return 0;
}
`
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
  
  module.exports = adaprograms;
  