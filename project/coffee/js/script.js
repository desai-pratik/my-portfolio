 
        // Tooltips hover
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        // toast
        const toastTrigger = document.getElementById('liveToastBtn')
        const toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', () => {
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
            })
        }

        // animate
        wow = new WOW(
            {
                boxClass: 'wow',      // default
                animateClass: 'animated', // default
                offset: 0,          // default
                mobile: true,       // default
                live: true        // default
            }
        )
        wow.init();


        // Header.

        
        function myFunction() {
                if ($(this).scrollTop() > 200) {
                    $('header').addClass('active')
                    $('header').removeClass('position-absolute')
                    $('#Back-To-Top').fadeIn()
                }
                else {
                    $('header').removeClass('active')
                    $('header').addClass('position-absolute')
                    $('#Back-To-Top').fadeOut()
                }
            } 

        $(document).ready(function () {
            myFunction();
            $(window).scroll(function () {
                myFunction();
            }) 
 
            $('#Back-To-Top').click(function () {
                $("html, body").animate({ scrollTop: 0 });
            })


   



        })

 