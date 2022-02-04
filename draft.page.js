import Page from './page';
class DraftPage extends Page {
  get draftButton() {
  return $('//span[@data-test-folder-name="Draft"]');
  }
  get draftLetter() {
  return $('//span[@title="test12082011@yahoo.com"][1]');
  }
  get draftWhom() {
  return ('//div[data-test-id="pill-text"]');
  }
  get draftTheme() {
  return $('//input[@data-test-id="compose-subject"]');
  }
  get draftBody() {
  return $('//*[@id="editor-container"]/div[1]');
  }
  get sendButton() {
  return $('//button[@data-test-id="compose-send-button"]');
  }  
  get draftMail() {
  return $('//span[@title="test12082011@yahoo.com"][1]');
  }
  get sentButton() {
  return $('//a[@data-test-folder-name="Sent"]'); 
  }
  get letter() {
  return $('//span[@data-test-id="message-subject"]');
  }
  async whom (value) {
  await this.draftWhom.getAttribute(value);
  }
  async theme (value) {
  await this.draftTheme.getAttribute(value);
  }
  async body (value) {
  await this.draftBody.getAttribute(value);
  }
  async draftDisappear (value) {
  await this.draftMail.isDisplayed(value);
  }
  }
export default new DraftPage();
