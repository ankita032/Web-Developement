import java.util.Scanner;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int t,num,sum=0,prod=0;
		String number;
		int[] arr;
		
		System.out.println("Enter number of test cases : ");
        t = sc.nextInt();
        while(t!=0)
        {
          System.out.println("Enter the input num : ");
          num = sc.nextInt();
          number = Integer.toString(num);
          arr = new int[number.length()];
          for(int i=0;i<number.length();i++)
          {
            arr[i] = number.charAt(i) - '0';
            prod = arr[i] * arr[i] * arr[i];
            sum += prod;
          }
          if(sum == num)
            System.out.println("Yes");
          else
            System.out.println("No");
            
          t--;
        }
    }
}
