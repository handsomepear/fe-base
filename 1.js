/** 
 * 求 某个整数区间内 某个数字出现的次数
 * @param  {[Number]} start    区间开始
 * @param  {[Number]} end      区间结束
 * @param  {[Number | String]} matchNum 匹配项
 * @return {[Number]}          匹配项出现的次数
 */
const count = (start, end, matchNum) => {
	if(matchNum === undefined) {
		return 0
	}
	const str = new Array((Math.abs(end - start) + 1)).fill('').map((_, index) => index + start).toString()
	const matchResult = str.match(new RegExp(matchNum, 'g'))
	return matchResult ? matchResult.length : 0
}

console.log(count(11,23,2))