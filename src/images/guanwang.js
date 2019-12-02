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
    // 导航栏下面的轮播图
    var bannerSlider = $(".js_banner").oSlider({
        loop: true,
        pager: ".js_pager",
        pagerHover: false,
        speed: 3000,
        startFn: function() {
            // console.log("1");
        },
        playFn: function() {
            // console.log("1");
        }
    });
    bannerSlider.init();

    // 头部轮播图
    $('.js_banner').on('mouseenter', function() {
        $this = $(this);
        $this.find('.btn_prev').removeClass('displaynone');
        $this.find('.btn_next').removeClass('displaynone');
    });
    $('.js_banner').on('mouseleave', function() {
        $this = $(this);
        $this.find('.btn_prev').addClass('displaynone');
        $this.find('.btn_next').addClass('displaynone');
    });


    // 爆款商品轮播图
    var starbannerSlider = $(".js_star_banner").oSlider({
        loop: true,
        pager: ".js_star_pager",
        pagerHover: false,
        // speed: 3000,
        // startFn: function() {
        //     console.log("开始");
        // },
        // playFn: function() {
        //     console.log("play");
        // }
    });
    starbannerSlider.init();
    // 轮播图箭头
    $('.btn_prev').html('<i class="iconfont iconshangyige"></i>');
    $('.btn_next').html('<i class="iconfont iconxiayige"></i>');
    // 添加隐藏类
    $('.btn_prev').addClass('displaynone');
    $('.btn_next').addClass('displaynone');
    // 爆款商品轮播图
    $('.js_star_banner').on('mouseenter', function() {
        $this = $(this);
        $this.find('.btn_prev').removeClass('displaynone');
        $this.find('.btn_next').removeClass('displaynone');
    });
    $('.js_star_banner').on('mouseleave', function() {
        $this = $(this);
        $this.find('.btn_prev').addClass('displaynone');
        $this.find('.btn_next').addClass('displaynone');
    });

    // 心选轮播图
    var index = 0;
    var bannerSlider2 = $(".js_xinxuan_bottom").oSlider({
        loop: true,
        pager: ".js_pager2",
        pagerHover: false,
        // speed: 3000,
        startFn: function() {

        },
        playFn: function(p) {
            // console.log(p.i);
            $('.js_xinxuan_tab_box ul li').eq(p.i).find('span').addClass('bg_color_005aaa');
            $('.js_xinxuan_tab_box ul li').eq(p.i).siblings('li').find('span').removeClass('bg_color_005aaa');
        }
    });
    bannerSlider2.init();

    // 将swiper和tab选项卡绑定
    $('.js_xinxuan_tab_box ul').on('click', 'li', function(e) {
        // 获取当前索引
        index = $(this).index();
        console.log(index);
        bannerSlider2.goto(index);
        $this = $(this);
        $this.find('span').addClass('bg_color_005aaa');
        $this.siblings('li').find('span').removeClass('bg_color_005aaa');
    });
    // 人气排行轮播图

    var paihangbannerSlider = $(".js_paihang_bottom").oSlider({
        loop: true,
        pager: ".js_paihang_banner",
        pagerHover: false,
        speed: 3000,
        startFn: function() {
            console.log("开始");
        },
        playFn: function() {
            console.log("play");
        }
    });
    paihangbannerSlider.init();
}