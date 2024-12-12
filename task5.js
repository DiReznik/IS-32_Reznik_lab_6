function checkBrackets(str) {
    const stack = [];
    const bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        // Якщо це відкрита дужка, додаємо її до стеку
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        }
        // Якщо це закрита дужка, перевіряємо чи відповідає остання відкрита
        else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
                return false;
            }
        }
    }

    // Якщо стек порожній, всі дужки коректно закриті
    return stack.length === 0;
}

// Приклади використання
console.log(checkBrackets("function someFn() { return [1, 2, 3]; }")); // true
console.log(checkBrackets("function someFn() { return [1, 2, 3; }"));  // false
console.log(checkBrackets("(a + b) * {c - [d / (e + f)]}"));           // true
console.log(checkBrackets("(a + b * {c - [d / (e + f)])}"));           // false
