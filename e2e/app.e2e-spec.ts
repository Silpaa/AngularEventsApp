import { AngularEventAppPage } from './app.po';

describe('angular-event-app App', function() {
  let page: AngularEventAppPage;

  beforeEach(() => {
    page = new AngularEventAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('event works!');
  });
});
