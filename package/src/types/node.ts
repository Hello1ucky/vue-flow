import { XYPosition, Position, SnapGrid, Element, XYZPosition, Dimensions } from './flow'
import { DefaultNodeTypes } from './components'
import { HandleElement, ValidConnectionFunc } from './handle'

export type CoordinateExtent = [[number, number], [number, number]]

export type NodeHandleBounds = {
  source?: HandleElement[]
  target?: HandleElement[]
}

export interface Node<T = any> extends Element<T> {
  /** node position x, y */
  position: XYPosition
  /** node type, can be a default type or a custom type */
  type?: keyof DefaultNodeTypes | string
  /** handle position */
  targetPosition?: Position
  /** handle position */
  sourcePosition?: Position
  draggable?: boolean
  selectable?: boolean
  connectable?: boolean
  dragHandle?: string
  /** move on grid */
  snapGrid?: SnapGrid
  /** called when used as target for new connection */
  isValidTargetPos?: ValidConnectionFunc
  /** called when used as source for new connection */
  isValidSourcePos?: ValidConnectionFunc
  /** define node extent, i.e. area in which node can be moved */
  extent?: 'parent' | CoordinateExtent
  /** expands parent area to fit child node */
  expandParent?: boolean
  /** define node as a child node by setting a parent node id */
  parentNode?: string
}

export interface GraphNode<T = any> extends Node<T> {
  /** absolute position in relation to parent elements + z-index */
  computedPosition: XYZPosition
  handleBounds: NodeHandleBounds
  /** node width, height */
  dimensions: Dimensions
  isParent: boolean
  selected: boolean
  dragging: boolean
}

/** these props are passed to node components */
export interface NodeProps<T = any> {
  id: string
  /** node DOM-element */
  nodeElement: HTMLDivElement
  type: string
  data: T
  selected: boolean
  connectable: boolean
  /** absolute position in relation to parent elements + z-index */
  computedPosition: XYZPosition
  /** x, y position */
  position: XYPosition
  /** node dimensions (width, height) */
  dimensions: Dimensions
  label?:
    | string
    | {
        props?: any
        component: any
      }
  /** called when used as target for new connection */
  isValidTargetPos?: ValidConnectionFunc
  /** called when used as source for new connection */
  isValidSourcePos?: ValidConnectionFunc
  parentNode?: string
  dragging: boolean
  zIndex: number
  targetPosition?: Position
  sourcePosition?: Position
  dragHandle?: string
}