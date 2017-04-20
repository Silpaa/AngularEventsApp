import { browser, element, by } from 'protractor';

export class AngularEventAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('event-root h1')).getText();
  }
}
