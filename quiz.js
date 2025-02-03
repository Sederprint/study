// document.addEventListener("DOMContentLoaded", () => {
//   const questions = [
//     {
//       question:
//         "מהו אחד השינויים המרכזיים ב-15 השנים האחרונות שהובילו להתפתחות מדע הנתונים?",
//       answers: shuffleArray([
//         "שיפור התשתיות העסקיות לאיסוף נתונים", // Correct
//         "הגברת השימוש בטכנולוגיות ידניות לניתוח נתונים",
//         "ירידה בכמות הנתונים הזמינים לעסקים",
//         "הפחתת המורכבות של נתונים תפעוליים",
//       ]),
//     },
//     {
//       question: "מהי המטרה העיקרית של מדע הנתונים, כפי שמתואר בפרק?",
//       answers: shuffleArray([
//         "שיפור תהליכי קבלת החלטות באמצעות ניתוח נתונים", // Correct
//         "החלפת ניתוח ידני בשיטות אוטומטיות בלבד",
//         "ניהול מלאי בחברות קמעונאות",
//         "הפחתת עלויות טכנולוגיות בארגונים",
//       ]),
//     },
//     {
//       question: "מדוע Walmart חקרו נתונים בזמן הוריקן פרנסס?",
//       answers: shuffleArray([
//         "כדי לחזות אילו מוצרים ידרשו ולהיערך בהתאם במלאי", // Correct
//         "כדי לנבא את עוצמת ההוריקן",
//         "כדי לגלות את כיוון תנועת הסופה",
//         "כדי להפחית את עלויות השינוע",
//       ]),
//     },
//     {
//       question:
//         "מה היה אחד הממצאים המפתיעים בניתוח הנתונים של Walmart בהוריקן פרנסס?",
//       answers: shuffleArray([
//         "עלייה במכירות Pop-Tarts ובירה לפני הסופה", // Correct
//         "מחסור במים מינרליים בכל החנויות",
//         "דרישה לא שגרתית למוצרי טקסטיל",
//         "ירידה בביקוש למוצרי חירום",
//       ]),
//     },
//     {
//       question: "מהו churn במונחי מדע נתונים?",
//       answers: shuffleArray([
//         "מעבר של לקוחות מחברה אחת לאחרת", // Correct
//         "שיווק למטרות חיזוי",
//         "רווחיות ממוצעת ללקוח",
//         "אחוז הלקוחות הנאמנים לעסק",
//       ]),
//     },
//     {
//       question: "מהי המשמעות של קבלת החלטות מבוססת נתונים (DDD)?",
//       answers: shuffleArray([
//         "שימוש בנתונים לקבלת החלטות במקום להסתמך על אינטואיציה בלבד", // Correct
//         "תהליך של כריית נתונים מתוך מקורות חיצוניים בלבד",
//         "איסוף נתונים מלקוחות לצורכי מחקר בלבד",
//         "שימוש בניתוח נתונים ללא התחשבות בניסיון מקצועי",
//       ]),
//     },
//     {
//       question:
//         "מה מתאר המונח 'Data-Driven Decision-Making' (DDD) בהקשר של תהליך שיווקי?",
//       answers: shuffleArray([
//         "שימוש בניתוח נתונים כדי להתאים פרסומות לצרכנים", // Correct
//         "בחירת פרסומות על בסיס אינטואיציה של משווק",
//         "בחירת פרסומות על בסיס תחושת שוק בלבד",
//         "שימוש בניסיון עבר בלבד לבחירת קמפיינים",
//       ]),
//     },
//     {
//       question: "כיצד מחקר של Brynjolfsson וחבריו הדגים את השפעת ה-DDD?",
//       answers: shuffleArray([
//         "הוא הראה ש-DDD משפר ביצועים עסקיים באופן משמעותי", // Correct
//         "הוא הדגים כי DDD מחליף אינטואיציה לחלוטין",
//         "הוא הדגיש כי DDD מתאים רק לתעשיות טכנולוגיות",
//         "הוא ציין כי DDD אינו משפיע על ביצועים עסקיים",
//       ]),
//     },
//     {
//       question: "מהי המטרה המרכזית של מדע הנתונים כפי שתואר בתרשים 1-1?",
//       answers: shuffleArray([
//         "שיפור תהליך קבלת ההחלטות בעסקים", // Correct
//         "החלפת ניתוח ידני בשיטות אוטומטיות",
//         "ניהול שרשרת האספקה באמצעות נתונים",
//         "שיפור יכולות שיווק בלבד",
//       ]),
//     },
//     {
//       question: "מה מדגים תרשים 1-1 על מדע הנתונים?",
//       answers: shuffleArray([
//         "מדע הנתונים מובחן מתהליכי עיבוד נתונים אחרים בארגון", // Correct
//         "מדע הנתונים מחליף את כל תהליכי עיבוד הנתונים הקיימים",
//         "מדע הנתונים מתמקד בעיקר בכריית נתונים ממקורות חיצוניים",
//         "מדע הנתונים הוא תהליך ידני בלבד",
//       ]),
//     },
//     {
//       question: "כיצד ניתן לשלב DDD בתהליכי שיווק?",
//       answers: shuffleArray([
//         "ניתוח נתונים על תגובות צרכנים לפרסומות", // Correct
//         "בחירת פרסומות על פי תחושת בטן בלבד",
//         "הסתמכות על ניסיון קודם מבלי לנתח נתונים",
//         "שימוש בנתוני מכירות בלבד לבחירת פרסומות",
//       ]),
//     },
//   ];

//   // עדכון התשובה הנכונה לאחר יצירת השאלות
//   questions.forEach((q) => {
//     q.correct = q.answers.indexOf(
//       q.answers.find((answer) => answer.includes("שיפור"))
//     );
//   });

//   let currentQuestionIndex = 0;
//   let correctAnswersCount = 0;
//   const questionContainer = document.getElementById("question-container");
//   const resultContainer = document.getElementById("result");

