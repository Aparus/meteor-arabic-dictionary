import { Articles } from "/imports/api/articles.js";
import { Subjects } from "/imports/api/subjects.js";

Template.Tag.onCreated(function() {
  Meteor.subscribe("subjects");
  var self = this;
  this.tagResults = new ReactiveVar([]);
  this.tagInput = new ReactiveVar("xyz");
  if (this.data.subjects == undefined) this.data.subjects = [];
  this.tagIds = new ReactiveVar(this.data.subjects);
  this.isEditMode = new ReactiveVar(false);
});

Template.Tag.helpers({
  tagsAutocomplete() {
    const template = Template.instance();
    let searchFor = template.tagInput.get();
    const selectedTagIds = template.tagIds.get();
    searchFor = new RegExp(template.tagInput.get(), "i");
    const tagsAutocomplete = Subjects.find(
      {
        title: searchFor,
        deleted: { $ne: true },
        published: { $ne: false },
        _id: { $nin: selectedTagIds }
      },
      { limit: 5 }
    );

    return tagsAutocomplete;
  },
  tags() {
    const template = Template.instance();
    const ids = template.tagIds.get();
    const tags = [];
    let tagsUnordered = Subjects.find({ _id: { $in: ids } }).fetch(); // эта шляпа возвращает массив в смешанном порядке, поэтому их надо заново упорядочить
    ids.forEach(tagId => {
      tags.push(
        tagsUnordered.filter(elem => {
          return elem._id == tagId;
        })[0]
      );
    });
    return tags;
  },
  isEditMode() {
    return Template.instance().isEditMode.get();
  }
});

Template.Tag.events({
  "keydown #tagInput"(event, template) {
    template.isEditMode.set(true);
    setTimeout(() => {
      template.tagInput.set(event.target.value);
    }, 100);
  },
  "blur #tagInput"(event, template) {
    setTimeout(() => template.isEditMode.set(false), 200);
  },
  "click .tagsList .existingTag"(event, template) {
    let tagId = event.currentTarget.dataset.id;
    addTag(tagId, template);
  },
  "click .tagsList #createTag"(event, template) {
    Meteor.call(
      "subjects.insert",
      {
        title: template.tagInput.get()
      },
      (error, result) => {
        if (error) console.log("не получилось создать тэг", error);
        let tagId = result;
        addTag(tagId, template);
      }
    );
  },
  "click .tag .-remove"(event, template) {
    const tagId = +event.currentTarget.dataset.tagid;
    template.data.subjects.splice(tagId, 1);
    template.tagIds.set(template.data.subjects);
  }
});

function addTag(tagId, template) {
  template.data.subjects.push(tagId);
  template.tagIds.set(template.data.subjects);
  template.isEditMode.set(false);
}
