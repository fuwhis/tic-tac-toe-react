export const BANK_NAME = [
    {
        code: '39',
        name: '경남'
    },
    {
        code: '34',
        name: '광주'
    },
    {
        code: '12',
        name: '단위농협'
    },
    {
        code: '32',
        name: '부산'
    },
    {
        code: '45',
        name: '새마을'
    },
    {
        code: '64',
        name: '산림'
    },
    {
        code: '88',
        name: '신한'
    },
    {
        code: '48',
        name: '신협'
    },
    {
        code: '27',
        name: '씨티'
    },
    {
        code: '20',
        name: '우리'
    },
    {
        code: '71',
        name: '우체국'
    },
    {
        code: '50',
        name: '저축'
    },
    {
        code: '37',
        name: '전북'
    },
    {
        code: '35',
        name: '제주'
    },
    {
        code: '90',
        name: '카카오'
    },
    {
        code: '89',
        name: '케이'
    },
    {
        code: '92',
        name: '토스'
    },
    {
        code: '81',
        name: '하나'
    },
    {
        code: '54',
        name: 'HSBC'
    },
    {
        code: '03',
        name: '기업'
    },
    {
        code: '06',
        name: '국민'
    },
    {
        code: '31',
        name: '대구'
    },
    {
        code: '02',
        name: '산업'
    },
    {
        code: '11',
        name: "농협"
    },
    {
        code: '23',
        name: 'SC제일'
    },
    {
        code: '07',
        name: '수협'
    },
    {
        code:'3K',
        name:'기업비씨'
    },
    {
        code:'46',
        name:'광주'
    },
    {
        code:'71',
        name:'롯데'
    },
    {
        code:'30',
        name:'산업'
    },
    {
        code:'31',
        name:'BC'
    },
    {
        code:'51',
        name:'삼성'
    },
    {
        code:'38',
        name:'새마을'
    },
    {
        code:'41',
        name:'신한'
    },
    {
        code:'62',
        name:'신협'
    },
    {
        code:'36',
        name:'씨티'
    },
    {
        code:'33',
        name:'우리'
    },
    {
        code:'W1',
        name:'우리'
    },
    {
        code:'37',
        name:'우체국'
    }
]

export enum PAYMENT_METHOD {
    CARD = "CARD",
    VIRTUAL_ACCOUNT = "VIRTUAL_ACCOUNT",
    EASY_PAY = "EASY_PAY",
    MOBILE_PHONE = "MOBILE_PHONE",
    TRANSFER = "TRANSFER",
    GIFT_CERTIFICATE = "GIFT_CERTIFICATE",
    CASH_RECEIPT = "CASH_RECEIPT",
    CULTURE_GIFT_CERTIFICATE = "CULTURE_GIFT_CERTIFICATE", // Không có tên docs, nhưng Su định nghĩa, có thì show ko thì skip :)
    BOOK_GIFT_CERTIFICATE = "BOOK_GIFT_CERTIFICATE", // Không có tên docs, nhưng Su định nghĩa, có thì show ko thì skip :)
    GAME_GIFT_CERTIFICATE = "GAME_GIFT_CERTIFICATE", // Không có tên docs, nhưng Su định nghĩa, có thì show ko thì skip :)
}

export enum PAYMENT_STATUS {
    WAITING_FOR_DEPOSIT = "WAITING_FOR_DEPOSIT",
    DONE = "DONE",
    COMPLETE_TO_DEPOSIT = "COMPLETE_TO_DEPOSIT",
    CANCELED = "CANCELED"
}