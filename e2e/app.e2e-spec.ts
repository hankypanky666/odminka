import { OdminkaPage } from './app.po';

describe('odminka App', () => {
  let page: OdminkaPage;

  beforeEach(() => {
    page = new OdminkaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
