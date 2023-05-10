# class 및 인스턴스 연습
# class의 상속 연습
# 조건1. 두가지 클래스를 사용한다.
# 조건2. 구매자가 물건 구매 시 해당 물품의 재고 개수가 차감되어진다.
class Product(object):
    def __init__(self, 품명, 개수, 가격):
        self.product_name = 품명
        self.product_count = 개수
        self.product_price = 가격
    
    def __str__(self):
        return f'품명:{self.product_name}, 개수:{self.product_count}, 가격:{self.product_price}'

시리얼 = Product('시리얼', 20, 8900)
초코칩쿠키 = Product('초코칩쿠키', 30, 4300)
칸쵸 = Product('칸쵸', 12, 1400)

class UserInfo(Product):
    dataset = []

    def __init__(self, 이름, 닉네임, 휴대폰번호, 생년월일, 주소, 예치금, 고객등급):      
        self.user_name = 이름
        self.nickname = 닉네임
        self.user_phone = 휴대폰번호
        self.user_birth = 생년월일
        self.user_addr = 주소
        self.user_deposit = 예치금
        self.user_rank = 고객등급

    def 물품구매(self, product, count):
        self.user_deposit -= product.product_price
        시리얼.product_count -= count


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

print(시리얼)