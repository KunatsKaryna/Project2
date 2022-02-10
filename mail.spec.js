import loginPage from '../pageobjects/login.page';
import mailPage from '../pageobjects/mail.page';
import draftPage from '../pageobjects/draft.page';
import { expect } from "chai";

describe('Checking mail progress', function() {
  it('should check that registered user can login to the mailbox',async function() {
    await loginPage.open('https://yahoo.com/');
    await loginPage.signinButton.click();
    await loginPage.loginField.setValue('test12082011');
    await loginPage.nextButton.click();
    await loginPage.passwordField.setValue('770021rl');
    await loginPage.nextButton.click();
    expect (await (loginPage.mailButton).isDisplayed()).to.equal(true);
    await loginPage.mailButton.click();
    });
  
  it('should check that registered user can create a new mail',async function() {
    await mailPage.writeButton.click();
    await mailPage.whomField.setValue('test12082011@yahoo.com');
    await mailPage.themeField.setValue('letter');
    await mailPage.bodyField.setValue('Hello, tester');
    expect(await (mailPage.bodyField).getText()).to.contain('Hello, tester');
    });
    
  it('should check that the mail can be saved as a draft',async function() {
    await draftPage.draftButton.click();
    await (draftPage.draftButton).waitForDisplayed({ timeout: 5000 });
    expect(await (draftPage.draftLetter).isDisplayed()).is.equal(true);
    await draftPage.draftLetter.click();
    });

  it('should check that the field are filled in correctly',async function() {  
    expect(await (draftPage.draftWhom).getText()).to.be.equal('test12082011@yahoo.com');
    expect(await (draftPage.draftTheme).getAttribute('value')).to.be.equal('letter');
    expect(await (draftPage.draftBody).getText()).to.contain('Hello, tester');
    await draftPage.sendButton.click();
    });

  it('should check that the mail disappeared from drafts folder',async function() {
    await draftPage.draftButton.click();
    await draftPage.draftMail.waitForDisplayed({reverse: true});
    expect(await draftPage.draftMail.isDisplayed()).is.equal(false);
    });
  
  it('should check that the mail is in sent folder',async function() {
    await draftPage.sentButton.click();
    await (draftPage.sentLetter).waitForDisplayed({ timeout: 10000 });
    expect(await draftPage.sentLetter.isDisplayed()).to.be.equal(true);
    });

  it('should check that then user can log out',async function() {
    await loginPage.profileButton.moveTo();
    await (loginPage.logoffButton).waitForDisplayed();
    await loginPage.logoffButton.click();
    await (loginPage.signinButton).waitForDisplayed();
    expect(await (loginPage.signinButton).isDisplayed()).to.equal(true);
    });
    });
