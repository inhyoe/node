
    public class Number4 {
        public static void main(String[] args) {
            
            
            int n = getInt("10000000001");
            System.out.println(n);
        }
        
        public static int getInt(String str) {
        
            int sum = 0;
            
            //마지막 값인경우
            if(str.length()==1)
                return Integer.parseInt(str);
            
            //자릿값
            int pow = (int)Math.pow(2, str.length()-1);
            
            //첫자리 추출
            int value = Integer.parseInt(str.substring(0,1));
            
            //첫자리 값이 1인 경우
            if(value == 1)
                //1 * 자릿수값, * 1 은 의미 없으므로 pow만 저장
                //else 인경우 0의 값이므로, value=0이므로 그대로 value값 사용
                value = pow;
            
            //자릿수값을 합계에 더하고,
            //현재 자릿수 제외하고 나머지 자릿수 재귀호출
            sum = value + getInt(str.substring(1));
            
            //합계 반환
            return sum;
        }
        
    }
