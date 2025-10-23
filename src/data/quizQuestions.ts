export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // System Design Questions
  {
    id: 1,
    question: "Which caching strategy is best for read-heavy applications?",
    options: ["Write-through", "Write-back", "Cache-aside (Lazy Loading)", "Write-around"],
    correctAnswer: 2,
    category: "System Design",
    explanation: "Cache-aside is ideal for read-heavy workloads as data is loaded into cache only when requested."
  },
  {
    id: 2,
    question: "What does CAP theorem stand for?",
    options: ["Consistency, Availability, Partition tolerance", "Cache, API, Performance", "Concurrent, Atomic, Persistent", "Cloud, Availability, Processing"],
    correctAnswer: 0,
    category: "System Design",
    explanation: "CAP theorem states a distributed system can only guarantee 2 out of 3: Consistency, Availability, and Partition tolerance."
  },
  {
    id: 3,
    question: "Which load balancing algorithm distributes requests based on server response time?",
    options: ["Round Robin", "Least Connections", "Least Response Time", "IP Hash"],
    correctAnswer: 2,
    category: "System Design",
    explanation: "Least Response Time algorithm routes traffic to the server with the fastest response time."
  },
  {
    id: 4,
    question: "What is the primary benefit of horizontal scaling?",
    options: ["Cheaper hardware", "Better fault tolerance and redundancy", "Easier to implement", "Requires no code changes"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Horizontal scaling adds more machines, providing better fault tolerance and redundancy."
  },
  {
    id: 5,
    question: "Which database is best suited for write-heavy workloads with eventual consistency?",
    options: ["MySQL", "PostgreSQL", "Cassandra", "SQLite"],
    correctAnswer: 2,
    category: "System Design",
    explanation: "Cassandra is designed for high write throughput and eventual consistency in distributed systems."
  },

  // Data Structures & Algorithms
  {
    id: 6,
    question: "What is the time complexity of inserting an element in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Balanced BST insertion takes O(log n) time due to tree height being logarithmic."
  },
  {
    id: 7,
    question: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Merge Sort has O(n log n) worst-case complexity, while Quick Sort has O(n²)."
  },
  {
    id: 8,
    question: "What data structure is used to implement BFS?",
    options: ["Stack", "Queue", "Heap", "Hash Table"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "BFS uses a Queue to explore nodes level by level in FIFO order."
  },
  {
    id: 9,
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["BFS", "DFS", "Dijkstra's Algorithm", "Binary Search"],
    correctAnswer: 2,
    category: "DSA",
    explanation: "Dijkstra's algorithm finds shortest paths in weighted graphs with non-negative edges."
  },
  {
    id: 10,
    question: "What is the space complexity of recursive Fibonacci without memoization?",
    options: ["O(1)", "O(log n)", "O(n)", "O(2^n)"],
    correctAnswer: 2,
    category: "DSA",
    explanation: "Recursive Fibonacci uses O(n) space due to call stack depth."
  },

  // Machine Learning
  {
    id: 11,
    question: "Which activation function is most commonly used in hidden layers of deep networks?",
    options: ["Sigmoid", "ReLU", "Tanh", "Softmax"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "ReLU is preferred for hidden layers due to computational efficiency and mitigating vanishing gradient."
  },
  {
    id: 12,
    question: "What problem does dropout help to solve in neural networks?",
    options: ["Underfitting", "Overfitting", "Vanishing gradients", "Exploding gradients"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Dropout randomly disables neurons during training to prevent overfitting."
  },
  {
    id: 13,
    question: "Which optimizer adapts learning rates for each parameter individually?",
    options: ["SGD", "Adam", "Momentum", "Batch Gradient Descent"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Adam optimizer adapts learning rates per parameter using momentum and RMSprop."
  },
  {
    id: 14,
    question: "What is the purpose of batch normalization?",
    options: ["Reduce training time", "Stabilize learning and allow higher learning rates", "Prevent overfitting", "Reduce model size"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Batch normalization normalizes layer inputs, stabilizing training and enabling higher learning rates."
  },
  {
    id: 15,
    question: "Which metric is best for imbalanced classification problems?",
    options: ["Accuracy", "F1 Score", "MSE", "R² Score"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "F1 Score balances precision and recall, making it ideal for imbalanced datasets."
  },

  // Python & Programming
  {
    id: 16,
    question: "What is the time complexity of list.append() in Python?",
    options: ["O(1) amortized", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    category: "Python",
    explanation: "List append is O(1) amortized due to dynamic array resizing strategy."
  },
  {
    id: 17,
    question: "Which Python data structure is implemented as a hash table?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    correctAnswer: 2,
    category: "Python",
    explanation: "Python dictionaries are implemented using hash tables for O(1) average lookup."
  },
  {
    id: 18,
    question: "What is a decorator in Python?",
    options: ["A design pattern", "A function that modifies another function", "A class attribute", "A type of loop"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Decorators are functions that wrap and modify the behavior of other functions."
  },
  {
    id: 19,
    question: "What is the GIL in Python?",
    options: ["Graphics Interface Library", "Global Interpreter Lock", "General Input/Output Library", "Garbage Collector Interface"],
    correctAnswer: 1,
    category: "Python",
    explanation: "GIL (Global Interpreter Lock) prevents multiple threads from executing Python bytecode simultaneously."
  },
  {
    id: 20,
    question: "Which method creates a shallow copy of a list in Python?",
    options: ["list.copy()", "list[:]", "copy.copy(list)", "All of the above"],
    correctAnswer: 3,
    category: "Python",
    explanation: "All three methods create shallow copies of lists in Python."
  },

  // More System Design
  {
    id: 21,
    question: "What is the purpose of a message queue in distributed systems?",
    options: ["Store data permanently", "Decouple services and handle async communication", "Cache frequently accessed data", "Load balance traffic"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Message queues enable asynchronous communication and decouple services in distributed systems."
  },
  {
    id: 22,
    question: "Which pattern is used to prevent cascading failures in microservices?",
    options: ["Singleton", "Circuit Breaker", "Factory", "Observer"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Circuit Breaker pattern prevents cascading failures by stopping calls to failing services."
  },
  {
    id: 23,
    question: "What is database sharding?",
    options: ["Replicating data across servers", "Partitioning data across multiple databases", "Creating database backups", "Indexing database tables"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Sharding partitions data horizontally across multiple database instances."
  },
  {
    id: 24,
    question: "Which caching strategy writes data to cache and database simultaneously?",
    options: ["Cache-aside", "Write-through", "Write-back", "Write-around"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Write-through caching writes to both cache and database synchronously."
  },
  {
    id: 25,
    question: "What is the main advantage of using CDN?",
    options: ["Database optimization", "Reduced latency for static content", "Better authentication", "Improved code quality"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "CDNs cache content geographically closer to users, reducing latency."
  },

  // More DSA
  {
    id: 26,
    question: "What is the time complexity of finding an element in a hash table?",
    options: ["O(1) average", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    category: "DSA",
    explanation: "Hash tables provide O(1) average time complexity for lookups."
  },
  {
    id: 27,
    question: "Which data structure is best for implementing LRU cache?",
    options: ["Array", "Hash Map + Doubly Linked List", "Binary Tree", "Stack"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "LRU cache uses Hash Map for O(1) lookup and Doubly Linked List for O(1) updates."
  },
  {
    id: 28,
    question: "What is the maximum number of edges in a complete graph with n vertices?",
    options: ["n", "n²", "n(n-1)/2", "2n"],
    correctAnswer: 2,
    category: "DSA",
    explanation: "A complete graph has n(n-1)/2 edges as every vertex connects to every other vertex."
  },
  {
    id: 29,
    question: "Which algorithm detects cycles in a directed graph?",
    options: ["BFS", "DFS with recursion stack", "Binary Search", "Quick Sort"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "DFS with recursion stack tracking can detect cycles in directed graphs."
  },
  {
    id: 30,
    question: "What is the time complexity of Heap Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Heap Sort has O(n log n) time complexity in all cases."
  },

  // More ML
  {
    id: 31,
    question: "What is transfer learning?",
    options: ["Training from scratch", "Using pre-trained models for new tasks", "Transferring data between servers", "Converting model formats"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Transfer learning leverages pre-trained models and fine-tunes them for specific tasks."
  },
  {
    id: 32,
    question: "Which technique is used to handle class imbalance?",
    options: ["SMOTE", "PCA", "t-SNE", "K-Means"],
    correctAnswer: 0,
    category: "Machine Learning",
    explanation: "SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic samples for minority class."
  },
  {
    id: 33,
    question: "What is the purpose of attention mechanism in transformers?",
    options: ["Reduce model size", "Focus on relevant parts of input", "Speed up training", "Prevent overfitting"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Attention mechanism allows models to focus on relevant parts of input sequence."
  },
  {
    id: 34,
    question: "Which loss function is used for binary classification?",
    options: ["MSE", "Binary Cross-Entropy", "MAE", "Hinge Loss"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Binary Cross-Entropy is the standard loss function for binary classification."
  },
  {
    id: 35,
    question: "What is the vanishing gradient problem?",
    options: ["Model becomes too large", "Gradients become too small to update weights", "Training data vanishes", "Model overfits"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Vanishing gradients occur when gradients become too small, preventing effective weight updates in deep networks."
  },

  // More Python
  {
    id: 36,
    question: "What is the difference between == and 'is' in Python?",
    options: ["No difference", "== checks value, 'is' checks identity", "== is faster", "'is' is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "== compares values while 'is' checks if two references point to the same object."
  },
  {
    id: 37,
    question: "Which method is used to remove duplicates from a list efficiently?",
    options: ["Loop and check", "Convert to set and back", "sorted() function", "filter() function"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Converting to set removes duplicates in O(n) time due to hash-based lookup."
  },
  {
    id: 38,
    question: "What is a generator in Python?",
    options: ["A type of loop", "A function that yields values lazily", "A class decorator", "A module"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Generators use yield to produce values lazily, saving memory."
  },
  {
    id: 39,
    question: "Which keyword is used for exception handling in Python?",
    options: ["catch", "except", "error", "handle"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Python uses 'except' keyword for exception handling in try-except blocks."
  },
  {
    id: 40,
    question: "What is list comprehension in Python?",
    options: ["A way to compress lists", "Concise syntax to create lists", "A sorting method", "A type of loop"],
    correctAnswer: 1,
    category: "Python",
    explanation: "List comprehension provides concise syntax to create lists from iterables."
  },

  // Additional questions for variety
  {
    id: 41,
    question: "What is the primary advantage of NoSQL databases?",
    options: ["ACID compliance", "Horizontal scalability", "Complex joins", "Strong consistency"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "NoSQL databases excel at horizontal scaling across distributed systems."
  },
  {
    id: 42,
    question: "Which protocol is used for real-time bidirectional communication?",
    options: ["HTTP", "WebSocket", "FTP", "SMTP"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "WebSocket enables full-duplex communication channels over a single TCP connection."
  },
  {
    id: 43,
    question: "What is Big O notation used for?",
    options: ["Memory size", "Algorithm efficiency", "Code quality", "Bug detection"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Big O notation describes the performance and scalability of algorithms."
  },
  {
    id: 44,
    question: "Which tree traversal visits root first?",
    options: ["Inorder", "Preorder", "Postorder", "Level-order"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Preorder traversal visits root first, then left subtree, then right subtree."
  },
  {
    id: 45,
    question: "What is backpropagation?",
    options: ["Forward pass in neural networks", "Algorithm to compute gradients", "Data preprocessing", "Model deployment"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Backpropagation computes gradients of loss with respect to weights using chain rule."
  },
];

// Shuffle function
export const getShuffledQuestions = (): QuizQuestion[] => {
  const shuffled = [...quizQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
