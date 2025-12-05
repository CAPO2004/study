export interface LessonTopic {
  id: string;
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
}

export interface Example {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  codeEn: string;
  codeAr: string;
  outputEn: string;
  outputAr: string;
}

export interface QuizQuestion {
  id: string;
  questionEn: string;
  questionAr: string;
  options: {
    en: string[];
    ar: string[];
  };
  correctAnswer: number;
  explanationEn: string;
  explanationAr: string;
}

export const lessons: Record<string, { titleEn: string; titleAr: string; topics: LessonTopic[] }> = {
  inputData: {
    titleEn: 'How to Input Data',
    titleAr: 'كيفية إدخال البيانات',
    topics: [
      {
        id: 'input-1',
        titleEn: 'Using Input Functions',
        titleAr: 'استخدام دوال الإدخال',
        contentEn: 'Input functions allow users to enter data into your program. In most languages, you use functions like input() in Python, scanf() in C, or readline() in JavaScript to get user input.',
        contentAr: 'تسمح دوال الإدخال للمستخدمين بإدخال البيانات في برنامجك. في معظم اللغات، تستخدم دوال مثل input() في Python أو scanf() في C أو readline() في JavaScript للحصول على إدخال المستخدم.',
      },
      {
        id: 'input-2',
        titleEn: 'Data Types',
        titleAr: 'أنواع البيانات',
        contentEn: 'Different data types include integers, floating-point numbers, strings, and booleans. Understanding data types is crucial for proper data handling in your programs.',
        contentAr: 'تشمل أنواع البيانات المختلفة الأعداد الصحيحة والأرقام العشرية والنصوص والقيم المنطقية. فهم أنواع البيانات أمر حاسم للتعامل الصحيح مع البيانات في برامجك.',
      },
      {
        id: 'input-3',
        titleEn: 'Variables and Storage',
        titleAr: 'المتغيرات والتخزين',
        contentEn: 'Variables are containers for storing data values. When you input data, you store it in a variable for later use in your program.',
        contentAr: 'المتغيرات عبارة عن حاويات لتخزين قيم البيانات. عند إدخال البيانات، تقوم بتخزينها في متغير للاستخدام لاحقًا في برنامجك.',
      },
    ],
  },
  basicOperators: {
    titleEn: 'Basic Numeric Operators',
    titleAr: 'العمليات الحسابية الأساسية',
    topics: [
      {
        id: 'operators-1',
        titleEn: 'Addition and Subtraction',
        titleAr: 'الجمع والطرح',
        contentEn: 'Addition (+) adds two numbers together, while subtraction (-) finds the difference between two numbers. These are fundamental arithmetic operations.',
        contentAr: 'الجمع (+) يضيف رقمين معًا، بينما الطرح (-) يجد الفرق بين رقمين. هذه عمليات حسابية أساسية.',
      },
      {
        id: 'operators-2',
        titleEn: 'Multiplication and Division',
        titleAr: 'الضرب والقسمة',
        contentEn: 'Multiplication (*) multiplies two numbers, while division (/) divides one number by another. Be careful with division by zero!',
        contentAr: 'الضرب (*) يضرب رقمين معًا، بينما القسمة (/) تقسم رقمًا على آخر. احذر من القسمة على صفر!',
      },
      {
        id: 'operators-3',
        titleEn: 'Modulo Operator',
        titleAr: 'عامل الباقي',
        contentEn: 'The modulo operator (%) returns the remainder of a division. For example, 10 % 3 equals 1 because 10 divided by 3 leaves a remainder of 1.',
        contentAr: 'عامل الباقي (%) يعيد الباقي من القسمة. على سبيل المثال، 10 % 3 يساوي 1 لأن 10 مقسومة على 3 تترك باقيًا من 1.',
      },
    ],
  },
  conditions: {
    titleEn: 'Conditions',
    titleAr: 'الشروط',
    topics: [
      {
        id: 'conditions-1',
        titleEn: 'If Statements',
        titleAr: 'عبارات If',
        contentEn: 'If statements allow your program to make decisions. If a condition is true, the code inside the if block executes. Otherwise, it skips to the next section.',
        contentAr: 'تسمح عبارات If لبرنامجك باتخاذ قرارات. إذا كان الشرط صحيحًا، يتم تنفيذ الكود داخل كتلة if. وإلا فإنه ينتقل إلى القسم التالي.',
      },
      {
        id: 'conditions-2',
        titleEn: 'If-Else Statements',
        titleAr: 'عبارات If-Else',
        contentEn: 'If-else statements provide an alternative path. If the condition is true, one block executes; if false, the else block executes.',
        contentAr: 'توفر عبارات If-Else مسارًا بديلًا. إذا كان الشرط صحيحًا، يتم تنفيذ كتلة واحدة؛ إذا كان خاطئًا، يتم تنفيذ كتلة else.',
      },
      {
        id: 'conditions-3',
        titleEn: 'Comparison Operators',
        titleAr: 'عوامل المقارنة',
        contentEn: 'Comparison operators (==, !=, <, >, <=, >=) compare two values and return true or false based on the comparison result.',
        contentAr: 'عوامل المقارنة (==, !=, <, >, <=, >=) تقارن قيمتين وتعيد صحيح أو خاطئ بناءً على نتيجة المقارنة.',
      },
    ],
  },
  loops: {
    titleEn: 'Loops',
    titleAr: 'الحلقات',
    topics: [
      {
        id: 'loops-1',
        titleEn: 'For Loops',
        titleAr: 'حلقات For',
        contentEn: 'For loops repeat a block of code a specific number of times. They are useful when you know exactly how many times you need to repeat something.',
        contentAr: 'تكرر حلقات For كتلة من الكود عددًا محددًا من المرات. وهي مفيدة عندما تعرف بالضبط عدد المرات التي تحتاج إلى تكرار شيء ما.',
      },
      {
        id: 'loops-2',
        titleEn: 'While Loops',
        titleAr: 'حلقات While',
        contentEn: 'While loops repeat as long as a condition is true. They are useful when you don\'t know exactly how many times you need to repeat something.',
        contentAr: 'تكرر حلقات While طالما الشرط صحيح. وهي مفيدة عندما لا تعرف بالضبط عدد المرات التي تحتاج إلى تكرار شيء ما.',
      },
      {
        id: 'loops-3',
        titleEn: 'Loop Control',
        titleAr: 'التحكم في الحلقات',
        contentEn: 'You can control loops using break (exit the loop) and continue (skip to the next iteration) statements.',
        contentAr: 'يمكنك التحكم في الحلقات باستخدام عبارات break (خروج من الحلقة) و continue (الانتقال إلى التكرار التالي).',
      },
    ],
  },
};

