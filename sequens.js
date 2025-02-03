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
