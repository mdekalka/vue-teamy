export const URL = 'http://jsonplaceholder.typicode.com'

export default {
  url: {
    users: `${URL}/users`,
    photos: `${URL}/photos`,
    albums: `${URL}/albums`,
    comments: `${URL}/comments`,
    posts: `${URL}/posts`
  }
}

export const TASK_TYPES = [
  { id: 1, key: 'bug', title: 'bug' },
  { id: 2, key: 'story', title: 'story' },
  { id: 3, key: 'epic', title: 'epic' },
  { id: 4, key: 'blocker', title: 'blocker' }
]

export const TASK_STATUSES = [
  { id: 1, key: 'To Do', title: 'To Do' },
  { id: 2, key: 'In Progress', title: 'In Progress' },
  { id: 3, key: 'Done', title: 'Done' },
  { id: 4, key: 'QA', title: 'QA' }
]

export const TASK_PRIORITIES = [
  { id: 1, key: 'minor', title: 'minor' },
  { id: 2, key: 'medium', title: 'medium' },
  { id: 3, key: 'major', title: 'major' },
  { id: 4, key: 'blocker', title: 'blocker' }
]

export const STATUS = {
  OK: 'OK',
  FAIL: 'FAIL'
}

export const NO_VALUE = 'N/A'
