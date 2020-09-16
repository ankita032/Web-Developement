import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) throws IOException{
		//code
		Scanner sc = new Scanner(System.in); 
		int t = sc.nextInt();
		
		while(t>0){
		    
		    List<Integer> list = new ArrayList<Integer>();
		   
		    int n = sc.nextInt();
		    for(int i=0;i<n;i++){
		        int ele = sc.nextInt();
		        list.add(ele);
		    }
		    
		    majorityelement(list,n);
		    t--;
		}
	}
		
	public static void majorityelement(List<Integer> list,int n){
	    int majority=0,majorityele=0;
        for(int i=0;i<n;i++){
		    int freq = Collections.frequency(list,list.get(i));
		    if(freq>(n/2) && freq>majority){
		        majority = freq;
		        majorityele = list.get(i);
		    }
		}
		if(majority>1)
		   System.out.println(majorityele);
		else
		   System.out.println("-1");
		
		return;
	}
}