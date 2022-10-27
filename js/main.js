/*====== SHOW SIDEBAR =======*/
const navMenu = document.getElementById("sidebar"),
        navTopgle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close")
        
/* ========= SIDEBAR Show ==========*/ 
/* ====== VOLidate if constant Exists =========*/ 
if(navTopgle) {
    navTopgle.addEventListener("click",()=> {
        navMenu.classList.add("show-sidebar")
    })
}

/* ========= SIDEBAR Show ==========*/ 
/* ====== VOLidate if constant Exists =========*/ 
if(navClose) {
    navClose.addEventListener("click",()=> {
        navMenu.classList.remove("show-sidebar")
    })
}


/* ========= skills ============*/

const   tabs =document.querySelectorAll('[data-target]'),
        tabContent=document.querySelectorAll('[data-content')
        

        tabs.forEach(tab => {
            tab.addEventListener("click",() => {
                
                const target = document.querySelector(tab.dataset.target)
                console.group(target);
                tabContent.forEach(tabContents => {
                    tabContents.classList.remove("skills__active");
                })
                target.classList.add('skills__active');
                
                tabs.forEach(tab => {
                    tab.classList.remove("skills__active")

                    
                })

                tab.classList.add(`skills__active`)
            })
        })



        /*  =========== MIXITUP FIKTER PORTFOLIO ========= */

        let mixerProtfolio = mixitup('.work__container', {
            selectors: {
                target: '.work__card'
            },
            animation: {
                duration: 300
            }
        });

        /*  =========== LINK Active work  ========= */

        const linkWork = document.querySelectorAll('.work__item');
        

        function activeWork () {
            linkWork.forEach(e =>e.classList.remove("active-work"))

            
            this.classList.add('active-work');
            
            }

        linkWork.forEach(i=> i.addEventListener("click", activeWork));

        /* ============ Work popup ========  */
        document.addEventListener("click",(e) => {
            if(e.target.classList.contains("work__button")) {
                tooglePortofiloPopup();
                protfolioItemDetails(e.target.parentElement);
            }
        })

        function tooglePortofiloPopup () {
            document.querySelector(".potfolio__popup").classList.toggle("open");
        }

        document.querySelector(".potfolio__popup-clase").addEventListener("click", tooglePortofiloPopup)

        function protfolioItemDetails(protfolioitem){
            document.querySelector(".pp__thumbnail img").src = protfolioitem.querySelector(".work__img").src;
            document.querySelector(".pottfolio__popup-subtitle span").innerHTML = protfolioitem.querySelector(".work__title").innerHTML;
            document.querySelector(".pottfolio__popup-body").innerHTML = protfolioitem.querySelector(".protofolio__item-details").innerHTML;
        }
        
        
        /* ========= INPUT ANIMATION ========*/

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value=="") {
        parent.classList.remove("focus");
    }
}
 

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc );
    input.addEventListener("blur",blurFunc );
})

/*======= SCROLL SECTIONS ACTIVE LINK ========*/
// get all sections that have an id defiend
const sections =document.querySelectorAll("section[id]")

//add an event listener listener for scroll
window.addEventListener("scroll",navHightlighter);

function navHightlighter() 
{
    //get current scroll position
    let scrollY =window.pageYOffset;

    //Now we loop through sections to get height , top and ID values for each   
    sections.forEach(current => {
        const sectionHeght = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeght)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
        
    })

}
