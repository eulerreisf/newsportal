import { ObjectId } from 'bson';

class Task {
  constructor({
    title,
    description = description,
    author = author,
    id = new ObjectId(),
  }) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  static STATUS_OPEN = 'Open';
  static STATUS_IN_PROGRESS = 'InProgress';
  static STATUS_COMPLETE = 'Complete';

  static schema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      title: 'string',
      description: 'string',
      author: 'string',
    },
    primaryKey: '_id',
  };
}

export { Task };
