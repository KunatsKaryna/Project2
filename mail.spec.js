import LoginPage from '../pageobjects/login.page';
import MailPage from '../pageobjects/mail.page';
import DraftPage from '../pageobjects/draft.page';
import LogoutPage from '../pageobjects/logout.page';

describe('Checking login progress', function() {
  it('should check that registered user can login to the mailbox',async function() {
    await LoginPage.open();
    await LoginPage.signinButton.click();
    await LoginPage.inputLogin('test12082011');
    expect(LoginPage.nextButton).toExist();
    await LoginPage.nextButton.click();
    await LoginPage.inputPassword('770021rl');
    await LoginPage.nextButton2.click();
    expect(LoginPage.mailButton).toExist();
    await LoginPage.mailButton.click();
    });
    });
describe('Checking mail creation', function() {
  it('should check that registered user can create a new mail',async function() {
    await MailPage.writeButton.click();
    await MailPage.inputWhom('test12082011@yahoo.com');
    expect(MailPage.inputWhom).toHaveTextContaining('test12082011@yahoo.com');
    await MailPage.inputTheme('letter');
    expect(MailPage.inputTheme).toHaveTextContaining('letter');
    await MailPage.inputBody('Hello, tester');
    expect(MailPage.inputBody).toHaveTextContaining('Hello, tester');
    });
    });
describe('Checking druft progress', function() {
  it('should check that the mail can be saved as a draft',async function() {
    await DraftPage.draftButton.click();
    expect(DraftPage.draftLetter).toExist();
    await DraftPage.draftLetter.click();
    expect(DraftPage.whom).toHaveTextContaining('test12082011@yahoo.com');
    expect(DraftPage.theme).toHaveTextContaining('letter');
    expect(DraftPage.body).toHaveTextContaining('Hello, tester');
    });
  it('should check that the draft can be send',async function() {
    expect(DraftPage.sendButton).toExist();
    await DraftPage.sendButton.click();
    });  
  it('should check that the mail disappeared from drafts folder',async function() {
    await DraftPage.draftButton.click();
    expect(DraftPage.draftDisappear).toHaveValue(false);
    });
    });
describe('Checking sent folder', function() {
  it('should check that the mail is in sent folder',async function() {
    await DraftPage.sentButton.click();
    expect(DraftPage.letter).toExist();
    });
    });

describe('Checking log out', function() {
  it('should check that the user can log out',async function() {
    await LogoutPage.profileButton.moveTo();
    await LogoutPage.logoffButton.waitForDisplayed();
    await LogoutPage.logoffButton.click();
    expect(LoginPage.signinButton).toExist();
    });
    });
