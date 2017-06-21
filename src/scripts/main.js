/**
 * Created by danawacomputer on 2017-06-20.
 */



// window.alert('Hi');
//
// var a = 5;
// a = 10;
// var b = 'hello';
//
// var result = a + b;
//
// var d = null;
//
// console.log(result);
//
// document.write('<h2>안녕하세요</h2>');

// 02.연산자
/*var acc = 3;
acc += 5; //누적연산자
acc++;
console.log(acc);*/


//03.문자열 결합
/*var a = '안녕하세요';
var b = '자바스크립트';
var c = true;

console.log(a + b + c);
console.log(a , b , c);//결합시켜줌 공백도 넣어서*/


//04. for문
/*for (var i = 0; i < 5; i++) {
    console.log(i,'번째 손님 응대중입니다.');
}

for (var i = 1; i<=9; i++) {
    for (var j = 1; j<=9; j++) {
        console.log(i + '*'+ j +'=' + i*j)
    }
}*/


//05.while문
/*var i = 0;
while (i < 5) {
    console.log(i + '번째 손님 응대중');
    i++;
}*/


//06. if문
/**
 * 숫자타입, number ..0(false) 나머지(true)
 * 문자타입, string ..null, undefined, ''(empty string) (false)이고 나머지(true)
 * 배열타입, [](empty array) (true) 나머지(true)
 * */
/*var a =[];
if (a) {
    console.log('true case');
} else {
    console.log('false case')
}*/


//07. 논리연산자
/*var a = 3;
var b = a || 0; //defalut효과
console.log(b);
*/


//08. 배열기본
/*var arr = ['h', 'e', 'l', 'l', 'o'];
arr.push('world');
console.log(arr);
console.log(arr[2]);

for (var item in arr) {
    console.log(arr[item]);
}*/



//09. 함수
/*function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2,3));

var subTwoNumbers = function (a, b) {
    return a - b;
}; //익명함수를 변수에 넣을 수 있다.
console.log(subTwoNumbers(5,3));

var multiplyTwoNumbers = function (a, b) {
    console.log(a * b);
};
var ret = multiplyTwoNumbers(4,6);
console.log(ret);//return안쓰면 undefined리턴!
function plusThree(a) {
    var resultOutter = a + 3;

    function plusTwo(b) {
        return b + 2;
    }
    return plusTwo(resultOutter);
}
console.log(plusThree(3));

function plusThree(a) {
    var resultOutter = a + 3;
    function plusTwo() {
        return resultOutter + 2;
    }
    return plusTwo();
}
console.log(plusThree(3));
//closer개념!!


//09-1. callback함수(함수형 프로그래밍 기본)
var callbackFunction = function (a, b) {
    return a + b;
};

function getCalcNumbers(a, b, callback) {
    // sayWelcome();
    var result = callback(a, b);
    return result;
}


function sum(datas) {
    var acc = 0;
    for (var item in datas) {
        acc += datas[item];
    }
    return acc;
}
function calcNumbers(datas, func) {
    return func(datas);
}

function avg(datas) {
    return sum(datas) /datas.length;
}
// var result = getCalcNumbers(10, 20, callbackFunction);
// console.log(result);
var arr = [1,2,3,4,5,6];
console.log(calcNumbers(arr, sum));
console.log(calcNumbers(arr, avg));

function makeSquare(val) {
    return function () {
        return val * val;
    }
}
var squareFunction = makeSquare(3);
console.log(squareFunction());
*/


//10. 변수의 스코프(scope of variables) => javascript에서 scope는 함수!!!!
/*function scopeTest(a) {
    var b = 5;

    if(1) {
        var c = 3;
        console.log(c);
    }
    console.log(c);
}
scopeTest();*/


/*window.alert('hello alert'); //내장함수 누가 내장한걸까? JavaScript?? ㄴㄴ!! 브라우저가 내장함


var clickConfirm = window.confirm('hello confirm');

 if(clickConfirm) {
     console.log('확인을 클릭하셨슴다');
 } else {
     console.log('취소를 클릭하셨슴다');
 }
*/



//11. 자바스크립트 객체 var obj = {};

/*var num = 5;
var str = 'hello';
var bool = true; //false
var arr = []; //내부적으로 object type으로 인식
var obj = {};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);

var art1 = {
    articleId: 1,
    title: 'hello',
    author: 'kim',
    content: '첫번째글이에요',
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
}; //객체안에 메쏘드도 가능

console.log(art1.title);
console.log(art1.add(1,2));

var art2 = {
    articleId: 2,
    title: 'hi',
    author: 'lee',
    content: '두번째글이에요'
};
//규정하는 스미카가 없기때문에 자유롭게 만들수 있다.

var artList =
    [
        {
            articleId: 1,
            title: 'hello',
            author: 'kim',
            content: '첫번째글이에요'
        },

        {
            articleId: 2,
            title: 'hi',
            author: 'lee',
            content: '두번째글이에요'
        }
    ];
*/


//12. jQuery - hello
/*jQuery(document).ready(function () {
    // var theText = $('h1').text();
    //
    // console.log(theText);
    //
    // $('h1').text("너 어디가니?");
    // $('li').first().next().text('Seoul이 젤 좋아');
    // $('#destinations li:odd').text('seoul');
    // $('.promo');

    //#bookBigCon > ul:nth-child(1) > li:nth-child(2) > div.goods_img.bookTp > span > a > img (yes24페이지에서 따옴)
    // $('#bookBigCon').children(ul).first().next().children('div.goods_img.bookTp').children('span').children('a').children('img')


    //#topBooksUl_001 > li:nth-child(1) > div.goods_info > p.goods_price
    // $('#topBooksUl_001').children(li).first().children('div.goods_info').children('p.goods_price')





    $('button').on('click',function ()
    {
        //<p>태그 동적으로 추가하기
        var priceTag = $('<p>From $399.99</p>');
        //$('#destinations').children('li.vacation').append(priceTag);
        $(this).after(priceTag);//위에와 같은 코드.
        $(this).remove();

    })

    mouseenter event 발생
   $('#destinations').on('mouseenter', 'li:nth-child(2)',  function () {

       // $(this).parent('#destinations').children('li:last-child').hide();
       $(this).parent('#destinations').children('li:last-child').fadeOut();
   });

   $('#destinations').on('mouseout', 'li:nth-child(2)',  function () {
       $(this).parent('#destinations').children('li:last-child').fadeIn();
   });


 });
 */


/*입력된숫자로 * 계산하기.
jQuery(document).ready(function () {


    $('#myForm').on('keyup','input:text', function () {

        var num = isNaN(+$(this).val()) ? 0 : (+$(this).val()); //+가 문자를 숫자로!!

        $('#destinations').children('li:last-child').children('span').text(562 * num);
    })
});*/

/*ajax사용하기*/
jQuery(document).ready(function () {
    $('#myForm').on('click', ':button' ,function () {
        $.ajax('https://api.github.com/users/jjinha0', { //ajax는 두번째 파라미터는 객체를 받는다.
            success: function (response) {

               var login = response.login;
               var id = response.id;
               var loc = response.location;
               var cAt = response.created_at;

               $('#destinations').children(':first-child').children('h2').text(login);
               $('#destinations').children(':nth-child(2)').text(id);
               $('#destinations').children(':nth-child(3)').text(loc);
               $('#destinations').children(':nth-child(4)').text(cAt);

            }
        })
    })
});


