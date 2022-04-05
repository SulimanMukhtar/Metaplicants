/* Template: Juno - Multipurpose Landing Page Pack
   Author: InovatikThemes
   Created: Mar 2019
   Description: Custom JS file
*/


(function ($) {
    "use strict";

    /* Preloader */
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });


    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 20) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function (event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });


    /* Card Slider - Swiper */
    var cardSlider = new Swiper('.card-slider', {
        autoplay: {
            delay: 400000,
            disableOnInteraction: false
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            }
        }
    });


    /* Image Slider - Swiper */
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            // when window is <= 380px
            380: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 516px
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window is <= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window is <= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        }
    });


    /* Image Slider - Magnific Popup */
    $('.popup-link').magnificPopup({
        removalDelay: 300,
        type: 'image',
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
            },
            beforeClose: function () {
                $('.mfp-figure').addClass('fadeOut');
            }
        },
        gallery: {
            enabled: true //enable gallery mode
        }
    });


    /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if (!m || !m[1]) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function (url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if (!m || !m[5]) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });


    /* Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    /* Counter - CountTo */
    var a = 0;
    $(window).scroll(function () {
        if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }
                        });
                });
                a = 1;
            }
        }
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function () {
        if ($(this).val() != '') {
            $(this).addClass('notEmpty');
        } else {
            $(this).removeClass('notEmpty');
        }
    });


    /* Contact Form */
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
        var name = $("#cname").val();
        var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms,
            success: function (text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
    }

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
        var name = $("#pname").val();
        var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();

        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms,
            success: function (text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
    }

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function () {
        $(this).blur();
    });

})(jQuery);


$('.quantity-button').off('click').on('click', function () {

    if ($(this).hasClass('quantity-add')) {
        var addValue = parseInt($(this).parent().find('input').val()) + 1;
        $(this).parent().find('input').val(addValue).trigger('change');
    }

    if ($(this).hasClass('quantity-remove')) {
        var removeValue = parseInt($(this).parent().find('input').val()) - 1;
        if (removeValue == 0) {
            removeValue = 1;
        }
        $(this).parent().find('input').val(removeValue).trigger('change');
    }

});


$('.quantity input').off('change').on('change', function () {
    console.log($(this).val());
});




// Mint Functionality 


var submit = document.getElementById("mint");
var connect = document.getElementById("connectbtn");
var amount = document.getElementById('amount');

var box = document.getElementById("box");
var MainForm = document.getElementById("mainForm");
var result = document.getElementById("result");
let accountAddress = document.getElementById('account');
let accountBalance = document.getElementById('balance');
let ShowAccount = document.getElementById('showAccount');
let ShowBalance = document.getElementById('showBalance');
let ShowResult = document.getElementById('showResult');

result.style.display = "none";
// MainForm.style.display = "block";


// const WalletConnectProvider = window.WalletConnectProvider.default;
// const Web3Modal = window.Web3Modal.default;
const Contract = "0xBd2c87CAb975a0440B812D6678Ec9d37093Ac334";
const ABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_initBaseURI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPublic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxWhitelist", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "publicCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelistCost", "type": "uint256" }, { "internalType": "uint256", "name": "_publicCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelist", "type": "uint256" }, { "internalType": "uint256", "name": "_public", "type": "uint256" }], "name": "setMax", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32" }], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setWhitelistEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelistClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_merkleProof", "type": "bytes32[]" }], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
// const provider = new ethers.providers.Web3Provider(window.ethereum, "any")


const isMetaMaskConnected = async () => {

    const accounts = await provider.listAccounts();
    return accounts.length > 0;
}

