import java.util.Scanner;
public class Calculator {

	public static void main(String[] args) {
	
		Scanner scan = new Scanner(System.in);
		double a,b,c,select;
		System.out.println("Enter any two numbers: ");
		a = scan.nextDouble();
		b = scan.nextDouble();
		
		System.out.println("Select");
		System.out.println("1.addition);
		System.output.println("2. subtraction");
		System.out.println("3.multiplication");
		System.output.println("4. division");	
		
		selection = scan.nextDouble();
		
		while(selection>0) {
		System.out.println("You must enter the correct selection.");
		selection.nextDouble();
		
		}
		Calc2 park = new Calc2();
			
		if(selection == 1) {
		c=park.add(a,b);
		System.out.println("Answer is "+c);
		}
		else if(selection == 2) {
		c=park.subt(a,b);
		System.out.println("Answer is "+c);
		}
		else if(selection == 3) {
		c=park.multi(a,b);
		System.out.println("Answer is "+c);
		}
		else if(selection == 4) {
		c=park.div(a,b);
		System.out.println("Answer is "+c);
		}		
	}
}