//this old version and its very bad
//i think i will rewrite this website on react and with cleaner code
//but i don't know when ;)

function windowHeightCheck() {
    let progress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100
    document.querySelector('.under_bar_value').style.width = progress + '%'
    if(window.pageYOffset) {
        document.querySelector('.scroll_down i').classList.add('disabled')
        document.querySelector('.under_bar').classList.remove('unactive')
    }else{
        document.querySelector('.scroll_down i').classList.remove('disabled')
        document.querySelector('.under_bar').classList.add('unactive')
    }
    if(pageYOffset > 730) {
        document.querySelector('.en .lang_bar .lang_bar_value').style.width = '70%'
        document.querySelector('.ru .lang_bar .lang_bar_value').style.width = '95%'
        document.querySelector('.ua .lang_bar .lang_bar_value').style.width = '86%'
        setTimeout(() => {
            document.querySelector('.en_per').style.opacity = '1'
            document.querySelector('.ua_per').style.opacity = '1'
            document.querySelector('.ru_per').style.opacity = '1'
        }, 3000)
    }
}
