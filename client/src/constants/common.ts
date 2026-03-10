//Constants
export const FONT_SIZE = {
  xs: 8,
  '2xs': 10,
  sm: 12,
  '2sm': 13,
  md: 14,
  '2md': 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 36,
}

export const FONT_WEIGHT = {
  sm: 200,
  md: 400,
  lg: 500,
  xl: 600,
  '2xl': 700,
}

//Enumes
export enum PATH {
  DASHBOARD = '/dashboard',
  /* User path */
  USER = '/user',
  USER_LIST = 'user-list',
  DETAIL_USER = ':id',
  SEND_MAIL = 'send-mail',
  INQUIRY_MANAGEMENT = 'inquiry-list',
  CMS = '/cms',
  LMS = '/lms',
  /* Content path */
  CONTENT = 'content-management',
  CONTENT_LIST = 'content-list',
  REGISTER_CONTENT = 'register-content',
  VIDEO_CMS_DETAIL = 'VIDEO/:id',
  QUIZ_CMS_DETAIL = 'QUIZ/:id',
  DETAIL_CONTENT = ':id',
  CMS_EDIT_CONTENT = 'edit/:type/:id',
  SIMULATION_CROWD_FUNDING_RESULT = 'simulation-crowdfunding-result',

  /* Reference room path */
  REFERENCE_ROOM = '/reference-room',
  REFERENCE_ROOM_LIST = 'reference-room-list',
  REGISTER_REFERENCE_ROOM = 'register-reference-room',

  /* Content blog path */
  CONTENT_BLOG = 'content-blog',
  REGISTER_CONTENT_BLOG = 'register-content-blog',
  EDIT_CONTENT_BLOG = 'edit/:type/:id',
  DETAIL_VIDEO_CONTENT_BLOG = 'detail/VIDEO/:id',
  DETAIL_CARD_NEWS_CONTENT_BLOG = 'detail/CARD_NEWS/:id',

  // Setting path
  SETTING = '/setting',
  CODE_MANAGEMENT = 'code-management',
  BANNER_MANAGEMENT = 'banner-management',

  /* Community path */
  COMMUNITY = '/community',
  EVENT_SUPPORT_PROJECT = 'event',
  EVENT_DETAIL = 'event-detail/:id',
  TALENT = 'talent',
  TALENT_DETAIL = ':id',
  TEAM_BUILDING = 'team-building',
  TEAM_BUILDING_DETAIL = ':id',
  APPLICANT_DETAIL = ':id/applicant/:recruitId',
  OUTSOURCING_MANAGEMENT = 'outsourcing',
  STARTUP_QNA = 'start-up',

  BANNER = '/banner',
  TOOLKIT = '/toolkit',
  PAYMENT = '/payment',
  LOGIN = '/login',

  COMMENT = 'comment',
  OFFICIAL_OUTSOURCING_COMPANY = 'official-outsourcing-company',
  OFFICIAL_OUTSOURCING_COMPANY_REGISTER = 'official-outsourcing-company/register',
  OFFICIAL_OUTSOURCING_COMPANY_DETAIL = 'official-outsourcing-company/:id',
  STARTUP_TALK = 'startup-talk',
  STARTUP_TALK_DETAIL = 'startup-talk/:id',
  EDUCATION_EVENT = 'education-event',
  EDUCATION_EVENT_REGISTER = 'register-education-event',
  EDUCATION_EVENT_DETAIL_INTERNAL = 'detail/INTERNAL/:id',
  EDUCATION_EVENT_DETAIL_EXTERNAL = 'detail/EXTERNAL/:id',
  EDUCATION_EVENT_EDIT = 'edit/:type/:id',
  APPLICATION_EDUCATION_EVENT = 'application-education-event',
  MENTOR_APPLICATION_MANAGEMENT = 'mentor-application-management',
  MENTOR_APPLICATION_MANAGEMENT_DETAIL = ':id',
  MENTOR_MANAGEMENT = 'mentor-management',
  MENTOR_MANAGEMENT_DETAIL = ':id',
  MENTOR_NOTICE = 'mentor-notice',
  MENTOR_NOTICE_DETAIL = ':id',
  MENTOR_NOTICE_REGISTER = 'register',

