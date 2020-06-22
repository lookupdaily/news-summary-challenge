describe('articleListModel', () => {
  let ArticleModelSpy
  let data

  beforeEach(() => {
    ArticleModelSpy = jasmine.createSpy('ArticleModelSpy')
    data = { response: {
      results: [{ webTitle: 'webTitle', webUrl: 'webUrl' }]
    }};
  })

  it('is created with no articles', () => {
    const articleList = new ArticleListModel()
    expect(articleList.articles).toEqual([])
  });

  it('creates an article', () => {
    const articleList = new ArticleListModel()
    articleList.createArticles(data)
    expect(articleList.articles.length).toEqual(1)
  });

  it('new article is an instance of article', () => {
    const articleList = new ArticleListModel(ArticleModelSpy)
    articleList.createArticles(data)
    expect(articleList.articles[0]).toEqual(jasmine.any(ArticleModelSpy))
  });
});