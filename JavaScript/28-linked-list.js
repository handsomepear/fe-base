var a = b => {
  console.log(b)
}
a('1')

class Node {
  constructor(data) {
    this.data = data // 数据
    this.next = null // 指针
  }
}
class Node {
  constructor(){
    console.log(this,age) // 指针
  }
}
class LinkedList {
  constructor() {
    // 初始化头结点
    this.head = new Node('head')
  }

  findByValue = value => {
    let currentNode = this.head
    while (currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next // 指针就是下一个结点
    }
    // 判断该结点是否找到
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  findByIndex = index => {
    let pos = 0
    let currentNode = this.head
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    // 判断该结点是否找到
    console.log(currentNode)
    return currentnode === null ? -1 : currentNode
  }

  insert = (value, element) => {
    let currentNode = this.findByValue(element)
    if (currentNode === -1) {
      return console.log('未找到插入位置!')
    }
    let newNode = new Node(value)
    newNode.next = currentNode.next // 新节点的指针指向当前结点的下一个结点
    currentNode.next = newNode // 当前节点的指针指向新节点
  }
  // 根据值删除节点
  delete = value => {
    let currentNode = this.head
    let preNode = null
    while (currentNode !== null && currentNode.data !== value) {
      preNode = currentNode
      currentNode = currentNode.next
    }
    if (currentNode === null) return -1
    preNode.next = currentNode.next // 上一个节点的指针指向下一个节点
  }
  print = () => {
    let currentNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

const linkedList = new LinkedList()

linkedList.insert('a', 'head')
linkedList.insert('b', 'a')
linkedList.insert('c', 'b')
linkedList.print()

linkedList.delete('b')

console.log(2 ** 3) // 2的三次幂