  /* Startup toolkit path */
  STARTUP_TOOLKIT = '/startup-toolkit',
  DATA_ROOM = 'data-room',
  DATA_ROOM_REGISTER = 'register-data-room',
  DATA_ROOM_DETAIL = 'detail/:id',
  DATA_ROOM_EDIT = 'edit/:id',
  RESULT_OF_CONTEST = 'result-of-contest',
  CROWD_FUNDING = 'crowd-funding',

  /* Project path */
  PROJECT = '/project',
  PROJECT_LIST = 'project-list',
  GROUP_PROJECT = 'group-project',
  GROUP_PROJECT_REGISTER = 'register',
  GROUP_PROJECT_DETAIL = ':id',

  NOTICES = 'notices',
  TEMPLATE_MANAGEMENT = 'template',
  TEMPLATE_MANAGEMENT_DETAIL = 'detail/:id',
  TEMPLATE_MANAGEMENT_EDIT = 'edit/:id',
  TEMPLATE_MANAGEMENT_REGISTER = 'register',
  NOTICE_DETAIL = 'detail/:id',
  NOTICE_EDIT = 'edit/:id',
  NOTICE_REGISTER = 'register',

  /* Report path */
  REPORT = 'report',
  MENTORING_REVIEW = 'mentoring-review',

  /* Calculate path */
  CALCULATE_MANAGEMENT = '/calculate',
  SETTLEMENT_HISTORY = 'settlement-history',

  /* Sales path */
  SALES = '/sales',
  MENTORING_PRODUCT = 'mentoring-product',
  PRODUCT_LIST = 'product',
  PRODUCT_REGISTER = 'register',
  PRODUCT_DETAIL = ':id',
  COUPON = 'coupon',
  COUPON_REGISTER = 'register',
  COUPON_DETAIL = ':id',

  PAYMENT_MANAGEMENT = 'payment-management',
  REFUND_MANAGEMENT = 'refund-management',

  /* Course path */
  COURSE_MANAGEMENT = 'course-management',
  COURSE_MANAGEMENT_DETAIL = ':id',
  REGISTER_COURSE = 'register-course',
  EDIT_COURSE = 'edit/:id',

  COURSE_APPLY_MANAGEMENT = 'course-apply-management',

  // Deck path
  DECK = '/deck',
  DECK_MANAGEMENT = 'deck-management',
  COLOR_MANAGEMENT = 'color-management',

  /* Inventory path */
  INVENTORY = 'inventory',

