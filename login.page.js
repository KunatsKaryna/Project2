import Page from './page';
class LoginPage extends Page {
  get signinButton() {
  return $('//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a');
  }
  get loginButton() {
  return $('//*[@id="login-username"]');
  }
  get nextButton() {
  return $('//*[@id="login-signin"]');
  }
  get passwordButton() {
  return $('//*[@id="login-passwd"]');
  }
  get nextButton2() {
  return $('//*[@id="login-signin"]');
  }
  get mailButton() {
  return $('//*[@id="ybarMailLink"]/span[1]');
  }
  async open () {
  await browser.url('https://www.yahoo.com/');
  }
  async inputLogin (value) {
  await this.loginButton.setValue(value);
  }
  async inputPassword (value) {
  await this.passwordButton.setValue(value);
  }
  }
export default new LoginPage();
