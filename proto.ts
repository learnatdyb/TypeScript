import {browser,element,by} from 'protractor'
import {multiply} from './Cal'
describe("proto commerce submit form",function()

{
it ("submit form",function()

{

    browser.get("https://qaclickacademy.github.io/protocommerce/");
element(by.css("input[name='name']:nth-child(2)")).sendKeys("Mahendan");
browser.sleep(5000);

element(by.css("input[name='email']")).sendKeys("smahendrancs@gmail.com");


element(by.css("input[id='exampleInputPassword1']")).sendKeys("Pass@123");



element(by.css("select[id='exampleFormControlSelect1']")).click();



element.all(by.xpath("//option")).get(1).click();
browser.sleep(5000);

element(by.xpath("//input[@type='date']")).sendKeys("15/11/1987");

let m = new multiply();
m.calculate();

});


});