// 注意： 轮播图不能判断， 要单独拿出来，因为这是通用的属性

// 公共轮播图
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
    $this = $(this);
    index = $this.index();
    bannerSlider2.goto(index);
    $this.find('span').addClass('bg_color_005aaa');
    $this.siblings('li').find('span').removeClass('bg_color_005aaa');
});
// 人气排行轮播图
// 注意：xinxuan_bottom上面已经绑定一次了，不可以二次绑定，必须加好完整类提高优先级
var index2 = 0;
var paihangbannerSlider = $(".js_paihang_bottom.xinxuan_bottom").oSlider({
    loop: true,
    pager: ".js_paihang_banner",
    pagerHover: false,
    // speed: 3000,
    startFn: function() {},
    playFn: function(p) {
        console.log(p.i);
        $('.js_xinxuan_tab_box.paihang_tab_box ul li').eq(p.i).find('span').addClass('bg_color_005aaa');
        $('.js_xinxuan_tab_box.paihang_tab_box ul li').eq(p.i).siblings('li').find('span').removeClass('bg_color_005aaa');

    }
});
paihangbannerSlider.init();
$('.js_xinxuan_tab_box.paihang_tab_box ul').on('click', 'li', function() {
    $this = $(this);
    index2 = $this.index();
    console.log(index2);
    paihangbannerSlider.goto(index2);

});


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

} else if (width > 750 && width < 1200) {
    // 点击出现弹窗
    $('.js_imenu').on('click', function() {
        $this = $(this);
        var flag = $this.siblings('.js_center_box').find('.js_m_nav').hasClass('displayblock');
        console.log(flag);
        if (!flag) {
            $this.siblings('.js_center_box').find('.js_m_nav').addClass('displayblock');
            $('.js_boxlayer').removeClass('displaynone');
            $('body').css({ overflow: 'hidden', height: "100%" });
        } else {
            $this.siblings('.js_center_box').find('.js_m_nav').removeClass('displayblock');
            $('.js_boxlayer').addClass('displaynone');
            $('body').css('overflow', 'auto');
        }

    });
    // 导航部分手风琴 box_dan
    $('.js_m_nav').on('click', '.box_dan', function() {
        $this = $(this);
        var flag = $this.find('.list').hasClass("displayblock");
        if (!flag) {
            $this.find('.list').addClass('displayblock');
            $this.find('.little_tittle').addClass('color_0c5ca8');
            $this.find('.little_tittle i').removeClass('displaynone');
            $this.find('.iconshouji1').addClass('displaynone');
            $this.find('.iconshouji-').removeClass('displaynone');
            $this.siblings('.box_dan').find('.list').removeClass("displayblock");
        } else {
            $this.find('.list').removeClass('displayblock');
            $this.find('.little_tittle').removeClass('color_0c5ca8');
            $this.find('.little_tittle i').addClass('displaynone');
            $this.find('.iconshouji1').removeClass('displaynone');
            $this.find('.iconshouji-').addClass('displaynone');
        }
    });
    // 导航部分 box_xiao box_buy 出现
    $('.js_m_nav').on('click', '.js_box_buy', function() {
        $this = $(this);
        var flag3 = $this.find('.left').hasClass('displayblock');
        if (!flag3) {
            $this.siblings('.box').addClass('displaynone');
            $this.find('.left').addClass('displayblock');
            var height = innerHeight;
            height = (height - 100) + "px";
            var widthli = (width - 180) + "px";
            $this.find('.left').css('height', height);
            $this.find('.left .js_content').css('height', height);
            $this.find('.left .js_content').css('width', widthli);
        }
        // else {
        //     $this.siblings('.box').removeClass('displaynone');
        //     $this.find('.left').removeClass('displayblock');
        // }
    });
    // 出现之后的点击更换
    $('.js_left li:first').addClass('bg_white');

    $('.js_left').on('click', 'li', function() {
        $this = $(this);
        $this.addClass('bg_white');
        $this.find('.js_content').removeClass('displaynone');
        $this.siblings('li').find('.js_content').addClass('displaynone');
        $this.siblings('li').removeClass('bg_white');
    });
}