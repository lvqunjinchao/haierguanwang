// 把一次性的东西放到read函数中
$(document).ready(function() {
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
        var $this = $(this);
        $this.find('.btn_prev').removeClass('displaynone');
        $this.find('.btn_next').removeClass('displaynone');
    });
    $('.js_banner').on('mouseleave', function() {
        var $this = $(this);
        $this.find('.btn_prev').addClass('displaynone');
        $this.find('.btn_next').addClass('displaynone');
    });


    // 爆款商品轮播图
    var starbannerSlider = $(".js_star_banner").oSlider({
        loop: true,
        pager: ".js_star_pager",
        pagerHover: false
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
        var $this = $(this);
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
        var $this = $(this);
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
        var $this = $(this);
        index2 = $this.index();
        console.log(index2);
        paihangbannerSlider.goto(index2);

    });

    // 注意：o_picture一定需要放在read里面
    // 响应式图片自己下载 start 头部下面第一个轮播第一张图片更换
    $(".o_picture").each(function() {
        $(this).oPicture({
            //自定义节点宽度
            // xs: 750,
        }).init();
    });
    // 响应式图片自己下载 end
    // 判断屏幕尺寸
    var width = $(window).width();
    var height = $(window).height();
    if (width > 1200) {
        // height = height + 'px';
        // 爆款 轮播图 start 有rem就足够了
        // 使用js会因为f12导致屏幕改变从而影响高度，所以使用rem即可
        // $('.star .star_banner li').css('height', height);
        // 爆款 轮播图 end

        $(".search input").on("click", function(e) {
            var $this = $(this);
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
            var $this = $(this);
            $this.addClass('displaynone');
            $this.siblings('i').removeClass('displaynone');
        });
        $('.user').on('mouseleave', 'i', function() {
            var $this = $(this);
            $this.removeClass('displaynone');
            $this.siblings('i').addClass('displaynone');
        });
        // 尾部二维码
        $('.js_weichat').on('mouseenter', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displaynone');
        });
        $('.js_weichat').on('mouseleave', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displaynone');
        });

    } else if (width < 1200) {
        // 手机端Pad端头部公用函数 start

        // 点击弹窗的其他地方，关闭弹窗 start
        $('.js_boxlayer').on('click', function() {
            var $this = $('.js_imenu');
            $this.siblings('.js_center_box').find('.js_m_nav').removeClass('displayblock');
            $('.js_boxlayer').addClass('displaynone');
            $('body').css('overflow', 'auto');
        });
        // 点击弹窗的其他地方，关闭弹窗 end

        // 点击出现弹窗
        $('.js_imenu').on('click', function() {
            var $this = $(this);
            var flag = $this.siblings('.js_center_box').find('.js_m_nav').hasClass('displayblock');
            // console.log(flag);
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
            var $this = $(this);
            var flag = $this.find('.list').hasClass("displayblock");
            if (!flag) {
                $this.find('.list').addClass('displayblock');
                $this.find('.little_tittle').addClass('color_0c5ca8');
                $this.siblings('.box_dan').find('.little_tittle').removeClass('color_0c5ca8');
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
            var $this = $(this);
            var flag3 = $this.find('.left').hasClass('displayblock');
            // console.log(flag3);
            if (!flag3) {
                $this.siblings('.box').addClass('displaynone');
                $this.find('.js_left').addClass('displayblock');
                var height2 = $(window).height();
                var widthli = $(window).width();
                // 获取html的rem的大小
                var htmlfont = parseFloat($('html').css('font-size'));
                // 判断屏幕大小二次赋值
                if (widthli > 750) {
                    height2 = (height2 - 100) + "px";
                    widthli = (widthli - 180) + "px";
                } else {
                    height2 = (height2 - 100) + "px";
                    widthli = (widthli - (htmlfont * 1.8)) + "px";
                }
                // 每一次点击的时候此li的时候，或者重置页面宽度的时候，需要重新获取宽度来重新计算
                // 1.点击的时候

                $this.find('.js_left').css('height', height2);
                $this.find('.js_left .js_content').css('height', height2);
                $this.find('.js_left .js_content').css('width', widthli);
                $this.find('.little_tittle').addClass('color_0c5ca8');
                $this.find('.little_tittle i').removeClass('displaynone');
                $this.find('.iconshouji1').addClass('displaynone');
                $this.find('.iconshouji-').removeClass('displaynone');
                // 同级的box_dan取消选中状态
                $this.siblings('.box_dan').find('.list').removeClass('displayblock');
                $this.siblings('.box_dan').find('.little_tittle').removeClass('color_0c5ca8');
                $this.siblings('.box_dan').find('.little_tittle i').addClass('displaynone');
                $this.siblings('.box_dan').find('.iconshouji1').removeClass('displaynone');
                $this.siblings('.box_dan').find('.iconshouji-').addClass('displaynone');
            } else {
                $this.siblings('.box').removeClass('displaynone');
                $this.find('.js_left').removeClass('displayblock');
                $this.find('.little_tittle').removeClass('color_0c5ca8');
                $this.find('.little_tittle i').addClass('displaynone');
                $this.find('.iconshouji1').removeClass('displaynone');
                $this.find('.iconshouji-').addClass('displaynone');
            }

        });
        // left出现之后的点击更换
        $('.js_left').on('click', 'li', function(event) {
            var $this = $(this);
            $this.addClass('bg_white');
            $this.find('.js_content').removeClass('displaynone');
            $this.siblings('li').find('.js_content').addClass('displaynone');
            $this.siblings('li').removeClass('bg_white');
            $this.find('.li_line').removeClass('displaynone');
            $this.siblings('li').find('.li_line').addClass('displaynone');
            // 阻止冒泡事件
            event.stopPropagation();

        });
        // 手机端头部搜索框
        $('.js_searchBtn').on('click', function() {
            var $this = $(this);
            $this.parents('.header2019').siblings('.js_m_search').removeClass('displaynone');
        });
        $('.js_search_close').on('click', function() {
            var $this = $(this);
            $this.parents('.js_m_search').addClass('displaynone');
        });
        // 手机端Pad端头部公用函数 end

        // 手机端js，虽然手机是750，但是手机的东西在>750的时候都是隐藏的，没有问题
        $('.js_home_bottom_menu').on('click', 'a', function() {
            var $this = $(this);
            $this.addClass('color_0c5ca8');
            $this.find('i').addClass('color_0c5ca8');
            $this.siblings('a').removeClass('color_0c5ca8');
            $this.siblings('a').find('i').removeClass('color_0c5ca8');
        });
        // imenu pc端鼠标事件，pad需要默认选中第一个
        $('.js_box_buy .js_left li:first').addClass('bg_white');
        $('.js_box_buy .js_left li:first .js_content').removeClass('displaynone');
        // 虽然是同样的名称.js_box_buy，但是第一个好使，对于第二个.js_box_buy，里面的first就会出问题！！！
        // 解决：增加权重，更加精确的选择
        $('.js_box_buy.box_buy .js_left li:first').addClass('bg_white');
        $('.js_box_buy.box_buy .js_left li:first .js_content').removeClass('displaynone');
    }
});



