import {FONT_SIZE, FONT_WEIGHT} from './common'

type FontSizeKeys = keyof typeof FONT_SIZE
type FontWeightKeys = keyof typeof FONT_WEIGHT
export type CSSTextStyles = {
  bold?: FontWeightKeys
  size?: FontSizeKeys
}

export interface ListValueCheckBox {
  label: string
  name: string
  value: string
  code?: string
  id: Number | string
}

export interface ListValueCheckBoxClone {
  label: string
  name: string
  id?: Number | string
}
export class ListConfig {
  label = 'label'
  value = 'value'
  disabled = 'disabled'
  name = 'name'
  code = 'code'
}

export type ContainerController = {
  control?: any
  register?: any
}

export type BoxState = 'normal' | 'hover' | 'focused' | 'disabled'

export type PaginationPayload = {
  page_size: number
}

export type TPageType = {
  limit: number
  page: number
}
