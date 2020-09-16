import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
 {
	public static void main (String[] args)
	 {
	 //code
	    Scanner sc = new Scanner(System.in);
	    int t = sc.nextInt();
	    int i,j;
	    while(t>0){
	        int x = sc.nextInt();
	        int y = sc.nextInt();
	        ArrayList<Integer> p = new ArrayList<Integer>();
	        ArrayList<Integer> q = new ArrayList<Integer>();
	        ArrayList<Integer> r = new ArrayList<Integer>();
	        
	        for(i=0;i<x;i++){
	            int pele = sc.nextInt();
	            p.add(pele);
	        }
	            
	        for(j=0;j<y;j++){
	            int qele = sc.nextInt();
	            q.add(qele);
	        }
	            
	        r.addAll(p);
	        r.addAll(q);
	        
	        Collections.sort(r);
	        
	        for(i=0;i<x+y;i++)
	            System.out.print(r.get(i) + " ");
	            
	        t--;
	        
	    }
	 }
}