//   function showQuestion(index) {
//     const q = questions[index];
//     questionContainer.innerHTML = `
//           <h2>${index + 1}. ${q.question}</h2>
//           <div class="answers">
//             ${q.answers
//               .map(
//                 (answer, i) =>
//                   `<button class="btn answer-button" data-index="${i}">${answer}</button>`
//               )
//               .join("")}
//           </div>
//         `;

//     document.querySelectorAll(".answer-button").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const selected = parseInt(btn.getAttribute("data-index"), 10);
//         if (selected === q.correct) {
//           alert("תשובה נכונה!"); // Alert for correct answer
//         } else {
//           alert(`תשובה לא נכונה! התשובה הנכונה היא: ${q.answers[q.correct]}`); // Alert for incorrect answer and show the correct one
//         }
//         if (selected === q.correct) {
//           correctAnswersCount++;
//         }
//         if (index < questions.length - 1) {
//           showQuestion(index + 1);
//         } else {
//           showResults();
//         }
//       });
//     });

//     updateProgress(index, questions.length);
//   }

//   function shuffleArray(array) {
//     return array
//       .map((value) => ({ value, sort: Math.random() }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ value }) => value);
//   }

//   function updateProgress(currentIndex, totalQuestions) {
//     document.getElementById("progress").textContent = `שאלה ${
//       currentIndex + 1
//     } מתוך ${totalQuestions}`;
//   }

//   function showResults() {
//     questionContainer.style.display = "none";
//     resultContainer.innerHTML = `
//           <h2>סיימת את החידון!</h2>
//           <p>ענית נכון על ${correctAnswersCount} מתוך ${questions.length} שאלות.</p>
//           <button onclick="location.reload()">התחל מחדש</button>
//         `;
//     resultContainer.style.display = "block";
//   }

//   showQuestion(currentQuestionIndex);
// });

