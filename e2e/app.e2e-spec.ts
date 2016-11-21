import { GiphyPage } from './app.po';

describe('giphy App', function() {
  let page: GiphyPage;

  beforeEach(() => {
    page = new GiphyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