if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    signer = provider.getSigner();

    instance = new ethers.Contract(Contract, ABI, signer);


    isMetaMaskConnected().then(async (connected) => {
        if (connected) {

            getAccount();

        } else {

            console.log('Not Connected');
            submit.style.display = "none";
            accountAddress.style.display = "none";
            accountBalance.style.display = "none";



        } {

        }
    });

    ethereum.on('disconnect', () => window.location.reload());
    ethereum.on('accountsChanged', () => window.location.reload());
    ethereum.on('networkChanged', () => window.location.reload());
} else {
    // if no window.ethereum then MetaMask is not installed
    // MainForm.style.display = "none";


    submit.style.display = "none";
    accountAddress.style.display = "none";
    accountBalance.style.display = "none";



    // MainForm.style.display = "block";


    alert(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
    );
}



let account;
let balance;

console.log(instance);



// console.log(signer);




async function switchNetwork() {

    // Check if MetaMask is installed
    // MetaMask injects the global API into window.ethereum
    if (window.ethereum) {

        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }],
            });

        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4001) {
                console.log("Please Switch To Ethereum Mainnet");
            }
            // handle other "switch" errors
        }
    } else {
        // if no window.ethereum then MetaMask is not installed
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }

}


async function getAccount() {
    switchNetwork();


    account = await signer.getAddress();
    balance = await signer.getBalance();
    account = ` ${account.substring(0, 5)}***${account.substring(account.length - 5)}`
    accountAddress.style.display = "block";
    accountBalance.style.display = "block";
    connect.style.display = "none";
    ShowAccount.innerHTML = account;
    balance = balance.toString() / 10 ** 18;
    ShowBalance.innerHTML = balance.toFixed(2) + " ETH";
    // console.log(await instance.token());
    // console.log(await instance.Active());
    console.log(account);
    console.log(balance.toString() / 10 ** 18);
    submit.style.display = "inline";



}

