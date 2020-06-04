const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();


router.get("/sem3", (req, res) => {
  res.json([
    {
      _id: "5ed6619726a0e62580ac6dc8",
      subcode: "17MAT31",
      subname: "ENGINEERING MATHEMATICS-III",
      m1: "Module 1",
      m1desc:
        "Fourier Series:\n Periodic functions, Dirichlet’s condition, Fourier Series of periodic functions with period 2π and with arbitrary period 2c. Fourier series of even and odd functions. Half range Fourier Series, practical harmonic analysis-Illustrative examples from engineering field.",
      m2: "Module 2",
      m2desc:
        "Fourier Transforms:\n Infinite Fourier transforms, Fourier sine and cosine transforms. Inverse Fouriertransform.\n\nZ-transform:\n Difference equations, basic definition, z-transform-definition, Standard z-transforms,Damping rule, Shifting rule, Initial value and final value theorems (without proof) and problems,Inverse z-transform. Applications of z-transforms to solve difference equations.",
      m3: "Module 3",
      m3desc:
        "Statistical Methods:\n Review of measures of central tendency and dispersion. Correlation-KarlPearson’s coefficient of correlation-problems. Regression analysis- lines of regression (withoutproof) –problems\n\nCurve Fitting:\n Curve fitting by the method of least squares- fitting of the curves of the form,\n y = ax+ b, y = ax2\n+ bx + c and y = aebx.\n\nNumerical Methods:\n Numerical solution of algebraic and transcendental equations by Regula- FalsiMethod and Newton-Raphson method.",
      m4: "Module 4",
      m4desc:
        "Finite differences:\n Forward and backward differences, Newton’s forward and backward interpolation formulae. Divided differences- Newton’s divided difference formula. Lagrange’s interpolation formula and inverse interpolation formula (all formulae without proof)-Problems.\n\nNumerical integration:\n Simpson’s (1/3)th and (3/8)th rules, Weddle’s rule (without proof ) –Problems.",
      m5: "Module 5",
      m5desc:
        "Vector integration:\n Line integrals-definition and problems, surface and volume integrals-definition,Green’s theorem in a plane, Stokes and Gauss-divergence theorem(without proof) and problems.\n\nCalculus of Variations:\n Variation of function and Functional, variational problems. Euler’s equation, Geodesics, hanging chain, problems.",
      descname: "Prescribed Text books",
      descdata:
        "Text Books:\n1. B. S. Grewal, Higher Engineering Mathematics, Khanna publishers, 42nd edition, 2013.\n2. B.V. Ramana Higher Engineering Mathematics Tata McGraw-Hill,2006.\n\nReference Books:\n1. N. P. Bali and Manish Goyal, A text book of Engineering mathematics , Laxmi publications, latestedition.\n2. Kreyszig, Advanced Engineering Mathematics  - 9th edition, Wiley.\n3. H. K Dass and Er. Rajnish Verma ,Higher Engineering Mathematics, S. Chand, 1st ed.",
      __v: 0,
    },
    {
      _id: "5ed67c6626a0e62580ac6dca",
      subcode: "17CS32",
      subname: "ANALOG AND DIGITAL ELECTRONICS",
      m1: "Module 1",
      m1desc:
        "Field Effect Transistors:\n Junction Field Effect Transistors, MOSFETs, Differences between JFETs and MOSFETs, Biasing MOSFETs, FET Applications, CMOS Devices.\n\n Wave-Shaping Circuits:\n Integrated Circuit(IC) Multivibrators.\n\n Introduction to Operational Amplifier:\n Ideal v/s practical Opamp, Performance Parameters.\n\n Operational Amplifier Application Circits:\n Peak Detector Circuit, Comparator, Active Filters, Non-Linear Amplifier, Relaxation Oscillator, Current-ToVoltage Converter, Voltage-To-Current Converter.",
      m2: "Module 2",
      m2desc:
        "The Basic Gates:\n Review of Basic Logic gates, Positive and Negative Logic, Introduction to HDL.\n\n Combinational Logic Circuits:\n Sum-of-Products Method, Truth Table to Karnaugh Map, Pairs Quads, and Octets, Karnaugh Simplifications, Don’t-care Conditions, Product-of-sums Method, Product-of-sums simplifications, Simplification by Quine-McClusky Method, Hazards and Hazard covers, HDL Implementation Models.",
      m3: "Module 3",
      m3desc:
        "Data-Processing Circuits:\n Multiplexers, Demultiplexers, 1-of-16 Decoder, BCD to Decimal Decoders, Seven Segment Decoders, Encoders, Exclusive-OR Gates, Parity Generators and Checkers, Magnitude Comparator, Programmable Array Logic, Programmable Logic Arrays, HDL Implementation of Data Processing Circuits. Arithmetic Building Blocks,\n\n Arithmetic Logic Unit Flip- Flops:\n RS Flip-Flops, Gated Flip-Flops, Edge-triggered RS FLIP-FLOP, Edge-triggered D FLIP-FLOPs, Edge-triggered JK FLIP-FLOPs. ",
      m4: "Module 4",
      m4desc:
        "Flip- Flops:\n FLIP-FLOP Timing, JK Master-slave FLIP-FLOP, Switch Contact Bounce Circuits, Various Representation of FLIP-FLOPs, HDL Implementation of FLIP-FLOP.\n\n Registers:\n Types of Registers, Serial In - Serial Out, Serial In - Parallel out, Parallel In - Serial Out, Parallel In - Parallel Out, Universal Shift Register, Applications of Shift Registers, Register implementation in HDL.\n\n Counters:\n Asynchronous Counters, Decoding Gates, Synchronous Counters, Changing the Counter Modulus.    ",
      m5: "Module 5",
      m5desc:
        "Counters:\n Decade Counters, Presettable Counters, Counter Design as a Synthesis problem, A Digital Clock, Counter Design using HDL.\n\n D/A Conversion and A/D Conversion:\n Variable, Resistor Networks, Binary Ladders, D/A Converters, D/A Accuracy and Resolution, A/D ConverterSimultaneous Conversion, A/D Converter-Counter Method, Continuous A/D Conversion, A/D Techniques, Dual-slope A/D Conversion, A/D Accuracy and Resolution. ",
      descname: "Prescribed text books",
      descdata:
        "Text Books:\n 1. Anil K Maini, Varsha Agarwal: Electronic Devices and Circuits, Wiley, 2012.\n 2. Donald P Leach, Albert Paul Malvino & Goutam Saha: Digital Principles and Applications, 8th Edition, Tata McGraw Hill, 2015\n\n Reference Books:\n 1. Stephen Brown, Zvonko Vranesic: Fundamentals of Digital Logic Design with VHDL, 2nd Edition, Tata McGraw Hill, 2005.\n 2. R D Sudhaker Samuel: Illustrative Approach to Logic Design, Sanguine-Pearson, 2010.\n 3. M Morris Mano: Digital Logic and Computer Design, 10th Edition, Pearson, 2008.",
      __v: 0,
    },
    {
      _id: "5ed68b071aa3af4b9877ae70",
      subcode: "17CS33",
      subname: "DATA STRUCTURES AND APPLICATIONS",
      m1: "Module 1",
      m1desc:
        "Introduction:\n Data Structures, Classifications (Primitive & Non Primitive), Data structure Operations, Review of Arrays, Structures, Self-Referential Structures, and Unions. Pointers and Dynamic Memory Allocation Functions. Representation of Linear Arrays in Memory, Dynamically allocated arrays,\n\n Array Operations:\n Traversing, inserting, deleting, searching, and sorting. Multidimensional Arrays, Polynomials and Sparse Matrices.\n\n Strings:\n Basic Terminology, Storing, Operations and Pattern Matching algorithms. ",
      m2: "Module 2",
      m2desc:
        "Stacks:\n Definition, Stack Operations, Array Representation of Stacks, Stacks using Dynamic Arrays, Stack Applications: Polish notation, Infix to postfix conversion, evaluation of postfix expression,\n\n Recursion -\n Factorial, GCD, Fibonacci Sequence, Tower of Hanoi, Ackerman's function.\n\n Queues:\n Definition, Array Representation, Queue Operations, Circular Queues, Circular queues using Dynamic arrays, Dequeues, Priority Queues, A Mazing Problem. Multiple Stacks and Queues. ",
      m3: "Module 3",
      m3desc:
        "Linked Lists:\n Definition, Representation of linked lists in Memory, Memory allocation; Garbage Collection. Linked list operations: Traversing, Searching, Insertion, and Deletion. Doubly Linked lists, Circular linked lists, and header linked lists. Linked Stacks and Queues. Applications of Linked lists – Polynomials, Sparse matrix representation.",
      m4: "Module 4",
      m4desc:
        "Trees:\n Terminology, Binary Trees, Properties of Binary trees, Array and linked Representation of Binary Trees, Binary Tree Traversals - Inorder, postorder, preorder; Additional Binary tree operations. Threaded binary trees, Binary Search Trees – Definition, Insertion, Deletion, Traversal, Searching, Application of Trees-Evaluation of Expression, ",
      m5: "Module 5",
      m5desc:
        "Graphs:\n Definitions, Terminologies, Matrix and Adjacency List Representation Of Graphs, Elementary Graph operations, Traversal methods: Breadth First Search and Depth First Search.\n\n Sorting and Searching:\n Insertion Sort, Radix sort, Address Calculation Sort.\n\n Hashing:\n Hash Table organizations, Hashing Functions, Static and Dynamic Hashing.\n\n Files and Their Organization:\n Data Hierarchy, File Attributes, Text Files and Binary Files, Basic File Operations, File Organizations and Indexing",
      descname: "Pescribed text books",
      descdata:
        "Text Books:\n 1. Fundamentals of Data Structures in C - Ellis Horowitz and Sartaj Sahni, 2nd edition, Universities Press,2014\n 2. Data Structures - Seymour Lipschutz, Schaum's Outlines, Revised 1st edition, McGraw Hill, 2014\n\n Reference Books:\n 1. Data Structures: A Pseudo-code approach with C –Gilberg & Forouzan, 2nd edition, Cengage Learning,2014\n 2. Data Structures using C, , Reema Thareja, 3rd edition Oxford press, 2012\n 3. An Introduction to Data Structures with Applications- Jean-Paul Tremblay & Paul G. Sorenson, 2nd Edition, McGraw Hill, 2013\n 4. Data Structures using C - A M Tenenbaum, PHI, 1989\n 5. Data Structures and Program Design in C - Robert Kruse, 2nd edition, PHI, 1996    ",
      __v: 0,
    },
    {
      _id: "5ed74cef3fe12440e0152b4e",
      subcode: "17CS34",
      subname: "COMPUTER ORGANIZATION ",
      m1: "Module 1",
      m1desc:
        "Basic Structure of Computers:\n Basic Operational Concepts, Bus Structures, Performance – Processor Clock, Basic Performance Equation, Clock Rate, Performance Measurement.\n\n Machine Instructions and Programs:\n Memory Location and Addresses, Memory Operations, Instructions and Instruction Sequencing, Addressing Modes, Assembly Language, Basic Input and Output Operations, Stacks and Queues, Subroutines, Additional Instructions, Encoding of Machine Instructions ",
      m2: "Module 2",
      m2desc:
        "Input/Output Organization:\n Accessing I/O Devices, Interrupts – Interrupt Hardware, Enabling and Disabling Interrupts, Handling Multiple Devices, Controlling Device Requests, Exceptions, Direct Memory Access, Buses Interface Circuits, Standard I/O Interfaces – PCI Bus, SCSI Bus, USB. .",
      m3: "Module 3",
      m3desc:
        "Memory System:\n  Basic Concepts, Semiconductor RAM Memories, Read Only Memories, Speed, Size, and Cost, Cache Memories – Mapping Functions, Replacement Algorithms, Performance Considerations, Virtual Memories, Secondary Storage.     ",
      m4: "Module 4",
      m4desc:
        "Arithmetic: \n Numbers, Arithmetic Operations and Characters, Addition and Subtraction of Signed Numbers, Design of Fast Adders, Multiplication of Positive Numbers, Signed Operand Multiplication, Fast Multiplication, Integer Division, Floating-point Numbers and Operations. ",
      m5: "Module 5",
      m5desc:
        "Basic Processing Unit:\n Some Fundamental Concepts, Execution of a Complete Instruction, Multiple Bus Organization, Hard-wired Control, Micro programmed Control. \n\nPipelining, Embedded Systems and Large Computer Systems: \nBasic Concepts of pipelining, Examples of Embedded Systems, Processor chips for embedded applications, Simple Microcontroller, The structure of General-Purpose Multiprocessors. ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books: \n1. Carl Hamacher, Zvonko Vranesic, Safwat Zaky: Computer Organization, 5th Edition, Tata McGraw Hill, 2002. (Listed topics only from Chapters 1, 2, 4, 5, 6, 7, 8, 9 and12) \n\nReference Books:\n  1. William Stallings: Computer Organization & Architecture, 9th Edition, Pearson, 2015. ",
      __v: 0,
    },
    {
      _id: "5ed74d3f3fe12440e0152b4f",
      subcode: "17CS35",
      subname: "UNIX AND SHELL PROGRAMMING ",
      m1: "Module 1",
      m1desc:
        "Introduction, Brief history. Unix Components/Architecture. Features of Unix. The UNIX Environment and UNIX Structure, Posix and Single Unix specification.  The login prompt. General features of Unix commands/ command structure. Command arguments and options. Understanding of some basic commands such as echo, printf, ls, who, date, passwd, cal, Combining commands. Meaning of Internal and external commands. The type command: knowing the type of a command and locating it. The man command knowing more about Unix commands and using Unix online manual pages. The man with keyword option and whatis. The more command and using it with other commands. Knowing the user terminal, displaying its characteristics and setting characteristics. Managing the non-uniform behaviour of terminals and keyboards. The root login. Becoming the super user: su command. The /etc/passwd and /etc/shadow files. Commands to add, modify and delete users. ",
      m2: "Module 2",
      m2desc:
        "Unix files. Naming files. Basic file types/categories. Organization of files. Hidden files. Standard directories. Parent child relationship. The home directory and the HOME variable. \n\n Reaching required files- the PATH variable, manipulating the PATH, Relative and absolute pathnames.\n\n Directory commands – pwd, cd, mkdir, rmdir commands.\n The dot (.) and double dots (..) notations to represent present and parent directories and their usage in relative path names.  \n\nFile related commands – cat, mv, rm, cp, wc and od commands. File attributes and permissions and knowing them. The ls command with options.\n\n  Changing file permissions: the relative and absolute permissions changing methods. Recursively changing file permissions. Directory permissions. ",
      m3: "Module 3",
      m3desc:
        "The vi editor. Basics. The .exrc file.  Different ways of invoking and quitting vi. Different modes of vi. Input mode commands. Command mode commands. The ex mode commands. Illustrative examples Navigation commands. Repeat command. Pattern searching. The search and replace command. The set, map and abbr commands. Simple examples using these commands. \n\nThe shells interpretive cycle. Wild cards and file name generation. Removing the special meanings of wild cards. Three standard files and redirection. Connecting commands: Pipe. Splitting the output: tee. Command substitution. Basic and Extended regular expressions. The grep, egrep. Typical examples involving different regular expressions.  ",
      m4: "Module 4",
      m4desc:
        "Shell programming. Ordinary and environment variables. The .profile. Read and readonly commands. Command line arguments. exit and exit status of a command. Logical operators for conditional execution. The test command and its shortcut. The if, while, for and case control statements. The set and shift commands and handling positional parameters. The here ( << ) document and trap command. Simple shell program examples. File inodes and the inode structure. File links – hard and soft links. Filters. Head and tail commands. Cut and paste commands. The sort command and its usage with different options. The umask and default file permissions. Two special files /dev/null and /dev/tty.  ",
      m5: "Module 5",
      m5desc:
        "Meaning of a process. Mechanism of process creation. Parent and child process. The ps command with its options. Executing a command at a specified point of time: at command. Executing a command periodically: cron command and the crontab file.. Signals. The nice and nohup commands. Background processes. The bg and fg command. The kill command. The find command with illustrative example. \n\n  Structure of a perl script. Running a perl script. Variables and operators. String handling functions. Default variables - $_ and $. – representing the current line and current line number. The range operator. Chop() and chomp() functions. Lists and arrays. The @- variable. The splice operator, push(), pop(), split() and join(). File handles and handling file – using open(), close() and die () functions.. Associative arrays – keys and value functions. Overview of decision making loop control structures – the foreach. Regular expressions – simple and multiple search patterns. The match and substitute operators.  Defining and using subroutines.",
      descname: "Prescribed text books",
      descdata:
        "Text  Books: \n1. Sumitabha Das., Unix Concepts and Applications., 4th Edition., Tata McGraw Hill  \n2. Behrouz A. Forouzan, Richard F. Gilberg : UNIX and Shell Programming- Cengage Learning – India Edition.  2009.\n\n Reference Books:  \n 1. M.G. Venkatesh Murthy: UNIX & Shell Programming, Pearson Education. \n2. Richard Blum , Christine Bresnahan : Linux Command Line and Shell Scripting Bible, 2ndEdition , Wiley,2014. ",
      __v: 0,
    },
    {
      _id: "5ed751e13fe12440e0152b50",
      subcode: "17CS36",
      subname: "DISCRETE MATHEMATICAL STRUCTURES ",
      m1: "Module 1",
      m1desc:
        "Fundamentals of Logic: \n Basic Connectives and Truth Tables, Logic Equivalence – The Laws of Logic, Logical Implication – Rules of Inference.\n\n Fundamentals of Logic contd.: \nThe Use of Quantifiers, Quantifiers, Definitions and the Proofs of Theorems",
      m2: "Module 2",
      m2desc:
        "Properties of the Integers: \n Mathematical Induction, The Well Ordering Principle – Mathematical Induction, Recursive Definitions. Principles of Counting.\n\n Fundamental Principles of Counting:\n The Rules of Sum and Product, Permutations, Combinations – The Binomial Theorem, Combinations with Repetition",
      m3: "Module 3",
      m3desc:
        "Relations and Functions:\n Cartesian Products and Relations, Functions – Plain and One-to-One, Onto Functions. The Pigeon-hole Principle, Function Composition and Inverse Functions. Properties of Relations, Computer Recognition – Zero-One Matrices and Directed Graphs, Partial Orders  – Hasse Diagrams, Equivalence Relations and Partitions.",
      m4: "Module 4",
      m4desc:
        "The Principle of Inclusion and Exclusion:\n The Principle of Inclusion and Exclusion, Generalizations of the Principle, Derangements – Nothing is in its Right Place, Rook Polynomials. \n\nRecurrence Relations: \nFirst Order Linear Recurrence Relation, The Second Order Linear Homogeneous Recurrence Relation with Constant Coefficients",
      m5: "Module 5",
      m5desc:
        " Introduction to Graph Theory:\n Definitions and Examples, Sub graphs, Complements, and Graph Isomorphism, Vertex Degree, Euler Trails and Circuits .\n\n Trees:\n Definitions, Properties, and Examples, Routed Trees, Trees and Sorting, Weighted Trees and Prefix Codes ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books: \n1. Ralph P. Grimaldi: Discrete and Combinatorial Mathematics, , 5th Edition, Pearson Education. 2004. (Chapter 3.1, 3.2, 3.3, 3.4, Appendix 3, Chapter 2, Chapter 4.1, 4.2, Chapter 5.1 to 5.6, Chapter 7.1 to 7.4, Chapter 16.1, 16.2, 16.3, 16.5 to 16.9, and Chapter 14.1, 14.2, 14.3).\n\n Reference Books:  \n1. Basavaraj S Anami and Venakanna S Madalli: Discrete Mathematics – A Concept based approach, Universities Press, 2016 \n2. Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007. \n3. Jayant Ganguly: A Treatise on Discrete Mathematical Structures, Sanguine-Pearson, 2010.\n 4. D.S. Malik and M.K. Sen: Discrete Mathematical Structures: Theory and Applications, Thomson, 2004. \n5. Thomas Koshy: Discrete Mathematics with Applications, Elsevier, 2005, Reprint 2008. ",
      __v: 0,
    },
  ]);
});

