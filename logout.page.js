import Page from './page';
class LogoutPage extends Page {
  get profileButton() {
  return $('#ybarAccountMenuOpener'); 
  }
  get logoffButton() {
  return $('//*[@id="profile-signout-link"]');
  }
  }
export default new LogoutPage();
