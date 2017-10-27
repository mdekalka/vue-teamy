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

export const DEFAULT_MAX_UPLOAD_SIZE = 2 * 1024 * 1024 // byte

export const SIDEMENU_ITEMS = [
  { id: 1, route: '/new-profile', icon: 'fw fa-user-plus', name: 'Create profile' },
  { id: 2, route: '/profiles', icon: 'fw fa-users', name: 'Profile list' },
  { id: 3, route: '/tasks', icon: 'fw fa-id-card', name: 'Task list' }
]

export const DATE_FORMAT = {
  default: 'MM/DD/YYYY',
  month: 'MMMM',
  day: 'DD',
  year: 'YYYY'
}

export const GOOGLE_MAP_URL = ({ lat, lng }) => {
  const MAX_COORDS_SIZE = 6

  return `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat.toFixed(MAX_COORDS_SIZE)},${lng.toFixed(MAX_COORDS_SIZE)}&sensor=true`
}
