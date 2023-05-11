# class 및 인스턴스 연습
# class의 상속 연습
# 조건1. 두가지 클래스를 사용한다. (상속 연습해보기)
# 조건2. 구매자가 물건 구매 시 해당 물품의 재고 개수가 차감되어진다.
class Product:
    def __init__(self, 품명, 개수, 가격):
        self.product_name = 품명
        self.product_count = 개수
        self.product_price = 가격
    
    def __str__(self):
        return f'품명:{self.product_name}, 개수:{self.product_count}, 가격:{self.product_price}'

시리얼 = Product('시리얼', 20, 8900)
초코칩쿠키 = Product('초코칩쿠키', 30, 4300)
칸쵸 = Product('칸쵸', 12, 1400)

# 강사님 조언1. 부모 클래스의 정보를 자식 클래스가 가질 필요가 있는지로 판단
#              따라서 Product함수를 부모클래스로, UserInfo를 자식 클래스로 상속하는
#              방법은 옳은 방법이 아님.

class UserInfo:
    dataset = []

    def __init__(self, 이름, 닉네임, 휴대폰번호, 생년월일, 주소, 예치금, 고객등급):      
        self.user_name = 이름
        self.nickname = 닉네임
        self.user_phone = 휴대폰번호
        self.user_birth = 생년월일
        self.user_addr = 주소
        self.user_deposit = 예치금
        self.user_rank = 고객등급

# 강사님 조언 2.물품구매 매서드에서 파라미터 값으로 준
#              product를 사용하여 개수의 카운터를 차감시킬 수 있으니 고정값을
#              줄 필요는 없음.

    def 물품구매(self, product, count):
        self.user_deposit -= product.product_price
        product.product_count -= count


홍길동 = UserInfo(
                    '홍길동', 
                    '길동이', 
                    '010-0000-0000', 
                    '1993/10/10', 
                    '경기도 광주시', 
                    1000000, 
                    'VIP')

장판수 = UserInfo(
                    '장판수', 
                    '판자', 
                    '010-1111-1111', 
                    '1992/02/10', 
                    '경기도 광명시', 
                    20000000, 
                    'Silver')

홍길동.물품구매(시리얼, 2)
홍길동.user_deposit
시리얼.product_count

장판수.물품구매(시리얼, 10)
시리얼.product_count

# 질문1. 그리고 물품 구매 함수 코드를 짜면서 구매시 개수가 차감되도록 짜보고 싶었는데요. 코드를 실행하고 난 후에 해당 물품의 개수 데이터가 원본 데이터에 덮여지는 건지, 아님 이번 실행에서만 차감된 개수가 보여지는 건지

# 답변: 해당 물품의 개수 데이터가 원본 데이터에서 수정이 되는 것입니다. 
#      '덮어지는 것' == '이번 실행에서만 차감된 개수가 보여지는 것' 
#      이 두개가 같은 얘기입니다.
#      좀 더 명확하게는 '시리얼 인스턴스의 변수가 수정된다'입니다.

print(시리얼)