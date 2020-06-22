describe('articleListView', () => {

 
  it('shows you an empty list of articles', () => {
    const articleListSpy = {
      getArticles: jasmine.createSpy().and.returnValue([]),
    }

    const articleView = new ArticleListView(articleListSpy);
    expect(articleView.showArticles()).toEqual("<ul></ul>");
  });
});

