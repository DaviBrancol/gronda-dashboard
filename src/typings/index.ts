// API Status mocking for catching errors with success status
export enum APIStatus {
  SUCCESS = 'ok',
  ERROR = 'error',
}

// Default type for input options
export type Option<T> = {
  label: string
  value: T
}
