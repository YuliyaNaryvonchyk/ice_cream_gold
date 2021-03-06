$(document).ready(() => {
    new WOW().init();

    $('.category').click((e) => {
        let currentElement = $(e.target);

        $('.products-container').hide();
        let id = currentElement.data('id');
        let idElement = $('#' + id);
        idElement.show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        idElement.slick('refresh');
    });

    $('#list-cards-berries').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    variableWidth: true
                }
            }
        ]
    });

    $('#list-cards-classic').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    variableWidth: true
                }
            }
        ]
    });

    $('#list-cards-fruit').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    variableWidth: true
                }
            }
        ]
    });

    $('#list-cards-nuts').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    variableWidth: true
                }
            }
        ]
    });

    $('.swiper-wrapper').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1580,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true,
                    variableWidth: true,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('#burger').click(() => {
        $('#container-menu').show();
    });

    $('#menu-duplicate ul li, #menu-container-duplicate img').click(() => {
        $('#container-menu').hide();
    });

    $('.full-review').click((event) => {
        let parent = $(event.target).parent();
        let dots = parent.parent().find('.dots');
        let moreText = parent.parent().find('.more');
        let attrDots = dots.css('display');

        if (attrDots === "inline") {
            $(event.target).html('????????????');
            dots.toggle();
            moreText.toggle();
        } else {
            $(event.target).html('???????????? ???????????? ??????????');
            dots.toggle();
            moreText.toggle();
        }
    });

    // let SList = $('#stock #stock-list');
    // let StockList = SList.css('flex-direction');
    // let Category = $('#stock #stock-list .category');
    //
    //
    // $('#stock #stock-list .active').click((event) => {
    //     if (StockList === 'column') {
    //
    //         let list = $(event.target);
    //         let listCategory = list.find('.category');
    //         let CategoryActive = list.find('.active');
    //         let imgArrow = $('#images-arrows #arrow-next1');
    //
    //
    //         Category.css('display', 'block');
    //         // Category.css('display', 'block').css('order', '2');
    //         // CategoryActive.css('order', '1');
    //         $('#images-arrows #arrow-next').css('display', 'none');
    //         imgArrow.css('display', 'block');
    //
    //         // listCategory.click((e) =>  {
    //         //     let attrCategory = Category.css('display');
    //         //
    //         //     if (attrCategory === 'block') {
    //         //         Category.removeClass('active');
    //         //         $(e.target).addClass('active');
    //         //         Category.css('display', 'none').css('order', '2');
    //         //         $(e.target).css('display', 'block').css('order', '1');
    //         //         $('#images-arrows #arrow-next').css('display', 'block');
    //         //         $('#images-arrows #arrow-next1').css('display', 'none');
    //         //     }
    //         // });
    //
    //         // listCategory.click((e) => {
    //         //
    //         // });
    //     }
    // });


    $('#images-arrows #arrow-next').click((event) => {
        let list = $(event.target).parent().parent();
        let listCategory = list.find('.category');
        let imgArrow = list.find('#arrow-next1');
        let listCategoryA = list.find('.active');

        listCategory.css('display', 'block').css('order', '2');
        listCategoryA.css('order', '1');
        $(event.target).css('display', 'none');
        imgArrow.css('display', 'block');

        imgArrow.click(() => {
            listCategory.css('display', 'none');
            listCategoryA.css('display', 'block');
            $(event.target).css('display', 'block');
            imgArrow.css('display', 'none');
        });

        listCategory.click((e) => {
            listCategory.removeClass('active');
            $(e.target).addClass('active');
            listCategory.css('display', 'none').css('order', '2');
            $(e.target).css('display', 'block').css('order', '1');
            $(event.target).css('display', 'block');
            imgArrow.css('display', 'none');
        });
    });

    $('.name').on('input', function () {
        $(this).val($(this).val().replace(/[0-9]/g, '').replace(/[.,*+-]/g, ''))
    });

    $('.phone').on('input', function () {
        $(this).val($(this).val().replace(/[??-??]/g, '').replace(/[a-z]/g, ''))
    });

    let name = $('#name');
    let phone = $('#phone');
    let offer = $('#offer');
    let button = $('#form-button');
    let offer_true = '0';
    let phone_true = '0';
    let name_true = '0';
    let shopCart = $('#shopping-cart');

    button.click(() => {
        if (name.val().length === 0) {
            $('.form-text-name').css('color', 'red');
            name.css('border-color', 'red');
        } else {
            $('.form-text-name').css('color', 'transparent');
            name.css('border-color', 'rgb(58, 62, 77)');
            name_true = '1';
        }
        if (phone.val().length === 0) {
            $('.form-text-phone').css('color', 'red');
            phone.css('border-color', 'red');
        } else {
            $('.form-text-phone').css('color', 'transparent');
            phone.css('border-color', 'rgb(58, 62, 77)');
            phone_true = '1';
        }
        if (offer.val().length === 0) {
            $('.form-text-offer').css('color', 'red');
            offer.css('border-color', 'red');
        } else {
            $('.form-text-offer').css('color', 'transparent');
            offer.css('border-color', 'rgb(58, 62, 77)');
            offer_true = '1';
        }
        if (name_true === '1' && phone_true === '1' && offer_true === '1') {
            $('#form-table').hide();
            $('#form-send').show();

            sendForm();
        }
    });

    function sendForm() {
        $.ajax({
            method: 'POST',
            url: 'mail.php',
            data: {name: $('#name').val(), phone: $('#phone').val(), offer: $('#offer').val()}
        })
    }

    $('.cancel-close, #shopping-cart, #thanks-button, #active-image').click((e) => {
        if (e.target.id === 'shopping-cart' || e.target.className === 'cancel-close' || e.target.id === 'thanks-button' || e.target.id === 'active-image') {
            shopCart.hide();
        }
    });

    let messageBag = $('#message-bag');

    $('#bag-button').click(() => {
        if (cartSumCost.text() !== '0 ??????.') {
            $('#bag-container').hide();
            $('#ordering').show();
        } else {
            messageBag.css('color', 'rgb(246, 102, 158)');
        }
    });

    $('#ordering-title-button').click(() => {
        $('#ordering').hide();
        $('#bag-container').show();
    });

    let phone_order_true = '0';
    let name_order_true = '0';
    let place_order_true = '0';
    let order_name = $('#order-name');
    let order_phone = $('#order-phone');
    let place_order = $('#place-order');

    $('#ordering-button').click(() => {
        if (order_name.val().length === 0) {
            $('.form-order-name').css('color', 'red');
            order_name.css('border-color', 'red');
        } else {
            $('.form-order-name').css('color', 'transparent');
            order_name.css('border-color', 'rgb(58, 62, 77)');
            name_order_true = '1';
        }
        if (order_phone.val().length === 0) {
            $('.form-order-phone').css('color', 'red');
            order_phone.css('border-color', 'red');
        } else {
            $('.form-order-phone').css('color', 'transparent');
            order_phone.css('border-color', 'rgb(58, 62, 77)');
            phone_order_true = '1';
        }
        if (place_order.val().length === 0) {
            $('.form-place-order').css('color', 'red');
            place_order.css('border-color', 'red');
        } else {
            $('.form-place-order').css('color', 'transparent');
            place_order.css('border-color', 'rgb(58, 62, 77)');
            place_order_true = '1';
        }
        if (name_order_true === '1' && phone_order_true === '1' && place_order_true === '1') {
            $('#ordering').hide();
            $('#thanks-message').show();
            sendLocalStorage();
            localStorage.clear();

            $('.number').text(localStorage.length);
            $('.cart-sum').text(localStorage.length + ' ??????.');
            $('.total-sum').text(localStorage.length + ' ??????.');
            $('.number-bag').text(localStorage.length);
        }
    });

    function createEl() {
        let cartArray = JSON.parse(localStorage.getItem('cart'));
        let cartItems = $('#bag-list');

        if (!cartArray || cartArray.length === 0) {
            messageBag.show();
            cartItems.hide();
        } else {
            cartItems.show();
            messageBag.hide();
        }

        cartItems.html('');

        for (let i = 0; i < cartArray.length; i++) {

            let cartContainer = document.createElement('div');
            cartContainer.className = 'shopping-cart-item';
            cartContainer.setAttribute('data-id', cartArray[i].productId);

            let cartImage = document.createElement('div');
            cartImage.className = 'shopping-cart-item-images';

            let cartImg = document.createElement('img');
            cartImg.src = cartArray[i].productImage;
            cartImage.append(cartImg);

            let cartDescript = document.createElement('div');
            cartDescript.className = 'shopping-cart-item-description';

            let cartTitle = document.createElement('div');
            cartTitle.className = 'shopping-cart-item-description-title';
            cartTitle.innerHTML = cartArray[i].productTitle;

            let cartDescProduct = document.createElement('div');
            cartDescProduct.className = 'shopping-cart-item-description-product';

            let cartWeight = document.createElement('div');
            cartWeight.className = 'weight';
            cartWeight.innerHTML = cartArray[i].productWight;

            let quantity = document.createElement('div');
            quantity.className = 'product-quantity';

            let buttonMinus = document.createElement('button');
            buttonMinus.className = 'minus-btn';
            buttonMinus.innerHTML = '-';
            buttonMinus.type = 'button';
            buttonMinus.addEventListener('click', minusBtn);

            let input = document.createElement('input');
            input.type = 'text';
            input.value = cartArray[i].productCount;
            input.id = 'input' + cartArray[i].productId;

            let buttonPlus = document.createElement('button');
            buttonPlus.className = 'plus-btn';
            buttonPlus.innerHTML = '+';
            buttonPlus.type = 'button';
            buttonPlus.addEventListener('click', plusBtn);

            quantity.append(buttonMinus, input, buttonPlus);

            let itemPrice = document.createElement('div');
            itemPrice.className = 'shopping-cart-item-price';
            itemPrice.innerText = cartArray[i].productPrice + ' ??????.';

            cartDescProduct.append(cartWeight, quantity, itemPrice);
            cartDescript.append(cartTitle, cartDescProduct);

            let itemAction = document.createElement('div');
            itemAction.className = 'delete-product';
            itemAction.setAttribute('data-id', cartArray[i].productId)
            itemAction.addEventListener('click', deleteItem);

            let itemActionImg = document.createElement('img');
            itemActionImg.src = 'images/cancel2.png';

            itemAction.append(itemActionImg);
            cartContainer.append(cartImage, cartDescript, itemAction);
            cartItems.append(cartContainer);
        }
        sumCart();
    }

    $('#bag').click(() => {
        shopCart.show();
        $('#bag-container').show();
        $('#thanks-message').hide();
        $('#ordering').hide();
        createEl();

        sendLocalStorage();
    });

    //--------?????????????? ???????????????????? ?????????????? ?? ?????????? ??????????????????------
    let cartSumCost = $('.total-sum');
    let count = $('.number-bag');

    function sumCart() {
        let cost = $('.cart-sum');
        let Array = JSON.parse(localStorage.getItem('cart'));

        count.text(0);
        sumCost = 0;
        sumProd = 0;

        for (let i = 0; i < Array.length; i++) {
            sumCost += Array[i].productSum;
            sumProd = Array.length; //???????????????????? ???????????????????????? ??????????????
        }

        count.text(sumProd);
        cost.text(sumCost.toLocaleString() + ' ??????.');

        cartSum.text(sumProd);
        cartSumCost.text(sumCost.toLocaleString() + ' ??????.');
    }

    // -------------------------------------------------

    let cartSum = $('.number');
    let sumCost = 0;
    let sumProd = 0;

    $('.product-bag').click(function (event) {

        //  -----------  ???????????????? ???????????? ?????? ???????????????????? ?? ?????????????? -------

        let that = $(this).closest('.product').contents('.product-image').find('img');
        let basket = $('#bag');
        let w = that.width();

        that.clone()
            .css({
                'width': w,
                'position': 'absolute',
                'z-index': '9999',
                top: that.offset().top,
                left: that.offset().left
            })
            .appendTo("body")
            .animate({
                opacity: 0.05,
                left: basket.offset()['left'],
                top: basket.offset()['top'],
                width: 20
            }, 1000, function () {
                $(this).remove();
            });

// -------------------------------------------------
        let prCount = $(event.target).closest('.product').contents('.product-properties').find('.product-count').text().trim();
        let prPrice = $(event.target).closest('.product').contents('.product-price').find('.price').text().trim();

        let product = {
            productImage: $(event.target).closest('.product').contents('.product-image').find('img').attr('src'),
            productTitle: $(event.target).closest('.product').contents('.product-title').text().trim(),
            productCount: 0 + Number(prCount),
            productPrice: prPrice,
            productSum: Number(prPrice),
            productId: $(this).attr('data-id'),
            productWight: $(event.target).closest('.product').contents('.product-properties').find('.product-property').text().trim(),
        };

        let cart = localStorage.getItem('cart');
        let itemId = $(this).attr('data-id');
        let cartPosition = false;

        if (cart) {
            let cartArray = JSON.parse(cart);

            for (let i = 0; i < cartArray.length; i++) {

                if (cartArray[i].productId === itemId) {
                    cartArray[i].productCount += product.productCount;
                    cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount;
                    cartPosition = true;
                    break;
                }
            }
            if (cartPosition === false) {
                cartArray.push(product);
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {
                        // cartArray[i].productCount += product.productCount;
                        cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount;
                        break;
                    }
                }
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));

        } else {
            let cartArray = [];
            cartArray.push(product);
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].productId === itemId) {
                    cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount;
                    cartPosition = true;
                    break;
                }
            }
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        sumCart();
    });

    cartSum.text(sumProd);

    function plusBtn() {
        let basket = JSON.parse(localStorage.getItem('cart'));
        let basketItem = $(this).parents('.shopping-cart-item').data('id');

        for (let i = 0; i < basket.length; i++) {
            if (basketItem === basket[i].productId) {

                basket[i].productCount += 1;
                basket[i].productSum = basket[i].productPrice * basket[i].productCount;
                let input = '#input' + basket[i].productId;
                let elInput = $(input);
                elInput.val(basket[i].productCount);
                let Price = basket[i].productPrice;
            }
            localStorage.setItem('cart', JSON.stringify(basket));
            sumCart();
        }
    }

    function minusBtn() {

        let basket = JSON.parse(localStorage.getItem('cart'));
        let basketItem = $(this).parents('.shopping-cart-item').data('id');
        let basketEl = $(this).parents('.shopping-cart-item');

        for (let i = 0; i < basket.length; i++) {
            if (basketItem === basket[i].productId) {
                basket[i].productCount -= 1;
                basket[i].productSum = basket[i].productPrice * basket[i].productCount;
                let input = '#input' + basket[i].productId;
                let elInput = $(input);
                elInput.val(basket[i].productCount);
            }
            if (basket[i].productCount === 0) {
                basket.splice(i, 1);
                basketEl.attr('data', i).html('');
            }
        }
        localStorage.setItem('cart', JSON.stringify(basket));
        createEl();
    }

    function deleteItem() {
        let basket = JSON.parse(localStorage.getItem('cart'));
        let basketItem = $(this).parents('.shopping-cart-item').data('id');
        let basketEl = $(this).parents('.shopping-cart-item');

        for (let i = 0; i < basket.length; i++) {
            if (basketItem === basket[i].productId) {
                basket.splice(i, 1);
                basketEl.attr('data', i).html('');
            }
        }
        localStorage.setItem('cart', JSON.stringify(basket));
        createEl();
    }

    $('.minus-btn').click((e) => {
        let count = Number($(e.target).siblings('.product-count').text().trim());
        let item = $(e.target).siblings('.product-count');
        let sum;

        if (count > 1) {
            sum = count - 1;
            item.text(sum);
        }
    });

    $('.plus-btn').click((e) => {
        let count = Number($(e.target).siblings('.product-count').text().trim());
        let item = $(e.target).siblings('.product-count');
        let sum = count + 1;
        item.text(sum);
    });

    sumCart();

    function sendLocalStorage() {
        let obj = {};
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let objArray = JSON.parse(localStorage.getItem(key));
            for (let i = 0; i < objArray.length; i++) {
                obj = objArray[i].productTitle + ' (' + objArray[i].productPrice + ' ??????.' + ')' + ' - ' + objArray[i].productCount + ' ????.';
            }
        }

        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: {
                name: $('#order-name').val(),
                phone: $('#order-phone').val(),
                place: $('#place-order').val(),
                place_pay: $('#place-pay').val(),
                online_pay: $('#online-pay').val(),
                data: obj
            }
        })
    }

});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        if ($('#circle').is(':hidden')) {
            $('#circle').css({opacity: 1}).fadeIn('slow');
        }
    } else {
        $('#circle').stop(true, false).fadeOut('fast');
    }
});

$('#circle').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}, 300);
});