import { TodoNgStorePage } from './app.po';

describe('todo-ng-store App', () => {
  let page: TodoNgStorePage;

  beforeEach(() => {
    page = new TodoNgStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todo works!');
  });
});
