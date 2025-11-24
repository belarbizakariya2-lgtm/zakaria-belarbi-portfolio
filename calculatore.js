// اختر كل العناصر
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// متغير لتخزين القيمة الحالية
let currentInput = "";
let resultDisplayed = false;

// أضف حدث لكل زر
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

if (button.classList.contains('clear')) {
  // زر C
  currentInput = '';
  display.textContent = '0';
} else if (button.classList.contains('equal')) {
  // زر =
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
    resultDisplayed = true;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
} else {
  // أزرار الأرقام والعمليات
  if (resultDisplayed) {
    // إذا كان هناك نتيجة معروضة، نبدأ إدخال جديد
    if (/[0-9.]/.test(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
    resultDisplayed = false;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}
;
  });
});
