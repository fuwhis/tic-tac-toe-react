import { Box } from '@mui/material'
import { Typography } from '../../shared'
import styles from './footer.module.scss'

const FooterLink = ({ text }: { text: string }) => (
  <Box component={'a'} href='/'>
    <Typography bold='lg' className={styles.link_text}>
      {text}
    </Typography>
  </Box>
)

const Footer = () => {
  return (
    <Box component={'footer'} className={styles.footer}>
      <Box mt={2} className={styles.company_info}>
        <FooterLink text='회사소개' />
        <FooterLink text='이용약관' />
        <FooterLink text='개인정보처리방침' />
      </Box>
      <Typography>주소 : 서울특별시 oo구 oo로 ooo</Typography>
    </Box>
  )
}

export default Footer
