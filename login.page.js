import Page from './page';
const selectors = {
  signinButton: '//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a',
  loginField: '//*[@id="login-username"]',
  nextButton: '//*[@id="login-signin"]',
  passwordField: '//*[@id="login-passwd"]',
  mailButton: '//*[@id="ybarMailLink"]/span[1]',
  profileButton: '#ybarAccountMenuOpener',
  logoffButton: '//*[@id="profile-signout-link"]',
  };
class LoginPage extends Page {
  get signinButton() { return $(selectors.signinButton); }
  get loginField() { return $(selectors.loginField); }
  get nextButton() { return $(selectors.nextButton); }
  get passwordField() { return $(selectors.passwordField); }
  get mailButton() { return $(selectors.mailButton); }
  get profileButton() { return $(selectors.profileButton); }
  get logoffButton() { return $(selectors.logoffButton); }
  }
export default new LoginPage();