import { Articles } from "/imports/api/articles.js";

Template.ArticlePage.onCreated(function() {
  var self = this;
  var id = FlowRouter.getParam("id");
  self.autorun(function() {
    self.subscribe("articleSingle", id);
  });
});

Template.ArticlePage.helpers({
  articles() {
    const id = FlowRouter.getParam("id");
    //we need only 1 article, but then it will be passed to <ArticlesList>
    //witch requeres an array of articles
    const articles = [];
    let article = Articles.findOne({ _id: id });
    if (article === undefined) {
      // while redirection from /article/x to new created /article/y, there is an error
      // i can't understand it. and for now I found only this way to fix it
      document.location.reload();
    }
    articles.push(article);
    console.log("articlePage articles", articles);
    return articles;
  },
  isAdmin() {
    return Meteor.userId() == "ghZegnrrKqnNFaFxb"; //Roles.userIsInRole(loggedInUser, ['admin'])
  }
});