  /* Font path */
  FONT = 'font',
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum CASE_TYPE {
  Schumpeter = 'Schumpeter',
  OTHER = 'other',
}

export enum CATEGORY {
  NORMAL = 'NORMAL',
  CONTENT = 'CONTENT',
  EVENT = 'EVENT',
  POOL = 'POOL',
  COMPANY = 'COMPANY',
  TEAM_BUILDING = 'TEAM_BUILDING',
  STARTUP_TALK = 'STARTUP_TALK',
  REFERENCE_ROOM = 'REFERENCE_ROOM',
  MENTORING = 'MENTORING',
  CMS = 'CMS',
}

export enum SUB_CATEGORY {
  NORMAL = 'NORMAL',
  CONTENT = 'CONTENT',
  EVENT = 'EVENT',
  POOL = 'POOL',
  OCCUPATION = 'OCCUPATION',
  DEGREE = 'DEGREE',
  INDUSTRY = 'INDUSTRY',
  TEAM_BUILDING = 'TEAM_BUILDING',
  STARTUP_TALK = 'STARTUP_TALK',
  REFERENCE_ROOM = 'REFERENCE_ROOM',
  OUTSOURCING = 'OUTSOURCING',
  PRODUCT = 'PRODUCT',
  GAME = 'GAME',
  BLOCKCHAIN = 'BLOCKCHAIN',
  MENTORING = 'MENTORING',
  CMS_VIDEO = 'CMS_VIDEO',
  CMS_QUIZ = 'CMS_QUIZ',
}
export const limitData = (arr: number[] = [50, 100]) => {
  return arr.map((x: number) => ({
    label: `${x} 개씩 보기`,
    value: x,
  }))
}

export enum CONTENT_STATUS_ENUM {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
  ALL = 'ALL',
}

export const CONTENT_STATUS: Record<string, string> = {
  [CONTENT_STATUS_ENUM.ACTIVE]: '노출',
  [CONTENT_STATUS_ENUM.DEACTIVATED]: '미 노출',
}

export const CONTENT_STATUS_LABEL_CHK = [
  { label: CONTENT_STATUS[CONTENT_STATUS_ENUM.ACTIVE], value: CONTENT_STATUS_ENUM.ACTIVE },
  { label: CONTENT_STATUS[CONTENT_STATUS_ENUM.DEACTIVATED], value: CONTENT_STATUS_ENUM.DEACTIVATED },
]

export const COMMENT_STATUS = {
  ACTIVE: 'ACTIVE',
  HIDED: 'HIDED',
  ALL: 'ALL',
}

export const CONTENT_TYPE = {
  VIDEO: 'VIDEO',
  CARD_NEWS: 'CARD_NEWS',
}

export enum EDUCATION_EVENT_TYPE {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
}

export const ContentType = {
  [CONTENT_TYPE.VIDEO]: '영상',
  [CONTENT_TYPE.CARD_NEWS]: '카드',
}

export enum CLASSIFICATION_ENUM {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
}

export const CONTENT_STATUS_ARRAY = [
  { label: '전체', value: '' },
  { label: '노출', value: CONTENT_STATUS_ENUM.ACTIVE },
  { label: '미 노출', value: CONTENT_STATUS_ENUM.DEACTIVATED },
]

export enum REPORT_TYPE {
  POST = 'POST',
  COMMENT = 'COMMENT',
  ACCOUNT = 'ACCOUNT',
  CHALLENGE = 'CHALLENGE',
  CONTENT = 'CONTENT',
  CONTENT_BLOG = 'CONTENT_BLOG',
  STARTUP_TALK = 'STARTUP_TALK',
  MENTORING = 'MENTORING',
  MENTORING_REVIEW = 'MENTORING_REVIEW',
  PROJECT = 'PROJECT',
  EVENT = 'EVENT',
  PORTFOLIO = 'PORTFOLIO',
  TEAM_BUILDING = 'TEAM_BUILDING',
  OUTSOURCING_COMPANY = 'OUTSOURCING_COMPANY',
  REFERENCE_ROOM = 'REFERENCE_ROOM',
  CROWDFUNDING = 'CROWDFUNDING',
  QUALIFICATION_TEST = 'QUALIFICATION_TEST',
}

export enum ORDER_STATUS {
  REMOVED = 'REMOVED',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  REFUND = 'REFUND',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  IN_PROCESS = 'IN_PROCESS',
}

export enum MENTORING_TRANSACTION_STATUS {
  PENDING = 'PENDING',
  COMPLETE = 'COMPLETE',
  CANCELED = 'CANCELED',
}

// ---------------------------
export enum SOCKET_EVENTS {
  JOIN_GAME = 'join_game',
  ROOM_JOIN_ERROR = 'room_join_error',
  ROOM_JOINED = 'room_joined',
  START_GAME = 'start_game'
}

export enum GAME_STATE {
  /** When the player opens the game but has not yet joined a room */
  NOT_STARTED = "not_started",
  /** When the player enters their username and room ID, but the game hasn't begun */
  JOINING = "joining",
  /** When the first player is waiting for the second player to join */
  WAITING_FOR_PLAYER = "waiting_for_player",
  /** When both players have joined, and the game is ready to begin */
  READY = "ready",
  /** When the game is actively being played */
  IN_PROGRESS = "in_progress",
  /** When the game ends with a winner or a draw */
  GAME_OVER = "game_over"
}

