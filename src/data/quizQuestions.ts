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
  
  // Additional System Design Questions (46-85)
  {
    id: 46,
    question: "What is the purpose of an API Gateway?",
    options: ["Store data", "Route and manage API requests", "Compile code", "Render UI"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "API Gateway acts as a single entry point for routing, authentication, and managing API requests."
  },
  {
    id: 47,
    question: "Which database type is best for hierarchical data?",
    options: ["Relational", "Document-based (MongoDB)", "Key-value", "Graph"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Document databases like MongoDB naturally handle nested and hierarchical data structures."
  },
  {
    id: 48,
    question: "What does eventual consistency mean?",
    options: ["Data is always consistent", "Data becomes consistent after some time", "Data is never consistent", "Data consistency is guaranteed"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Eventual consistency means all replicas will converge to the same state given enough time."
  },
  {
    id: 49,
    question: "Which protocol is commonly used for microservices communication?",
    options: ["FTP", "gRPC", "SMTP", "POP3"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "gRPC is efficient for inter-service communication with binary serialization and HTTP/2."
  },
  {
    id: 50,
    question: "What is the purpose of Redis in system design?",
    options: ["Primary database", "In-memory cache and data store", "File storage", "Web server"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Redis serves as an in-memory cache and data store for fast data access."
  },
  {
    id: 51,
    question: "What is database replication?",
    options: ["Backing up data", "Copying data across multiple servers", "Deleting old data", "Encrypting data"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Replication copies data to multiple servers for redundancy and read scalability."
  },
  {
    id: 52,
    question: "Which pattern ensures only one instance of a class exists?",
    options: ["Factory", "Singleton", "Observer", "Strategy"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Singleton pattern restricts instantiation to a single instance."
  },
  {
    id: 53,
    question: "What is the purpose of Kafka?",
    options: ["Web framework", "Distributed streaming platform", "Database", "Cache"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Kafka is a distributed event streaming platform for real-time data pipelines."
  },
  {
    id: 54,
    question: "What does ACID stand for in databases?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "API, Cache, Index, Database", "Authentication, Compliance, Identity, Data"],
    correctAnswer: 0,
    category: "System Design",
    explanation: "ACID properties guarantee reliable database transactions."
  },
  {
    id: 55,
    question: "Which type of load balancer operates at Layer 7?",
    options: ["Network Load Balancer", "Application Load Balancer", "Hardware Load Balancer", "DNS Load Balancer"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Application Load Balancer operates at OSI Layer 7 (HTTP/HTTPS)."
  },
  {
    id: 56,
    question: "What is the primary benefit of using Docker?",
    options: ["Faster code compilation", "Consistent environments across deployments", "Better UI", "Free hosting"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Docker ensures consistent application environments across different systems."
  },
  {
    id: 57,
    question: "What is blue-green deployment?",
    options: ["Color coding", "Running two identical production environments", "A testing strategy", "A database pattern"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Blue-green deployment maintains two identical environments for zero-downtime releases."
  },
  {
    id: 58,
    question: "Which monitoring metric indicates system health?",
    options: ["Code lines", "Latency, throughput, error rate", "Number of files", "Color scheme"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Key health metrics include latency, throughput, and error rates."
  },
  {
    id: 59,
    question: "What is the purpose of a reverse proxy?",
    options: ["Store passwords", "Forward client requests to backend servers", "Write logs", "Generate reports"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Reverse proxy forwards requests to backend servers, providing load balancing and security."
  },
  {
    id: 60,
    question: "What is database indexing?",
    options: ["Deleting old records", "Data structure for faster queries", "Backing up data", "Encrypting data"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Indexes are data structures that improve query performance."
  },
  {
    id: 61,
    question: "Which pattern is used for real-time data updates?",
    options: ["Polling", "WebSocket/Server-Sent Events", "Batch processing", "Cron jobs"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "WebSockets and SSE enable real-time bidirectional or server-to-client communication."
  },
  {
    id: 62,
    question: "What is the purpose of rate limiting?",
    options: ["Speed up requests", "Prevent abuse and overload", "Cache data", "Encrypt traffic"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Rate limiting controls request frequency to prevent abuse and ensure stability."
  },
  {
    id: 63,
    question: "What is a distributed transaction?",
    options: ["Single database operation", "Transaction spanning multiple databases", "Fast transaction", "Cached transaction"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Distributed transactions coordinate operations across multiple databases or services."
  },
  {
    id: 64,
    question: "Which caching layer is closest to the user?",
    options: ["Database cache", "CDN", "Application cache", "Browser cache"],
    correctAnswer: 3,
    category: "System Design",
    explanation: "Browser cache is the closest caching layer to the user."
  },
  {
    id: 65,
    question: "What is service discovery?",
    options: ["Finding bugs", "Locating service instances dynamically", "Logging service", "Monitoring tool"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Service discovery dynamically locates service instances in distributed systems."
  },
  {
    id: 66,
    question: "What is idempotency in API design?",
    options: ["Fast APIs", "Same result regardless of call count", "Encrypted APIs", "Public APIs"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Idempotent operations produce the same result when called multiple times."
  },
  {
    id: 67,
    question: "Which database is best for graph relationships?",
    options: ["MySQL", "MongoDB", "Neo4j", "Redis"],
    correctAnswer: 2,
    category: "System Design",
    explanation: "Neo4j specializes in storing and querying graph data and relationships."
  },
  {
    id: 68,
    question: "What is the purpose of a message broker?",
    options: ["Email service", "Facilitate async communication between services", "Web server", "Database"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Message brokers enable asynchronous communication between distributed services."
  },
  {
    id: 69,
    question: "What is database normalization?",
    options: ["Cleaning data", "Organizing data to reduce redundancy", "Encrypting data", "Backing up data"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Normalization structures data to minimize redundancy and improve integrity."
  },
  {
    id: 70,
    question: "Which metric measures system availability?",
    options: ["Lines of code", "Uptime percentage", "Number of users", "Database size"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Availability is measured as uptime percentage (e.g., 99.9% uptime)."
  },
  {
    id: 71,
    question: "What is the purpose of Elasticsearch?",
    options: ["Relational database", "Search and analytics engine", "Cache", "Message queue"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Elasticsearch provides distributed search and analytics capabilities."
  },
  {
    id: 72,
    question: "What is containerization?",
    options: ["Storing data", "Packaging applications with dependencies", "Network security", "Data encryption"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Containerization packages applications with all dependencies for consistent deployment."
  },
  {
    id: 73,
    question: "Which pattern handles failures gracefully?",
    options: ["Singleton", "Retry and fallback patterns", "Factory", "Observer"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Retry and fallback patterns handle transient failures and provide degraded functionality."
  },
  {
    id: 74,
    question: "What is eventual consistency in NoSQL?",
    options: ["Immediate consistency", "Consistency achieved over time", "No consistency", "Strong consistency"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "NoSQL databases often use eventual consistency where data converges over time."
  },
  {
    id: 75,
    question: "What is the purpose of monitoring and alerting?",
    options: ["Write code", "Track system health and notify issues", "Deploy apps", "Test code"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Monitoring tracks metrics and alerts teams to system issues."
  },
  
  // Additional DSA Questions (76-125)
  {
    id: 76,
    question: "What is the time complexity of binary search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Binary search has O(log n) complexity by halving the search space each iteration."
  },
  {
    id: 77,
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Stack follows Last In First Out (LIFO) principle."
  },
  {
    id: 78,
    question: "What is a self-balancing tree?",
    options: ["Binary tree", "AVL or Red-Black tree", "Linked list", "Array"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "AVL and Red-Black trees automatically maintain balance for O(log n) operations."
  },
  {
    id: 79,
    question: "What is the worst-case space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Merge sort requires O(n) extra space for merging subarrays."
  },
  {
    id: 80,
    question: "Which algorithm finds the minimum spanning tree?",
    options: ["Dijkstra's", "Kruskal's or Prim's", "BFS", "DFS"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Kruskal's and Prim's algorithms find minimum spanning trees in graphs."
  },
  {
    id: 81,
    question: "What is dynamic programming?",
    options: ["Random algorithm", "Solving problems by breaking into overlapping subproblems", "Sorting technique", "Search algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "DP solves problems by storing solutions to overlapping subproblems."
  },
  {
    id: 82,
    question: "What is a trie data structure used for?",
    options: ["Sorting", "String prefix matching", "Graph traversal", "Hashing"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Trie efficiently stores and searches strings with common prefixes."
  },
  {
    id: 83,
    question: "What is the time complexity of heap insertion?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Heap insertion takes O(log n) time to maintain heap property."
  },
  {
    id: 84,
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Merge Sort maintains relative order of equal elements (stable)."
  },
  {
    id: 85,
    question: "What is a circular linked list?",
    options: ["List with no nodes", "Last node points to first node", "Sorted list", "Double linked list"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "In circular linked lists, the last node points back to the first node."
  },
  {
    id: 86,
    question: "What is topological sorting?",
    options: ["Sorting numbers", "Linear ordering of directed acyclic graph", "Tree traversal", "Hash function"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Topological sort orders vertices of a DAG such that edges go from earlier to later vertices."
  },
  {
    id: 87,
    question: "What is the amortized time complexity of array doubling?",
    options: ["O(1)", "O(1) amortized", "O(n)", "O(log n)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Dynamic array doubling has O(1) amortized cost despite occasional O(n) resize."
  },
  {
    id: 88,
    question: "Which algorithm detects strongly connected components?",
    options: ["BFS", "Kosaraju's or Tarjan's", "Binary Search", "Merge Sort"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Kosaraju's and Tarjan's algorithms find strongly connected components in directed graphs."
  },
  {
    id: 89,
    question: "What is a segment tree used for?",
    options: ["Sorting", "Range queries and updates", "Graph traversal", "Hashing"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Segment trees efficiently handle range queries and updates in O(log n)."
  },
  {
    id: 90,
    question: "What is the space complexity of BFS?",
    options: ["O(1)", "O(V) where V is vertices", "O(E) where E is edges", "O(V²)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "BFS uses O(V) space for the queue and visited tracking."
  },
  {
    id: 91,
    question: "What is a bloom filter?",
    options: ["Exact set membership", "Probabilistic set membership", "Sorting algorithm", "Tree structure"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Bloom filter is a space-efficient probabilistic data structure for set membership."
  },
  {
    id: 92,
    question: "What is the optimal substructure property?",
    options: ["Random structure", "Optimal solution contains optimal solutions to subproblems", "Tree property", "Graph property"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Optimal substructure means optimal solutions are built from optimal subproblem solutions."
  },
  {
    id: 93,
    question: "What is a union-find data structure?",
    options: ["Tree structure", "Disjoint set data structure", "Hash table", "Queue"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Union-Find manages disjoint sets with near-constant time operations."
  },
  {
    id: 94,
    question: "What is the time complexity of finding kth smallest element using quickselect?",
    options: ["O(n) average", "O(n) average", "O(n log n)", "O(n²)"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Quickselect finds the kth element in O(n) average time."
  },
  {
    id: 95,
    question: "What is memoization?",
    options: ["Memory allocation", "Caching function results", "Sorting technique", "Graph algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Memoization stores computed results to avoid redundant calculations."
  },
  {
    id: 96,
    question: "What is a skip list?",
    options: ["Array", "Probabilistic data structure for searching", "Tree", "Queue"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Skip list is a probabilistic alternative to balanced trees with multiple layers."
  },
  {
    id: 97,
    question: "What is the Floyd-Warshall algorithm used for?",
    options: ["Sorting", "All-pairs shortest paths", "Minimum spanning tree", "String matching"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Floyd-Warshall finds shortest paths between all pairs of vertices."
  },
  {
    id: 98,
    question: "What is a fenwick tree (BIT)?",
    options: ["Binary tree", "Data structure for prefix sums", "Hash table", "Graph"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Fenwick Tree (Binary Indexed Tree) efficiently handles prefix sum queries and updates."
  },
  {
    id: 99,
    question: "What is the pigeonhole principle?",
    options: ["Sorting principle", "If n items in m < n containers, one has multiple items", "Graph theory", "Tree property"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Pigeonhole principle states if n items go into m < n containers, one has >1 item."
  },
  {
    id: 100,
    question: "What is tail recursion?",
    options: ["First call", "Recursive call as last operation", "No recursion", "Multiple recursion"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Tail recursion has the recursive call as the final operation, enabling optimization."
  },
  
  // Additional ML Questions (101-150)
  {
    id: 101,
    question: "What is overfitting?",
    options: ["Model too simple", "Model too complex, memorizes training data", "Perfect model", "Fast training"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Overfitting occurs when models learn training data too well, failing to generalize."
  },
  {
    id: 102,
    question: "What is cross-validation?",
    options: ["Single split", "Technique to evaluate model on multiple data splits", "Data cleaning", "Feature engineering"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Cross-validation splits data into multiple folds to assess model performance robustly."
  },
  {
    id: 103,
    question: "What is gradient descent?",
    options: ["Classification algorithm", "Optimization algorithm to minimize loss", "Data preprocessing", "Evaluation metric"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Gradient descent iteratively adjusts parameters to minimize the loss function."
  },
  {
    id: 104,
    question: "What is regularization?",
    options: ["Speed up training", "Technique to prevent overfitting", "Data augmentation", "Model deployment"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Regularization adds penalties to model complexity to prevent overfitting."
  },
  {
    id: 105,
    question: "What is the purpose of a confusion matrix?",
    options: ["Data visualization", "Evaluate classification performance", "Train models", "Clean data"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Confusion matrix shows true/false positives/negatives for classification evaluation."
  },
  {
    id: 106,
    question: "What is ensemble learning?",
    options: ["Single model", "Combining multiple models", "Data preprocessing", "Feature selection"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Ensemble learning combines predictions from multiple models for better performance."
  },
  {
    id: 107,
    question: "What is the bias-variance tradeoff?",
    options: ["Speed vs accuracy", "Balancing model simplicity and complexity", "Training vs testing", "Data vs model"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Bias-variance tradeoff balances underfitting (high bias) and overfitting (high variance)."
  },
  {
    id: 108,
    question: "What is feature scaling?",
    options: ["Adding features", "Normalizing feature ranges", "Removing features", "Encoding features"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Feature scaling normalizes feature ranges to improve model training."
  },
  {
    id: 109,
    question: "What is a loss function?",
    options: ["Training algorithm", "Measures prediction error", "Data structure", "Optimization method"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Loss function quantifies the difference between predictions and actual values."
  },
  {
    id: 110,
    question: "What is early stopping?",
    options: ["Stop immediately", "Stop training when validation performance degrades", "Train longer", "Skip epochs"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Early stopping halts training when validation performance stops improving to prevent overfitting."
  },
  {
    id: 111,
    question: "What is dimensionality reduction?",
    options: ["Adding features", "Reducing number of features", "Data cleaning", "Model training"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Dimensionality reduction decreases feature count while preserving information (PCA, t-SNE)."
  },
  {
    id: 112,
    question: "What is the purpose of data augmentation?",
    options: ["Delete data", "Increase training data variety", "Clean data", "Reduce data"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Data augmentation creates modified training examples to improve model generalization."
  },
  {
    id: 113,
    question: "What is gradient clipping?",
    options: ["Remove gradients", "Limit gradient magnitude", "Speed up training", "Data preprocessing"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Gradient clipping prevents exploding gradients by capping gradient values."
  },
  {
    id: 114,
    question: "What is a hyperparameter?",
    options: ["Model weight", "Configuration set before training", "Loss value", "Prediction"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Hyperparameters are configuration values set before training (learning rate, batch size)."
  },
  {
    id: 115,
    question: "What is precision in classification?",
    options: ["Overall accuracy", "True positives / (True positives + False positives)", "True negatives", "F1 score"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Precision measures the accuracy of positive predictions."
  },
  {
    id: 116,
    question: "What is recall in classification?",
    options: ["Overall accuracy", "True positives / (True positives + False negatives)", "Precision", "F1 score"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Recall measures how many actual positives were correctly identified."
  },
  {
    id: 117,
    question: "What is a convolutional layer?",
    options: ["Fully connected layer", "Layer applying filters to input", "Output layer", "Input layer"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Convolutional layers apply learnable filters to extract spatial features."
  },
  {
    id: 118,
    question: "What is max pooling?",
    options: ["Adding layers", "Downsampling by taking maximum value", "Activation function", "Loss function"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Max pooling reduces spatial dimensions by selecting maximum values in regions."
  },
  {
    id: 119,
    question: "What is a recurrent neural network (RNN)?",
    options: ["Feedforward network", "Network with loops for sequential data", "Convolutional network", "Decision tree"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "RNNs process sequential data by maintaining hidden states across time steps."
  },
  {
    id: 120,
    question: "What is the purpose of an embedding layer?",
    options: ["Output predictions", "Map discrete values to continuous vectors", "Classify data", "Clean data"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Embedding layers convert discrete inputs (words, IDs) to dense vector representations."
  },
  {
    id: 121,
    question: "What is a GAN?",
    options: ["Classification model", "Generative Adversarial Network", "Regression model", "Clustering algorithm"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "GANs use generator and discriminator networks competing to generate realistic data."
  },
  {
    id: 122,
    question: "What is reinforcement learning?",
    options: ["Supervised learning", "Learning through rewards and penalties", "Unsupervised learning", "Transfer learning"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Reinforcement learning trains agents by rewarding desired behaviors and penalizing others."
  },
  {
    id: 123,
    question: "What is k-means clustering?",
    options: ["Supervised algorithm", "Unsupervised algorithm grouping by similarity", "Classification", "Regression"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "K-means clusters data into k groups by minimizing within-cluster variance."
  },
  {
    id: 124,
    question: "What is a decision tree?",
    options: ["Neural network", "Tree-like model for decisions", "Linear model", "Clustering algorithm"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Decision trees make predictions through hierarchical branching decisions."
  },
  {
    id: 125,
    question: "What is random forest?",
    options: ["Single tree", "Ensemble of decision trees", "Neural network", "Linear model"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Random forest combines multiple decision trees to improve accuracy and reduce overfitting."
  },
  
  // Additional Python Questions (126-175)
  {
    id: 126,
    question: "What is a lambda function?",
    options: ["Named function", "Anonymous inline function", "Class method", "Module"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Lambda functions are anonymous functions defined with lambda keyword."
  },
  {
    id: 127,
    question: "What is list slicing?",
    options: ["Deleting lists", "Extracting sublists using indices", "Sorting lists", "Merging lists"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Slicing extracts portions of lists using [start:stop:step] notation."
  },
  {
    id: 128,
    question: "What is the difference between append() and extend()?",
    options: ["No difference", "append adds single element, extend adds multiple", "extend is faster", "append is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "append() adds one element, extend() adds multiple elements from an iterable."
  },
  {
    id: 129,
    question: "What is a context manager?",
    options: ["Error handler", "Manages resource allocation and cleanup", "Function decorator", "Class inheritance"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Context managers (with statement) ensure proper resource management and cleanup."
  },
  {
    id: 130,
    question: "What is the purpose of __init__?",
    options: ["Delete object", "Initialize object attributes", "Class method", "Static method"],
    correctAnswer: 1,
    category: "Python",
    explanation: "__init__ is the constructor method that initializes object attributes."
  },
  {
    id: 131,
    question: "What is multiple inheritance?",
    options: ["Single parent class", "Multiple parent classes", "No inheritance", "Abstract classes"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Multiple inheritance allows a class to inherit from multiple parent classes."
  },
  {
    id: 132,
    question: "What is a static method?",
    options: ["Instance method", "Method not requiring instance or class", "Class method", "Abstract method"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Static methods don't access instance or class data, marked with @staticmethod."
  },
  {
    id: 133,
    question: "What is the difference between class and instance variables?",
    options: ["No difference", "Class variables shared, instance variables per object", "Instance is faster", "Class is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Class variables are shared across instances, instance variables are per object."
  },
  {
    id: 134,
    question: "What is map() function?",
    options: ["Create dictionary", "Apply function to iterable elements", "Sort list", "Filter list"],
    correctAnswer: 1,
    category: "Python",
    explanation: "map() applies a function to each element of an iterable."
  },
  {
    id: 135,
    question: "What is filter() function?",
    options: ["Sort data", "Select elements meeting condition", "Transform data", "Delete data"],
    correctAnswer: 1,
    category: "Python",
    explanation: "filter() returns elements from iterable where function returns True."
  },
  {
    id: 136,
    question: "What is reduce() function?",
    options: ["Remove elements", "Apply function cumulatively to reduce to single value", "Sort elements", "Filter elements"],
    correctAnswer: 1,
    category: "Python",
    explanation: "reduce() applies a function cumulatively to reduce iterable to a single value."
  },
  {
    id: 137,
    question: "What is the purpose of *args?",
    options: ["Required argument", "Variable number of positional arguments", "Keyword argument", "Default argument"],
    correctAnswer: 1,
    category: "Python",
    explanation: "*args allows functions to accept variable number of positional arguments."
  },
  {
    id: 138,
    question: "What is the purpose of **kwargs?",
    options: ["Positional arguments", "Variable number of keyword arguments", "Required arguments", "Default arguments"],
    correctAnswer: 1,
    category: "Python",
    explanation: "**kwargs allows functions to accept variable number of keyword arguments."
  },
  {
    id: 139,
    question: "What is a property decorator?",
    options: ["Class decorator", "Makes method accessible like attribute", "Function wrapper", "Error handler"],
    correctAnswer: 1,
    category: "Python",
    explanation: "@property decorator allows methods to be accessed like attributes."
  },
  {
    id: 140,
    question: "What is the difference between __str__ and __repr__?",
    options: ["No difference", "__str__ for users, __repr__ for developers", "__str__ is faster", "__repr__ is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "__str__ provides user-friendly string, __repr__ provides unambiguous representation."
  },
  {
    id: 141,
    question: "What is a metaclass?",
    options: ["Instance of class", "Class of a class", "Abstract class", "Static class"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Metaclass is a class that defines how other classes behave."
  },
  {
    id: 142,
    question: "What is duck typing?",
    options: ["Static typing", "Type determined by behavior not declaration", "Strong typing", "No typing"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Duck typing focuses on object capabilities rather than explicit types."
  },
  {
    id: 143,
    question: "What is the difference between deep and shallow copy?",
    options: ["No difference", "Deep copies nested objects, shallow doesn't", "Shallow is faster", "Deep is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Deep copy recursively copies nested objects, shallow copy doesn't."
  },
  {
    id: 144,
    question: "What is the enumerate() function?",
    options: ["Count elements", "Iterate with index and value", "Sort elements", "Filter elements"],
    correctAnswer: 1,
    category: "Python",
    explanation: "enumerate() returns index and value pairs when iterating."
  },
  {
    id: 145,
    question: "What is the zip() function?",
    options: ["Compress files", "Combine multiple iterables", "Sort data", "Filter data"],
    correctAnswer: 1,
    category: "Python",
    explanation: "zip() combines multiple iterables into tuples of corresponding elements."
  },
  {
    id: 146,
    question: "What is the difference between pop() and remove()?",
    options: ["No difference", "pop() uses index, remove() uses value", "pop() is faster", "remove() is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "pop() removes by index and returns value, remove() removes by value."
  },
  {
    id: 147,
    question: "What is the purpose of pass statement?",
    options: ["Skip iteration", "Null operation placeholder", "Return None", "Break loop"],
    correctAnswer: 1,
    category: "Python",
    explanation: "pass is a null operation used as a placeholder where syntax requires a statement."
  },
  {
    id: 148,
    question: "What is the difference between break and continue?",
    options: ["No difference", "break exits loop, continue skips iteration", "break is faster", "continue is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "break exits the loop entirely, continue skips current iteration and continues."
  },
  {
    id: 149,
    question: "What is a namespace in Python?",
    options: ["Variable type", "Mapping of names to objects", "Function scope", "Class attribute"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Namespace is a container holding names and their corresponding objects."
  },
  {
    id: 150,
    question: "What is the purpose of __name__ == '__main__'?",
    options: ["Import modules", "Execute code only when script runs directly", "Define functions", "Create classes"],
    correctAnswer: 1,
    category: "Python",
    explanation: "This idiom ensures code runs only when script is executed directly, not imported."
  },
  
  // Additional Mixed Questions (151-200)
  {
    id: 151,
    question: "What is API versioning?",
    options: ["Database version", "Managing different API versions", "Code version", "Documentation version"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "API versioning allows maintaining multiple API versions for backward compatibility."
  },
  {
    id: 152,
    question: "What is OAuth?",
    options: ["Database protocol", "Open standard for access delegation", "Programming language", "Web framework"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "OAuth is an authorization protocol allowing third-party access without sharing credentials."
  },
  {
    id: 153,
    question: "What is the Tower of Hanoi problem?",
    options: ["Sorting problem", "Classic recursive puzzle with disks and rods", "Graph problem", "Array problem"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Tower of Hanoi is a mathematical puzzle solved recursively with 2^n-1 moves."
  },
  {
    id: 154,
    question: "What is KMP algorithm?",
    options: ["Sorting algorithm", "String matching algorithm", "Graph algorithm", "Tree algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "KMP (Knuth-Morris-Pratt) efficiently finds pattern occurrences in text."
  },
  {
    id: 155,
    question: "What is neural style transfer?",
    options: ["Data transfer", "Applying artistic style to images using neural networks", "Model training", "Data preprocessing"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Neural style transfer uses CNNs to apply artistic styles to content images."
  },
  {
    id: 156,
    question: "What is the Bellman-Ford algorithm?",
    options: ["Sorting algorithm", "Shortest path algorithm handling negative weights", "MST algorithm", "String matching"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Bellman-Ford finds shortest paths and detects negative cycles."
  },
  {
    id: 157,
    question: "What is word2vec?",
    options: ["Image processing", "Word embedding technique", "Data structure", "Optimization algorithm"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Word2vec creates dense vector representations of words capturing semantic relationships."
  },
  {
    id: 158,
    question: "What is tuple unpacking?",
    options: ["Deleting tuples", "Assigning tuple elements to variables", "Sorting tuples", "Merging tuples"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Tuple unpacking assigns tuple elements to individual variables in one statement."
  },
  {
    id: 159,
    question: "What is database denormalization?",
    options: ["Removing data", "Adding redundancy for performance", "Encrypting data", "Normalizing data"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Denormalization intentionally introduces redundancy to improve query performance."
  },
  {
    id: 160,
    question: "What is Kadane's algorithm?",
    options: ["Sorting algorithm", "Maximum subarray sum algorithm", "String matching", "Graph traversal"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Kadane's algorithm finds maximum sum contiguous subarray in O(n) time."
  },
  {
    id: 161,
    question: "What is batch normalization in neural networks?",
    options: ["Data preprocessing", "Normalizing layer inputs during training", "Model evaluation", "Data augmentation"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Batch normalization normalizes activations to stabilize and speed up training."
  },
  {
    id: 162,
    question: "What is a webhook?",
    options: ["Web page", "HTTP callback for event notifications", "Database query", "Cache mechanism"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Webhooks are HTTP callbacks that notify applications of events in real-time."
  },
  {
    id: 163,
    question: "What is the Morris traversal?",
    options: ["Graph algorithm", "Tree traversal without recursion or stack", "Sorting algorithm", "String algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Morris traversal uses threading to traverse trees with O(1) space."
  },
  {
    id: 164,
    question: "What is LSTM?",
    options: ["Feedforward network", "Long Short-Term Memory RNN", "Convolutional network", "Decision tree"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "LSTM is an RNN architecture that handles long-term dependencies better than vanilla RNN."
  },
  {
    id: 165,
    question: "What is the walrus operator :=?",
    options: ["Comparison", "Assignment expression", "Logical operator", "Bitwise operator"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Walrus operator := assigns values within expressions (Python 3.8+)."
  },
  {
    id: 166,
    question: "What is eventual consistency?",
    options: ["Immediate consistency", "Data consistency achieved over time", "No consistency", "Perfect consistency"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Eventual consistency guarantees replicas converge given sufficient time."
  },
  {
    id: 167,
    question: "What is the Boyer-Moore algorithm?",
    options: ["Sorting", "Efficient string search algorithm", "Graph traversal", "Tree algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Boyer-Moore is an efficient string search algorithm using bad character and good suffix rules."
  },
  {
    id: 168,
    question: "What is adversarial training?",
    options: ["Regular training", "Training with adversarial examples for robustness", "Transfer learning", "Unsupervised learning"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Adversarial training includes perturbed examples to improve model robustness."
  },
  {
    id: 169,
    question: "What is a closure in Python?",
    options: ["Class method", "Function remembering enclosing scope", "Loop structure", "Exception handler"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Closures are functions that remember variables from their enclosing scope."
  },
  {
    id: 170,
    question: "What is horizontal vs vertical scaling?",
    options: ["No difference", "Horizontal adds machines, vertical adds resources", "Horizontal is slower", "Vertical is deprecated"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Horizontal scaling adds more machines, vertical scaling adds more power to existing machines."
  },
  {
    id: 171,
    question: "What is the A* algorithm?",
    options: ["Sorting", "Pathfinding algorithm using heuristics", "String matching", "Tree traversal"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "A* finds shortest path using heuristics to guide search efficiently."
  },
  {
    id: 172,
    question: "What is batch gradient descent?",
    options: ["Single sample", "Using entire dataset per iteration", "Random samples", "Mini-batches"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Batch gradient descent computes gradients using the entire training dataset."
  },
  {
    id: 173,
    question: "What is the difference between list and tuple?",
    options: ["No difference", "List mutable, tuple immutable", "Tuple is faster", "List is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Lists are mutable (changeable), tuples are immutable (fixed)."
  },
  {
    id: 174,
    question: "What is connection pooling?",
    options: ["Network protocol", "Reusing database connections", "Load balancing", "Cache strategy"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Connection pooling maintains reusable database connections to reduce overhead."
  },
  {
    id: 175,
    question: "What is Rabin-Karp algorithm?",
    options: ["Sorting", "String matching using hashing", "Graph algorithm", "Tree algorithm"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Rabin-Karp uses rolling hash for efficient string pattern matching."
  },
  {
    id: 176,
    question: "What is ResNet?",
    options: ["RNN architecture", "Deep CNN with skip connections", "Decision tree", "Clustering algorithm"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "ResNet uses residual connections to train very deep neural networks."
  },
  {
    id: 177,
    question: "What is the global keyword in Python?",
    options: ["Import statement", "Declares global variable access", "Function definition", "Class declaration"],
    correctAnswer: 1,
    category: "Python",
    explanation: "global keyword allows modifying global variables inside functions."
  },
  {
    id: 178,
    question: "What is database partitioning?",
    options: ["Deleting data", "Dividing database into smaller pieces", "Backing up data", "Encrypting data"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Partitioning divides large tables into smaller, manageable pieces."
  },
  {
    id: 179,
    question: "What is the traveling salesman problem?",
    options: ["Sorting problem", "NP-hard optimization problem finding shortest route", "Graph coloring", "String matching"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "TSP finds the shortest route visiting all cities exactly once."
  },
  {
    id: 180,
    question: "What is the softmax function?",
    options: ["Loss function", "Converts logits to probabilities", "Activation for hidden layers", "Optimization algorithm"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Softmax converts raw scores to probability distribution summing to 1."
  },
  {
    id: 181,
    question: "What is the difference between del and remove()?",
    options: ["No difference", "del uses index, remove() uses value", "del is faster", "remove() is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "del removes by index/slice, remove() removes first matching value."
  },
  {
    id: 182,
    question: "What is idempotency in distributed systems?",
    options: ["Fast operations", "Operations producing same result when repeated", "Parallel processing", "Data encryption"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Idempotent operations can be repeated safely without changing the result."
  },
  {
    id: 183,
    question: "What is the knapsack problem?",
    options: ["Sorting", "Optimization problem maximizing value within weight constraint", "Graph problem", "String problem"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Knapsack problem maximizes value while staying within weight capacity."
  },
  {
    id: 184,
    question: "What is attention mechanism in transformers?",
    options: ["Data preprocessing", "Mechanism to focus on relevant input parts", "Loss function", "Optimization method"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Attention allows models to focus on different input parts dynamically."
  },
  {
    id: 185,
    question: "What is the yield keyword?",
    options: ["Return value", "Creates generator function", "Exception handling", "Loop control"],
    correctAnswer: 1,
    category: "Python",
    explanation: "yield creates generators that produce values lazily on demand."
  },
  {
    id: 186,
    question: "What is database replication lag?",
    options: ["Fast replication", "Delay between primary and replica updates", "Backup time", "Query time"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Replication lag is the time delay for changes to propagate to replicas."
  },
  {
    id: 187,
    question: "What is binary lifting?",
    options: ["Sorting technique", "Technique for ancestor queries in trees", "Hash function", "Graph coloring"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Binary lifting efficiently answers ancestor queries in trees using preprocessing."
  },
  {
    id: 188,
    question: "What is knowledge distillation?",
    options: ["Data cleaning", "Transferring knowledge from large to small model", "Feature extraction", "Data augmentation"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Knowledge distillation trains smaller models to mimic larger teacher models."
  },
  {
    id: 189,
    question: "What is the difference between is and ==?",
    options: ["No difference", "is checks identity, == checks value", "is is faster", "== is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "is checks if objects are identical (same memory), == checks if values are equal."
  },
  {
    id: 190,
    question: "What is the two-phase commit protocol?",
    options: ["Single phase", "Protocol for distributed transaction consistency", "Cache protocol", "Network protocol"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Two-phase commit ensures atomic distributed transactions across multiple nodes."
  },
  {
    id: 191,
    question: "What is the edit distance?",
    options: ["String length", "Minimum operations to transform one string to another", "Hash value", "Pattern count"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Edit distance (Levenshtein) measures minimum edits to transform strings."
  },
  {
    id: 192,
    question: "What is fine-tuning in ML?",
    options: ["Training from scratch", "Adapting pre-trained model to new task", "Data preprocessing", "Model evaluation"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Fine-tuning adjusts pre-trained models for specific tasks with smaller datasets."
  },
  {
    id: 193,
    question: "What is the difference between @staticmethod and @classmethod?",
    options: ["No difference", "staticmethod has no access, classmethod gets class", "staticmethod is faster", "classmethod is deprecated"],
    correctAnswer: 1,
    category: "Python",
    explanation: "@staticmethod has no special access, @classmethod receives class as first argument."
  },
  {
    id: 194,
    question: "What is eventual consistency in distributed systems?",
    options: ["Immediate consistency", "Replicas converge eventually", "No consistency", "Strong consistency"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Eventual consistency guarantees all replicas become consistent given enough time."
  },
  {
    id: 195,
    question: "What is the longest common subsequence?",
    options: ["Sorting problem", "Longest sequence common to two sequences", "Shortest path", "String matching"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "LCS finds longest subsequence present in both sequences (not necessarily contiguous)."
  },
  {
    id: 196,
    question: "What is zero-shot learning?",
    options: ["No training", "Model recognizing unseen classes", "Quick training", "Transfer learning"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Zero-shot learning enables models to recognize classes not seen during training."
  },
  {
    id: 197,
    question: "What are Python decorators used for?",
    options: ["Data structures", "Modifying function behavior", "Exception handling", "File operations"],
    correctAnswer: 1,
    category: "Python",
    explanation: "Decorators wrap functions to modify or extend their behavior."
  },
  {
    id: 198,
    question: "What is consensus in distributed systems?",
    options: ["Single decision", "Agreement among distributed nodes", "Load balancing", "Cache strategy"],
    correctAnswer: 1,
    category: "System Design",
    explanation: "Consensus algorithms (Paxos, Raft) ensure distributed nodes agree on values."
  },
  {
    id: 199,
    question: "What is the coin change problem?",
    options: ["Sorting coins", "Minimum coins needed for amount", "Counting coins", "Coin weight"],
    correctAnswer: 1,
    category: "DSA",
    explanation: "Coin change finds minimum coins needed to make a target amount."
  },
  {
    id: 200,
    question: "What is the purpose of learning rate scheduling?",
    options: ["Constant rate", "Adjusting learning rate during training", "Data preprocessing", "Model evaluation"],
    correctAnswer: 1,
    category: "Machine Learning",
    explanation: "Learning rate scheduling adjusts rate during training for better convergence."
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
