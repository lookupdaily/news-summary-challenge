describe('articleModelSpec', () => {
  
  it('gets a new title', () => {
    const article = new ArticleModel('webTitle', 'webUrl')
    expect(article.getTitle()).toEqual('webTitle');
  });
});

