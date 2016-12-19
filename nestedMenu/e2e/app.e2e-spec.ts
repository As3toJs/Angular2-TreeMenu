import { NestedMenuPage } from './app.po';

describe('nested-menu App', function() {
  let page: NestedMenuPage;

  beforeEach(() => {
    page = new NestedMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
