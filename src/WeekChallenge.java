
public class WeekChallenge {

	public static void main(String[] args){
		
		//1. create a new instance of the Calculator class
		Calculator parker = new Calculator();

		
		//2. call each of Calculator's instance methods: add, subtract, multiply, and divide
		// with arguments of your choice, assigning the result to the variables below
		
		double additionResult = parker.add(1,2); // parker.add calls the method
		double subtractionResult = parker.subt(1,2);
		double multiplicationResult = parker.multi(1,2);
		double divisionResult = parker.div(1,2);
		
		
		
		

		//3. print the value of each of these variables to the console with a descriptive message
		System.out.println("The result of the addition operation is " + additionResult);
		System.out.println("The result of the subtraction operation is " + subtractionResult);
		System.out.println("The answer to the multiplication operation is " + multiplicationResult);
		System.out.println("The answer to the division operation is " + divisionResult);
		//4. implement the static fizzBuzz method in this class and call it from the main method
	}
	
	int m = 1;
	int n = 50;
	int[] numbers = {5,8};
	String[] terms = {"Fizz","Buzz"};
	fizzbuzz(m,n,numbers,terms);
	
	public static void fizzBuzz(int m, int n, int[] numbers, String[] terms){
		
		if (m > n || term.length != numbers.length) {
			System.out.println("Error!");
	}
	else {
		for (int i = m; i <= n; i++) {
			String fuckoff = " ";
			for(int y=0; y < numbers.length; y++){ //you suck
				if (i % numbers[y] == 0) {
					fuckoff = fuckoff + terms[y];
				}
			}
			
				if (fuckoff != " ") {
					System.out.println(fuckoff);
				}
				else {
					System.out.println(i);
				}
}