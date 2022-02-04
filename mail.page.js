import Page from './page';
class MailPage extends Page {  
  get writeButton() {
  return $('//*[@id="app"]/div[2]/div/div[1]/nav/div/div[1]/a');
  }
  get whomField() {
  return $('//*[@id="message-to-field"]');
  }
  get themeField() {
  return $('//input[@data-test-id="compose-subject"]');
  } 
  get bodyField() {
  return $('//*[@id="editor-container"]/div[1]');
  }
  async inputWhom (value) {
  await this.whomField.setValue(value);
  }
  async inputTheme (value) {
  await this.themeField.setValue(value);
  }
  async inputBody (value) {
  await this.bodyField.setValue(value);
  }
  }
export default new MailPage();
