describe('articleListView', () => {
 
  it('shows you an empty list of articles', () => {
    const articleListSpy = {
      getArticles: jasmine.createSpy().and.returnValue([]),
    };

    const articleView = new ArticleListView(articleListSpy);
    expect(articleView.showArticles()).toEqual("<ul></ul>");
  });

  describe('when articles to display', () => {
    let article
    beforeEach(() => {
      article = {
        getWebUrl: jasmine.createSpy().and.returnValue('webUrl'),
        getTitle: jasmine.createSpy().and.returnValue('webTitle')
      }
    })

    it('shows one article', () => {
      const articleListSpy = {
        getArticles: jasmine.createSpy().and.returnValue([article]),
      };
      const articleView = new ArticleListView(articleListSpy);
      expect(articleView.showArticles()).toEqual(`<ul><li><a href="webUrl">webTitle</a></li></ul>`)
    });
  
    it('shows more than one article', () => {
      const articleListSpy = {
        getArticles: jasmine.createSpy().and.returnValue([article, article])
      }
  
      const articleView = new ArticleListView(articleListSpy);
      expect(articleView.showArticles()).toEqual(`<ul><li><a href="webUrl">webTitle</a></li><li><a href="webUrl">webTitle</a></li></ul>`)
    })
  })
  
});

