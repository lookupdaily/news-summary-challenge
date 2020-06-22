describe('articleListView', () => {

  let articleListSpy

  beforeEach(function() {
    articleListSpy = jasmine.createSpyObj('articleListSpy',['getArticles'])
    // tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
    // articleListSpy = { 
    //   getArticles: function() {
    //     console.log('++++++++++++++++++++++++++++++')
    //     return []
    //   }
    // }
    // spyOn(articleListSpy, 'getArticles');
  });
 
  it('shows you a list of articles', () => {
    const articleView = new ArticleListView(articleListSpy);
    articleView.showArticles()
    expect(articleListSpy.getArticles()).toHaveBeenCalled();
  });
});