export const examples: Record<string, Example[]> = {
  inputData: [
    {
      id: 'ex-input-1',
      titleEn: 'Simple Input Example',
      titleAr: 'مثال إدخال بسيط',
      descriptionEn: 'Getting a number from the user and storing it in a variable.',
      descriptionAr: 'الحصول على رقم من المستخدم وتخزينه في متغير.',
      codeEn: 'name = input("Enter your name: ")\nprint("Hello, " + name)',
      codeAr: 'name = input("أدخل اسمك: ")\nprint("مرحبا، " + name)',
      outputEn: 'Enter your name: Ahmed\nHello, Ahmed',
      outputAr: 'أدخل اسمك: أحمد\nمرحبا، أحمد',
    },
    {
      id: 'ex-input-2',
      titleEn: 'Multiple Inputs',
      titleAr: 'مدخلات متعددة',
      descriptionEn: 'Getting multiple values from the user.',
      descriptionAr: 'الحصول على قيم متعددة من المستخدم.',
      codeEn: 'age = int(input("Enter your age: "))\nheight = float(input("Enter your height: "))\nprint(f"Age: {age}, Height: {height}")',
      codeAr: 'age = int(input("أدخل عمرك: "))\nheight = float(input("أدخل طولك: "))\nprint(f"العمر: {age}، الطول: {height}")',
      outputEn: 'Enter your age: 25\nEnter your height: 1.75\nAge: 25, Height: 1.75',
      outputAr: 'أدخل عمرك: 25\nأدخل طولك: 1.75\nالعمر: 25، الطول: 1.75',
    },
  ],
  basicOperators: [
    {
      id: 'ex-op-1',
      titleEn: 'Basic Arithmetic',
      titleAr: 'العمليات الحسابية الأساسية',
      descriptionEn: 'Performing basic arithmetic operations.',
      descriptionAr: 'إجراء العمليات الحسابية الأساسية.',
      codeEn: 'a = 10\nb = 3\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.33\nprint(a % b)  # 1',
      codeAr: 'a = 10\nb = 3\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.33\nprint(a % b)  # 1',
      outputEn: '13\n7\n30\n3.3333...\n1',
      outputAr: '13\n7\n30\n3.3333...\n1',
    },
    {
      id: 'ex-op-2',
      titleEn: 'Order of Operations',
      titleAr: 'ترتيب العمليات',
      descriptionEn: 'Understanding operator precedence.',
      descriptionAr: 'فهم أولوية العمليات.',
      codeEn: 'result = 2 + 3 * 4\nprint(result)  # 14 (multiplication first)',
      codeAr: 'result = 2 + 3 * 4\nprint(result)  # 14 (الضرب أولاً)',
      outputEn: '14',
      outputAr: '14',
    },
  ],
  conditions: [
    {
      id: 'ex-cond-1',
      titleEn: 'Simple If Statement',
      titleAr: 'عبارة If بسيطة',
      descriptionEn: 'Checking a condition and executing code accordingly.',
      descriptionAr: 'التحقق من شرط وتنفيذ الكود وفقًا لذلك.',
      codeEn: 'age = 18\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")',
      codeAr: 'age = 18\nif age >= 18:\n    print("أنت بالغ")\nelse:\n    print("أنت قاصر")',
      outputEn: 'You are an adult',
      outputAr: 'أنت بالغ',
    },
    {
      id: 'ex-cond-2',
      titleEn: 'Multiple Conditions',
      titleAr: 'شروط متعددة',
      descriptionEn: 'Using multiple if-else statements.',
      descriptionAr: 'استخدام عبارات if-else متعددة.',
      codeEn: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")',
      codeAr: 'score = 85\nif score >= 90:\n    print("أ")\nelif score >= 80:\n    print("ب")\nelif score >= 70:\n    print("ج")\nelse:\n    print("ف")',
      outputEn: 'B',
      outputAr: 'ب',
    },
  ],
  loops: [
    {
      id: 'ex-loop-1',
      titleEn: 'For Loop Example',
      titleAr: 'مثال حلقة For',
      descriptionEn: 'Printing numbers from 1 to 5 using a for loop.',
      descriptionAr: 'طباعة الأرقام من 1 إلى 5 باستخدام حلقة for.',
      codeEn: 'for i in range(1, 6):\n    print(i)',
      codeAr: 'for i in range(1, 6):\n    print(i)',
      outputEn: '1\n2\n3\n4\n5',
      outputAr: '1\n2\n3\n4\n5',
    },
    {
      id: 'ex-loop-2',
      titleEn: 'While Loop Example',
      titleAr: 'مثال حلقة While',
      descriptionEn: 'Counting down from 5 to 1 using a while loop.',
      descriptionAr: 'العد التنازلي من 5 إلى 1 باستخدام حلقة while.',
      codeEn: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1',
      codeAr: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1',
      outputEn: '5\n4\n3\n2\n1',
      outputAr: '5\n4\n3\n2\n1',
    },
  ],
};

