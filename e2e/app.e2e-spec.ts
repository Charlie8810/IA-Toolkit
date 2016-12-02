import { IADashboardPage } from './app.po';

describe('iadashboard App', function() {
  let page: IADashboardPage;

  beforeEach(() => {
    page = new IADashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
