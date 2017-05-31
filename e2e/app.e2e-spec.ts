import { StudentMarkSystemPage } from './app.po';

describe('student-mark-system App', () => {
  let page: StudentMarkSystemPage;

  beforeEach(() => {
    page = new StudentMarkSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
