export interface IExample {
  id: number
  title: string
  desc: string
  type: EnumExample
}

export enum EnumExample {
  active = 'ACTIVE',
  normal = 'NORMAL',
  disable = 'DISABLE',
}

export interface ExampleListPayload {
  examples: IExample[]
}

export interface ExampleSinglePayload {
  example: IExample
}

export interface ExampleUpdatePayload {
  id: string
  example: IExample
}

export interface ExampleDeletePayload {
  id: string
}

export interface ExampleResponse {
  success: boolean
  message?: string
}
