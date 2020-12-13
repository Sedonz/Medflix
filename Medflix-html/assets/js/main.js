/* global $, document , window */
$(function () {

    // Use Strict
    'use strict';

    // Header Sticky
    $(window).scroll(function () {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // Sidebar Model
    $(".menu").on('click', function () {
        $('.sidebar-modal').toggleClass('active');
    });
    $(".sidebar-modal-close-btn").on('click', function () {
        $('.sidebar-modal').removeClass('active');
    });

    // Trigger Slider 
    $(".popular-exams .owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        slideSpeed: 700,
        margin: 10,
        mouseDrag: true,
        autoPlayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Scroll To Top
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });

    // Make Accordion - FAQs
    $(".set .head").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set .head .icon svg")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set .head .icon svg")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("svg")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set .head").removeClass("active");
            $(this).addClass("active");
            $(".content2").slideUp(200);
            $(this)
                .siblings(".content2")
                .slideDown(200);
        }
    });


});