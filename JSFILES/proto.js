"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Cal_1 = require("./Cal");
describe("proto commerce submit form", function () {
    it("submit form", function () {
        protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
        protractor_1.element(protractor_1.by.css("input[name='name']:nth-child(2)")).sendKeys("Mahendan");
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.css("input[name='email']")).sendKeys("smahendrancs@gmail.com");
        protractor_1.element(protractor_1.by.css("input[id='exampleInputPassword1']")).sendKeys("Pass@123");
        protractor_1.element(protractor_1.by.css("select[id='exampleFormControlSelect1']")).click();
        protractor_1.element.all(protractor_1.by.xpath("//option")).get(1).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath("//input[@type='date']")).sendKeys("15/11/1987");
        let m = new Cal_1.multiply();
        m.calculate();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcm90by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUM3QywrQkFBOEI7QUFDOUIsUUFBUSxDQUFDLDRCQUE0QixFQUFDO0lBR3RDLEVBQUUsQ0FBRSxhQUFhLEVBQUM7UUFJZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ25FLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hFLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFHMUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJMUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUlsRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxHQUFHLElBQUksY0FBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWQsQ0FBQyxDQUFDLENBQUM7QUFHSCxDQUFDLENBQUMsQ0FBQyJ9