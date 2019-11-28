// 判断屏幕尺寸
var width = innerWidth;
console.log(width);
if (width > 1200) {
    $(".search input").on("click", function(e) {
        $this = $(this);
        $this.siblings('.result').removeClass('displaynone');

        $(document).one("click", function() {
            $this.siblings('.result').addClass('displaynone');
        });
        e.stopPropagation();
    });
    //头部导航
    $('.js_m_nav').on('mouseenter', '.box', function() {
        var $this = $(this);
        $this.find('.list').addClass('displayblock');
    });
    $('.js_m_nav').on('mouseleave', '.box', function() {
        var $this = $(this);
        $this.find('.list').removeClass('displayblock');
    });
    $('.box .list').on('mouseenter', 'a', function() {
        var $this = $(this);
        $this.addClass('bg_white');
    });
    $('.box .list').on('mouseleave', 'a', function() {
        var $this = $(this);
        $this.removeClass('bg_white');
    });
    $('.js_box_buy').on('mouseenter', function() {
        var $this = $(this);
        $this.find('ul').addClass('displayblock');
    });
    $('.js_box_buy').on('mouseleave', function() {
        var $this = $(this);
        $this.find('ul').removeClass('displayblock');
    });
    $('.js_left').on('mouseenter', 'li', function() {
        var $this = $(this);
        $this.addClass('bg_white');
        $this.find('.content').removeClass('displaynone');
        $this.siblings('li').find('.content').addClass('displaynone');
    });
    $('.js_left').on('mouseleave', 'li', function() {
        var $this = $(this);
        $this.removeClass('bg_white');
        $this.find('.content').addClass('displaynone');
    });
    // 头部头像
    $('.user').on('mouseenter', 'i', function() {
        $this = $(this);
        $this.addClass('displaynone');
        $this.siblings('i').removeClass('displaynone');
    });
    $('.user').on('mouseleave', 'i', function() {
        $this = $(this);
        $this.removeClass('displaynone');
        $this.siblings('i').addClass('displaynone');
    });
    // 尾部二维码
    $('.js_weichat').on('mouseenter', function() {
        $this = $(this);
        $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displaynone');
    });
    $('.js_weichat').on('mouseleave', function() {
        $this = $(this);
        $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displaynone');
    });
}