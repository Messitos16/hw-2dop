var values = [100, 55, 15, 300, 20];
var sum = 0;

for (var i = 0; i < values.length; i++) {
console.log(sum + " + " + values[i] + " = " + (sum + values[i]) + ";");
sum += values[i];
}

console.log("Результат: " + sum)