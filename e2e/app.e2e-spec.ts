import { TestCliPage } from './app.po';

describe('test-cli App', () => {
  let page: TestCliPage;

  beforeEach(() => {
    page = new TestCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
