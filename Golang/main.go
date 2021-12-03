package main

import(
	"fmt"
	
)

// func printPrimeNumbers(num1,num2 int)  {
// 	if num1<2 || num2<2{
// 		fmt.Print("Number must be Greater Than 2")
// 		return;
// 	}
// 	for num1<=num2{
// 		isPrime:= true;

// 		for i:=2;i<=int(math.Sqrt(float64(num1)));i++{
// 			if num1%i==0{
// 				isPrime=false
// 				break
// 			}
// 		}
// 		if isPrime{
// 			fmt.Printf("%d ",num1)
// 		}
// 		num1++
// 	}
// 	fmt.Println()
// }

// func main()  {
// 	printPrimeNumbers(5,15)
// 	printPrimeNumbers(3,1000)
// }




// func printBar(arr [5] int){
// 	var max int = 0
// 	for i:=0;i<len(arr);i++{
// 		if(max<arr[i]){
// 			max = arr[i]
// 		}
// 	}

// 	for i:=max;i>=0;i--{
// 		var str string = ""
// 		for j:=0;j<len(arr);j++{
// 			if(arr[j]<=i){
// 				str = str + "\t"
// 			}else{
// 				str = str + "*\t"
// 			}
// 		}
// 		fmt.Println(str)
// 	}
// }
// func main()  {
// 	arr:=[5]int{5,3,2,5,4}
// 	printBar(arr)
// }



// func linerSearch(dataList []int, key int) bool{
// 	for _, item:=range dataList{
// 		if item==key{
// 			return true
// 		}
// 	}
// 	return false
// }  

// func main()  {
// 	arr:=[]int{2,3,4,5,6}
// 	fmt.Println(linerSearch(arr,5))
// }

type Car struct{
	Model string
	Milege int
	Brand string
	
}
func main()  {
	var car=Car("x3",20, "BMW")
	fmt.Println(car.Model)
}