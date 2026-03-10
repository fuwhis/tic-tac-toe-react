import {PATH} from './common'

export const breadcrumbNameMap: {[key: string]: string} = {
  /* User name map */
  [PATH.USER]: '회원관리', // User Management
  [PATH.DASHBOARD]: '대시보드', // dashboard
  [PATH.USER_LIST]: '회원관리', // User List
  [PATH.SEND_MAIL]: '회원 이메일 발송',
  [PATH.INQUIRY_MANAGEMENT]: '문의관리',

  /* Content name map */
  [PATH.CONTENT]: '콘텐츠 관리',
  [PATH.CONTENT_LIST]: '콘텐츠 관리',
  [PATH.CONTENT_BLOG]: '콘텐츠 블로그',

  /* Community name map */
  [PATH.COMMUNITY]: '콘텐츠 관리',
  [PATH.EVENT_SUPPORT_PROJECT]: '교육행사/지원사업',
  [PATH.TALENT]: '인재 풀',
  [PATH.TEAM_BUILDING]: '팀빌딩',
  [PATH.OUTSOURCING_MANAGEMENT]: '외주기업 관리',
  [PATH.STARTUP_QNA]: '스타트업 Q&A 관리',

  [PATH.CODE_MANAGEMENT]: '코드 관리',
  [PATH.REPORT]: '통합 신고 관리',
  [PATH.OFFICIAL_OUTSOURCING_COMPANY]: '공식 외주 기업',
  [PATH.STARTUP_TALK]: '스타트업 토크',
  [PATH.EDUCATION_EVENT]: '교육행사',
  [PATH.BANNER_MANAGEMENT]: '배너 관리',
  [PATH.APPLICATION_EDUCATION_EVENT]: '교육행사 신청 관리',

  [PATH.DATA_ROOM]: '자료실 관리',
  [PATH.PRODUCT_LIST]: '상품 관리',
  [PATH.PAYMENT_MANAGEMENT]: '결제 관리',
  [PATH.REFUND_MANAGEMENT]: '취소/환불 관리',
  [PATH.MENTOR_APPLICATION_MANAGEMENT]: '멘토 신청 리스트',
  [PATH.MENTOR_MANAGEMENT]: '멘토 현황 관리',
  [PATH.MENTOR_NOTICE]: '멘토 공지사항 관리',
  [PATH.MENTORING_REVIEW]: '통합 신고 관리',
  [PATH.SETTLEMENT_HISTORY]: '정산 내역',
  [PATH.MENTORING_PRODUCT]: '상품 관리',
  [PATH.COUPON]: '쿠폰 관리',
  [PATH.RESULT_OF_CONTEST]: '아이디어 경진대회',
  [PATH.CROWD_FUNDING]: '모의 크라우드 펀딩',

  [PATH.COURSE_APPLY_MANAGEMENT]: '과정 신청 관리',

  [PATH.COURSE_MANAGEMENT]: '과정 관리',

  [PATH.SIMULATION_CROWD_FUNDING_RESULT]: '모의 크라우드 펀딩',

  /* Project */
  [PATH.PROJECT]: '프로젝트',
  [PATH.NOTICES]: '공지/광고 관리',
  [PATH.COLOR_MANAGEMENT]: 'IR 색상 관리',
  [PATH.TEMPLATE_MANAGEMENT]: '템플릿 관리',
  [PATH.DECK_MANAGEMENT]: '덱 리스트 관리',
  [PATH.PROJECT_LIST]: '프로젝트 리스트 관리',
  [PATH.GROUP_PROJECT]: '단체 프로젝트 관리',
  [PATH.INVENTORY]: '인벤토리 관리',
  [PATH.FONT]: 'IR 폰트 관리',
}
