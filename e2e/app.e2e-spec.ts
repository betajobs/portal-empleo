import { PortalEmpleoPage } from './app.po';

describe('portal-empleo App', () => {
  let page: PortalEmpleoPage;

  beforeEach(() => {
    page = new PortalEmpleoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