export const quizzes: Record<string, QuizQuestion[]> = {
  inputData: [
    {
      id: 'quiz-input-1',
      questionEn: 'Which function is used to get user input in Python?',
      questionAr: 'أي دالة تُستخدم للحصول على إدخال المستخدم في Python؟',
      options: {
        en: ['input()', 'get()', 'read()', 'scan()'],
        ar: ['input()', 'get()', 'read()', 'scan()'],
      },
      correctAnswer: 0,
      explanationEn: 'The input() function is used to get user input in Python.',
      explanationAr: 'دالة input() تُستخدم للحصول على إدخال المستخدم في Python.',
    },
    {
      id: 'quiz-input-2',
      questionEn: 'What data type is returned by the input() function?',
      questionAr: 'ما نوع البيانات الذي تعيده دالة input()؟',
      options: {
        en: ['Integer', 'String', 'Float', 'Boolean'],
        ar: ['عدد صحيح', 'نص', 'عدد عشري', 'منطقي'],
      },
      correctAnswer: 1,
      explanationEn: 'The input() function always returns a string, even if the user enters a number.',
      explanationAr: 'دالة input() تعيد دائمًا نصًا، حتى لو أدخل المستخدم رقمًا.',
    },
    {
      id: 'quiz-input-3',
      questionEn: 'How do you convert a string to an integer in Python?',
      questionAr: 'كيف تحول نصًا إلى عدد صحيح في Python؟',
      options: {
        en: ['str()', 'int()', 'float()', 'bool()'],
        ar: ['str()', 'int()', 'float()', 'bool()'],
      },
      correctAnswer: 1,
      explanationEn: 'The int() function converts a string to an integer.',
      explanationAr: 'دالة int() تحول نصًا إلى عدد صحيح.',
    },
  ],
  basicOperators: [
    {
      id: 'quiz-op-1',
      questionEn: 'What is the result of 10 + 5 * 2?',
      questionAr: 'ما نتيجة 10 + 5 * 2؟',
      options: {
        en: ['30', '20', '25', '15'],
        ar: ['30', '20', '25', '15'],
      },
      correctAnswer: 1,
      explanationEn: 'According to the order of operations, multiplication comes before addition. So 5 * 2 = 10, then 10 + 10 = 20.',
      explanationAr: 'وفقًا لترتيب العمليات، الضرب يأتي قبل الجمع. إذن 5 * 2 = 10، ثم 10 + 10 = 20.',
    },
    {
      id: 'quiz-op-2',
      questionEn: 'What does the modulo operator (%) do?',
      questionAr: 'ماذا يفعل عامل الباقي (%)؟',
      options: {
        en: ['Multiplies two numbers', 'Divides two numbers', 'Returns the remainder', 'Raises to a power'],
        ar: ['يضرب رقمين', 'يقسم رقمين', 'يعيد الباقي', 'يرفع إلى قوة'],
      },
      correctAnswer: 2,
      explanationEn: 'The modulo operator returns the remainder of a division operation.',
      explanationAr: 'عامل الباقي يعيد الباقي من عملية القسمة.',
    },
    {
      id: 'quiz-op-3',
      questionEn: 'What is 15 % 4?',
      questionAr: 'ما هو 15 % 4؟',
      options: {
        en: ['3', '4', '11', '60'],
        ar: ['3', '4', '11', '60'],
      },
      correctAnswer: 0,
      explanationEn: '15 divided by 4 is 3 with a remainder of 3. So 15 % 4 = 3.',
      explanationAr: '15 مقسومة على 4 تساوي 3 مع باقي 3. إذن 15 % 4 = 3.',
    },
  ],
  conditions: [
    {
      id: 'quiz-cond-1',
      questionEn: 'What does the == operator do?',
      questionAr: 'ماذا يفعل عامل ==؟',
      options: {
        en: ['Assigns a value', 'Compares two values', 'Adds two values', 'Multiplies two values'],
        ar: ['يسند قيمة', 'يقارن قيمتين', 'يضيف قيمتين', 'يضرب قيمتين'],
      },
      correctAnswer: 1,
      explanationEn: 'The == operator compares two values and returns true if they are equal.',
      explanationAr: 'عامل == يقارن قيمتين ويعيد صحيح إذا كانتا متساويتين.',
    },
    {
      id: 'quiz-cond-2',
      questionEn: 'What is the output of the following code?\nif 5 > 3:\n    print("Yes")\nelse:\n    print("No")',
      questionAr: 'ما هو الناتج من الكود التالي؟\nif 5 > 3:\n    print("نعم")\nelse:\n    print("لا")',
      options: {
        en: ['Yes', 'No', 'Error', 'Nothing'],
        ar: ['نعم', 'لا', 'خطأ', 'لا شيء'],
      },
      correctAnswer: 0,
      explanationEn: 'Since 5 is greater than 3, the condition is true, so "Yes" is printed.',
      explanationAr: 'بما أن 5 أكبر من 3، الشرط صحيح، لذا يتم طباعة "نعم".',
    },
    {
      id: 'quiz-cond-3',
      questionEn: 'What is the difference between = and ==?',
      questionAr: 'ما الفرق بين = و ==؟',
      options: {
        en: ['They are the same', '= assigns, == compares', '== assigns, = compares', 'No difference'],
        ar: ['هما نفس الشيء', '= يسند، == يقارن', '== يسند، = يقارن', 'لا فرق'],
      },
      correctAnswer: 1,
      explanationEn: 'The = operator assigns a value to a variable, while == compares two values.',
      explanationAr: 'عامل = يسند قيمة إلى متغير، بينما == يقارن قيمتين.',
    },
  ],
  loops: [
    {
      id: 'quiz-loop-1',
      questionEn: 'What does a for loop do?',
      questionAr: 'ماذا تفعل حلقة for؟',
      options: {
        en: ['Repeats code a specific number of times', 'Repeats code while a condition is true', 'Executes code once', 'Skips code'],
        ar: ['تكرر الكود عددًا محددًا من المرات', 'تكرر الكود طالما الشرط صحيح', 'تنفذ الكود مرة واحدة', 'تتخطى الكود'],
      },
      correctAnswer: 0,
      explanationEn: 'A for loop repeats a block of code a specific number of times.',
      explanationAr: 'حلقة for تكرر كتلة من الكود عددًا محددًا من المرات.',
    },
    {
      id: 'quiz-loop-2',
      questionEn: 'How many times does the following loop execute?\nfor i in range(5):\n    print(i)',
      questionAr: 'كم مرة تنفذ الحلقة التالية؟\nfor i in range(5):\n    print(i)',
      options: {
        en: ['4 times', '5 times', '6 times', 'Infinite times'],
        ar: ['4 مرات', '5 مرات', '6 مرات', 'عدد لا نهائي من المرات'],
      },
      correctAnswer: 1,
      explanationEn: 'range(5) generates numbers from 0 to 4, so the loop executes 5 times.',
      explanationAr: 'range(5) ينتج أرقامًا من 0 إلى 4، لذا تنفذ الحلقة 5 مرات.',
    },
    {
      id: 'quiz-loop-3',
      questionEn: 'What does the break statement do in a loop?',
      questionAr: 'ماذا تفعل عبارة break في حلقة؟',
      options: {
        en: ['Pauses the loop', 'Exits the loop', 'Skips to the next iteration', 'Restarts the loop'],
        ar: ['توقف الحلقة مؤقتًا', 'تخرج من الحلقة', 'تتخطى إلى التكرار التالي', 'تعيد تشغيل الحلقة'],
      },
      correctAnswer: 1,
      explanationEn: 'The break statement exits the loop immediately.',
      explanationAr: 'عبارة break تخرج من الحلقة فورًا.',
    },
  ],
};
