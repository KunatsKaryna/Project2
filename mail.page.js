import Page from './page';
const selectors = {
  writeButton: '//*[@id="app"]/div[2]/div/div[1]/nav/div/div[1]/a',
  whomField: '//*[@id="message-to-field"]',
  themeField: '//input[@data-test-id="compose-subject"]',
  bodyField: '//*[@id="editor-container"]/div[1]',
  };
class MailPage extends Page {  
  get writeButton() { return $(selectors.writeButton); }

  get whomField() { return $(selectors.whomField); }

  get themeField() { return $(selectors.themeField); }
   
  get bodyField() { return $(selectors.bodyField); }
  }
export default new MailPage();
