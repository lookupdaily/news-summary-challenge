describe('articleListModel', () => {
  const data = { response: {
  results: [{ webTitle: 'webTitle', webUrl: 'webUrl' }]
  }}
  console.log(data)

  it('is created with no articles', () => {
    const articleList = new ArticleListModel()
    expect(articleList.articles).toEqual([])
  })
});