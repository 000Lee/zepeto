const gnb = document.querySelector('nav .gnb')
const mWrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
mWrap.appendChild(gnbClone)
$('nav .sub').hide()
$('nav .sub_bg').hide()
$('nav').on('mouseover',function(){
    $('nav .sub').stop(true).slideDown(300)
$('nav .sub_bg').stop(true).slideDown(300)
})
$('nav').on('mouseout',function(){
    $('nav .sub').stop(true).slideUp()
$('nav .sub_bg').stop(true).slideUp()
})
//mobile menu
// 모바일 메뉴 숨기기
$('.m_nav_wrap .gnb').hide();
let state = false;
$('.m_nav').on('click',function(){
    if(state == false){
        $('.m_nav_wrap .gnb').show();
        state = true
    }else{
        $('.m_nav_wrap .gnb').hide();
        state = true
    }
})