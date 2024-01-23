import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.burger').addEventListener('click', function () {
        this.classList.toggle('burger--active')
        document.querySelector('.nav').classList.toggle('active')
    })

    const tabsBtn = document.querySelectorAll('[data-tab]')
    const tabsContet = document.querySelectorAll('[data-tab-content]')
    tabsBtn.forEach(element => {
        element.addEventListener('click', function (e) {
            tabsBtn.forEach(btn => {
                btn.classList.remove('active');
            });
            element.classList.add('active');
            let currentBtn = e.target.dataset.tab
            tabsContet.forEach(item => {
                if (currentBtn == item.dataset.tabContent) {
                    item.classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            });
        })
    });

    AOS.init();
})



