import Swal from 'sweetalert2'

type SwalIcon = 'success' | 'error' | 'warning' | 'info' | 'question'

type SwalPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'center'
  | 'center-start'
  | 'center-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

type JoinRoomContext = {
  informLabel?: string
  toastText: string
  iconType: SwalIcon
  timer?: number
  position: SwalPosition
}

const ToastAlert = ({ toastText, iconType, timer, position }: JoinRoomContext) => {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })
  Toast.fire({
    icon: iconType,
    title: toastText ? 'Signed in successfully' : 'NaN'
  })

  return null
}

export default ToastAlert
