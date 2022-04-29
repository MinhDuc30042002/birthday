/**
 * 
 * 
 * 
 */


const getBirthDay = document.getElementsByTagName('td')
const currentDay = document.querySelector('.day')
const go = document.querySelector('.button')
const gift = document.querySelector('.button-gift')

/**
 * Use for loop 
 * Click tag td get birthday or get current day
 */

for (let index = 0; index < getBirthDay.length; index++) {
    getBirthDay[index].addEventListener('click', () => {
        currentDay.innerHTML = getBirthDay[index].innerHTML;

        go.addEventListener('click', () => {
            if (currentDay.innerHTML === '29') {
                window.location.href = 'sn.html'
            } else {
                alert('Minh Đức cho bạn 1 cú đấm vì đã quên ngày sinh nhật của mình');
            }
        })
    });
}


gift.addEventListener('click', () => {
    alert('Bạn nhận được 1 cuốn sách do Minh Đức tự chọn :))). Cụ thể là cuốn sách lập trình game với Unity');
})