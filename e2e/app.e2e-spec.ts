import { FirstAngProjectPage } from './app.po';

describe('first-ang-project App', () => {
  let page: FirstAngProjectPage;

  beforeEach(() => {
    page = new FirstAngProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
