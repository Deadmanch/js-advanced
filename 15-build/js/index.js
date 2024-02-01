import { Task } from './task.js';
import { User } from './user.js';

const task = new Task('I love JS');
const user = new User(task);

user.do();
