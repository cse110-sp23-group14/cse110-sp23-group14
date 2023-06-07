import { Horoscope } from "./horoscope.js";

/**
 * Event listener function for the 'DOMContentLoaded' event.
 *
 * @param {Event} event -The 'DOMContentLoaded' event object
 */
window.addEventListener('DOMContentLoaded', async (event)=> {

    const navButton = document.getElementById('nav-button');
    const navMenu = document.getElementsByClassName('nav-content')[0];
    const navIconBars = document.getElementsByClassName('fa-bars')[0];
    const navIconXMark = document.getElementsByClassName('fa-xmark')[0];
    const navContainer = document.getElementsByClassName('nav-container')[0];
    const horoscopeButton = document.getElementById('horoscope-button');
    
    let isNavOpen = false;

    const dailyReport = document.querySelector('.report');

    function openNav() {
        // Open Nav
        isNavOpen = true;
        navMenu.classList.add('nav-show');
        navMenu.classList.remove('nav-hide');
        navIconBars.classList.add('icon-hide');
        navIconXMark.classList.remove('icon-hide');
        navContainer.classList.add('nav-show-background');
        navContainer.classList.remove('nav-background-hide');
    }

    function closeNav() {
        // Close Nav
        isNavOpen = false;
        navMenu.classList.add('nav-hide');
        navMenu.classList.remove('nav-show');
        navIconBars.classList.remove('icon-hide');
        navIconXMark.classList.add('icon-hide');
        navContainer.classList.add('nav-background-hide');
        navContainer.classList.remove('nav-show-background');
    }

    /**
    * Event listener function for the 'click' event on the navButton.
    *
    * @param {Event} event -The 'click' event object
    */
    navButton.addEventListener('click', (event) => {
        if (isNavOpen) {
            console.log("Closing nav...");
            closeNav();
        } else {
            console.log("Open nav...");
            openNav();
        }
    });

    const currentDate = new Date();
    const currentDateStr = currentDate.toDateString();

    const reportDate = new Date();
    const reportDateStr = reportDate.toDateString();

    /**
     * get the last visted date from localStorage
     * report being highlighted on the next day
    */
    const lastVisitDate = localStorage.getItem('last_visit');

    if (lastVisitDate !== currentDateStr) {
        localStorage.removeItem('report_read');
    }
    if (currentDateStr === reportDateStr) {
        const isRead = localStorage.getItem('report_read');
        if(!isRead) {
            dailyReport.classList.add('highlight');
        }
    }

    dailyReport.addEventListener('click', function() {
        dailyReport.classList.remove('highlight');
        localStorage.setItem('report_read', true);
    });
    localStorage.setItem('last_visit', currentDateStr);

    // Set horoscope popup text
    const dailyTitle = document.getElementsByClassName("daily-title")[0];
    
    const sign = Horoscope.getSign();
    if (!sign) {
        dailyTitle.innerHTML = "We don't know your sign yet! <br>Please fill out your settings!";
    }
    else {
        dailyTitle.innerHTML = `${sign}`;
    }

    const dailyDate = document.getElementsByClassName("daily-date")[0];
    const date = new Date().toLocaleDateString();
    dailyDate.innerHTML = `${date}`;

    const dailyContent = document.getElementsByClassName("daily-content")[0];
    dailyContent.innerHTML = Horoscope.generateHoroscope();
  
    dailyContent.innerHTML = ""; // Clear the initial content
  
    function typeWriter(text, i) {
      if (i < text.length) {
        dailyContent.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => {
            typeWriter(text, i);
                }, 50);
            }
        }
  
    const contentText = Horoscope.generateHoroscope(); // Retrieve the content text
    typeWriter(contentText, 0);

    const shareBtn = document.querySelector('.share-btn');
    const shareContent = document.querySelector('.daily-content').innerHTML;

    /**
     * If the user hasn't inputted their information yet, don't display the share button.
     */
    if (!sign) {
        shareBtn.style.display = 'none';
    }
    else {
        shareBtn.style.display = 'default';
    }
    /**
     * Copy daily-horoscope to cliipboard when share button is clicked
     */
    shareBtn.addEventListener('click', async (event) => {
        try {
            await navigator.clipboard.writeText('Hey 💖, I just checked my daily horoscope ✨and I couldn\'t wait to share it with you! According to the stars 🌌, for ' + sign + ':\n' + shareContent + '\nHow about you? Open our app and check your own forecast🌤, and let\'s compare our results📈. Who knows what the universe has in store for us today!');
            console.log('Copy success');    // only for testing purpose
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    });

    const menuLinks = document.querySelectorAll('.nav a');
    for (const link of menuLinks) {
        console.log(link);
        link.addEventListener('click', (event) => {
            closeNav();
        });
    }


    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    /**
     * Scrolls to the target element smoothly.
     *
     * @param {Element} target - The target element to scroll to
     */
    function scrollToElement(target) {
        if (isMobile) {
            const offset = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        } else {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    document.getElementById('settings-link').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        scrollToElement(target);
    });

    document.getElementById('home-link').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        scrollToElement(target);
    });

    document.getElementById('report-link').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        scrollToElement(target);
    });
});

