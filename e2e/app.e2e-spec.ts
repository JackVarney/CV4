import { CV4Page } from './app.po';

describe('cv4 App', function() {
  let page: CV4Page;

  beforeEach(() => {
    page = new CV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