router.get("/sem4", (req, res) => {
  res.json([
    {
      _id: "5ed786713fe12440e0152b51",
      subcode: "17MAT41",
      subname: "ENGINEERING MATHEMATICS-IV ",
      m1: "Module 1",
      m1desc:
        "Numerical Methods:\n Numerical solution of ordinary differential equations of first order and first degree, Taylor’s series method, modified Euler’s method. Runge - Kutta method of fourth order, Milne’s and Adams-Bashforth predictor and corrector methods (No derivations of formulae-single step computation only). ",
      m2: "Module 2",
      m2desc:
        "Numerical Methods:\n Numerical solution of second order ordinary differential equations, Runge-Kutta method and Milne’s method. (No derivations of formulae-single step computation only).\n\n  Special Functions:\n Series solution of Bessel’s differential equation leading to Jn(x)Bessel’s function of first kind. Basic properties and orthogonality. Series solution of Legendre’s differential equation leading to Pn(x)-Legendre polynomials. Rodrigue’s formula, problems     ",
      m3: "Module 3",
      m3desc:
        "Complex Variables:\n Review of a function of a complex variable, limits, continuity, differentiability. Analytic functions-Cauchy-Riemann equations in cartesian and polar forms. Properties and construction of analytic functions. Complex line integrals-Cauchy’s theorem and Cauchy’s integral formula, Residue, poles, Cauchy’s Residue theorem ( without proof) and problems.\n\n  Transformations:\n Conformal transformations-Discussion of transformations:  w = z2, w =ez, w = z + (1/z) (z ≠ 0), Bilinear transformations-problems. ",
      m4: "Module 4",
      m4desc:
        "Probability Distributions:\n Random variables (discrete and continuous), probability functions. Poisson distributions, geometric distribution, uniform distribution, exponential and normal distributions, Problems. \n\n Joint probability distribution:\n Joint Probability distribution for two variables, expectation, covariance, correlation coefficient. ",
      m5: "Module 5",
      m5desc:
        "Sampling Theory: \n Sampling, Sampling distributions, standard error, test of hypothesis for means and proportions, confidence limits for means, student’s t-distribution, Chisquare distribution as a test of goodness of fit.\n\n Stochastic process:\n Stochastic process, probability vector, stochastic matrices, fixed points, regular stochastic matrices, Markov chains, higher transition probability",
      descname: "Prescribed text books",
      descdata:
        "Text  Books:\n 1. B.V.Ramana Higher Engineering Mathematics Tata McGraw-Hill, 2006. \n2. B. S. Grewal,” Higher Engineering Mathematics”, Khanna publishers, 42nd edition, 2013. \n\n Reference Books:\n 1. N P  Bali  and Manish Goyal, A text book of  Engineering mathematics , Laxmi publications, latest edition. \n 2. Kreyszig,  Advanced Engineering Mathematics   -   9th edition,   Wiley, 2013.\n 3. H. K Dass and Er. RajnishVerma, Higher Engineering Mathematics,   S. Chand, 1st ed, 2011.  ",
      __v: 0,
    },
    {
      _id: "5ed786c33fe12440e0152b52",
      subcode: "17CS42",
      subname: "OBJECT ORIENTED CONCEPTS ",
      m1: "Module 1",
      m1desc:
        "Introduction to Object Oriented Concepts:\n A Review of structures, Procedure–Oriented Programming system, Object Oriented  Programming System, Comparison of Object Oriented Language with C, Console I/O, variables and reference variables, Function Prototyping, Function Overloading. \n\nClass and Objects:\n Introduction, member functions and data, objects and functions, objects and arrays, Namespaces, Nested classes, Constructors, Destructors.  ",
      m2: "Module 2",
      m2desc:
        "Introduction to Java: \nJava’s magic: the Byte code; Java Development Kit (JDK); the Java Buzzwords, Object-oriented programming; Simple Java programs. Data types, variables and arrays, Operators, Control Statements. ",
      m3: "Module 3",
      m3desc:
        "Classes, Inheritance, Exceptions, Packages and Interfaces: \nClasses: Classes fundamentals; Declaring objects; Constructors, this keyword, garbage collection. \n\n Inheritance: \n inheritance basics, using super, creating multi level hierarchy, method overriding.\n\n Exception handling: \n Exception handling in Java. Packages, Access Protection, Importing Packages, Interfaces. ",
      m4: "Module 4",
      m4desc:
        "Multi Threaded Programming, Event Handling: \n Multi Threaded Programming: What are threads? How to make the classes threadable ; Extending threads; Implementing runnable; Synchronization; Changing state of the thread; Bounded buffer problems, readwrite problem, producer consumer problems. \n\n Event Handling: \n Two event handling mechanisms; The delegation event model; Event classes; Sources of events; Event listener interfaces; Using the delegation event model; Adapter classes; Inner classes. ",
      m5: "Module 5",
      m5desc:
        "The Applet Class:  \n Introduction, Two types of Applets; Applet basics; Applet Architecture; An Applet skeleton; Simple Applet display methods; Requesting repainting; Using the Status Window; The HTML APPLET tag; Passing parameters to Applets; getDocumentbase() and getCodebase(); ApletContext and showDocument(); The AudioClip Interface; The AppletStub Interface;Output to the Console.\n\n  Swings:\n Swings: The origins of Swing; Two key Swing features; Components and Containers; The Swing Packages; A simple Swing  Application; Create a Swing Applet; Jlabel and ImageIcon; JTextField;The Swing Buttons; JTabbedpane; JScrollPane; JList; JComboBox; JTable. ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books:\n 1. Sourav Sahay, Object Oriented Programming with C++ , 2nd Ed, Oxford University Press,2006 (Chapters 1, 2, 4)\n 2. Herbert Schildt, Java The Complete Reference, 7th Edition, Tata McGraw Hill, 2007. (Chapters 1, 2, 3, 4, 5, 6, 8, 9,10, 11, 21, 22, 29, 30) \n\n Reference Book:\n 1. Mahesh Bhave and Sunil Patekar, 'Programming with Java', First Edition, Pearson Education,2008, ISBN:9788131720806\n 2. Herbert  Schildt,  The  Complete  Reference  C++,  4th    Edition,  Tata McGraw Hill, 2003.\n 3. Stanley B.Lippmann, Josee Lajore, C++ Primer, 4th  Edition, Pearson Education, 2005. \n 4. Rajkumar Buyya,S Thamarasi selvi, xingchen chu, Object oriented Programming with java,        Tata McGraw Hill education private limited.\n  5. Richard A Johnson, Introduction to Java Programming and OOAD, CENGAGE Learning.\n  6. E Balagurusamy, Programming with Java A primer, Tata McGraw Hill companies",
      __v: 0,
    },
    {
      _id: "5ed786d23fe12440e0152b53",
      subcode: "17CS43",
      subname: "DESIGN AND ANALYSIS OF ALGORITHMS ",
      m1: "Module 1",
      m1desc:
        "Introduction: \n What is an Algorithm? (T2:1.1), Algorithm Specification (T2:1.2), Analysis Framework (T1:2.1),\n\n Performance Analysis:\n Space complexity, Time complexity (T2:1.3). \n\n Asymptotic Notations: \n Big-Oh notation (O), Omega notation (Ω ), Theta notation ( Θ ), and Little-oh notation (o), Mathematical analysis of Non-Recursive and recursive Algorithms with Examples (T1:2.2, 2.3, 2.4). \n\nImportant Problem Types:\n Sorting, Searching, String processing, Graph Problems, Combinatorial Problems.\n\n Fundamental Data Structures: \nStacks, Queues, Graphs, Trees, Sets and Dictionaries. (T1:1.3,1.4) ",
      m2: "Module 2",
      m2desc:
        "Divide and Conquer: \nGeneral method, Binary search, Recurrence equation for divide and conquer, Finding the maximum and minimum (T2:3.1, 3.3, 3.4), Merge sort, Quick sort (T1:4.1, 4.2), Strassen’s matrix multiplication (T2:3.8), Advantages and Disadvantages of divide and conquer. \n\n Decrease and Conquer Approach:\n Topological Sort. (T1:5.3) ",
      m3: "Module 3",
      m3desc:
        "Greedy Method:\n General method, Coin Change Problem, Knapsack Problem, Job sequencing with deadlines (T2:4.1, 4.3, 4.5).\n\n Minimum cost spanning trees: \nPrim’s Algorithm, Kruskal’s Algorithm (T1:9.1, 9.2). \n\nSingle source shortest paths:\n Dijkstra's Algorithm (T1:9.3). \n\n Optimal Tree problem:\n Huffman Trees and Codes (T1:9.4). \n\n Transform and Conquer Approach: \n Heaps and Heap Sort (T1:6.4). ",
      m4: "Module 4",
      m4desc:
        "Dynamic Programming: \n General method with Examples, Multistage Graphs (T2:5.1, 5.2). \n\n Transitive Closure:  \n Warshall’s Algorithm,\n\n  All Pairs Shortest Paths:\n Floyd's Algorithm, Optimal Binary Search Trees, Knapsack problem ((T1:8.2, 8.3, 8.4), Bellman-Ford Algorithm (T2:5.4), Travelling Sales Person problem (T2:5.9), Reliability design (T2:5.8). ",
      m5: "Module 5",
      m5desc:
        "Backtracking: \n General method (T2:7.1), N-Queens problem (T1:12.1), Sum of subsets problem (T1:12.1), Graph coloring (T2:7.4), Hamiltonian cycles (T2:7.5). \n\n Branch and Bound: \nAssignment Problem, Travelling Sales Person problem (T1:12.2), \n\n 0/1 Knapsack problem (T2:8.2, T1:12.2): \n LC Branch and Bound solution (T2:8.2), FIFO Branch and Bound solution (T2:8.2). \n\n NP-Complete and NP-Hard problems: \nBasic concepts, non-deterministic algorithms, P, NP, NP-Complete, and NP-Hard classes (T2:11.1).     ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books: \nT1. Introduction to the Design and Analysis of Algorithms, Anany Levitin:, 2rd Edition, 2009. Pearson. \n T2. Computer Algorithms/C++, Ellis Horowitz, Satraj Sahni and Rajasekaran, 2nd Edition, 2014, Universities Press  \n\nReference Books:\n 1. Introduction to Algorithms, Thomas H. Cormen, Charles E. Leiserson, Ronal L. Rivest, Clifford Stein, 3rd Edition, PHI \n 2. Design and Analysis of Algorithms , S. Sridhar, Oxford (Higher Education) ",
      __v: 0,
    },
    {
      _id: "5ed78a5b1177e61034f1db23",
      subcode: "17CS44",
      subname: "MICRO-PROCESSORS AND  MICRO- CONTROLLERS ",
      m1: "Module 1",
      m1desc:
        "The x86 microprocessor:\n Brief history of the x86 family, Inside the 8088/86, Introduction to assembly programming, Introduction to Program Segments, The Stack, Flag register, x86 Addressing Modes. \n\nAssembly language programming:\n Directives & a Sample Program, Assemble, Link & Run a program, More Sample programs, Control Transfer Instructions, Data Types and Data Definition, Full Segment Definition, Flowcharts and Pseudo code. ",
      m2: "Module 2",
      m2desc:
        "x86: \n Instructions sets description, \n\n Arithmetic and logic instructions and programs: \n Unsigned Addition and Subtraction, Unsigned Multiplication and Division, Logic Instructions, BCD and ASCII conversion, Rotate Instructions.\n\n  INT 21H  and INT 10H Programming : \n Bios INT 10H Programming , DOS Interrupt 21H.  8088/86 Interrupts, x86 PC and Interrupt Assignment",
      m3: "Module 3",
      m3desc:
        "Signed Numbers and Strings: \n Signed number Arithmetic Operations, String operations. \n\n Memory and Memory interfacing:\n Memory address decoding, data integrity in RAM and ROM, 16-bit memory interfacing. \n\n 8255 I/O programming:\n I/O addresses MAP of x86 PC’s, programming and interfacing the 8255.   ",
      m4: "Module 4",
      m4desc:
        "Microprocessors versus Microcontrollers, ARM Embedded Systems :\nThe RISC design philosophy, The ARM Design Philosophy, Embedded System Hardware, Embedded System Software, \n\n ARM Processor Fundamentals : \n Registers , Current Program Status Register , Pipeline, Exceptions, Interrupts, and the Vector Table , Core Extensions ",
      m5: "Module 5",
      m5desc:
        "Introduction to the ARM Instruction Set : \n Data Processing Instructions , Branch Instructions, Software Interrupt Instructions, Program Status Register Instructions, Coprocessor Instructions, Loading Constants, Simple programming exercises. ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books:\n 1. Muhammad Ali Mazidi, Janice Gillispie Mazidi, Danny Causey, The x86 PC Assembly Language Design and Interfacing, 5th Edition, Pearson, 2013. \n   2. ARM system developers guide, Andrew N Sloss, Dominic Symes and Chris Wright, Elsevier,Morgan Kaufman publishers, 2008.\n\n Reference Books:\n 1. Douglas V. Hall: Microprocessors and Interfacing, Revised 2nd Edition, TMH, 2006. \n 2. K. Udaya Kumar & B.S. Umashankar : Advanced Microprocessors & IBM-PC Assembly Language Programming, TMH 2003. \n 3. Ayala : The 8086 Microprocessor: programming and interfacing - 1st edition, Cengage Learning \n 4. The Definitive Guide to the ARM Cortex-M3, by Joseph Yiu, 2nd Edition , Newnes, 2009 \n 5. The Insider’s Guide to the ARM7 based microcontrollers, Hitex Ltd.,1st edition,  2005 \n  6. ARM System-on-Chip Architecture, Steve Furber, Second Edition, Pearson, 2015 \n 7. Architecture, Programming and Interfacing of Low power Processors- ARM7, Cortex-M and MSP430,  Lyla B Das  Cengage Learning, 1st  Edition",
      __v: 0,
    },
    {
      _id: "5ed78fdc1177e61034f1db24",
      subcode: "17CS45",
      subname: "SOFTWARE ENGINEERING ",
      m1: "Module 1",
      m1desc:
        "Introduction: \n Software Crisis, Need for Software Engineering. Professional Software Development, Software Engineering Ethics. Case Studies.  \n\n Software Processes: \n Models: Waterfall Model (Sec 2.1.1), Incremental Model (Sec 2.1.2) and Spiral Model (Sec 2.1.3). Process activities. \n\n Requirements Engineering:  \n Requirements Engineering Processes (Chap 4). Requirements Elicitation and Analysis (Sec 4.5). Functional and non-functional requirements (Sec 4.1). The software Requirements Document (Sec 4.2). Requirements Specification (Sec 4.3). Requirements validation (Sec 4.6). Requirements Management (Sec 4.7).      ",
      m2: "Module 2",
      m2desc:
        "System Models:\n  Context models (Sec 5.1). Interaction models (Sec 5.2). Structural models (Sec 5.3). Behavioral models (Sec 5.4). Model-driven engineering (Sec 5.5).  \n\n Design and Implementation: \n Introduction to RUP (Sec 2.4), Design Principles (Chap 17). Object-oriented design using the UML (Sec 7.1). Design patterns (Sec 7.2). Implementation issues (Sec 7.3). Open source development (Sec 7.4). ",
      m3: "Module 3",
      m3desc:
        "Software Testing: \n Development testing (Sec 8.1), Test-driven development (Sec 8.2), Release testing (Sec 8.3), User testing (Sec 8.4). Test Automation (Page no 42, 70,212, 231,444,695).  \n\n Software Evolution:\n Evolution processes (Sec 9.1). Program evolution dynamics (Sec 9.2). Software maintenance (Sec 9.3). Legacy system management (Sec 9.4). ",
      m4: "Module 4",
      m4desc:
        "Project Planning: \n Software pricing (Sec 23.1). Plan-driven development (Sec 23.2). Project scheduling (Sec 23.3): Estimation techniques (Sec 23.5). Quality management: Software quality (Sec 24.1). Reviews and inspections (Sec 24.3). Software measurement and metrics (Sec 24.4). Software standards (Sec 24.2)      ",
      m5: "Module 5",
      m5desc:
        "Agile Software Development:\n Coping with Change (Sec 2.3), The Agile Manifesto: Values and Principles. Agile methods: SCRUM (Ref “The SCRUM Primer, Ver 2.0”) and Extreme Programming (Sec 3.3). Plan-driven and agile development (Sec 3.2). Agile project management (Sec 3.4),  Scaling agile methods (Sec 3.5):  ",
      descname: "Prescribed text books",
      descdata:
        "Text  Books: \n 1. Ian Sommerville: Software Engineering, 9th Edition, Pearson Education, 2012. (Listed topics only from Chapters 1,2,3,4, 5, 7, 8, 9, 23, and 24) \n 2. The SCRUM Primer, Ver 2.0, http://www.goodagile.com/scrumprimer/scrumprimer20.pdf \n\n  Reference Books: \n 1. Roger S. Pressman: Software Engineering-A Practitioners approach, 7th Edition, Tata McGraw Hill. \n 2. Pankaj Jalote: An Integrated Approach to Software Engineering, Wiley India \n\n Web Reference for eBooks on Agile:\n 1. http://agilemanifesto.org/ \n 2. http://www.jamesshore.com/Agile-Book/ ",
      __v: 0,
    },
    {
      _id: "5ed78fef1177e61034f1db25",
      subcode: "17CS46",
      subname: "DATA COMMUNICATION ",
      m1: "Module 1",
      m1desc:
        "Introduction: \n Data Communications, Networks, Network Types, Internet History, Standards and Administration,\n\n Networks Models:\n Protocol Layering,  TCP/IP Protocol suite, The OSI model,\n\n Introduction to Physical Layer-1: \n Data and Signals, Digital Signals, Transmission Impairment, Data Rate limits, Performance,\n\n Digital Transmission:\n Digital to digital conversion (Only Line coding: Polar, Bipolar and Manchester coding). ",
      m2: "Module 2",
      m2desc:
        "Physical Layer-2:\n Analog to digital conversion (only PCM), Transmission Modes,\n\n Analog Transmission:\n Digital to analog conversion,\n\n Bandwidth Utilization: \n Multiplexing and Spread Spectrum, \n\n Switching: \n Introduction, Circuit Switched Networks and Packet switching",
      m3: "Module 3",
      m3desc:
        "Error Detection and Correction: \n Introduction, Block coding, Cyclic codes, Checksum, Forward error correction, \n\n Data link control:\n DLC services, Data link layer protocols, HDLC, and Point to Point protocol (Framing, Transition phases only). ",
      m4: "Module 4",
      m4desc:
        "Media Access control:\n Random Access, Controlled Access and Channelization,\n\n Wired LANs Ethernet: \n Ethernet Protocol, Standard Ethernet, Fast Ethernet, Gigabit Ethernet and 10 Gigabit Ethernet, \n\n Wireless LANs: \n Introduction, IEEE 802.11 Project and Bluetooth. ",
      m5: "Module 5",
      m5desc:
        "Other wireless Networks: \n WIMAX, Cellular Telephony, Satellite networks,  \n\n Network layer Protocols :\n Internet Protocol, ICMPv4,Mobile IP, \n\n Next generation IP: \n IPv6 addressing, The IPv6 Protocol, The ICMPv6 Protocol and Transition from  IPv4 to  IPv6. ",
      descname: "Prescribed text books",
      descdata:
        "Text  Book:\n Behrouz A. Forouzan, Data Communications and Networking 5E, 5th Edition, Tata McGraw-Hill, 2013. (Chapters 1.1 to 1.5, 2.1 to 2.3, 3.1, 3.3 to 3.6, 4.1 to 4.3, 5.1, 6.1, 6.2, 8.1 to 8.3, 10.1 to 10.5, 11.1 to 11.4, 12.1 to 12.3, 13.1 to 13.5, 15.1 to 15.3, 16.1 to 16.3, 19.1 to 19.3, 22.1 to 22.4)\n\n Reference Books:\n 1. Alberto Leon-Garcia and Indra Widjaja: Communication Networks - Fundamental Concepts and Key architectures, 2nd Edition Tata McGraw-Hill, 2004. \n 2. William Stallings: Data and Computer Communication, 8th Edition, Pearson Education, 2007.\n  3. Larry L. Peterson and Bruce S. Davie: Computer Networks – A Systems Approach, 4th   Edition, Elsevier, 2007. \n 4. Nader F. Mir: Computer and Communication Networks, Pearson Education, 2007 ",
      __v: 0,
    },
  ]);

  


app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