// 窗口函数改变执行的
$(window).resize(function() {
    var widthnow = $(window).width();
    if (widthnow < 750) {
        // 回到顶部,滚动判断
        $(".js_gototop").click(function() {
            $("html,body").animate({ scrollTop: 0 }, 500);
        });
        $(document).scroll(function() {
            var scroH = $(document).scrollTop(); //滚动高度
            var viewH = $(window).height(); //可见高度 
            var contentH = $(document).height(); //内容高度

            if (scroH > 400) { //距离顶部大于100px时
                $('.js_gototop').removeClass('displaynone');
            } else {
                $('.js_gototop').addClass('displaynone');
            }
        });

    }

    // 2.屏幕宽度发生改变的时候执行的函数 start
    var $this = $('.js_m_nav .js_box_buy')
    var flag4 = $this.find('.left').hasClass('displayblock');
    var height4 = $(window).height();
    var width4 = $(window).width();
    if (flag4) {
        // 获取html的rem的大小，其实可以直接获取那个元素的宽度，不用获取根元素×rem
        var htmlfont = parseFloat($('html').css('font-size'));
        // 判断屏幕大小进行二次赋值
        if (width4 > 750) {
            height4 = (height4 - 100) + "px";
            width4 = (width4 - 180) + "px";
            $this.find('.js_left').css('height', height4);
            $this.find('.js_left .js_content').css('height', height4);
            $this.find('.js_left .js_content').css('width', width4);
        } else {
            height4 = (height4 - 100) + "px";
            width4 = (width4 - (htmlfont * 1.8)) + "px";
            $this.find('.js_left').css('height', height4);
            $this.find('.js_left .js_content').css('height', height4);
            $this.find('.js_left .js_content').css('width', width4);
        }

    } else {
        return;
    }
    // 2.屏幕宽度发生改变的时候执行的函数 end
});