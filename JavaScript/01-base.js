
// toPrimitive => 该方法在转基本类型的时候优先级最高

var a = {
	[Symbol.toPrimitive](){
		return '123'
	}
}
console.log(a + 1) // 1231


// ======== 运算符

// [1, 2] + [2, 1]
console.log([1,2].toString() + [2,1].toString()) // ==> 1,22,1

// 'a' + + 'b'
console.log('a' + + 'b') // aNaN 因为 + 'b' => NaN

// 解析 [] == ![] // -> true
// ![] 表示将空数组强制转换为 Boolean，得到的是 !true -> false
console.log([].valueOf()) // []
console.log([] == true)
/**
 * 1. [] == false  
 * 2. [] == ToNumber(false) Object 和 Boolean 比较 先将 Boolean 转为 Number
 * 3. [] == 0 
 * 4. toPrimitive([]) == 0 // Object 和 Number 比较， 将 Object 转为原始值
 * 5. [].valueOf() 没有转换为原始值 则调用[].toString()方法 => ''
 * 6. '' == 0
 * 7. 0 == 0
 */