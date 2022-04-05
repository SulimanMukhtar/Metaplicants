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
const Contract = "0xe2f3f56037Bd6aafF80d67dd5A6d2fc6C5a99CB9";
const ABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_initBaseURI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "address", "name": "_receiver", "type": "address" }], "name": "Giveaway", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPublic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxWhitelist", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "publicCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelistCost", "type": "uint256" }, { "internalType": "uint256", "name": "_publicCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelist", "type": "uint256" }, { "internalType": "uint256", "name": "_public", "type": "uint256" }], "name": "setMax", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32" }], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setWhitelistEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelistClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_merkleProof", "type": "bytes32[]" }], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }]

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


    let addresses = ["0xB14d010aC8D3EdFb4f4849E302F5DBB80F1E9Fc0", "0xF1D1670eF0BE6a98E0eE45159D16Ff784d068Bbb", "0x5DD4C4e4A3B68ceB15D08300661124749875f799", "0x05Ade9D6Bd074606C3fBaCcdF50E1DcC89B3d09B", "0x9B90D30ff7C8ED856d937aCBf4a98F423F76B810", "0x273974ccC85F0A650E1B5099868E6Fd63889BAC6", "0xDb11B192249b414Aa6cc1e7F1d7414eCF59C36aF", "0x4710713A1dBF07Cba495058c4608D0Bb586a77EA", "0x2A8070F313CBe95DaE30A80503c327CA830a15a5", "0x354Eef9dD0c33A92f1E76Ce7350785Ca470cC913", "0x6687c63cCE9b0C594e97fd776C100Bd47b0c4e44", "0xfe3F8a5883Da3F8eCCDb5f39514CDe581C1D09bb", "0x42a8a900c2fFBDB9b23bAeBC27FD3e5c8B923Fa1", "0xeb53DFafb0A447f6d134DEa41B85CBd43FF19D73", "0x794603C1a0c4799b04Cd8F9406D2b201286CE63A", "0x3894C0fB3D3Ad1100ad57a616a08E7340a741d43", "0x0A61F96576102E0Ada9eA9861ef9a473ee4FB7E2", "0xB084aB751D2511AA2076Ea42253949325084a3d7", "0xcfcecF40e8AebF5ADb618c8D9cEb2A9853f3A996", "0xac27C125a16839Eda5bf3b8Cb27CE8928e500bdd", "0x621d9a1c8Db96eED7a53389Bcf80487eEA3fAB1c", "0xFd044E877F029bAE7ff6a258E63C7BeC71951229", "0x21d5996BBC760627D71F857f321249B61DA96351", "0x679Ea985cEa5166f35dB761a4Ea415662cd4513F", "0xf7C4e374e116b68c5324463949Ba3c5275B27236", "0xd92a61bE196b21C227838F0b52301B4F87387033", "0x6F088129C397B41A5f7DD5a3e8845E9C0a57635F", "0x91502f6Ec2E482ae8fc519Ce240A2DAEF1d4a204", "0x6E5257036d6b8AA7aE521d558d5264EA89d17498", "0xC6c2ce5441698fbBE9AC313feDDf68Eb3CfBDC74", "0x59a6830b660B95FFCa9A27623aaC003412284754", "0x8c150D49016a53Eac058F0669108E0d4F0674d47", "0x883F4CF26b98271dE4ee4B2607354B7313c881CA", "0x28e97289b82931f0D8aD84049518b8F65968e304", "0x284e8f6E00BE9A374e31546af74434d77f6829cF", "0x6bdfa13ba34eac9540b32770328a0a44f8712e2f", "0xd7B83C30609db3f1F4ad68d9c046703a7d06D722", "0x810c508663e50223221707beC230C2D0d60bB5A2", "0x0010E29271BBCa7abFbBbDA1bdEC668720CcA795", "0x414Ae75fC968d90fa82F0402a55603D1B5186C37", "0x317B07a142C43F906E3715Beb65749DC3e1f307E", "0x509AFef756E1bdADB2071Db8927041C0890F98Fa", "0x4Ebcf0fAe55Db1DdDb175Aa161E7D2be5ed11d07", "0x307F82560d5FD70858367887e6D9E161d3991509", "0x7908C0aaaCa32730b87989310c8C9a008b057875", "0x197D1109285f48984DA2c7efd237C41e28c6517e", "0x527eB4eea1D0CDe4E7dD2d11e4830aC345A370c9", "0x4Da6B17b943C68904B48822065bf2DC850af9047", "0x96A4A06067509B516d47be4CBbAd30C4D33e200e", "0x989c8DE75AC4e3E72044436b018090c97635A7fa", "0x9cf0B41aE2132E896677966cAdA4CB39736E56D7", "0x824861495E0064e6101512C511ee7F261482D80E", "0x9349596C250D13897577728D933F153366bf1D13", "0x41bf1cCEE665F2FbC606AE3B02BF07038F0471F1", "0x08fE48387950e1E4953a94f4aa80e97e5f3aBe2A", "0xe68700AF6FD6B65662f948395cF787c545141CDb", "0x3D34BD7382b63118C19394C7CAe4d6E5b7E54119", "0x86c785722759e19e35ffA57f295B9b61e7e8f2cb", "0xbeBcf96eEEd98D495F45407CE7017179738E3552", "0xEa11fA34619CFc58De5A66678d698FB1e76Facd7", "0xc61F778a4B36D1cd9aee1A3Ca8c22D407cd7AE68", "0x8ef08a2cA252b30553d18Facf19E0286775Ab4eF", "0xE633cF0B0Fb032273E29207cF84A6987c320CB67", "0x59B1bC26DEbC32a6547Acf193f42937B8532b419", "0x28fb21E4527CaecA2dE06E39e18241e11A96f935", "0x0F952A6502a6A59650018e484d638f1433aEa8f5", "0xa795dCEB07cFad3cFB5d9892EA050e9edfA05Ed2", "0xf0eA8759Aed032dE7622c9f0845A002Ab4A41eC9", "0x1E31B88317294210b7CfA455aCF0Fc6514Bf099c", "0x62918Acc6Fd8884ea8815e2bFDe238dacD448B88", "0x16B7d4f182C6822A6A7B558464d1B8dB67D877ee", "0xA980014c185da2Ff530145F8afb7E0Bf69611a77", "0x59B1bC26DEbC32a6547Acf193f42937B8532b419", "0xB32d0fA770Cc6e5230F8BeaeeFb4aB47d6d78BAb", "0x69Bd678128CAAE272a070f2E2a186cDf2F3aD7B4", "0x7674CFbB080A06f5EBBbc73C61416D810C41E3e4", "0x64ff8A32bd2b2746ed2A42Ce46eb1Bd74C59f70C", "0xeF1DC9561Bef112a09BB35403BAfD97e50ae69Be", "0x854442C62deB9079eF657D6bDe9402053baFfA7e", "0xD9525EFd1610EC8E201BEd322466Dc55000d2B1B", "0x241d3F8Ee0822a215576ab4Bee642FFf9cacebAA", "0xD2649ef440417E9c0C52cD98810a75A384E5205F", "0x59ce5a074fF348Ac436Da8Ae01A9886c60d587b2", "0xF06000dAA3c2280c5F79D3D3CA09c0790521C0db", "0x60510A81d545d655159F6aF49583bDb579DD7d90", "0x9620Da3d1Cece0ac2B43d5012270B4036894DE4a", "0x93ab3c4e6DAa20b2B7Ea65754a8c11311FbdbA38", "0xd3D27b35bf301b9bCB01E0784FE9FD1Ee80EB04d", "0xed32d7ed36F763B8D92e3a85e3D94893eAC6a602", "0x9367cF8CbF3c172d7c2471edbBF0F3699BBdB9A1", "0xa55C04De9e510F19Ee851Bf0d5E7Ab54fE8b62c1", "0x41bf1cCEE665F2FbC606AE3B02BF07038F0471F1", "0xd1F7a58aEA4dd4e12104374B0dDD094E8125819E", "0xc2aCBd9d464AC8C1f178c447186ff538C93C3ef7", "0x881749e413f9e67998BB9a49f1E068f1129942fA", "0x55Ea78540CbF93E092764063203B87FF22CdFE85", "0x33c0eaA4E0A55480bAF5D6622113fF948F8d2f5F", "0xc0b627877a87c86A14F3b6371b7756262d68375b", "0x23ddadA74eF9b28116E8f36a1FCfC0A09aF59C2b", "0x29718a2D55d87C704Df0a400C43e6E31705351eF", "0xCF0898AFE4f9188833FE23963D08343036003cf2", "0xDD7c39Ff8715cDdEf0c208059EddD317e3ec5422", "0x7FEfBe95C2d07e5AEf8dAB8fbee9f66110c54B6e", "0x74c28B35813bE55d8e23957C95778C47BD6D143C", "0xeD2A7e8De8f10f098cA43667D7C7f8759028D29f", "0x14a90fAcB84Bb127a0fA11E152D9FBA9172510b0", "0x0852181D51f9d4EAE85c1A2d22E0a5C9E523c6De", "0x3457AC120a8865f8aF4fD4A26641028c7A732aFD", "0xe2502EB83f07244A5b5a5Fa878BdBE9c8DF07d93", "0x291c9894f99Aa53fC3893fDD8549FBAA300734cF", "0xDaAb5BA52cF27Ddc50DEE944F6E2A8E5e2e65031", "0x7CF5a6b33F0D171f0d63CB50B11eD7c9860973F0", "0x4387b96542e7d60e9fAeb5b7B006D54825F2df38", "0x94972e1FfaF8aE2b1C7c7D497AeBE65140DdFA03", "0xe161d1D3e09273F81a8Ca3Fa772e16fF1CE3Ca83", "0xb839de6d1E5726929F4aA4C6FACbFfAB2A273AC5", "0xDa25F976F23C4649B3c7bd1D59557C2AAe059882", "0xb619B439dB395f2db8e4ce30f28a62B554000151", "0x17CfF82510DBf467679a3C9229137Fe77AEe79d3", "0x622DC9EA2223E2094E524aDd09aE3A26b9d0Cfdc", "0xe7189567e7C584Fa61b786F8f60B83C66f777d81", "0xd9e5C495EB09063f94BcFe8B513c3651D589EeF9", "0xfC13092BED04946930e0F6fe1fCC8343E7cdae41", "0x75F0828D054c2c91530a33f0083F6d66FEA16fE3", "0x8B65A80781B776D91AbbBe5E0E086Ea10A16614a", "0xe5919152A8880Ba3F39A1b8787B82261bBde4471", "0xDe34960be88B184BA371f2B1Ae1c135E2610584f", "0xbdce0d84ABb90AaBcC1a530475A6b0E0E4e39aB1", "0x01654AC005846959F3cecCCdD4121d5544Cc4978", "0xd1A42FE4871f99b219859b812E7ebAA311149074", "0x20dd96068D3Dffc0f7EbBece35B68AF34fdAda9d", "0x48910A64005CFF019885Bd7B277e0A69a94Ae11F", "0xB8914b8Da04a31cB7A9c79D65cf229d6cf995937", "0x1e034254B98c0cA9818F0e6eCE26fDaF5bb1f45f", "0xB8914b8Da04a31cB7A9c79D65cf229d6cf995937", "0x2940D841cd88D39db70566A227ef00c15116D9b4", "0x5c50AB192979B6229B8a65a5E8c6152686eCf4b4", "0xd3C3D4C03743E4742b7F4c71138f070e2d2dD407", "0xdeda5705068b16c8609148A396A04f0114ef5F23", "0xD63852CFC8F2031e1437e1f525796119119eD017", "0xA27E9a2dc7f8Bb50e5eF1F29CA1575dc2E97CfC5", "0xA47b4055a6D0dcf2441AA8cE91e6e7Ec2524Bd8a", "0xDf2b3d6B9654A140fe7fC97265E578DCDF8c1737", "0x0B0D8C9dd82AC564aAdA158Aa01dfF69e5620Fc9", "0xaA400B4Ff42B9b9AC4578f596a28F9F9fd67Ff9B", "0x17F999d7D44D8e144f2C70D48043d39b568c8a41", "0xa6A17455a848D295c4276A5A88cdec510781E209", "0x1F0512de1856662b3B621E910d6B102b117A53E5", "0x3ba2F91F3f6299359DedFa508E0E910Fb68C8da6", "0x26d747d536230762adcB130d542a752499cf2951", "0x845f8DA1Fb8c508aF68f7E55DF39bf60f4226b5f", "0x807F433E1736dECda3A6DbC9B82e32F7F4ebEcf2", "0x9952B7eA6558D1392C6987c26C9b3eBF5220bd3A", "0x6E0a79AA73c00374ED89C97412aa4BE5e023158a", "0x65000F89633098C49aC4e19De00AF08F52dA62b3", "0x17D0f6E021792BF85F737e4e2983ef4fe888a8C9", "0x607e7701aF1a37bFfc117EE10bdb391b81c56Ec1", "0x899C8496d8AE5429703D5E3F9b5e3D3e7777717b", "0x3b19fB4f043e40d28BD357266F7DbB8a1A9bc644", "0x6bE3E990047AeF8495BFeBe04f02d4610554B5F5", "0x93ab3c4e6DAa20b2B7Ea65754a8c11311FbdbA38", "0x9e0750442b62704e75a999433fc31E27f53D6b0d", "0x5E478D8ed7fe97CFaCa23947D53C30fAA13D030e", "0xfdB8A803fcc01DA3522eE20AA156d7d3fD72f8c1", "0x28e97289b82931f0D8aD84049518b8F65968e304", "0x7b4A43f8D7fC541B59F0558dbecd58C23e8CEC7c", "0xbdce0d84ABb90AaBcC1a530475A6b0E0E4e39aB1", "0xF82d802D985a6506F18aFDF1A6Aa649913e8E137", "0xeFA160A0CA26AE053dAb92872768DD8981D27C51", "0x5Ca855f14F60A6D329715597c9f433B035405596", "0x2Cd12B4e51Ea7285f0dd4A0031441F57bbf9e377", "0xa8BEc5EF0dbCC3744a24896AEA47095F28AF4a28", "0x32c2d3d16CB78DAFEAafd4d38FEDC4fC78e85cFb", "0x12a0dd19D3f878697c7A1F804AaA1dA84229566C", "0x839F099D7EA3C0a323E4633237B18694Af245C5A", "0xaFa8b9C3d4227Ce3329c016C1d0b399EA73FA80D", "0x63b0BE2652b29Ed76A55fBe84035271Eacb6DA74", "0x25752c333e544a13A2b4887b5F5488817c28f2c9", "0x78a801EBA19c1779B5d0eDEb6C571d8180Fc0Af2", "0x9FC10a50C6DA6c4D318Ea40012Dbdfe972a5C4cD", "0x76a0646e2C5Baa3595F1F0baF10B1Fb46F9739eF", "0x89890009EB4EcE248bce10dc942eD45930C415d7", "0x3E23a90AD34679A93C87770A139325CC374e227D", "0xc340D7b666fec1803631058f3Bb5070808f2Aa62", "0xa333F80a242D0F811758F5b2E5952A84898f224D", "0xc9636B935FB6b3Ce48654a0009755D58F473c064", "0xb442d26D2b0848E4782cfd7553EE75497f897CCA", "0x6C521d201Ee8fa0fec0E6bAB1c86b52377fA65A2", "0xfBc20BA2346118A84057AEa7e973b2F62A0B6799", "0xf4e7E6B600286fFba8154F5125420A0F78DB835d", "0xD96eA9314054a447fD00431462196859C784506E", "0x5C6F81fDEdB612ff12A38100F037370b347BC148", "0xa25745aDA04468A397B485690568AE0C4c201f6D", "0x21cB5Ee746C51D99CCCccC0D504b1ACC91559A46", "0x310C261c2668906200BcCC67fB3F40730d4CFA97", "0x5a9435c0EaAa532bD9C4Dc831DF9537d8f6E6A4d", "0x65bf27b229DA1CF7A8E352a1d83622eCa7D841eF", "0x3eb8F88422dFd2AeCd1969E24443281cdA239aCD", "0x15b9E380Cc43F796f0f409F92094f9532D2638b0", "0x835d3cda10EeAd2050EF4da0f418FeDd364bC657", "0x1Fe82beA7Aa95e9595777A10712a4A60BCF9c6Be", "0xB71D3da74e5c6c1E23069C4c374737EBC3186AA8", "0xAD9c86153aAb4226B15F95e8a6cB1D37f613E316", "0xEB1127E6C774b9C9760f311C5d54a72Fc0b84B74", "0xac5824F5FB1DC803Fb0b346c037B66Ae829693D6", "0xA4552b9A8268A01d43C1F5aeE30302bf88b21Aee", "0x994fF30eceC8523781651436dBe807f3ea7c764e", "0x2C01927bef0E7ea30988EB6a97589173c6567e6a", "0xd90DBE9117676b29c2e06fffc339b24A71051ed0", "0x9fe8b927386e8bdaab7f2cb9895156e99fec3492", "0x68890C8e96d8a29e7aD849305dC6Fd5454Acd35d", "0xbE7E576848b434925D744FCf98d8229Affa941Dd", "0x8B7c9cc82deA0dA5F847751BeA2A7e04AE78eA84", "0x315B6F593B02307C1CEaF100463980ECD25308E5", "0x79B627Ae34c213A5F4298c9ba0cf8fA0047504DB", "0x32c2d3d16CB78DAFEAafd4d38FEDC4fC78e85cFb", "0x76f6AD15694FEEE5F3a055baD2E45D185f0048be", "0x862CC4f0aB339b7c0E630126Fe222a378B560989", "0x43E91C8c2083604e28217AC07f2CcE9b173d7d93", "0x024eAd4F4cb7AFf233D6b09f08E0F5b20Fae6fE3", "0x4347717bcAF344D1C687E878140b756Af7197d07", "0x91dC62105Aab0D63a95149774f50D33631E97F7c", "0xEbF7c4DD8854129af520617680B8cE946F7C38a4", "0x5a9d7cc159134c5229de0cbef3955384497e522b", "0xbEe1f7e369B3271088Ed58bF225DF13Cd96D32d5", "0xbE7E576848b434925D744FCf98d8229Affa941Dd", "0x56A64d73ac27cBE9D7761b7FC41E05082728B730", "0x757E783cC2e592c62bcCe54A3Dd2f8F1173E39FF", "0xf7c6a011CCB9274876c1787e7bdA7Db3de4A2d1f", "0x96232D041648046c17f428B3D7b5B8363944188b", "0x3758F429D49f8aA30676bD4b0d928Db9F48f2054", "0x8aE0ca62016CACD78B9951eEEdEC6F554016F253", "0xf45b05ED16227f5b5fBD8740dAFB53599A28E2C4", "0xf614ddC260c8E72efd5aeC92E3A4e3Ecc4C2A116", "0xAd92CA5028630bf97C8Dc45F27748D97916a81AD", "0xF8A75ce35390cE4D7aE0ACF7F28105f9F310221a", "0x75DBf6053287CA13a7b34B14433087f79fb8c37D", "0xB9b7C978a2a5F90e35c229Ff4D5A26E998003B65", "0xbE7E576848b434925D744FCf98d8229Affa941Dd", "0x0F5DF4A819C4A9a6bB7c1B367dFe5544BF783cA2", "0xa737fECcab922C70F4655EF5b47998a51643E908", "0x93682993BC684e3123A26f095cdDb70e22234b6a", "0xf45b05ED16227f5b5fBD8740dAFB53599A28E2C4", "0xE8cd1eCaf95621912e00e84Bf23DA3A9B785d5eB", "0x56c8b02F70993a16F8f986E85Fd9246755E50bA0", "0xC27FAFAEAc68a1fA53b030CA411812DdC7A5e306", "0x2C1337c73aEA769C61F80e31db7FEcB91F2285CD", "0xC27FAFAEAc68a1fA53b030CA411812DdC7A5e306", "0xed08fe81611f7a91384736cea990a6692d6d7249", "0x13FEefdcd1090ACcEAE0D154C867a2267cA502FF", "0xacC9e313EF1bEeA93f9e443EA1A9ad7cEf76cE2A", "0x91BC8D4f165D2E449220605e6419f010BD81279E", "0x0C635dB838dA1A1fA5DD28f9602f17789ca5085e", "0xb44f9206Bc7c325838D8aFa21cb7409B030f6dA5", "0x443C2554003B0e17641E700d7c0139A8aCD59eA5", "0xBfC259Ceb088fdeCeC0aC30BeD435Edb5feA2862", "0x8ce1288928beBC2c1A4F3BBCF8dD804640D2D40F", "0xd63271f34526575B9F6c9bE421ac6edC49e35364", "0x1C180075Ef61BA11c027cf0d709eE570f9a7cbF6", "0x14c78aE956876763d868aCDFc12Bfa1565DadFdc", "0xac413C8Bf78f86C9D7D8D7741f1182cA1b939801", "0x32d4bB38a47CB5c1efdF9B4f731f2Daac612FA8E", "0xA069a80f8d3cB6dF08595a2dc907Bae9A848Ceb8", "0x7aE877085666a610810774F39F42F783Fc89fF0A", "0x06b863e780747697DBeD5aF2B09937cd75E76d94", "0xe96DB623c2CE30F65171F5fc487127748d1065C6", "0x45Ce93D93717Be2926a062400E1B39ae188Ff8F5", "0x8e77187dA89f155aB27C4EED13E314515f1Ab774", "0x6C4F2b82e1396aEf113d90b2FbF6C1DeDE1f8Bf5", "0xbF0ec0dF2360005d4E6544A19b3f114a1ba00C19", "0x36d54D09632317Ceb96a95d4D0600301eEa2f723", "0x34db35639EAfe2712aE1F69dfa298b06a5c25053", "0x33079569d677DE1B32cFBcE94149a2753DF02068", "0x70e23866EdE30cb2B0889bDB15d87fB68a3463Fc", "0xf9117ae62fC43605b12B98C527bAc262BB517461", "0x180c8Fb983C527b7B04870E91495EA5366a83C90", "0x0d1c127e5faca9dee68a22b303f50c7f4fed0a67", "0x167Ac0c63d76352C8f3682b42BeF71C5eF4d0594", "0xe9df1559968512584d43d56c4ce7694ed6d949ab", "0xBFC989883b158b2798CA7E063E12dF2e75c6e1D2", "0x5bB05859E27AA49CF66Ddff5541e049107367a4E", "0x04028198E451f64212c33CA22cB3b1FbA6272459", "0x9aa0aDa5Cd71d11B734C2d7062CBe3468bEE7BA8", "0xa17CBBE1b8AFd717BCcECcBaEFE38CF89A4CA690", "0xda6536C53A861c1AF9Df8972846D49C0313Ee203", "0xeadD602200Aff1Ec9e8da8d9d33574ED9BA28AE5", "0x89b25b0EcCfa69Aa9235C0D5ca233E2aEd2C187b", "0xf9AAC4b447c719c4bdc0B31f4981b124CAd5A4b4", "0x72Cd7FBF3CD6011a69D6E061e51c40605133fF7A", "0xece6f70f1c9Eb9844cd0c06Cd3153F5fb4308f04", "0x513Ab3B2cF1a5a9cc14DF8551aA4b0312277B86A", "0x14ab8182d9E9b62A71B959597b6Ce816A97C3103", "0x3fc5b7D16ea69B00819d7873fDFF70F6712FD0fe", "0xb84D7A91872Dc6e174b8B1eD883e9a9b955004d3", "0x26aeC79CbB9aEa4a71Cd51bb5E858801191493da", "0x5EDc954D7074BBcBd6C1b21AF6aC038F97AfF269", "0xf67cd0EA946BbE3a846dF62341D822fdfDb8c6d9", "0x4cbC27Eb49022dC70694Fc3f6297beFb9d96aE18", "0x446DD8FAe30596AD3113EF96F4b50D571cf14983", "0xE779ba66f6D856087AAe96050AD742E0e92bD2Dd", "0x613A23f4F35c6bC5FE3BEC5bedcB7C3841Ba31d2", "0xD42610d795693Ad0B3CA1636209250c8ddA62dA2", "0xb3E86A37cc734B1cd463568D1F9E3219D52D8d18", "0x0CB2fab1ff8DFE8c21A4a9eeb3dC06740034d580", "0x146e44b989bFF2C0B863654ddAe74a3C65296d07", "0xa22CA16723Ce462a2a51217D56AFAf301476faD6", "0x89EF66da9aEb1766d0Aea59b5c6C181D5004b1e1", "0x01D4A6b3a1409ccEc385F0becf128cc32881eC5B", "0xb395800DB40a50dcA559636D6ad16fA72B48CA83", "0xd395675d32443973bf78d5a437c894d1c87ada5b", "0xbc0c27d639b8b6c69259ab155dfdbaa4bd9cee17", "0xAD96da2361d5dBe8CdF526D64C7d4D9430903C6e", "0x281C5a0fb9B0ca4BF0d5f418Db52b57Bccf35CEd", "0x98cCE71200De8c057fB5057d62e3Ee9Ca0154D1D", "0x7c8Bee6370d66bDAbF4Ff4DeE3e631bD9c875Dfc", "0xa1fEA66982b38d6e497ED8a264f3A282Ad7CBdA1", "0xcd37e3D79f861e3cd65F3B3b7876ab79A584d2DF", "0xA3AdEd510584AE9EA14cb140b9BBE13a14d66e00", "0x79d6512B946777C63b016c48b2dE12ea28564cE8", "0x822b9d322D8923f61239f2efAd13b10378cefF87", "0x2893e8995C59662b2b9FA579582AF3dC5A6C5884", "0x0a69944A50A3aD542753F626430786236C4bDEf4", "0xC948C6900F7A233A221cA9A74d9260A6D3D33aaF", "0x53808009dC1A8e4A36039838B4d56CAea186F9F3", "0xE364AF06ec5c464E1b466afF71565978fa79526e", "0x77811b6c55751E28522e3De940ABF1a7F3040235", "0xFA279677460f7a48797328704CF6E1De0d497b7d", "0xdEDAa50e62FdA163B098feBd645109B175D85ffF", "0xf443952321206BDe96f4689341B842D1B3eb4376", "0x4e3Ea7c43F36589DE78235164d143C63F9013Ee3", "0x58Ba7aCb111bA9B1e1DF5C95D117Ff60bb22b786", "0xB69C45A16Ac339F1eD88A4201FB58657dA998A6f", "0xCB895Dfa8808d0c5A900ced39Da485DdC0bF31E9", "0xcdec431a7170d10347629C858C6D7CF144E743dD", "0x73db4228FDd1d2595f85b23FD63de1abE901E259", "0x7b207d27FF26069E48EA631518a2E784a1460cB0", "0xBe4F28db3e39FbcF420B8f9fC5CF4D244C85A09E", "0x8a4675Be6d798ef012D713ca78742C8E2C7F0985", "0xE4de66EF0e34829356b53FB2C0Aa17873798e7Be", "0xCab2f8Ad5b4Ff9a1196f8c67d2e55C5cD7815400", "0x1b99E53326bEc71AD19b6a3afd1d2a83261F200c", "0xa4e13FB920769A2c906277E8fBC6fb046A2c5c9d", "0xA0ee1d489bF1670A4e5fe06e18Bc59b17CB44f2E", "0x391857279e44975aC854F010bD027a64faBC163f", "0x4aD956553FfB3eAC9f8f6b91E0084e50fd6AA66f", "0x0970Ed73b176061124cc1E7f89f8E3CfD5A897F5", "0x7F12698Edb37F3647ece93B99Db0a0e95282f837", "0x5ea73d854F2B1066EDA635c885a8B29676989892", "0x2893e8995C59662b2b9FA579582AF3dC5A6C5884", "0x169Cc0de76CCED3623e819F6748697028C1F4Fb5", "0x64098bD8F1B6b3A9718933b83306A368B51088fb", "0xe599b8b44E84B284d2f0C189EC56d59D46695144", "0xb622991B7f314bF1ef118953ade81aC08d860238", "0xeF43F68d54FC428E770417FbFA57e693E502BCbd", "0x1b48815CD6aFb1650E919bA53bfeaDB1536e9029", "0x8BD1250270ab84b29135db1A619d287add3DecfE", "0x78a801EBA19c1779B5d0eDEb6C571d8180Fc0Af2", "0x9F492299c230D8Ea523f43170e7E3ce6AA19fD7d", "0xb0c8b8e68D71915FEc3d81066E0467D8a544614B", "0x113654a07c0e59A2417F82513FE719A747d57982", "0xfD75F8922388978b7992bD1c516cAcD1F0Bed2a8", "0xd40317DB258590b61b7E94D7678F597199c65498", "0x65ED30f16371aFebB8cf6F8040435c23eF7e7D71", "0xD857cb420Dc45E7FB3e1B1296EB49d7E9c78EEd0", "0x77811b6c55751E28522e3De940ABF1a7F3040235", "0x7fdebf3Efd353271292eD2B84eBCa72696E010b8", "0xf60537C74002349DA79916b4Baf0abD68FEF7665", "0xD6aF95632DD0CFCBa8Ba541310917b46BF70b1c5", "0x19c1d7D867307cB17DD5CEfca8C5822eE54dD243", "0x02B79340D53e5443D63E1645Feeb3e8d9416E56c", "0x3596850252B2Ec4F0b8a7Bcf6D66d9a6ca27508A", "0x3478fc378586f97F859A8ee29e0cc6e32E3995d9", "0x9890bF1c3B105f04f91d33dF107e8Bcba6733111", "0xdED3d149d4c53A46fe7aA1ee8252D71f473B345F", "0x72a5699aD97FaB8B9B77c5aeB396C88CA9cd6ac8", "0x5AA751ebD7ed6e6f63702b6B9B8C8b21723F49E3", "0x68CAe37CcB61C984C69FCE3c353F749773161382", "0xa84693f9e87cCA87f18Be7438Ff9FB8Fded9233b", "0x5709D2C1b87195b473736BB7C08C704499827F91", "0x41aef9c6c2b15884a14198fe66a2b7e2288285e1", "0xaeC851fB50856416796cC801f58C497b01DE6557", "0x1551d7Bc2e9b06D3dCD3fC7ED0c541Ce3ca85971", "0x54Af341da95A4d63658Cd4892Fd2c9d1723a5B24", "0xb37d61837Df6E94b2EEf15524Fd2452dcACC9753", "0x45B6e9bB078a57565268D870855D3b92313f24C6", "0x395f2502A415BCA4A2F84D73Bb8929182a5dD252", "0x4CdcB8F89E83e4D8652A128Fc3300F524795A636", "0xa2D5877EB6bE15926f7C795bECF978B9eEdDf106", "0x1F1E699cbB6686E4C5F69A7Ba0973e84e66178AD", "0xB0D8777738c5a6C26932B3Ef0862cBF5fA07CaaD", "0xfc55A72Ec00Ea3595BA5119882C7e7aDB52985Ca", "0xD1AaCCa80F8eF49A012709cad544738b7835638A", "0xCb999d13D45B11EA3F047f410d66d03Db126b92C", "0xa60cee75d63D0C53342739781D0c4cf52EFF3c8F", "0xF6E3eB66012a657ACbA171A62CBaB0F438E20538", "0x2B3147A215630ec9F22344CA19944A9ec5Cd4158", "0x2cCFBb5900DF2D619dCFC65DF04AA04A426A9726", "0xEf01a6000cd7f7D2Ae8cfa381Ed7e75a4f1D6029", "0xac7F43980FE846D4B49EA9153F38feD690877293", "0x3Bdb2Ac777760044627Bd3E3795DE491e018632F", "0x746A99F95e3d2389265aeD0033B532435AD6B731", "0x5A93eE3A57FB8573410bB2fd90770D2629A0C90e", "0xFF7eFafEef45d0Dd8a71E82a3607D9484B7DB41d", "0xDFC14cf2241F6065b3446674FdeE5164cF430833", "0x830E0416ef3d928E5aABF3FEd13bCe30c03CC43d", "0xB2E0702570d6064E7A0CBB9324a0772E419fd5aa", "0x30153eE3a9470193Fb028517f66492375dBE2712", "0x77FFf5d88e331c8945a8FCE36F4152B8DC00e3eB", "0xD2fE36DD4023Bf052B92331F67d9E28c78Ebd3Bb", "0x2cF78E0CFbF347B704ff5cb51b47E77A9794970C", "0x42e07086E354612011B642B68C5963c92626dD80", "0x9d706141749FdcC0242f831DdDF28939ef6858Ba", "0xae177ccc085F1e68F644E2C34Ea629dF8B58428b", "0xdBfEa76bCf122B8F62EAb66e36f2f1F378ab7d9B", "0x6e0d7933d3dFB019777beFda09eB065D5d79a49e"];

    const leaf = addresses.map(addr => keccak256(addr));
    const Merkletree = new MerkleTree(leaf, keccak256, { sortPairs: true });

    const rootHash = Merkletree.getRoot();
    const adddd = keccak256(account);

    const proof = Merkletree.getHexProof(adddd);

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
                        // alert("Insufficient Funds");
                        console.log(error);

                    } else {
                        console.log("???");
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