document.addEventListener("DOMContentLoaded", () => {
  // const questions = [
  //   {
  //     question:
  //       "מהו אחד השינויים המרכזיים ב-15 השנים האחרונות שהובילו להתפתחות מדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "שיפור התשתיות העסקיות לאיסוף נתונים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "הגברת השימוש בטכנולוגיות ידניות לניתוח נתונים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "ירידה בכמות הנתונים הזמינים לעסקים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "הפחתת המורכבות של נתונים תפעוליים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהי המטרה העיקרית של מדע הנתונים, כפי שמתואר בפרק?",
  //     answers: shuffleArray([
  //       {
  //         text: "שיפור תהליכי קבלת החלטות באמצעות ניתוח נתונים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "החלפת ניתוח ידני בשיטות אוטומטיות בלבד",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "ניהול מלאי בחברות קמעונאות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "הפחתת עלויות טכנולוגיות בארגונים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מדוע Walmart חקרו נתונים בזמן הוריקן פרנסס?",
  //     answers: shuffleArray([
  //       {
  //         text: "כדי לחזות אילו מוצרים ידרשו ולהיערך בהתאם במלאי",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "כדי לנבא את עוצמת ההוריקן",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "כדי לגלות את כיוון תנועת הסופה",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "כדי להפחית את עלויות השינוע",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "מה היה אחד הממצאים המפתיעים בניתוח הנתונים של Walmart בהוריקן פרנסס?",
  //     answers: shuffleArray([
  //       {
  //         text: "עלייה במכירות Pop-Tarts ובירה לפני הסופה",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "מחסור במים מינרליים בכל החנויות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "דרישה לא שגרתית למוצרי טקסטיל",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "ירידה בביקוש למוצרי חירום",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהו churn במונחי מדע נתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "מעבר של לקוחות מחברה אחת לאחרת",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "שיווק למטרות חיזוי",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "רווחיות ממוצעת ללקוח",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "אחוז הלקוחות הנאמנים לעסק",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהי המשמעות של קבלת החלטות מבוססת נתונים (DDD)?",
  //     answers: shuffleArray([
  //       {
  //         text: "שימוש בנתונים לקבלת החלטות במקום להסתמך על אינטואיציה בלבד",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "תהליך של כריית נתונים מתוך מקורות חיצוניים בלבד",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "איסוף נתונים מלקוחות לצורכי מחקר בלבד",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "שימוש בניתוח נתונים ללא התחשבות בניסיון מקצועי",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "מה מתאר המונח 'Data-Driven Decision-Making' (DDD) בהקשר של תהליך שיווקי?",
  //     answers: shuffleArray([
  //       {
  //         text: "שימוש בניתוח נתונים כדי להתאים פרסומות לצרכנים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "בחירת פרסומות על בסיס אינטואיציה של משווק",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "בחירת פרסומות על בסיס תחושת שוק בלבד",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "שימוש בניסיון עבר בלבד לבחירת קמפיינים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "כיצד מחקר של Brynjolfsson וחבריו הדגים את השפעת ה-DDD?",
  //     answers: shuffleArray([
  //       {
  //         text: "הוא הראה ש-DDD משפר ביצועים עסקיים באופן משמעותי",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "הוא הדגים כי DDD מחליף אינטואיציה לחלוטין",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "הוא הדגיש כי DDD מתאים רק לתעשיות טכנולוגיות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "הוא ציין כי DDD אינו משפיע על ביצועים עסקיים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהי המטרה המרכזית של מדע הנתונים כפי שתואר בתרשים 1-1?",
  //     answers: shuffleArray([
  //       {
  //         text: "שיפור תהליך קבלת ההחלטות בעסקים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "החלפת ניתוח ידני בשיטות אוטומטיות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "ניהול שרשרת האספקה באמצעות נתונים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "שיפור יכולות שיווק בלבד",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מה מדגים תרשים 1-1 על מדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "מדע הנתונים מובחן מתהליכי עיבוד נתונים אחרים בארגון",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "מדע הנתונים מחליף את כל תהליכי עיבוד הנתונים הקיימים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "מדע הנתונים מתמקד בעיקר בכריית נתונים ממקורות חיצוניים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "מדע הנתונים הוא תהליך ידני בלבד",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "מה הייתה המסקנה העיקרית של המחקר על קבלת החלטות מבוססות נתונים (DDD)?",
  //     answers: shuffleArray([
  //       {
  //         text: "חברות מבוססות נתונים פרודוקטיביות יותר באופן סטטיסטי",
  //         isCorrect: true,
  //       },
  //       { text: "DDD אינה משפיעה על ערך שוק של חברות", isCorrect: false },
  //       { text: "DDD מפחיתה את השימוש בנכסי החברה", isCorrect: false },
  //       { text: "DDD נמדד בעיקר על פי שינוי בהרגלי קנייה", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהם שני סוגי ההחלטות המוזכרים בספר כקשורים למדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "גילוי נתונים חדשים והחלטות חוזרות בקנה מידה גדול",
  //         isCorrect: true,
  //       },
  //       { text: "החלטות המבוססות על תחזיות בלבד", isCorrect: false },
  //       { text: "שימוש רק בנתוני מכירות ואחוזי רווח", isCorrect: false },
  //       { text: "בחירה בין פרסומות שונות ללא נתוני עבר", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מה הייתה הבעיה של Walmart הקשורה להוריקן פרנסס?",
  //     answers: shuffleArray([
  //       { text: "לגלות ידע שיעזור להתכונן להוריקן", isCorrect: true },
  //       { text: "לצמצם את כמות המוצרים במלאי", isCorrect: false },
  //       { text: "להפחית את עלויות השינוע לקראת הסופה", isCorrect: false },
  //       { text: "למנוע השפעה של סופות עתידיות על הרווחים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד Target ניסתה לזהות צרכנים בהריון?",
  //     answers: shuffleArray([
  //       {
  //         text: "על ידי ניתוח נתונים היסטוריים של הרגלי קנייה",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי שימוש בנתוני לידה ציבוריים בלבד", isCorrect: false },
  //       { text: "על ידי שליחת שאלונים ללקוחות חדשים", isCorrect: false },
  //       { text: "על ידי חיזוי שינויים בשוק הפרסום", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מה הייתה המטרה המרכזית של Target במקרה הנתונים שלהם?",
  //     answers: shuffleArray([
  //       { text: "לחזות מי בהריון כדי להקדים את המתחרים", isCorrect: true },
  //       { text: "לזהות לקוחות חדשים ללא פרטים ציבוריים", isCorrect: false },
  //       { text: "להציע הנחות על מוצרים שאינם קשורים לילדים", isCorrect: false },
  //       { text: "למנוע שינוי בהרגלי קנייה של לקוחות", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד מדע הנתונים שימש את Target בקמפיין השיווקי שלהם?",
  //     answers: shuffleArray([
  //       {
  //         text: "על ידי יצירת מודלים חזויים שמזהים אינדיקטורים להריון",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי ניתוח מידע מתוך פרסומות", isCorrect: false },
  //       {
  //         text: "על ידי הגברת המודעות לצרכים כלליים של לקוחות",
  //         isCorrect: false,
  //       },
  //       { text: "על ידי הגבלת נתונים לתחום של מכירות בלבד", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מה עושה מודל חזוי במדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "מתמקד באינדיקטורים שמנבאים כמות מסוימת של עניין",
  //         isCorrect: true,
  //       },
  //       { text: "מצמצם את כמות הנתונים לנתונים ידניים בלבד", isCorrect: false },
  //       {
  //         text: "משתמש אך ורק בנתוני עבר ללא התאמה למצב הנוכחי",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "מזהה הרגלי קנייה של לקוחות ללא תלות בתוצאות",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מה היה סוג הבעיה במדע הנתונים ש-MegaTelCo התמודדה איתה?",
  //     answers: shuffleArray([
  //       {
  //         text: "שיפור יכולת החיזוי של רווחיות מיקוד בלקוחות",
  //         isCorrect: true,
  //       },
  //       { text: "בדיקת השפעת פרסומות על התנהגות צרכנים", isCorrect: false },
  //       { text: "ניתוח ידני של נתוני לקוחות בלבד", isCorrect: false },
  //       { text: "בדיקת חידושים בתחום רשתות תקשורת", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question:
  //       "כיצד תחומים כמו פרסום מקוון, זיהוי הונאות והמלצות מוצרים קשורים למדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "הם כוללים יישומים אינטנסיביים של כריית נתונים וחיזוי",
  //         isCorrect: true,
  //       },
  //       { text: "הם משתמשים בנתונים ידניים בלבד ללא מודלים", isCorrect: false },
  //       {
  //         text: "הם אינם דורשים יישום של מערכות מחשוב מתקדמות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "הם מתמקדים במידע שאינו נתמך על ידי רשתות נתונים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "מדוע תעשיות הפיננסים והתקשורת אימצו מוקדם מערכות החלטה אוטומטיות?",
  //     answers: shuffleArray([
  //       {
  //         text: "בגלל פיתוח מוקדם של רשתות נתונים ומחשוב רחב היקף",
  //         isCorrect: true,
  //       },
  //       { text: "בגלל צורך בחיזוק קשרי לקוחות בלבד", isCorrect: false },
  //       { text: "בגלל הימנעות משימוש במודלים חזויים", isCorrect: false },
  //       { text: "בגלל תלות נמוכה במידע דיגיטלי", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question:
  //       "כיצד מערכות מבוססות נתונים שינו את הבנקים ותעשיית האשראי בשנות ה-90?",
  //     answers: shuffleArray([
  //       {
  //         text: "החלטות מרצ'נדייזינג וניהול הונאות הפכו לאוטומטיות",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "הבנקים עברו לניתוח ידני של כל עסקאות הלקוחות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "החלטות פרסום התמקדו בפרסומות טלוויזיה בלבד",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "תעשיית האשראי לא השתמשה במחשבים לניהול נתונים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהי המהפכה שאנו רואים כיום בתחום הפרסום?",
  //     answers: shuffleArray([
  //       { text: "היכולת לקבל החלטות פרסום בחלקיקי שניות", isCorrect: true },
  //       { text: "השימוש בפחות נתונים להחלטות שיווקיות", isCorrect: false },
  //       { text: "ירידה בכמות הזמן שהצרכנים מבלים באינטרנט", isCorrect: false },
  //       { text: "המעבר להחלטות ידניות בכל תחומי הפרסום", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question:
  //       "כיצד מתוארת ההשפעה של מדע הנתונים על קבלת החלטות מבוססות נתונים בתרשים 1-1?",
  //     answers: shuffleArray([
  //       {
  //         text: "מדע הנתונים תומך ומשתלב עם החלטות מבוססות נתונים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "מדע הנתונים מחליף את כל תהליכי העיבוד הידניים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "מדע הנתונים מתמקד רק במודלים חזויים ולא בקבלת החלטות",
  //         isCorrect: false,
  //       },
  //       { text: "מדע הנתונים אינו קשור לתהליכים עסקיים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהי המשמעות של 'Big Data' בהקשר של עיבוד נתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "תמיכה במערכות מדע נתונים על ידי הנדסה ועיבוד נתונים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "החלפת כל הצוותים העסקיים במערכות אוטומטיות",
  //         isCorrect: false,
  //       },
  //       { text: "התמקדות בנתונים קטנים בלבד לצורך חיזוי", isCorrect: false },
  //       { text: "הימנעות משימוש במחשוב רחב היקף", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהו התפקיד המרכזי של טכנולוגיות עיבוד נתונים לפי תרשים 1-1?",
  //     answers: shuffleArray([
  //       {
  //         text: "תמיכה במדע נתונים ובקבלת החלטות מבוססות נתונים",
  //         isCorrect: true,
  //       },
  //       { text: "החלפת מדע הנתונים בטכנולוגיות מסורתיות", isCorrect: false },
  //       { text: "שימוש בנתונים לצורך יצירת פרסומות בלבד", isCorrect: false },
  //       { text: "ניהול עסקי ללא שימוש בנתונים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהי המשמעות של 'Big Data' בהקשר של טכנולוגיות עיבוד נתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "נתונים גדולים מדי למערכות עיבוד נתונים מסורתיות",
  //         isCorrect: true,
  //       },
  //       { text: "מערכות נתונים המיועדות רק לכריית נתונים", isCorrect: false },
  //       { text: "שימוש במידע מבוסס אינטואיציה בלבד", isCorrect: false },
  //       {
  //         text: "עיבוד נתונים במערכות שאינן נתמכות על ידי רשתות",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "כיצד טכנולוגיות Big Data משפיעות על פריון העסקים לפי מחקרו של Tambe?",
  //     answers: shuffleArray([
  //       {
  //         text: "שימוש בטכנולוגיות Big Data מעלה את הפריון ב-1%-3%",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "שימוש בטכנולוגיות Big Data מפחית את הפריון",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "טכנולוגיות Big Data לא משפיעות על פריון העסקים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "שימוש בטכנולוגיות Big Data מוגבל לתעשיות פיננסיות בלבד",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מה מייחד את עידן Big Data 1.0?",
  //     answers: shuffleArray([
  //       {
  //         text: "בניית יכולות לעיבוד נתונים גדולים לשיפור תפעול",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "מעבר לשימוש באינטואיציה בקבלת החלטות עסקיות",
  //         isCorrect: false,
  //       },
  //       { text: "התמקדות רק בהורדת עלויות טכנולוגיות", isCorrect: false },
  //       { text: "יצירת טכנולוגיות ללא מטרה עסקית מוגדרת", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד עידן Big Data 2.0 עשוי לשנות את הארגונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "שיפור משמעותי בשיטות עבודה ושימוש אינטראקטיבי בנתונים",
  //         isCorrect: true,
  //       },
  //       { text: "הפחתת שימוש בטכנולוגיות מסורתיות", isCorrect: false },
  //       { text: "מעבר לעיבוד נתונים ידני בלבד", isCorrect: false },
  //       { text: "השארת תהליכים עסקיים ללא שינוי", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד טכנולוגיות Big Data תומכות במדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "באמצעות עיבוד נתונים מורכב ותמיכה בטכניקות כריית נתונים",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי ייעול התהליכים ללא שימוש בנתונים", isCorrect: false },
  //       { text: "על ידי מניעת שימוש בטכניקות חיזוי", isCorrect: false },
  //       { text: "על ידי הפחתת הצורך בטכנולוגיות מתקדמות", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד עידן ה-Web 2.0 דומה לעידן Big Data 2.0?",
  //     answers: shuffleArray([
  //       {
  //         text: "שניהם מתמקדים בשיפור אינטראקטיביות וביצירת ערך עסקי חדש",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "שניהם מבטלים את הצורך בשימוש בטכנולוגיות מסורתיות",
  //         isCorrect: false,
  //       },
  //       { text: "שניהם מתמקדים ביצירת נתונים קטנים", isCorrect: false },
  //       { text: "שניהם מונעים שינויים במערכות העסקיות", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהו ההבדל המרכזי בין עידן Big Data 1.0 לעידן Big Data 2.0?",
  //     answers: shuffleArray([
  //       {
  //         text: "Big Data 2.0 מתמקד במה שניתן לעשות טוב יותר עם הנתונים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "Big Data 2.0 מחליף לחלוטין את השימוש בטכנולוגיות מסורתיות",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "Big Data 1.0 אינו כולל שימוש בטכנולוגיות אינטרנט",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "Big Data 1.0 מתמקד רק בניתוח נתונים מבוסס אינטואיציה",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "כיצד חברות כמו אמזון מתבלטות בעידן Big Data 2.0?",
  //     answers: shuffleArray([
  //       {
  //         text: "על ידי המלצות מבוססות נתונים על סמך כמויות מידע עצומות",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי הימנעות משימוש בטכנולוגיות חדשות", isCorrect: false },
  //       { text: "על ידי התמקדות בפרסום מסורתי בלבד", isCorrect: false },
  //       {
  //         text: "על ידי ניתוח נתונים ידני ללא טכנולוגיות מתקדמות",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהו אחד היתרונות של פרסום מקוון בעידן הנתונים הגדולים?",
  //     answers: shuffleArray([
  //       { text: "עיבוד מיליארדי חשיפות פרסום בזמן אמת", isCorrect: true },
  //       { text: "הפחתת הצורך בנתונים גדולים", isCorrect: false },
  //       { text: "מעבר לתהליכים ידניים בלבד בניתוח פרסום", isCorrect: false },
  //       { text: "הימנעות ממכירה בזמן אמת", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהי המשמעות של התייחסות לנתונים כאל נכסים אסטרטגיים?",
  //     answers: shuffleArray([
  //       {
  //         text: "השקעה בצוותי מדע נתונים ובאיסוף נתונים מתאימים",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "התמקדות בשימוש בנתונים קיימים ללא פיתוח נוסף",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "החלפת ניתוח נתונים בקבלת החלטות אינטואיטיבית",
  //         isCorrect: false,
  //       },
  //       { text: "התעלמות מחשיבות המדע הנתונים בעסקים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מדוע חשוב להשקיע בצוותי מדע נתונים איכותיים?",
  //     answers: shuffleArray([
  //       { text: "כדי למקסם את הערך המופק מהנתונים הזמינים", isCorrect: true },
  //       {
  //         text: "כדי להימנע משימוש בטכנולוגיות עיבוד נתונים מתקדמות",
  //         isCorrect: false,
  //       },
  //       { text: "כדי לשפר קבלת החלטות ללא שימוש בנתונים", isCorrect: false },
  //       {
  //         text: "כדי להפחית את השפעת הנתונים על תהליכים עסקיים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "כיצד שינתה אמזון את חוויית הצרכן בעידן Big Data?",
  //     answers: shuffleArray([
  //       {
  //         text: "באמצעות שילוב 'קול הצרכן' בהמלצות והביקורות",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי הפחתת השימוש בטכנולוגיות נתונים", isCorrect: false },
  //       { text: "על ידי הימנעות מאינטראקציה עם צרכנים", isCorrect: false },
  //       {
  //         text: "על ידי הפחתת ההשפעה של המלצות מבוססות נתונים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "כיצד תרמה טכנולוגיית Big Data לשיפור ניהול פרסום מקוון?",
  //     answers: shuffleArray([
  //       { text: "על ידי קבלת החלטות בזמן אמת על פרסום", isCorrect: true },
  //       { text: "על ידי הפחתת חשיפות הפרסום למינימום", isCorrect: false },
  //       { text: "על ידי ניתוח ידני של נתוני פרסום בלבד", isCorrect: false },
  //       { text: "על ידי הימנעות מפרסום בזמן אמת", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהי החשיבות של טכנולוגיות עיבוד נתונים למדע הנתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "תמיכה בעיבוד נתונים מורכב לצורך הפקת תובנות",
  //         isCorrect: true,
  //       },
  //       { text: "החלפת כלים מדעיים באינטואיציה עסקית", isCorrect: false },
  //       { text: "הימנעות מהשקעה בטכנולוגיות מתקדמות", isCorrect: false },
  //       { text: "שימוש בטכנולוגיות ללא שילוב נתונים עסקיים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מהי המסקנה המרכזית ממקרה Signet Bank?",
  //     answers: shuffleArray([
  //       {
  //         text: "יש להתייחס לנתונים כנכס עסקי שראוי להשקיע בו",
  //         isCorrect: true,
  //       },
  //       {
  //         text: "לא מומלץ לבצע ניסויים עם לקוחות עקב הפסדים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "בנקים קטנים אינם מתחרים בבנקים גדולים במודלים מבוססי נתונים",
  //         isCorrect: false,
  //       },
  //       {
  //         text: "אין צורך במודלים לחיזוי רווחיות כאשר יש מודלים לחיזוי ברירת מחדל",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question:
  //       "מדוע Signet Bank נאלצו לבצע ניסויים עם תנאי אשראי שונים ללקוחות?",
  //     answers: shuffleArray([
  //       { text: "כדי לאסוף נתונים חדשים לחיזוי רווחיות", isCorrect: true },
  //       { text: "כדי להפחית את שיעור החובות שלא נפרעו", isCorrect: false },
  //       { text: "כדי להחליף את כל הלקוחות במודלים קיימים", isCorrect: false },
  //       { text: "כדי לשפר את התקשורת עם בנקים גדולים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מה היה ההבדל בין המודל של Signet Bank למודלים קיימים?",
  //     answers: shuffleArray([
  //       {
  //         text: "המיקוד ברווחיות הלקוח במקום רק בחיזוי ברירת מחדל",
  //         isCorrect: true,
  //       },
  //       { text: "השימוש במידע זמין בלבד ללא ניסויים", isCorrect: false },
  //       { text: "הימנעות מהצעות תנאים משתנים ללקוחות", isCorrect: false },
  //       {
  //         text: "שימוש בטכנולוגיות מסורתיות במקום במודלים מתקדמים",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מה הייתה אחת הבעיות המרכזיות של Signet Bank בתחילת התהליך?",
  //     answers: shuffleArray([
  //       {
  //         text: "חוסר בנתונים מתאימים לחיזוי רווחיות בתנאים שונים",
  //         isCorrect: true,
  //       },
  //       { text: "חוסר אמון מצד לקוחות קיימים", isCorrect: false },
  //       { text: "חוסר שימוש בטכנולוגיות אינטרנט", isCorrect: false },
  //       { text: "חוסר ברצון לבצע ניסויים עם לקוחות", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד Signet Bank התמודדו עם הפסדים כתוצאה מניסויים?",
  //     answers: shuffleArray([
  //       { text: "הם ראו בהפסדים השקעה ברכישת נתונים", isCorrect: true },
  //       { text: "הם הפסיקו את הניסויים לאחר הפסד ראשון", isCorrect: false },
  //       { text: "הם חזרו למודלים מסורתיים של ברירת מחדל", isCorrect: false },
  //       { text: "הם שינו את התנאים לכל הלקוחות באופן אחיד", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מה הדגישה הדוגמה של Signet Bank לגבי מדע הנתונים?",
  //     answers: shuffleArray([
  //       { text: "הצורך להשקיע בנתונים כדי לשפר קבלת החלטות", isCorrect: true },
  //       {
  //         text: "חשיבות השימוש רק בנתונים קיימים ולא בניסויים",
  //         isCorrect: false,
  //       },
  //       { text: "חוסר יעילות של מודלים לחיזוי רווחיות", isCorrect: false },
  //       {
  //         text: "צמצום ההפסדים ללא פיתוח טכנולוגיות מתקדמות",
  //         isCorrect: false,
  //       },
  //     ]),
  //   },
  //   {
  //     question: "מהו שיעור 'charge-off' וכיצד הוא הושפע מניסויי Signet Bank?",
  //     answers: shuffleArray([
  //       {
  //         text: "אחוז החובות שלא נפרעו, שהכפיל את עצמו כתוצאה מהניסויים",
  //         isCorrect: true,
  //       },
  //       { text: "אחוז הלקוחות שנטשו את הבנק", isCorrect: false },
  //       { text: "שיעור ההצטרפות של לקוחות חדשים", isCorrect: false },
  //       { text: "מדד לרווחיות הלקוחות בתנאי אשראי משתנים", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "מדוע Signet Bank ראו ערך בהפסדים זמניים?",
  //     answers: shuffleArray([
  //       { text: "הם התייחסו להפסדים כעלות לאיסוף נתונים", isCorrect: true },
  //       { text: "הם ראו בהם הכרח לחיזוק המודל המסורתי", isCorrect: false },
  //       {
  //         text: "הם ניסו להוריד את ההשקעה בטכנולוגיות מתקדמות",
  //         isCorrect: false,
  //       },
  //       { text: "הם שאפו לצמצם את הוצאות הפרסום", isCorrect: false },
  //     ]),
  //   },
  //   {
  //     question: "כיצד Signet Bank שינו את השוק באמצעות טכנולוגיות מדע נתונים?",
  //     answers: shuffleArray([
  //       {
  //         text: "על ידי הצעת תנאים משתנים ללקוחות בהתבסס על רווחיות",
  //         isCorrect: true,
  //       },
  //       { text: "על ידי שימוש בטכנולוגיות מסורתיות בלבד", isCorrect: false },
  //       { text: "על ידי הפסקת ניסויים עם לקוחות קיימים", isCorrect: false },
  //       { text: "על ידי הפחתת השימוש במודלים סטטיסטיים", isCorrect: false },
  //     ]),
  //   },
  // ];

  const questions = [
    {
      question: "מהו היסוד המסומן באות H?",
      answers: shuffleArray([
        { text: "מימן (Hydrogen)", isCorrect: true },
        { text: "חמצן (Oxygen)", isCorrect: false },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ליתיום (Lithium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות O ומשמש לנשימה תאית?",
      answers: shuffleArray([
        { text: "חמצן (Oxygen)", isCorrect: true },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "פחמן (Carbon)", isCorrect: false },
        { text: "פלואור (Fluorine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד כימי מסומן באות C והוא מרכיב בסיסי של חיים?",
      answers: shuffleArray([
        { text: "פחמן (Carbon)", isCorrect: true },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "סידן (Calcium)", isCorrect: false },
        { text: "זרחן (Phosphorus)", isCorrect: false },
      ]),
    },
    {
      question: "מהו היסוד המסומן באות N שנמצא בחלבונים וב-DNA?",
      answers: shuffleArray([
        { text: "חנקן (Nitrogen)", isCorrect: true },
        { text: "חמצן (Oxygen)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "נחושת (Copper)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Na ומשפיע על איזון נוזלים בגוף?",
      answers: shuffleArray([
        { text: "נתרן (Sodium)", isCorrect: true },
        { text: "אשלגן (Potassium)", isCorrect: false },
        { text: "מגנזיום (Magnesium)", isCorrect: false },
        { text: "גופרית (Sulfur)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות K ונמצא בבננות?",
      answers: shuffleArray([
        { text: "אשלגן (Potassium)", isCorrect: true },
        { text: "נתרן (Sodium)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "כספית (Mercury)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד חיוני לבניית עצמות ושינויים?",
      answers: shuffleArray([
        { text: "סידן (Calcium)", isCorrect: true },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "פלואור (Fluorine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Fe ונמצא בדם?",
      answers: shuffleArray([
        { text: "ברזל (Iron)", isCorrect: true },
        { text: "ניקל (Nickel)", isCorrect: false },
        { text: "קובלט (Cobalt)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
      ]),
    },
    {
      question: "מהו היסוד המסומן באות P ומשמש באנרגיה תאית?",
      answers: shuffleArray([
        { text: "זרחן (Phosphorus)", isCorrect: true },
        { text: "פלואור (Fluorine)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
        { text: "אבץ (Zinc)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות He והוא גז אציל?",
      answers: shuffleArray([
        { text: "הליום (Helium)", isCorrect: true },
        { text: "חמצן (Oxygen)", isCorrect: false },
        { text: "ניאון (Neon)", isCorrect: false },
        { text: "ארגון (Argon)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Au והוא מתכת יקרה?",
      answers: shuffleArray([
        { text: "זהב (Gold)", isCorrect: true },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "פלטינה (Platinum)", isCorrect: false },
        { text: "נחושת (Copper)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Hg והוא מתכת נוזלית בטמפרטורת החדר?",
      answers: shuffleArray([
        { text: "כספית (Mercury)", isCorrect: true },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "פלטינה (Platinum)", isCorrect: false },
        { text: "עופרת (Lead)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Pb והוא רעיל במקרים מסוימים?",
      answers: shuffleArray([
        { text: "עופרת (Lead)", isCorrect: true },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Cl והוא מחטא מים?",
      answers: shuffleArray([
        { text: "כלור (Chlorine)", isCorrect: true },
        { text: "ברום (Bromine)", isCorrect: false },
        { text: "יוד (Iodine)", isCorrect: false },
        { text: "פלואור (Fluorine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות F ונמצא במשחות שיניים?",
      answers: shuffleArray([
        { text: "פלואור (Fluorine)", isCorrect: true },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "גופרית (Sulfur)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Xe והוא גז אציל?",
      answers: shuffleArray([
        { text: "קסנון (Xenon)", isCorrect: true },
        { text: "ניאון (Neon)", isCorrect: false },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ארגון (Argon)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Rn והוא גז רדיואקטיבי?",
      answers: shuffleArray([
        { text: "רדון (Radon)", isCorrect: true },
        { text: "קסנון (Xenon)", isCorrect: false },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ניאון (Neon)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות I והוא חיוני לתפקוד בלוטת התריס?",
      answers: shuffleArray([
        { text: "יוד (Iodine)", isCorrect: true },
        { text: "פלואור (Fluorine)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
        { text: "כלור (Chlorine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות B ונמצא בזכוכית מחוסמת?",
      answers: shuffleArray([
        { text: "בור (Boron)", isCorrect: true },
        { text: "סיליקון (Silicon)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
        { text: "גרמניום (Germanium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Si והוא המרכיב העיקרי של חול?",
      answers: shuffleArray([
        { text: "סיליקון (Silicon)", isCorrect: true },
        { text: "גופרית (Sulfur)", isCorrect: false },
        { text: "זרחן (Phosphorus)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות W ומשמש לנורות להט?",
      answers: shuffleArray([
        { text: "טונגסטן (Tungsten)", isCorrect: true },
        { text: "זהב (Gold)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "נחושת (Copper)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Zn ונמצא במשחות לטיפול בפצעים?",
      answers: shuffleArray([
        { text: "אבץ (Zinc)", isCorrect: true },
        { text: "מגנזיום (Magnesium)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
        { text: "סידן (Calcium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Cu והוא מוליך חשמל מצוין?",
      answers: shuffleArray([
        { text: "נחושת (Copper)", isCorrect: true },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ag ונחשב למוליך חשמל טוב מאוד?",
      answers: shuffleArray([
        { text: "כסף (Silver)", isCorrect: true },
        { text: "נחושת (Copper)", isCorrect: false },
        { text: "זהב (Gold)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Al ומשמש לייצור פחיות שתייה?",
      answers: shuffleArray([
        { text: "אלומיניום (Aluminum)", isCorrect: true },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "בדיל (Tin)", isCorrect: false },
        { text: "נחושת (Copper)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Sr והוא משמש בזיקוקים?",
      answers: shuffleArray([
        { text: "סטרונציום (Strontium)", isCorrect: true },
        { text: "ליתיום (Lithium)", isCorrect: false },
        { text: "בריום (Barium)", isCorrect: false },
        { text: "אשלגן (Potassium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ni ונמצא במטבעות?",
      answers: shuffleArray([
        { text: "ניקל (Nickel)", isCorrect: true },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "נחושת (Copper)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ti והוא קל וחזק במיוחד?",
      answers: shuffleArray([
        { text: "טיטניום (Titanium)", isCorrect: true },
        { text: "פלדה (Steel)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
        { text: "אבץ (Zinc)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Pt ונמצא בתכשיטים יוקרתיים?",
      answers: shuffleArray([
        { text: "פלטינה (Platinum)", isCorrect: true },
        { text: "זהב (Gold)", isCorrect: false },
        { text: "כסף (Silver)", isCorrect: false },
        { text: "עופרת (Lead)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ra והוא רדיואקטיבי?",
      answers: shuffleArray([
        { text: "רדיום (Radium)", isCorrect: true },
        { text: "אורניום (Uranium)", isCorrect: false },
        { text: "פלוטוניום (Plutonium)", isCorrect: false },
        { text: "פרנציום (Francium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות U והוא משמש בדלק גרעיני?",
      answers: shuffleArray([
        { text: "אורניום (Uranium)", isCorrect: true },
        { text: "פלוטוניום (Plutonium)", isCorrect: false },
        { text: "רדיום (Radium)", isCorrect: false },
        { text: "תוריום (Thorium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Pu והוא משמש בנשק גרעיני?",
      answers: shuffleArray([
        { text: "פלוטוניום (Plutonium)", isCorrect: true },
        { text: "אורניום (Uranium)", isCorrect: false },
        { text: "רדיום (Radium)", isCorrect: false },
        { text: "פרוטקטיניום (Protactinium)", isCorrect: false },
      ]),
    },
    {
      question: "מהו היסוד המסומן באות H?",
      answers: shuffleArray([
        { text: "מימן (Hydrogen)", isCorrect: true },
        { text: "חמצן (Oxygen)", isCorrect: false },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ליתיום (Lithium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות O ומשמש לנשימה תאית?",
      answers: shuffleArray([
        { text: "חמצן (Oxygen)", isCorrect: true },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "פחמן (Carbon)", isCorrect: false },
        { text: "פלואור (Fluorine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות C והוא מרכיב בסיסי של חיים?",
      answers: shuffleArray([
        { text: "פחמן (Carbon)", isCorrect: true },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "סידן (Calcium)", isCorrect: false },
        { text: "זרחן (Phosphorus)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות B והוא משמש בזכוכית מחוסמת?",
      answers: shuffleArray([
        { text: "בור (Boron)", isCorrect: true },
        { text: "סיליקון (Silicon)", isCorrect: false },
        { text: "אלומיניום (Aluminum)", isCorrect: false },
        { text: "גרמניום (Germanium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Li והוא משמש בסוללות?",
      answers: shuffleArray([
        { text: "ליתיום (Lithium)", isCorrect: true },
        { text: "נתרן (Sodium)", isCorrect: false },
        { text: "אשלגן (Potassium)", isCorrect: false },
        { text: "בריום (Barium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות F ונמצא במשחות שיניים?",
      answers: shuffleArray([
        { text: "פלואור (Fluorine)", isCorrect: true },
        { text: "כלור (Chlorine)", isCorrect: false },
        { text: "יוד (Iodine)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ne והוא גז אציל?",
      answers: shuffleArray([
        { text: "ניאון (Neon)", isCorrect: true },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ארגון (Argon)", isCorrect: false },
        { text: "קריפטון (Krypton)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Na ונמצא במלח בישול?",
      answers: shuffleArray([
        { text: "נתרן (Sodium)", isCorrect: true },
        { text: "אשלגן (Potassium)", isCorrect: false },
        { text: "לתיום (Lithium)", isCorrect: false },
        { text: "בריום (Barium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Mg ונמצא בתוספי תזונה?",
      answers: shuffleArray([
        { text: "מגנזיום (Magnesium)", isCorrect: true },
        { text: "סידן (Calcium)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "אבץ (Zinc)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Al ונמצא בפחיות שתייה?",
      answers: shuffleArray([
        { text: "אלומיניום (Aluminum)", isCorrect: true },
        { text: "נחושת (Copper)", isCorrect: false },
        { text: "ברזל (Iron)", isCorrect: false },
        { text: "אבץ (Zinc)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Si והוא המרכיב העיקרי של חול?",
      answers: shuffleArray([
        { text: "סיליקון (Silicon)", isCorrect: true },
        { text: "זרחן (Phosphorus)", isCorrect: false },
        { text: "בור (Boron)", isCorrect: false },
        { text: "גרמניום (Germanium)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות P והוא חיוני ליצירת ATP?",
      answers: shuffleArray([
        { text: "זרחן (Phosphorus)", isCorrect: true },
        { text: "גופרית (Sulfur)", isCorrect: false },
        { text: "חנקן (Nitrogen)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות S ומשמש ביצור גפרורים?",
      answers: shuffleArray([
        { text: "גופרית (Sulfur)", isCorrect: true },
        { text: "זרחן (Phosphorus)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
        { text: "יוד (Iodine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Cl ומשמש לחיטוי מים?",
      answers: shuffleArray([
        { text: "כלור (Chlorine)", isCorrect: true },
        { text: "פלואור (Fluorine)", isCorrect: false },
        { text: "ברום (Bromine)", isCorrect: false },
        { text: "יוד (Iodine)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות Ar והוא גז אציל?",
      answers: shuffleArray([
        { text: "ארגון (Argon)", isCorrect: true },
        { text: "הליום (Helium)", isCorrect: false },
        { text: "ניאון (Neon)", isCorrect: false },
        { text: "קריפטון (Krypton)", isCorrect: false },
      ]),
    },
    {
      question: "איזה יסוד מסומן באות K והוא חיוני לתפקוד השרירים?",
      answers: shuffleArray([
        { text: "אשלגן (Potassium)", isCorrect: true },
        { text: "נתרן (Sodium)", isCorrect: false },
        { text: "סידן (Calcium)", isCorrect: false },
        { text: "מגנזיום (Magnesium)", isCorrect: false },
      ]),
    },
  ];

  let currentQuestionIndex = 0;
  let correctAnswersCount = 0;
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result");

  function showQuestion(index) {
    const q = questions[index];
    questionContainer.innerHTML = `
          <h2>${index + 1}. ${q.question}</h2>
          <div class="answers">
            ${q.answers
              .map(
                (answer, i) =>
                  `<button class="btn answer-button" data-is-correct="${answer.isCorrect}">${answer.text}</button>`
              )
              .join("")}
          </div>
        `;

    document.querySelectorAll(".answer-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const isCorrect = btn.getAttribute("data-is-correct") === "true";
        handleAnswer(isCorrect, btn, index);
      });
    });

    updateProgress(index, questions.length);
  }

  function handleAnswer(isCorrect, clickedButton, currentIndex) {
    const correctAnswerText = questions[currentIndex].answers.find(
      (answer) => answer.isCorrect
    ).text;

    const feedback = document.createElement("div");
    feedback.textContent = isCorrect
      ? "תשובה נכונה!"
      : `תשובה לא נכונה! התשובה הנכונה היא: ${correctAnswerText}`;
    feedback.classList.add(
      "alert",
      isCorrect ? "alert-success" : "alert-danger",
      "mt-3"
    );
    document.getElementById("question-container").appendChild(feedback);

    // Highlight buttons
    document.querySelectorAll(".answer-button").forEach((btn) => {
      btn.disabled = true;
      if (btn.getAttribute("data-is-correct") === "true") {
        btn.classList.add("btn-success"); // Correct answer
      } else {
        btn.classList.add("btn-danger"); // Incorrect answer
      }
    });

    setTimeout(() => {
      feedback.remove();
      if (currentIndex < questions.length - 1) {
        showQuestion(currentIndex + 1);
      } else {
        showResults();
      }
    }, 2000); // Waits 6 seconds before moving to the next question automatically
  }

  function shuffleArray(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function updateProgress(currentIndex, totalQuestions) {
    document.getElementById("progress").textContent = `שאלה ${
      currentIndex + 1
    } מתוך ${totalQuestions}`;
  }

  function showResults() {
    questionContainer.style.display = "none";
    resultContainer.innerHTML = `
          <h2>סיימת את החידון!</h2>
          <p>ענית נכון על ${correctAnswersCount} מתוך ${questions.length} שאלות.</p>
          <button onclick="location.reload()">התחל מחדש</button>
        `;
    resultContainer.style.display = "block";
  }

  // Start with the first question
  showQuestion(currentQuestionIndex);
});
