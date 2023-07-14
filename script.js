function decimalToBinary(num) {
  //Write you code here
   let ans  = 0;
	let p  = 1;
	while(num > 0)
		{
			let dig =  num % 2;
			num  = math.floor(num/2);
			ans += dig * p ;
			p = p * 10;
		}
	return ans;
}

window.decimalToBinary = decimalToBinary;
// 