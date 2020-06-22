describe('articleListView', () => {
 
  it('shows you an empty list of articles', () => {
    const articleListSpy = {
      getArticles: jasmine.createSpy().and.returnValue([]),
    };

    const articleView = new ArticleListView(articleListSpy);
    expect(articleView.showArticles()).toEqual("<ul></ul>");
  });

  it('shows an article', () => {
    const article = {webTitle: "webTitle", webUrl: "webUrl"}
    const articleListSpy = {
      getArticles: jasmine.createSpy().and.returnValue([{
        getWebUrl: jasmine.createSpy().and.returnValue('webUrl'),
        getTitle: jasmine.createSpy().and.returnValue('webTitle')
      }]),
    };

    const articleView = new ArticleListView(articleListSpy);
    expect(articleView.showArticles()).toEqual(`<ul><li><a href="webUrl">webTitle</a></li></ul>`)
  });
});

