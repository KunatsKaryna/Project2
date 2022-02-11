
import Page from './page';
const selectors = {
  draftButton: '//span[@data-test-folder-name="Draft"]',
  draftLetter: '//span[@title="test12082011@yahoo.com"][1]',
  draftWhom: '[data-test-id="pill-text"]',
  draftTheme: '//input[@data-test-id="compose-subject"]',
  draftBody: '//*[@id="editor-container"]/div[1]',
  letterWhom: '//div[@data-test-id="pill"]',
  letterTheme: '//input[@data-test-id="compose-subject"]',
  sendButton: '//button[@data-test-id="compose-send-button"]',
  draftMail: '//span[@title="test12082011@yahoo.com"][1]',
  sentButton: '//a[@data-test-folder-name="Sent"]',
  sentLetter: '//span[@data-test-id="message-subject"]', 
  }
class DraftPage extends Page {
  get draftButton() { return $(selectors.draftButton); }

  get draftLetter() { return $(selectors.draftLetter); }

  get draftWhom() { return $(selectors.draftWhom); }

  get draftTheme() { return $(selectors.draftTheme); }

  get draftBody() { return $(selectors.draftBody); }

  get sendButton() { return $(selectors.sendButton); }  

  get draftMail() { return $(selectors.draftMail); }

  get sentButton() { return $(selectors.sentButton); }
  
  get sentLetter() { return $(selectors.sentLetter); }
  }
export default new DraftPage();
