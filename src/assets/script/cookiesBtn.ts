let isConfirm = () => localStorage.getItem('confirm-cookies') === 'y'
const BTN_COOKIES = document.getElementById('btn-cookies-acc')
const BODY_COOKIES = document.getElementById('btn-cookies-body')
if (isConfirm()) {
  BODY_COOKIES.remove()
} else {
  BTN_COOKIES.onclick = function() {
    localStorage.setItem('confirm-cookies', 'y')
    BODY_COOKIES.remove()
  }
}
