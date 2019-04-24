/**
 * listSize(prop) 	列表的元素个数
 * pos 						列表当前的位置
 * length 					返回列表中元素的个数
 * clear 					清空列表中的所有元素
 * toString 				返回列表的字符串样式
 * getElement 			返回当前位置的元素
 * insert 					在现有元素后插入新元素
 * append 					在列表的末尾添加新元素
 * remove 					从列表中删除元素
 * front 					将列表的当前位置移动到第一个元素
 * end 						将列表的当前位置移动到最后一个元素
 * prev 						将当前位置后移一位
 * next 						将当前位置前移一位
 * currPos 				返回列表的当前位置
 * moveTo 					将当前位置移动到指定位置
 */

class List {
	constructor() {
		this.listSize = 0
		this.pos = 0
		this.dataStore = [] // 初始化一个空数组来保存列表元素
	}
	append(element) {
		this.dataStore[this.listSize++] = element
	}

	remove(element) {
		var foundAt = this.find(element)
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1)
				--this.listSize
			return true
		}
		return false
	}

	length() {
		return this.listSize
	}

	toString() {
		return this.dataStore
	}

	find(element) {
		for (var i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] === element) {
				return i
			}
		}
		return -1
	}

	insert(element, after) {
		var insertPos = this.find(after)
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element)
				++this.listSize
			return true
		}
		return false
	}

	claer(){
		delete this.dataStore
		this.dataStore = []
		this.listSize = this.pos = 0
	}
	contains(element) {
		for(var i = 0; i < this.dataStore.length; i++) {
			if(this.dataStore[i] === element) {
				return true
			}
		}
		return false
	}

	front(){
		this.pos = 0
	}

	end(){
		this.pos = this.listSize - 1
	}
	prev(){
		if(this.pos > 0) {
			--this.pos
		}
	}
}


	var names = new List()
	names.append('1')
	names.append('2')
	names.append('3')
	console.log(names)
	names.remove('3')
	console.log(names)