async function Mint() {






    await switchNetwork();

    let NFTamount = amount.value;
    if (NFTamount < 1 || NFTamount > 3)
        return alert("Whitelist Stage : Please enter a value between 1 and 3");
    let account = await signer.getAddress();
    // let price = 280000000000000000; 
    // let price = ethers.utils.parseUnits("0", 18); //Whitelist Price
    let price;
    var Status = await instance.whitelistEnabled();
    let ETHPaid;
    // ETHPaid = ethers.utils.formatUnits(ETHPaid, "1");


    let addresses = ["0xb19A0cdf8ab2311784511947FC2abfa4fa3af951", "0xb0A96b26E3331a564E98BD5F61F033A71676eaA0", "0x6de544E5372ccF1599c214DBFF699dec8776fEEf", "0x4105150abCEe9582d93cf8A8Df2bdc733Cd41E56", "0x2d66A464E4BaF2Ffad71f7a00F720193Fd976535", "0x3Ab1EA2a44FB347091f0272138d35234Bf3D5c28", "0x8abe3Ee26A30D27d3E73ef2DA8FC4C09828bd018", "0xAa516220E15f2FCBF5c1b7754148dEbbe4777150", "0xE14a3e28bed3C3F112D14c26DeEF7725Dce8E351", "0xD4B24306E5b79757e3c559b2A901103864a2f2a3", "0x8d7A85b7D34a192360DE43a7cA8148988bCF431f", "0x06DF5759C5862b221f2F2fb76FE24256aac6EbBa", "0x1786E3A88F629B8feA6ea5fE14A9E074aaBd7A07", "0x5971925CFF1c562Cabd9DC13E9D77F4CE9E4AA8C", "0xb83742B44486Dc65d5214d435f26b7bfD5DD6b69", "0xF601abbB8dA8AD49B71DCf26f2E6Ba527eD91115", "0xE18432DFD6ae5615BB0B2Aa75cef399d8d9a0F5C", "0x2C6D96d222dB5f6A544e82F35F190e1730E8A086", "0x75b75c45B8887473B867b7d62Ac2230F1Ff4AfA0", "0xdeC3D76529D30CA5396920621B849DbD84CEFD9c", "0x86704bdB9E1d57D64C959813959c5e5C3C631b19", "0x1a98e553510aa80074cbdc9dd2228edbc03f543f", "0x2920678210BDD2b0400e3B8cC8Db6e3Edf99233f", "0x979D097e430bF22145F8Ab8E77F526286b49fFAe", "0x6FC872E8f8AbE9464c5CC31e6C36Cb1f16b4b561", "0xd43336D8120254f54Df1e1f95cDaDe680AD7944F", "0x4dB2973db1a83b3b4C67E25e0D88dc8F8DB0165f", "0xC707adC26208C1e1d92bd3D6ec9A8Da0Cb8c984F", "0x68945ac0A08e7E77C8cC2573b6c48593b21225C0", "0xf2D4173947ba032eA69d19929c93721791f43786", "0x4aa3B8A1570aC2e48d3fe09a499D30EE3b531e43", "0x473Ca92D44F1537A78aeeDC33e6129Cfaf10994C", "0x6e0d7933d3dFB019777beFda09eB065D5d79a49e", "0x51582060032ccaA76541DcE7c699aa835b1b9EB5", "0xD1aC1DA2e6D56DBb8bac91F1614550a3b2cD092D", "0x485Ce8C0eFFce309517DbcDAa2f9CD054EB0BBa8"];
    const leaf = addresses.map(addr => keccak256(addr));
    const Merkletree = new MerkleTree(leaf, keccak256, { sortPairs: true });

    const rootHash = Merkletree.getRoot();
    const adddd = keccak256(account);

    const proof = Merkletree.getHexProof(adddd);
    // console.log(Merkletree.toString())
    // , { value: ethers.utils.parseUnits(ETHPaid.toString()) }
    if (!Status) {
        price = await instance.publicCost();
        ETHPaid = price * NFTamount / 10 ** 18;
        console.log(ETHPaid.toString());
        await instance.mint(NFTamount, { value: ethers.utils.parseUnits(ETHPaid.toString()) })
            .then(function (Result) {
                console.log(Result);
                result.style.display = "block";


                let hash = Result.hash;

                ShowResult.innerHTML = "You've Successfully Minted METAPLICANTS NFT . <a href='https://www.etherscan.io/tx/" + hash + "'>Transaction</a>";

                console.log(hash);

            })
            .catch((error) => {
                console.log(error);
                if (error.error) {
                    if (error.error.code === -32603) {
                        alert(error.error.message.slice(20));
                    } else if (error.error.code === -32000) {
                        // alert("Insufficient Funds");
                        console.log(error);

                    } else {
                        console.log("???");
                    }
                } else if (error.code === 4001) {
                    alert("Mint Canceled , Please Try Again");
                }

            });
    } else {
        price = await instance.whitelistCost();
        ETHPaid = price * NFTamount / 10 ** 18;
        console.log(ETHPaid.toString());
        await instance.whitelistMint(NFTamount, proof, { value: ethers.utils.parseUnits(ETHPaid.toString()) })
            .then(function (Result) {
                console.log(Result);
                result.style.display = "block";


                let hash = Result.hash;

                ShowResult.innerHTML = "You've Successfully Minted METAPLICANTS NFT . <a href='https://www.etherscan.io/tx/" + hash + "'>Transaction</a>";

                console.log(hash);

            })
            .catch((error) => {
                console.log(error);
                if (error.error) {
                    if (error.error.code === -32603) {
                        alert(error.error.message.slice(20));
                    } else if (error.error.code === -32000) {
                        alert("Insufficient Funds");
                    } else {
                        alert("Something Went Wrong");
                    }
                } else if (error.code === 4001) {
                    alert("Mint Canceled , Please Try Again");
                }

            });
    }


}


submit.addEventListener("click", Mint);


connect.addEventListener("click", async function (e) {
    try {
        switchNetwork();



        await provider.send("eth_requestAccounts", []);
        getAccount();

    } catch (e) {
        if (e.code === 4001) {
            alert("Please Connect Your Wallet");

        } else if (e.code === -32002) {

            alert("Please Wait");
        }
    }

});


