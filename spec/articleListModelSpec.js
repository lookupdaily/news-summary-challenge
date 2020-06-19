describe('articleListModel', () => {
  const data = { response: {
  results: [{ webTitle: 'webTitle', webUrl: 'webUrl' }]
  }};

  it('is created with no articles', () => {
    const articleList = new ArticleListModel()
    expect(articleList.articles).toEqual([])
  });

  it('creates an article', () => {
    const articleList = new ArticleListModel()
    articleList.createArticles(data)
    expect(articleList.articles.length).toEqual(1)
  });
});