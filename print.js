let str = 'my name is ${name}, i am from ${city}'
let info = {
  name: 'Aaderbrane',
  city: 'guangzhou'
}

console.log(printf(str, info))

function printf(str, info) {
  return str.replace(/\${(\w+)}/g, function($1, $2){
      return info[$2]
  })
}
