# @vue-flow/core

## 1.18.2

### Patch Changes

- [#852](https://github.com/bcakmakoglu/vue-flow/pull/852) [`8f537196`](https://github.com/bcakmakoglu/vue-flow/commit/8f537196c1b9c0681870c212ccb29592ff9ffb01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set handle connectable prop to `undefined` as it's default value

## 1.18.1

### Patch Changes

- [#847](https://github.com/bcakmakoglu/vue-flow/pull/847) [`eee41ece`](https://github.com/bcakmakoglu/vue-flow/commit/eee41ece3ab58bd4572f73701917fed11f64ee19) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use connectionClickStartHandle for click connect

- [#847](https://github.com/bcakmakoglu/vue-flow/pull/847) [`25145030`](https://github.com/bcakmakoglu/vue-flow/commit/251450300f1637a69c0f04ec3f5d27a6ca59fd4a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove duplicate event bindings from handle

- [#843](https://github.com/bcakmakoglu/vue-flow/pull/843) [`6320e5e7`](https://github.com/bcakmakoglu/vue-flow/commit/6320e5e71ae03950b599db3a8f0136728e00f671) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add noPanClassName to handles

- [#844](https://github.com/bcakmakoglu/vue-flow/pull/844) [`6978468d`](https://github.com/bcakmakoglu/vue-flow/commit/6978468d2d68918e16e9d8607216242cb6b31ead) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow null values to be set for key codes

- [#843](https://github.com/bcakmakoglu/vue-flow/pull/843) [`6320e5e7`](https://github.com/bcakmakoglu/vue-flow/commit/6320e5e71ae03950b599db3a8f0136728e00f671) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use fallback for connectableStart and connectableEnd

## 1.18.0

### Minor Changes

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`74c64ff3`](https://github.com/bcakmakoglu/vue-flow/commit/74c64ff34dd3e22111274d8211cd625c9b70e497) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `clickConnectStart` and `clickConnectEnd` events

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`fb888b5f`](https://github.com/bcakmakoglu/vue-flow/commit/fb888b5f8bcd9e25a027601ce6295163951ef09e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add type to edge updater anchor class

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`3cc8827c`](https://github.com/bcakmakoglu/vue-flow/commit/3cc8827c808271c4abdff14dd8464f0a4f767a58) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `connectableStart` and `connectableEnd` handle props. Can be used to enable/disable starting or ending a connection on a specific handle.

- [#840](https://github.com/bcakmakoglu/vue-flow/pull/840) [`34b5b7d2`](https://github.com/bcakmakoglu/vue-flow/commit/34b5b7d2fc37cc5a713e8ff94eab0d0aa7303ec5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add connection start and end handles to store state

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`ae41dfac`](https://github.com/bcakmakoglu/vue-flow/commit/ae41dfac10ad790002c5d62b6e730797b18d48ff) Thanks [@github-actions](https://github.com/apps/github-actions)! - Do not remove orphaned edges from state. They will not be rendered but stay in the state, so a user can potentially fix the edge.

## 1.17.6

### Patch Changes

- [#833](https://github.com/bcakmakoglu/vue-flow/pull/833) [`02125c1`](https://github.com/bcakmakoglu/vue-flow/commit/02125c17441c7fe8e07a3b7490d591443eb17c19) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent flickering of graph by hiding transformation pane until next frame

- [#835](https://github.com/bcakmakoglu/vue-flow/pull/835) [`58d75b0`](https://github.com/bcakmakoglu/vue-flow/commit/58d75b09f8fa303706ad03ed7cb60a6f4df5565c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reset node and edge state before the rest of the state when calling `$reset` to avoid throwing error

## 1.17.5

### Patch Changes

- [#825](https://github.com/bcakmakoglu/vue-flow/pull/825) [`50f1dff`](https://github.com/bcakmakoglu/vue-flow/commit/50f1dff9e0b76862f5c02efc5b3f2b10513d3194) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent handles with connectable `false` from being considered valid handles

- [#826](https://github.com/bcakmakoglu/vue-flow/pull/826) [`95dd1ae`](https://github.com/bcakmakoglu/vue-flow/commit/95dd1aef34776f3cc92f90306d1087c42805ac67) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Unwrap `nodesConnectable` ref in onClick handler of handles

- [#828](https://github.com/bcakmakoglu/vue-flow/pull/828) [`184c273`](https://github.com/bcakmakoglu/vue-flow/commit/184c27392e07d9f5d9e290a8b1df996f89389103) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edges and connection line paths not matching up

## 1.17.4

### Patch Changes

- [`ffc2d17`](https://github.com/bcakmakoglu/vue-flow/commit/ffc2d17ab3201d69524f8e95797b57813256bdd7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix incorrect type export paths

## 1.17.3

### Patch Changes

- [#815](https://github.com/bcakmakoglu/vue-flow/pull/815) [`15cc769`](https://github.com/bcakmakoglu/vue-flow/commit/15cc7692c84a7cbd1af4c7850cc742662c292cf0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix object assign order when parsing node and edge obj

## 1.17.2

### Patch Changes

- [#810](https://github.com/bcakmakoglu/vue-flow/pull/810) [`3c06fdfb`](https://github.com/bcakmakoglu/vue-flow/commit/3c06fdfbf92b491e1be87077250949b82f1fd534) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make wheel and touchstart event listeners passive to avoid warnings

## 1.17.1

### Patch Changes

- [#799](https://github.com/bcakmakoglu/vue-flow/pull/799) [`b1e92195`](https://github.com/bcakmakoglu/vue-flow/commit/b1e92195e5679ecb74cd0edea43bfa5359727a5c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing emit definition for `error`

- [#796](https://github.com/bcakmakoglu/vue-flow/pull/796) [`54ea8a0d`](https://github.com/bcakmakoglu/vue-flow/commit/54ea8a0d0c6c95931cb2aeb0079751db6447df65) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix return type of `getIncomers` & `getOutgoers`

- [#793](https://github.com/bcakmakoglu/vue-flow/pull/793) [`c67e9391`](https://github.com/bcakmakoglu/vue-flow/commit/c67e939112fbc4003ab4164f8b7ea52aa44a718f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if node handle bounds exist in `getNodesInitialized`

- [#793](https://github.com/bcakmakoglu/vue-flow/pull/793) [`ef1c48ce`](https://github.com/bcakmakoglu/vue-flow/commit/ef1c48ce0a99f71efba197a2de613179a6891211) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use visible nodes to check if `onNodesInitialized` should be triggered

## 1.17.0

### Minor Changes

- [#785](https://github.com/bcakmakoglu/vue-flow/pull/785) [`7667aa60`](https://github.com/bcakmakoglu/vue-flow/commit/7667aa60b819cc7c545d5374e49cdc27d5004d5b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing objects with only `id` to `getConnectedEdges` nodes arg

- [#781](https://github.com/bcakmakoglu/vue-flow/pull/781) [`ad8c7897`](https://github.com/bcakmakoglu/vue-flow/commit/ad8c78977cd0e436e6f9602ecf5ea0805bf8ac13) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `onError` hook which allows handling vue flow errors by users. Will default to console.warn if no handler is passed

### Patch Changes

- [#783](https://github.com/bcakmakoglu/vue-flow/pull/783) [`b864c436`](https://github.com/bcakmakoglu/vue-flow/commit/b864c43677779782e98f5cb809a047f2dc5b0aff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `stop` from `EdgeRenderer` as watcher has been removed and stop refers to `window.stop` which causes requests to be cancelled when VueFlow is unmounted

## 1.16.5

### Patch Changes

- [#780](https://github.com/bcakmakoglu/vue-flow/pull/780) [`cdaf1e99`](https://github.com/bcakmakoglu/vue-flow/commit/cdaf1e993ad3328f2659a4781214914ee78683bf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `Object.assign` when parsing node to avoid mutating the original object.

- [#770](https://github.com/bcakmakoglu/vue-flow/pull/770) [`f88faac7`](https://github.com/bcakmakoglu/vue-flow/commit/f88faac7d2849c596121519b5b417270f9cdfc3d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix non-passive wheel event listener violation

## 1.16.4

### Patch Changes

- [#765](https://github.com/bcakmakoglu/vue-flow/pull/765) [`12c84a80`](https://github.com/bcakmakoglu/vue-flow/commit/12c84a80365b48db758ccdd675a12744b18dbe1b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Unwrap refs in node wrapper

- [#765](https://github.com/bcakmakoglu/vue-flow/pull/765) [`12c84a80`](https://github.com/bcakmakoglu/vue-flow/commit/12c84a80365b48db758ccdd675a12744b18dbe1b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Rename `parentNode` prop for custom nodes to `parent` to avoid TypeError which occurs as `div` already has `parentNode` defined which cannot be overwritten

## 1.16.3

### Patch Changes

- [#756](https://github.com/bcakmakoglu/vue-flow/pull/756) [`47b03e75`](https://github.com/bcakmakoglu/vue-flow/commit/47b03e757152b7801c28d8eb3373a084bd2a16d8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing source and target position values on `GraphEdge` type objects if available

- [#759](https://github.com/bcakmakoglu/vue-flow/pull/759) [`35b0a0ac`](https://github.com/bcakmakoglu/vue-flow/commit/35b0a0acef11a1b63690c7490be28fe2ff62643b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use render fn for node wrapper. Fixes props being hyphanated instead of camelcase when passed to custom components.

## 1.16.2

### Patch Changes

- [#751](https://github.com/bcakmakoglu/vue-flow/pull/751) [`060202db`](https://github.com/bcakmakoglu/vue-flow/commit/060202db427cfbed47bff82ee1aeb0d2aa054ecb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use computed properties for edge class and style props

- [#750](https://github.com/bcakmakoglu/vue-flow/pull/750) [`e799cf6e`](https://github.com/bcakmakoglu/vue-flow/commit/e799cf6e3e660375ce8a1a7340873ab770b3e40e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct check if valid connection func was passed

## 1.16.1

### Patch Changes

- [#746](https://github.com/bcakmakoglu/vue-flow/pull/746) [`73a2b168`](https://github.com/bcakmakoglu/vue-flow/commit/73a2b16893b263d2fd64852b4e4acb0637a603ec) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Downgrade unplugin-auto-import to fix vue types issue

## 1.16.0

### Minor Changes

- [#745](https://github.com/bcakmakoglu/vue-flow/pull/745) [`01e91b68`](https://github.com/bcakmakoglu/vue-flow/commit/01e91b68f88467f5b1c190a12e69bd7f952849d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add handle validation result into store state

- [#744](https://github.com/bcakmakoglu/vue-flow/pull/744) [`1bc50add`](https://github.com/bcakmakoglu/vue-flow/commit/1bc50add8ba8ea2298319341f6d3bd73e9ca39ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass targetNode and targetHandle as props to custom connection lines

- [#740](https://github.com/bcakmakoglu/vue-flow/pull/740) [`a3ded51f`](https://github.com/bcakmakoglu/vue-flow/commit/a3ded51fa452e537c245768655368f089534091e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `clamp` utility

- [#745](https://github.com/bcakmakoglu/vue-flow/pull/745) [`01e91b68`](https://github.com/bcakmakoglu/vue-flow/commit/01e91b68f88467f5b1c190a12e69bd7f952849d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `isValidConnection` prop to allow for validating edge updates or use a global validator for all handles

### Patch Changes

- [#740](https://github.com/bcakmakoglu/vue-flow/pull/740) [`a3ded51f`](https://github.com/bcakmakoglu/vue-flow/commit/a3ded51fa452e537c245768655368f089534091e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Force update node dimensions when ResizeObserver callback is triggered

## 1.15.5

### Patch Changes

- [#734](https://github.com/bcakmakoglu/vue-flow/pull/734) [`123ad512`](https://github.com/bcakmakoglu/vue-flow/commit/123ad5126a480e11735ff58d8f039385243a127f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if handle is connectable before trying to validate

- [#737](https://github.com/bcakmakoglu/vue-flow/pull/737) [`f2b3cd87`](https://github.com/bcakmakoglu/vue-flow/commit/f2b3cd874a4c3e3494e093afd2a5ca34c756864a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Blur node element after unselecting

## 1.15.4

### Patch Changes

- [#728](https://github.com/bcakmakoglu/vue-flow/pull/728) [`6b149ca6`](https://github.com/bcakmakoglu/vue-flow/commit/6b149ca69a634c2cc51138e01098dbdc0bdf6620) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Compare internal node dimensions against calculated ones when trying to update node dimensions

## 1.15.3

### Patch Changes

- [#720](https://github.com/bcakmakoglu/vue-flow/pull/720) [`bac0d735`](https://github.com/bcakmakoglu/vue-flow/commit/bac0d735b1df65945f12b866eb94eab4f7c70b01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove duplicate connectStart and connectEnd emits

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`18b934eb`](https://github.com/bcakmakoglu/vue-flow/commit/18b934eb9e4163c9188e6d81d618f67716c8ef5e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - prevent selecting nodes when node selectable is false

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`a4b0b6b7`](https://github.com/bcakmakoglu/vue-flow/commit/a4b0b6b799636deca171eb4d438901fe4af330a9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make shouldReplaceId arg in updateEdge optional

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`7a2f1c3b`](https://github.com/bcakmakoglu/vue-flow/commit/7a2f1c3b21dc9acb3d311176be63f0990894ce52) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add noPanClassName when node is draggable

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`16bd9152`](https://github.com/bcakmakoglu/vue-flow/commit/16bd915214335af8ed3c82409836756e7dde6e35) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait until all nodes are initialized before triggering viewport actions

## 1.15.2

### Patch Changes

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix umd pkg names and use the correct vue flow core umd pkg name in plugins

- [#713](https://github.com/bcakmakoglu/vue-flow/pull/713) [`95b51a0e`](https://github.com/bcakmakoglu/vue-flow/commit/95b51a0e352e29305a12387ea03fa35ce7f16825) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent undefined being passed to updateNodeInternals

- [#712](https://github.com/bcakmakoglu/vue-flow/pull/712) [`76256439`](https://github.com/bcakmakoglu/vue-flow/commit/76256439bb59f2afb20a423b283d7232afece97f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix resize-observer throwing when node el doesn't exist but effect is run

- [#707](https://github.com/bcakmakoglu/vue-flow/pull/707) [`e8c383ff`](https://github.com/bcakmakoglu/vue-flow/commit/e8c383ffeffb306ca18d2acfaf145efba3e11fa1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix nodes not using zIndex option

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent writing `process.env` into umd build

- [#714](https://github.com/bcakmakoglu/vue-flow/pull/714) [`1fa4ee1b`](https://github.com/bcakmakoglu/vue-flow/commit/1fa4ee1b8faf25ce83c6c8f37fa35531c54eba0c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait until viewport helper is initialized before triggering viewport functions and pane ready event

## 1.15.1

### Patch Changes

- [#704](https://github.com/bcakmakoglu/vue-flow/pull/704) [`b3462f2`](https://github.com/bcakmakoglu/vue-flow/commit/b3462f22cb4bdeabb39f266ccc8879fa1b3ceae9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove export of `SelectionPane` as the component doesn't exist anymore

- [#703](https://github.com/bcakmakoglu/vue-flow/pull/703) [`0838d2c`](https://github.com/bcakmakoglu/vue-flow/commit/0838d2c46bdcf24b9f88a9ed2ce10f939b31fbfe) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Downgrade auto imports. Fixes broken type imports.

## 1.15.0

### Minor Changes

- [#684](https://github.com/bcakmakoglu/vue-flow/pull/684) [`a788cc0`](https://github.com/bcakmakoglu/vue-flow/commit/a788cc09421a9b39aff1ff44052be6feae00b7e9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add option to enable/disable replacing edge id when `updateEdge` action is used

- [#699](https://github.com/bcakmakoglu/vue-flow/pull/699) [`c1a7995`](https://github.com/bcakmakoglu/vue-flow/commit/c1a799592ee7fc116ee74fc6a083496ee5350629) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Omit internal properties when using `toObject`

### Patch Changes

- [#667](https://github.com/bcakmakoglu/vue-flow/pull/667) [`231271a`](https://github.com/bcakmakoglu/vue-flow/commit/231271a7dadaaee056e79e16f30d2f0755e51d53) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent layout shift on initial render by hiding viewport until initial nodes have width/height

- [#667](https://github.com/bcakmakoglu/vue-flow/pull/667) [`89198bd`](https://github.com/bcakmakoglu/vue-flow/commit/89198bdc29ed9dde6961190ac99eb30aebfbf474) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove Promises from viewport helper functions, will not await viewport anymore but instead return no-op functions if called too early

- [#695](https://github.com/bcakmakoglu/vue-flow/pull/695) [`616e795`](https://github.com/bcakmakoglu/vue-flow/commit/616e7951e51c112f29107621588a29b60a7d6e85) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use snapGrid values to clamp initial node positions

## 1.14.3

### Patch Changes

- [#671](https://github.com/bcakmakoglu/vue-flow/pull/671) [`c47bc5ce`](https://github.com/bcakmakoglu/vue-flow/commit/c47bc5ceb2ea9c739be5eef3291c1312fdbce824) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fit view on init is now triggered as soon as node dimensions are updated for the first time

- [#682](https://github.com/bcakmakoglu/vue-flow/pull/682) [`b08cb4d4`](https://github.com/bcakmakoglu/vue-flow/commit/b08cb4d45904c229d9ecda5e3cb477cbb7a6acaf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add compat mode to components to avoid breaking when used with @vue/compat

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow depr. connectionLineType to be null

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing straight type to connection line options

- [#680](https://github.com/bcakmakoglu/vue-flow/pull/680) [`70ae3410`](https://github.com/bcakmakoglu/vue-flow/commit/70ae341062072acab234ce9ee88b33d2866ef7b3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connections for handles that are bigger than the specified connection radius

- [#680](https://github.com/bcakmakoglu/vue-flow/pull/680) [`70ae3410`](https://github.com/bcakmakoglu/vue-flow/commit/70ae341062072acab234ce9ee88b33d2866ef7b3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always emit edge update event

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connection line not rendering properly when destructuring slot props

- [#681](https://github.com/bcakmakoglu/vue-flow/pull/681) [`d73995aa`](https://github.com/bcakmakoglu/vue-flow/commit/d73995aae1b14ea5cad4ee3764cff558344bcb34) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set `user-select: none` for edge labels

- [#668](https://github.com/bcakmakoglu/vue-flow/pull/668) [`d39c63e5`](https://github.com/bcakmakoglu/vue-flow/commit/d39c63e5f3ec54fb1de10d84a7271546d1b7e3e8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid re-rendering edges that have been deleted

## 1.14.2

### Patch Changes

- [#663](https://github.com/bcakmakoglu/vue-flow/pull/663) [`05a3e26e`](https://github.com/bcakmakoglu/vue-flow/commit/05a3e26e58ba19864ceb3858412f67d6af3099b7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid triggering edge update when mouse button is not left

- [#658](https://github.com/bcakmakoglu/vue-flow/pull/658) [`b8ad4458`](https://github.com/bcakmakoglu/vue-flow/commit/b8ad4458c3efddabf8bdc8bb229bed16f5aaf63c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When `includeHiddenNodes` is false, exclude hidden nodes when using fitView

- [#660](https://github.com/bcakmakoglu/vue-flow/pull/660) [`0dbabfc5`](https://github.com/bcakmakoglu/vue-flow/commit/0dbabfc58b63c2776f56e916f40abcb7d3dc2ecb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use default values when defaultViewport vals are missing

## 1.14.1

### Patch Changes

- [#655](https://github.com/bcakmakoglu/vue-flow/pull/655) [`3d958dfe`](https://github.com/bcakmakoglu/vue-flow/commit/3d958dfe4f36702dd89ee456369c6090e22163e3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if prev closest handle exists in pointer up handler

- [#656](https://github.com/bcakmakoglu/vue-flow/pull/656) [`b3796a66`](https://github.com/bcakmakoglu/vue-flow/commit/b3796a66ea66386484e7b56726c9f40f69a4556f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Store connectionStatus when using connection actions

## 1.14.0

### Minor Changes

- [#654](https://github.com/bcakmakoglu/vue-flow/pull/654) [`99909f16`](https://github.com/bcakmakoglu/vue-flow/commit/99909f1660c337469abf7d6558be9de1b134074d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `VueFlowError` class which is used when throwing

- [#649](https://github.com/bcakmakoglu/vue-flow/pull/649) [`47bc8280`](https://github.com/bcakmakoglu/vue-flow/commit/47bc8280075935e3047ebd26714b5516e0bb522f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connectionStatus` to connection lines, which can be used to check if the connection line is used on a valid handle.

### Patch Changes

- [#650](https://github.com/bcakmakoglu/vue-flow/pull/650) [`aaf46dc2`](https://github.com/bcakmakoglu/vue-flow/commit/aaf46dc22ca8daa507e8e7eb7c3646bde158d8bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `valid` and `connecting` class names instead of `vue-flow__handle-valid` and `vue-flow__handle-connecting` (old class names kept for backwards compatibility but will be removed in the future)

- [#653](https://github.com/bcakmakoglu/vue-flow/pull/653) [`64e9dc3c`](https://github.com/bcakmakoglu/vue-flow/commit/64e9dc3c1eb00da2775f8d6e2d05d5fdbd6b4cdc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Draw connection lines to opposite position

- [#651](https://github.com/bcakmakoglu/vue-flow/pull/651) [`c0d172be`](https://github.com/bcakmakoglu/vue-flow/commit/c0d172bee56b95f3e5f2fc72f16836d0e3e16a91) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When a node is not draggable, avoid dragging it when using a selection box

- [#650](https://github.com/bcakmakoglu/vue-flow/pull/650) [`aaf46dc2`](https://github.com/bcakmakoglu/vue-flow/commit/aaf46dc22ca8daa507e8e7eb7c3646bde158d8bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix ios connection error

## 1.13.2

### Patch Changes

- [#643](https://github.com/bcakmakoglu/vue-flow/pull/643) [`210b702b`](https://github.com/bcakmakoglu/vue-flow/commit/210b702b5062a8c54883a866bd950d7e0ca6f314) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly access default edge options ref when passing options to the `connect` event

## 1.13.1

### Patch Changes

- [#641](https://github.com/bcakmakoglu/vue-flow/pull/641) [`f5eaa4cc`](https://github.com/bcakmakoglu/vue-flow/commit/f5eaa4cc534008731f2ffa90fe8f4cdbeabc238b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass missing valid connection function params

## 1.13.0

### Minor Changes

- [#639](https://github.com/bcakmakoglu/vue-flow/pull/639) [`ad2b09f1`](https://github.com/bcakmakoglu/vue-flow/commit/ad2b09f18ea1183a7d2a8725d8a637fec3c93871) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow setting `GraphNode` or `GraphEdge` type with a generic type

- [#629](https://github.com/bcakmakoglu/vue-flow/pull/629) [`c7cfcec7`](https://github.com/bcakmakoglu/vue-flow/commit/c7cfcec70a91a9c1a3ed6233be35adba103e9226) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connectionRadius` option to global options and handle props.
  You can use this option to set the radius at which a connection line will snap to the closest available handle.

- [#613](https://github.com/bcakmakoglu/vue-flow/pull/613) [`7abd0bfd`](https://github.com/bcakmakoglu/vue-flow/commit/7abd0bfdf38a65b27f5fed7dc5a44f65dea732d6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export edge center utils `getSimpleEdgeCenter` & `getBezierEdgeCenter` from core

- [#634](https://github.com/bcakmakoglu/vue-flow/pull/634) [`b59dd6a7`](https://github.com/bcakmakoglu/vue-flow/commit/b59dd6a7256a1f0eb51beb7ea581383089b5e0d4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add autopan options. Pans viewport on node drag and/or when drawing a connection line.

  ### Usage

  ```ts
  useVueFlow({
    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,
  });
  ```

  ```vue
  <VueFlow
    v-model="elements"
    :autoPanOnNodeDrag="true"
    :autoPanOnConnect="true"
  />
  ```

- [#636](https://github.com/bcakmakoglu/vue-flow/pull/636) [`e1628ec6`](https://github.com/bcakmakoglu/vue-flow/commit/e1628ec6601e50a7bc212a2ece83877dee0e9e70) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `isGraphNode` and `isGraphEdge` typeguards

### Patch Changes

- [#634](https://github.com/bcakmakoglu/vue-flow/pull/634) [`b59dd6a7`](https://github.com/bcakmakoglu/vue-flow/commit/b59dd6a7256a1f0eb51beb7ea581383089b5e0d4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Throw warning if viewport dimensions are 0

## 1.12.7

### Patch Changes

- [#627](https://github.com/bcakmakoglu/vue-flow/pull/627) [`19360c52`](https://github.com/bcakmakoglu/vue-flow/commit/19360c52296273c561fa0656e3ccbe7b47ea4d72) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Hide node selection box when no selected nodes exist

## 1.12.6

### Patch Changes

- [#624](https://github.com/bcakmakoglu/vue-flow/pull/624) [`0bddb524`](https://github.com/bcakmakoglu/vue-flow/commit/0bddb5249e5054af946a43399fb69988c16dda98) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add warning when trying to duplicate an element or remove an element that does not exist

- [#626](https://github.com/bcakmakoglu/vue-flow/pull/626) [`449a3f2a`](https://github.com/bcakmakoglu/vue-flow/commit/449a3f2a51e6919a6eabd894c48ca9073eefc242) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `extent` option from `setNodes` & `addNodes` action. Extent should be passed to a node or set with the global option.

- [#626](https://github.com/bcakmakoglu/vue-flow/pull/626) [`449a3f2a`](https://github.com/bcakmakoglu/vue-flow/commit/449a3f2a51e6919a6eabd894c48ca9073eefc242) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use computed var to get current node in `useDrag`. Fixes issue where overwriting a node breaks drag handler.

## 1.12.5

### Patch Changes

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`512eb176`](https://github.com/bcakmakoglu/vue-flow/commit/512eb17640b72b9aa6b06844805cf2c13c1f475c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - If node extent is set to parent, wait until node is initialized to clamp position

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`512eb176`](https://github.com/bcakmakoglu/vue-flow/commit/512eb17640b72b9aa6b06844805cf2c13c1f475c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Regroup edges when nodes change and elevate edges on select is active

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`d79e2a42`](https://github.com/bcakmakoglu/vue-flow/commit/d79e2a420eb3eff2f0634751c71bf07afb6406cf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait for parent node to be initialized before applying an initial expansion of the parent node

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`73de601f`](https://github.com/bcakmakoglu/vue-flow/commit/73de601f794e6339a9b6dbd4d39a3f11a624a47d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass initialized nodes in the `onNodesInitialized` hook

## 1.12.4

### Patch Changes

- [#619](https://github.com/bcakmakoglu/vue-flow/pull/619) [`3d482b77`](https://github.com/bcakmakoglu/vue-flow/commit/3d482b77032b2bdc6442751730ae694c9e798c29) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use timeout when clamping positions after nodes' extent has changed

- [#618](https://github.com/bcakmakoglu/vue-flow/pull/618) [`f1975ea7`](https://github.com/bcakmakoglu/vue-flow/commit/f1975ea71e6ebc37c7bc43472016eb45702e54aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Do not trigger ctx menu event on viewport when dragging with right mouse button

## 1.12.3

### Patch Changes

- [#616](https://github.com/bcakmakoglu/vue-flow/pull/616) [`b16e3564`](https://github.com/bcakmakoglu/vue-flow/commit/b16e3564708c5429ad594156341fa3e95f84d3b2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 4 & update deps

- [#615](https://github.com/bcakmakoglu/vue-flow/pull/615) [`d8fe5432`](https://github.com/bcakmakoglu/vue-flow/commit/d8fe5432adec9c185c87b0c1e4bf432d83a8362f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Support key combinations for keycodes.
  Combinations can be passed using an array of keycodes and concatenated with a plus sign.
  For example: `['A+B']` will trigger when A and B are pressed at the same time.

- [#614](https://github.com/bcakmakoglu/vue-flow/pull/614) [`580de340`](https://github.com/bcakmakoglu/vue-flow/commit/580de3405621fcf2811701186abbbc23bddf0a33) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Keep user selection on right click

## 1.12.2

### Patch Changes

- [#610](https://github.com/bcakmakoglu/vue-flow/pull/610) [`01040099`](https://github.com/bcakmakoglu/vue-flow/commit/010400992fdd01df694a06785fbacd339515f24e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always handle keyup events, instead of cancelling when focusing an input dom node

- [#611](https://github.com/bcakmakoglu/vue-flow/pull/611) [`8dbdcae2`](https://github.com/bcakmakoglu/vue-flow/commit/8dbdcae27d46679bca34cef105742517f364e485) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if position is a number when updating, instead of checking if the value is truthy. Fixes 0 values not being used when updating.

## 1.12.1

### Patch Changes

- [#607](https://github.com/bcakmakoglu/vue-flow/pull/607) [`45851080`](https://github.com/bcakmakoglu/vue-flow/commit/45851080ea54f5f7d16cc2d594e3a1efd35a3b58) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Place default slot content outside of viewport element

- [#605](https://github.com/bcakmakoglu/vue-flow/pull/605) [`e670f465`](https://github.com/bcakmakoglu/vue-flow/commit/e670f465c5afc66d2b56206190f3dc0afecdb5ea) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Let keydown event bubble up from node wrapper instead of preventing default

## 1.12.0

### Minor Changes

- [#600](https://github.com/bcakmakoglu/vue-flow/pull/600) [`072fd911`](https://github.com/bcakmakoglu/vue-flow/commit/072fd91181c0897ae78d0bd2d500959afa1f5fdb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `zIndex` option to nodes and edges. Allows defining stacking order of elements.

## 1.11.1

### Patch Changes

- [#597](https://github.com/bcakmakoglu/vue-flow/pull/597) [`749175b9`](https://github.com/bcakmakoglu/vue-flow/commit/749175b970791991763c84d7f219d41b679fc635) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focus` and `focus-visible` styles to avoid browser specific styles on default nodes

## 1.11.0

### Minor Changes

- [#595](https://github.com/bcakmakoglu/vue-flow/pull/595) [`0c784a2`](https://github.com/bcakmakoglu/vue-flow/commit/0c784a27a9c2bac15d7578ac1171f3203ddd2f65) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `deletable` option to nodes and edges. If set to false it will prevent nodes and edges to be removed when `removeNodes` or `removeEdges` is triggered

### Patch Changes

- [#593](https://github.com/bcakmakoglu/vue-flow/pull/593) [`da65c54`](https://github.com/bcakmakoglu/vue-flow/commit/da65c54b0dd722a3f8afa68aa56007871d892963) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent elements that have selectable disabled from being selected

- [#590](https://github.com/bcakmakoglu/vue-flow/pull/590) [`89d2415`](https://github.com/bcakmakoglu/vue-flow/commit/89d2415c6d038d753d00b774d3d67fd6995adbc7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Skip updating positions when `updateNodeInternals` is triggered - it will only update node dimensions (which can trigger a position update)

- [#590](https://github.com/bcakmakoglu/vue-flow/pull/590) [`72f9f1a`](https://github.com/bcakmakoglu/vue-flow/commit/72f9f1a06912976d8f9bc8614663a37b536004e5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use flush timing `pre` for NodeWrapper watchers

## 1.10.3

### Patch Changes

- [#586](https://github.com/bcakmakoglu/vue-flow/pull/586) [`c0f31a2`](https://github.com/bcakmakoglu/vue-flow/commit/c0f31a2b48e5bbab97778b2d88d18cd4418ea949) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if element is still in state before attempting removal when applying removal changes

## 1.10.2

### Patch Changes

- [#584](https://github.com/bcakmakoglu/vue-flow/pull/584) [`17cd5bc`](https://github.com/bcakmakoglu/vue-flow/commit/17cd5bc9eb189693b346d0722b330ccbca25bedb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set initial node position correctly after applying node extent

- [#583](https://github.com/bcakmakoglu/vue-flow/pull/583) [`0c25796`](https://github.com/bcakmakoglu/vue-flow/commit/0c25796967dec49ad9ba5ecce99c7e0bdc0c29aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix type exports using path alias instead of relative paths, which causes types to not be inferred on user-side

## 1.10.1

### Patch Changes

- [#581](https://github.com/bcakmakoglu/vue-flow/pull/581) [`ea5c35e`](https://github.com/bcakmakoglu/vue-flow/commit/ea5c35e5faea722acd31d835a1e716aa798f3b53) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Re-calculate position when node extent changes

## 1.10.0

### Minor Changes

- [#579](https://github.com/bcakmakoglu/vue-flow/pull/579) [`b8d3241`](https://github.com/bcakmakoglu/vue-flow/commit/b8d324184fdb974b96d1b54aa042835b7ce83482) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow setting `padding` option for `node.extent: 'parent'`

  Padding can be a `number[]` containing a maximum of 4 values.
  The values are applied in the same order as CSS padding: top, right, bottom, left.
  You can omit values at the end of the array, so `[10, 20]` is equivalent to `[10, 20, 10, 20]` etc.

  #### Usage

  ```js
  const nodes = ref([
    {
      id: "4",
      label: "Node 4",
      position: { x: 320, y: 200 },
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        width: "300px",
        height: "300px",
      },
    },
    {
      id: "4a",
      label: "Node 4a",
      position: { x: 15, y: 65 },
      class: "light",
      extent: {
        range: "parent",
        // apply 10 px padding to all four sides
        padding: [10],
      },
      parentNode: "4",
    },
  ]);
  ```

### Patch Changes

- [#578](https://github.com/bcakmakoglu/vue-flow/pull/578) [`c0d9018`](https://github.com/bcakmakoglu/vue-flow/commit/c0d901899cd46a4f26ec38001859fa5598f3c248) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow omitting width and height style properties for parent nodes when using `expandParent` on child nodes

## 1.9.4

### Patch Changes

- [#574](https://github.com/bcakmakoglu/vue-flow/pull/574) [`1160d3d`](https://github.com/bcakmakoglu/vue-flow/commit/1160d3d2fbbae1988c7d72c56a1adcab4b1a53dd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix props being undefined on first render of custom node and edge components

- [#574](https://github.com/bcakmakoglu/vue-flow/pull/574) [`1160d3d`](https://github.com/bcakmakoglu/vue-flow/commit/1160d3d2fbbae1988c7d72c56a1adcab4b1a53dd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `nodes` property from `ConnectionLineProps` - use `getNodes` inside the component instead ⚠️

## 1.9.3

### Patch Changes

- [`5402c0e`](https://github.com/bcakmakoglu/vue-flow/commit/5402c0ec211ee4d372911e17af9c5aef49656a85) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct aria live class names for vue-flow

## 1.9.2

### Patch Changes

- [#566](https://github.com/bcakmakoglu/vue-flow/pull/566) [`b324a06`](https://github.com/bcakmakoglu/vue-flow/commit/b324a06066c6a9af9ed0e1ff789d31c8a22982f4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge component prop types

## 1.9.1

### Patch Changes

- [#561](https://github.com/bcakmakoglu/vue-flow/pull/561) [`2979feb`](https://github.com/bcakmakoglu/vue-flow/commit/2979feb581c219ddb9fe1f87ff2c5fb4348e9bea) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix slots type regression

## 1.9.0

### Minor Changes

- [#557](https://github.com/bcakmakoglu/vue-flow/pull/557) [`c7897a1`](https://github.com/bcakmakoglu/vue-flow/commit/c7897a1da80a0e22c6e286706de8193db293f433) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow customizing the controls of the viewport and the selection box.

  #### Props

  - `selectionKeyCode`: You can now set this to `MaybeRef<boolean>` to enable a selection box without extra button press (need to set `:pan-on-drag="false"` or `:pan-on-drag="[2]"`[RightClick]).
  - `panOnDrag`: Can now be a boolean or a number[], this allows you to configure every mouse button as a drag button. [1, 2] would mean that you can drag via middle and right mouse button.
  - `panActivationKeyCode`: Key code (or KeyFilter) for activating dragging (useful when using selectionOnDrag).
  - `selectionMode`: You can choose if the selection box needs to contain a node fully (`SelectionMode.Full`) or partially (`SelectionMode.Partial`) to select.

  #### Events

  - `onSelectionStart`: Emitted when the selection box is started.
  - `onSelectionEnd`: Emitted when the selection box is ended.
  - `onViewportChangeStart`: Emitted when viewport change has started.
  - `onViewportChange`: Emitted when viewport is changed.
  - `onViewportChangeEnd`: Emitted when viewport change has ended.

### Patch Changes

- [#558](https://github.com/bcakmakoglu/vue-flow/pull/558) [`bac9893`](https://github.com/bcakmakoglu/vue-flow/commit/bac98930da15fe049ab8f1ac65f09dd67e0000fb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - ⚠️ Deprecate options API utils `addEdge` and `updateEdge`. These utils will be removed soon!

  #### Resolve deprecation warnings

  Instead of using these utils, use `addEdges` and `updateEdge` found on the VueFlow store instance.
  You receive a store instance by using either a template-ref or listening to the `onPaneReady` event.

  ### Example

  ```vue
  <script>
  import { VueFlow } from "@vue-flow/core";

  export default defineComponent({
    name: "OptionsAPIExample",
    components: { VueFlow },
    data() {
      return {
        vueFlow: null,
        instance: null,
        elements: [
          {
            id: "1",
            type: "input",
            label: "Node 1",
            position: { x: 250, y: 5 },
            class: "light",
          },
          {
            id: "2",
            label: "Node 2",
            position: { x: 100, y: 100 },
            class: "light",
          },
          {
            id: "3",
            label: "Node 3",
            position: { x: 400, y: 100 },
            class: "light",
          },
          {
            id: "4",
            label: "Node 4",
            position: { x: 400, y: 200 },
            class: "light",
          },
          { id: "e1-2", source: "1", target: "2", animated: true },
          { id: "e1-3", source: "1", target: "3" },
        ],
      };
    },
    methods: {
      // You can listen to `onPaneReady` to get the instance
      onPaneReady(instance) {
        instance.fitView();
        this.instance = instance;
      },
      onConnect(params) {
        // either use the instance you have saved in `onPaneReady`
        this.instance?.addEdges([params]);

        // or use the template-ref
        this.$refs.vueFlow?.addEdges([params]);
      },
    },
  });
  </script>

  <template>
    <VueFlow
      v-model="elements"
      ref="vueFlow"
      class="vue-flow-basic-example"
      :default-zoom="1.5"
      :min-zoom="0.2"
      :max-zoom="4"
      :zoom-on-scroll="false"
      @connect="onConnect"
      @pane-ready="onPaneReady"
    />
  </template>
  ```

- [#557](https://github.com/bcakmakoglu/vue-flow/pull/557) [`c7897a1`](https://github.com/bcakmakoglu/vue-flow/commit/c7897a1da80a0e22c6e286706de8193db293f433) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add a11y support to selection box

## 1.8.0

### Minor Changes

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add keyboard controls to node wrapper (a11y)

- [#554](https://github.com/bcakmakoglu/vue-flow/pull/554) [`9e7f65a`](https://github.com/bcakmakoglu/vue-flow/commit/9e7f65aaa05f5a5f03dbd49657bba25b8e57813d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Merge `defaultZoom` & `defaultPosition` into `defaultViewport` object

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `disableKeyboardA11y` option to VueFlow props and store options

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focusable` option to edge types

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `ariaLabel` option to edge type

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `edgesFocusable` option to store

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `nodesFocusable` option to VueFlow props and store options

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `pathOptions` to Bezier and Smoothstep edge types

### Patch Changes

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `ariaLabel` option to node type

- [#554](https://github.com/bcakmakoglu/vue-flow/pull/554) [`545ab07`](https://github.com/bcakmakoglu/vue-flow/commit/545ab079ba7decf77aa67e8db0d5b2eca8a62b40) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Clamp invalid zoom values

- [#556](https://github.com/bcakmakoglu/vue-flow/pull/556) [`699d786`](https://github.com/bcakmakoglu/vue-flow/commit/699d7861ced2d304e74bf5fc7dfb9269ad4ca115) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent `expandParent` option from changing parent nodes position while expanding

- [#553](https://github.com/bcakmakoglu/vue-flow/pull/553) [`cd4e056`](https://github.com/bcakmakoglu/vue-flow/commit/cd4e0564c119b42251356b9272acd154f6d3c6f3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Rename `viewpane` to `viewport` -> `ViewpaneTransform` now `ViewportTransform`

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focusable` option to node type

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `vueFlowId` to `getMarkerId` to uniquely identify markers across multiple vue flow instances

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update `EdgeRef` injection type to `SVGElement`

### A11y

This release brings A11y support to Vue Flow. All nodes and edges can now receive a `focusable` and `ariaLabel` prop, which can be used to enhance A11y experience. You can also enable focusable globally by using `nodesFocusable` or `edgesFocusable`.
Additionally, nodes can be moved using keyboard controls (Arrow-Keys).

#### Props

- `disableKeyboardA11y`: Use this prop to disable Keyboard controls on the graph.
- `defaultViewport`: The old `defaultZoom` and `defaultPosition` props have been merged into a single object called `defaultViewport`.
- `nodesFocusable`: Globally enable that nodes can be focused.
- `edgesFocusable`: Globally enable that edges can be focused.

#### Elements

- `focusable`: Enable focusing for a single node/edge by setting this option.
- `ariaLabel`: Specify an aria label for a node/edge

## 1.7.2

### Patch Changes

- [#547](https://github.com/bcakmakoglu/vue-flow/pull/547) [`ccf10ff`](https://github.com/bcakmakoglu/vue-flow/commit/ccf10ff77958948e53ecb9806c9b77f095bbc40d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make label coords (x,y) optional in BaseEdge

- [#551](https://github.com/bcakmakoglu/vue-flow/pull/551) [`2f187a0`](https://github.com/bcakmakoglu/vue-flow/commit/2f187a0f7d2b24b1c7cb9b5e4fad150136bdd97c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix input field focus inside nodes preventing selection rect to be created

- [#550](https://github.com/bcakmakoglu/vue-flow/pull/550) [`b734d08`](https://github.com/bcakmakoglu/vue-flow/commit/b734d085b2c84c93a49334acf90c5528da7ab709) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `elevateNodesOnSelect` option to enable/disable increasing z-index of selected nodes

- [#548](https://github.com/bcakmakoglu/vue-flow/pull/548) [`011f0ed`](https://github.com/bcakmakoglu/vue-flow/commit/011f0ed23387af1cbbbf71003d4efdeaf8bcf798) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Re-group edges by z-index on edge selection changes

## 1.7.1

### Patch Changes

- [#545](https://github.com/bcakmakoglu/vue-flow/pull/545) [`54c93b9`](https://github.com/bcakmakoglu/vue-flow/commit/54c93b92792b0bf543380dec2a7198b843d99fab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove immediate watch of VueFlow props and set prop values via state initalizer

- [#545](https://github.com/bcakmakoglu/vue-flow/pull/545) [`54c93b9`](https://github.com/bcakmakoglu/vue-flow/commit/54c93b92792b0bf543380dec2a7198b843d99fab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Only trigger store watcher immediate when elements were set, otherwise wait for changes in store to overwrite model-value

## 1.7.0

### Minor Changes

- [#539](https://github.com/bcakmakoglu/vue-flow/pull/539) [`85d5a64d`](https://github.com/bcakmakoglu/vue-flow/commit/85d5a64d519207fe3044bd68947b2edb014f288a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `getNodesInitialized` getter to store

### Patch Changes

- [#539](https://github.com/bcakmakoglu/vue-flow/pull/539) [`85d5a64d`](https://github.com/bcakmakoglu/vue-flow/commit/85d5a64d519207fe3044bd68947b2edb014f288a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make `sourceHandle` and `targetHandle` optional properties for `Connection` type

- [#542](https://github.com/bcakmakoglu/vue-flow/pull/542) [`530f286c`](https://github.com/bcakmakoglu/vue-flow/commit/530f286cb42c09cd2bc5156527fb3e9fa56878cb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Move watcher timing to `pre` and sync immediately

## 1.6.4

### Patch Changes

- [#536](https://github.com/bcakmakoglu/vue-flow/pull/536) [`fc231bec`](https://github.com/bcakmakoglu/vue-flow/commit/fc231bec1e703277ff17403daab7380ed690a744) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix watcher not triggered when passing an empty array

- [#537](https://github.com/bcakmakoglu/vue-flow/pull/537) [`4ec39fb0`](https://github.com/bcakmakoglu/vue-flow/commit/4ec39fb09ae5ad31a53067ccd2e56d69c04e8293) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix node resizer resizing not updating handle bounds

## 1.6.3

### Patch Changes

- [#534](https://github.com/bcakmakoglu/vue-flow/pull/534) [`f0f7e7e4`](https://github.com/bcakmakoglu/vue-flow/commit/f0f7e7e49a98e4e267c028f552420ce81f73adc7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing edge class to edge wrapper

- [#534](https://github.com/bcakmakoglu/vue-flow/pull/534) [`02c945e8`](https://github.com/bcakmakoglu/vue-flow/commit/02c945e8fb719d7c81f61e8b941bf5590bc2ddba) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass attributes to edge components (i.e. style and class forwarded to BaseEdge)

- [#532](https://github.com/bcakmakoglu/vue-flow/pull/532) [`cd778715`](https://github.com/bcakmakoglu/vue-flow/commit/cd778715a22769f36656bff8e95841899a0c0317) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `vue-flow__handle` in handle bounds selector to avoid selecting elements with the `source` or `target` class names that aren't handles

## 1.6.2

### Patch Changes

- [#529](https://github.com/bcakmakoglu/vue-flow/pull/529) [`92fe1022`](https://github.com/bcakmakoglu/vue-flow/commit/92fe10224e432cf4c3bad6d3fd86af36ff4ee1b9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix store watcher not being triggered when `addNodes` or `addEdges` is called

- [#530](https://github.com/bcakmakoglu/vue-flow/pull/530) [`262bc42b`](https://github.com/bcakmakoglu/vue-flow/commit/262bc42b9c7f26b6748eed30a5a6c67d72e1a6b6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove forced update on resize observer trigger of updateNodeDimensions

## 1.6.1

### Patch Changes

- [#525](https://github.com/bcakmakoglu/vue-flow/pull/525) [`eae81603`](https://github.com/bcakmakoglu/vue-flow/commit/eae8160326bb7a67672503fccd0400333dbf2048) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `initialized` prop to `GraphNode`

- [#525](https://github.com/bcakmakoglu/vue-flow/pull/525) [`eae81603`](https://github.com/bcakmakoglu/vue-flow/commit/eae8160326bb7a67672503fccd0400333dbf2048) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix Handle component adding duplicate handlebounds when node is not properly initialized

- [#526](https://github.com/bcakmakoglu/vue-flow/pull/526) [`00a9795a`](https://github.com/bcakmakoglu/vue-flow/commit/00a9795a41ec15ce0cc342be53c912a9473ea65b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove console log

## 1.6.0

### Minor Changes

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `useGetPointerPosition` composable

- [#519](https://github.com/bcakmakoglu/vue-flow/pull/519) [`306cd3da`](https://github.com/bcakmakoglu/vue-flow/commit/306cd3dabfc57f730eb6f8939bf05369dadc31a5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Move Panel component to core package

### Patch Changes

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make `dragging` flag optional in position change type

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make dimensions optional in dimensions change type

- [#521](https://github.com/bcakmakoglu/vue-flow/pull/521) [`f50644ff`](https://github.com/bcakmakoglu/vue-flow/commit/f50644ffd2237b50bd519c6eb5f0c86dbdaf010a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove Controls component styles from default theme

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `dragging`, `selected` and `resizing` flags to `GraphNode` type

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow multiple changes to be applied to element at once

- [#519](https://github.com/bcakmakoglu/vue-flow/pull/519) [`e5829e8d`](https://github.com/bcakmakoglu/vue-flow/commit/e5829e8d7327ab2a36655b56389a882b839c95c5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove minimap styles from core package default-theme

## 1.5.11

### Patch Changes

- [#517](https://github.com/bcakmakoglu/vue-flow/pull/517) [`440186d2`](https://github.com/bcakmakoglu/vue-flow/commit/440186d2a1a3fa32c0345941682877bc138e5a39) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `dragging` prop to `GraphNode` type

- [#515](https://github.com/bcakmakoglu/vue-flow/pull/515) [`639245b1`](https://github.com/bcakmakoglu/vue-flow/commit/639245b1e2466fb2fe86deaa6d4bfb73378314d8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove console log from watcher

## 1.5.10

### Patch Changes

- [`1a4a2a62`](https://github.com/bcakmakoglu/vue-flow/commit/1a4a2a6275ca94a085fd3e15cb5373f05c23a768) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging flag (release failed)

## 1.5.9

### Patch Changes

- [`ac8c2573`](https://github.com/bcakmakoglu/vue-flow/commit/ac8c2573f61273056e9a226788ee9360a5e577f8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging flag to nodes

## 1.5.8

### Patch Changes

- [#509](https://github.com/bcakmakoglu/vue-flow/pull/509) [`5b748a66`](https://github.com/bcakmakoglu/vue-flow/commit/5b748a6631d8b576557bea5c5aa6ab66d0abd677) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix handle prop connectable always falling back to true, even when explicitly set to false

- [#511](https://github.com/bcakmakoglu/vue-flow/pull/511) [`88b0e34c`](https://github.com/bcakmakoglu/vue-flow/commit/88b0e34cd8c4cce0e271c89cc16e5b714da2ca25) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent store watcher from being stopped on cleanup of model watcher

## 1.5.7

### Patch Changes

- [#501](https://github.com/bcakmakoglu/vue-flow/pull/501) [`ccff5b8b`](https://github.com/bcakmakoglu/vue-flow/commit/ccff5b8bd0f17bb862457c538dd0c7eb3acdfafd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix watcher not triggering with the `onMounted` hook

- [#506](https://github.com/bcakmakoglu/vue-flow/pull/506) [`7abc3956`](https://github.com/bcakmakoglu/vue-flow/commit/7abc395654d04a7a0144d37e8787a416b0847fae) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Child nodes not properly using parent dimensions when extent is set to `parent`

## 1.5.6

### Patch Changes

- [#497](https://github.com/bcakmakoglu/vue-flow/pull/497) [`50e59604`](https://github.com/bcakmakoglu/vue-flow/commit/50e596046bdb06b59eb9b4281e9482afb92d98a3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Separate store and model watchers from each other and allow them to be triggered after init

- [#496](https://github.com/bcakmakoglu/vue-flow/pull/496) [`1ca8c2a9`](https://github.com/bcakmakoglu/vue-flow/commit/1ca8c2a9be3c35e5873fcc2289e1108fe4354618) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make nodes and edges deeply reactive objects, so that data changes can trigger v-model changes as well

## 1.5.5

### Patch Changes

- [#494](https://github.com/bcakmakoglu/vue-flow/pull/494) [`50a24e4`](https://github.com/bcakmakoglu/vue-flow/commit/50a24e4017d47cbe619f34f98a020ed7a2c3bf10) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Apply translateExtent on pan

- [#492](https://github.com/bcakmakoglu/vue-flow/pull/492) [`715a070`](https://github.com/bcakmakoglu/vue-flow/commit/715a0701874f8b5cd8ac643c400df89165716f1a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly calculate node extent on drag

- [#491](https://github.com/bcakmakoglu/vue-flow/pull/491) [`47ad11d`](https://github.com/bcakmakoglu/vue-flow/commit/47ad11dcabb3a865854731d860dcad85a043d91f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set dragging flag only if a position change happened

## 1.5.4

### Patch Changes

- [#486](https://github.com/bcakmakoglu/vue-flow/pull/486) [`912da4d`](https://github.com/bcakmakoglu/vue-flow/commit/912da4d0a6f0ed48f9455678eb978b9a5e0c08f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent valid connections on same node and same handle

- [#485](https://github.com/bcakmakoglu/vue-flow/pull/485) [`7ba6215`](https://github.com/bcakmakoglu/vue-flow/commit/7ba621554276e10e2be1cb441928354b4ddfd073) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow middle mouse pan over edges

- [#481](https://github.com/bcakmakoglu/vue-flow/pull/481) [`aed0845`](https://github.com/bcakmakoglu/vue-flow/commit/aed08458575e8832f07922b6cb104e0185306a74) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `HandleConnectableFunc` type

- [#483](https://github.com/bcakmakoglu/vue-flow/pull/483) [`9326c58`](https://github.com/bcakmakoglu/vue-flow/commit/9326c580da5cebc3fd39d1ade195291033c03e54) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove barrel files and use auto-imports instead (internal change)

- [#479](https://github.com/bcakmakoglu/vue-flow/pull/479) [`c673b04`](https://github.com/bcakmakoglu/vue-flow/commit/c673b044227a6702c695691be6f94f4331812dec) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Type `markerEnd` and `markerStart` in `EdgeProps`

## 1.5.3

### Patch Changes

- [#474](https://github.com/bcakmakoglu/vue-flow/pull/474) [`9568794`](https://github.com/bcakmakoglu/vue-flow/commit/9568794e36a7cc05169508a7d498510208f6a598) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix untyped connection line, node and edge slots props by patching type definition after build

## 1.5.2

### Patch Changes

- [#466](https://github.com/bcakmakoglu/vue-flow/pull/466) [`051dcc4`](https://github.com/bcakmakoglu/vue-flow/commit/051dcc477fe43033f12b17fb096c516a8cf2c485) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - use `reactive` instead of `shallowReactive` for nested node/edge properties

- [#462](https://github.com/bcakmakoglu/vue-flow/pull/462) [`7dfceb2`](https://github.com/bcakmakoglu/vue-flow/commit/7dfceb213397d82375c779bf61d24ddf2df9b27d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix model watcher overwriting empty state when setting element `onMounted` hook

- [#465](https://github.com/bcakmakoglu/vue-flow/pull/465) [`c56ee5a`](https://github.com/bcakmakoglu/vue-flow/commit/c56ee5a6e906166b451a7221d4a5a8714497f745) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow `null` as key-code

## 1.5.1

### Patch Changes

- [#459](https://github.com/bcakmakoglu/vue-flow/pull/459) [`649bdb9`](https://github.com/bcakmakoglu/vue-flow/commit/649bdb94d4e1b9dc102629eb83b9912ca1c5c7c5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add nullish check for node/edge events object to prevent err if undefined

- [#454](https://github.com/bcakmakoglu/vue-flow/pull/454) [`fc15fa3`](https://github.com/bcakmakoglu/vue-flow/commit/fc15fa3276689744ef5f41f2b8560c8370cd37e6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update model-value regardless of element arr length

## 1.5.0

### Minor Changes

- [#435](https://github.com/bcakmakoglu/vue-flow/pull/435) [`1cca3d0`](https://github.com/bcakmakoglu/vue-flow/commit/1cca3d0b8c789f2b1d749602eff560abf75e6eeb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connecting` class to `SelectionPane` when connecting

- [#451](https://github.com/bcakmakoglu/vue-flow/pull/451) [`6047b90`](https://github.com/bcakmakoglu/vue-flow/commit/6047b908d98cdcf69297dc9ae73b6a5314cb2b4f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Support touch for creating connections

- [#449](https://github.com/bcakmakoglu/vue-flow/pull/449) [`686b351`](https://github.com/bcakmakoglu/vue-flow/commit/686b351569e751510280f7283f7af3773aee8b44) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add experimental support for nested Vue Flow components; Align edges by adding parent flow zoom scale. Connections not supported.

### Patch Changes

- [#452](https://github.com/bcakmakoglu/vue-flow/pull/452) [`5303f10`](https://github.com/bcakmakoglu/vue-flow/commit/5303f10a80df4c71d3c526381cc27040a03f4f4d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix parent expand not working for top/left drag

- [#449](https://github.com/bcakmakoglu/vue-flow/pull/449) [`686b351`](https://github.com/bcakmakoglu/vue-flow/commit/686b351569e751510280f7283f7af3773aee8b44) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `experimentalFeatures` flag to store

## 1.4.2

### Patch Changes

- [#439](https://github.com/bcakmakoglu/vue-flow/pull/439) [`817884e`](https://github.com/bcakmakoglu/vue-flow/commit/817884e71ffb0d555b69d84b5f08f724afe891cf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elevate selected nodes zIndex by 1000 instead to 1000

- [#448](https://github.com/bcakmakoglu/vue-flow/pull/448) [`3a09339`](https://github.com/bcakmakoglu/vue-flow/commit/3a0933952e8f0d4082c7643e78edd9f381f417a9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elevate child nodes by zIndex +1

- [#447](https://github.com/bcakmakoglu/vue-flow/pull/447) [`06fc9f2`](https://github.com/bcakmakoglu/vue-flow/commit/06fc9f2ec43ac58d3e6257d8ff5a1948330f060a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix initial node extent not applied

## 1.4.1

### Patch Changes

- [#425](https://github.com/bcakmakoglu/vue-flow/pull/425) [`da0a294`](https://github.com/bcakmakoglu/vue-flow/commit/da0a294aa47b091cd846168594d3a01bde057315) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update deps

- [#434](https://github.com/bcakmakoglu/vue-flow/pull/434) [`b24b9ef`](https://github.com/bcakmakoglu/vue-flow/commit/b24b9efe1118b9d3151550257620b4b2c5088fca) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix improper if clause when checking for selection key code as bool

- [#429](https://github.com/bcakmakoglu/vue-flow/pull/429) [`1fc60bf`](https://github.com/bcakmakoglu/vue-flow/commit/1fc60bf1bb700ce4c7321d85b7421c41b235ab2b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When Connection Mode is `Loose`, use all handles as possible source handles for connection lines

- [#433](https://github.com/bcakmakoglu/vue-flow/pull/433) [`d82cb67`](https://github.com/bcakmakoglu/vue-flow/commit/d82cb674c6ae7be453ac6c145a2478a2efa2cedb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `connectionExists` utility export

## 1.4.0

### Minor Changes

- [#360](https://github.com/bcakmakoglu/vue-flow/pull/360) [`a11edae`](https://github.com/bcakmakoglu/vue-flow/commit/a11edae9ecb95c8ca0ecef70ff9414415bafb23b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `interactionWidth` prop to edges. Sets radius of pointer interactivity for edges

## 1.3.3

### Patch Changes

- [#412](https://github.com/bcakmakoglu/vue-flow/pull/412) [`630434d`](https://github.com/bcakmakoglu/vue-flow/commit/630434d5cfaae90eda96e0a49c488860fe994d32) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use node name as class name

## 1.3.2

### Patch Changes

- [#407](https://github.com/bcakmakoglu/vue-flow/pull/407) [`2874cd9`](https://github.com/bcakmakoglu/vue-flow/commit/2874cd969ad31bf2ec578c6c9c40399f9d59244a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent default edge options overwriting actual edge values

- [#407](https://github.com/bcakmakoglu/vue-flow/pull/407) [`7908e02`](https://github.com/bcakmakoglu/vue-flow/commit/7908e0224e5f54f817ac34c3c34e3da3ffb7cfb1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fall back to default edge or node type if custom type cannot be resolved

- [#389](https://github.com/bcakmakoglu/vue-flow/pull/389) [`6e0dd5b`](https://github.com/bcakmakoglu/vue-flow/commit/6e0dd5b3d2fc3d4d02866d8454dabcc1ee675e77) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Place Vue Flow Container in it's own stacking context

## 1.3.1

### Patch Changes

- [#402](https://github.com/bcakmakoglu/vue-flow/pull/402) [`d7ade98`](https://github.com/bcakmakoglu/vue-flow/commit/d7ade98720a5407a58e1e0924d53723b1600d044) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `event.composedPath` as event target when checking for input dom nodes

- [#403](https://github.com/bcakmakoglu/vue-flow/pull/403) [`8930d2e`](https://github.com/bcakmakoglu/vue-flow/commit/8930d2ee957858ea67ec3e125e1ca0a9a41f7fae) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Stop reset of user-selection rect on mouse leave event

- [#398](https://github.com/bcakmakoglu/vue-flow/pull/398) [`43953c9`](https://github.com/bcakmakoglu/vue-flow/commit/43953c9d1f48dececff8cef84f85bbee8fec44db) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 3

## 1.3.0

### Minor Changes

- [#394](https://github.com/bcakmakoglu/vue-flow/pull/394) [`1403b65`](https://github.com/bcakmakoglu/vue-flow/commit/1403b65f612bd5c905b0ec240d4d16c16ff86df4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `nodesInitialized` event hook

- [#387](https://github.com/bcakmakoglu/vue-flow/pull/387) [`9530290`](https://github.com/bcakmakoglu/vue-flow/commit/95302901335303c4460373848ee07a532f150678) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass node intersections to node drag events (on single node drag)

- [#387](https://github.com/bcakmakoglu/vue-flow/pull/387) [`a19b458`](https://github.com/bcakmakoglu/vue-flow/commit/a19b4581a7e237f746e7cf8837c25f3c36249962) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add intersection utils to help with checking if a node intersects with either other nodes or a given area

  ### Usage

  - You can either use the action `getIntersectingNodes` to find all nodes that intersect with a given node

  ```js
  const { onNodeDrag, getIntersectingNodes, getNodes } = useVueFlow();

  onNodeDrag(({ node }) => {
    const intersections = getIntersectingNodes(node).map((n) => n.id);

    getNodes.value.forEach((n) => {
      // highlight nodes that are intersecting with the dragged node
      n.class = intersections.includes(n.id) ? "highlight" : "";
    });
  });
  ```

  - Node drag events will provide you with the intersecting nodes without having to call the action explicitly.

  ```js
  onNodeDrag(({ intersections }) => {
    getNodes.value.forEach((n) => {
      n.class = intersections?.some((i) => i.id === n.id) ? "highlight" : "";
    });
  });
  ```

  - Or you can use the `isIntersecting` util to check if a node intersects with a given area

  ```js
  const { onNodeDrag, isNodeIntersecting } = useVueFlow();

  onNodeDrag(({ node }) => {
    // highlight the node if it is intersecting with the given area
    node.class = isNodeIntersecting(node, {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    })
      ? "highlight"
      : "";
  });
  ```

- [#396](https://github.com/bcakmakoglu/vue-flow/pull/396) [`03412ac`](https://github.com/bcakmakoglu/vue-flow/commit/03412acf0d4452c104cc342e5e11eb3a7671fe72) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add zoomable and pannable to MiniMap

  ### Usage

  - Set `zoomable` and `pannable` to `true` in `MiniMap` component to enable interactions with the MiniMap

  ```vue
  <template>
    <VueFlow v-model="elements">
      <MiniMap :zoomable="true" :pannable="true" />
    </VueFlow>
  </template>
  ```

### Patch Changes

- [#361](https://github.com/bcakmakoglu/vue-flow/pull/361) [`43ff2a4`](https://github.com/bcakmakoglu/vue-flow/commit/43ff2a42e6d77251b3fe7987afa02c19cdb2f240) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `EdgeLabelRenderer` component export

  ### Usage

  - You can use the `EdgeLabelRenderer` component to render the label of an edge outside the SVG context of edges.
  - The `EdgeLabelRenderer` component is a component that handles teleporting your edge label into a HTML context
  - This is useful if you want to use HTML elements in your edge label, like buttons

  ```vue
  <script lang="ts" setup>
  import type { EdgeProps, Position } from "@vue-flow/core";
  import { EdgeLabelRenderer, getBezierPath, useVueFlow } from "@vue-flow/core";
  import type { CSSProperties } from "vue";

  interface CustomEdgeProps<T = any> extends EdgeProps<T> {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    sourcePosition: Position;
    targetPosition: Position;
    data: T;
    markerEnd: string;
    style: CSSProperties;
  }

  const props = defineProps<CustomEdgeProps>();

  const { removeEdges } = useVueFlow();

  const path = $computed(() => getBezierPath(props));
  </script>

  <script lang="ts">
  export default {
    inheritAttrs: false,
  };
  </script>

  <template>
    <path
      :id="id"
      :style="style"
      class="vue-flow__edge-path"
      :d="path[0]"
      :marker-end="markerEnd"
    />

    <EdgeLabelRenderer>
      <div
        :style="{
          pointerEvents: 'all',
          position: 'absolute',
          transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
        }"
        class="nodrag nopan"
      >
        <button class="edgebutton" @click="removeEdges([id])">×</button>
      </div>
    </EdgeLabelRenderer>
  </template>

  <style>
  .edgebutton {
    border-radius: 999px;
    cursor: pointer;
  }
  .edgebutton:hover {
    box-shadow: 0 0 0 2px pink, 0 0 0 4px #f05f75;
  }
  </style>
  ```

## 1.2.2

### Patch Changes

- [#388](https://github.com/bcakmakoglu/vue-flow/pull/388) [`76ad5838`](https://github.com/bcakmakoglu/vue-flow/commit/76ad5838d9cd09df39ebe35e0983605b3443d8d6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always set handle ids (using auto-generated id if none is passed)

- [#388](https://github.com/bcakmakoglu/vue-flow/pull/388) [`ffe65636`](https://github.com/bcakmakoglu/vue-flow/commit/ffe65636189b3ff681e629cd6d3933f52be2a04c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - skip connectable for handles unrelated to connected edges

- [#392](https://github.com/bcakmakoglu/vue-flow/pull/392) [`fcffd492`](https://github.com/bcakmakoglu/vue-flow/commit/fcffd49221a77b0df88183caa4513f9c00bbb660) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use all handles, regardless of type, when ConnectionMode is `Loose`

## 1.2.1

### Patch Changes

- [#378](https://github.com/bcakmakoglu/vue-flow/pull/378) [`9089861c`](https://github.com/bcakmakoglu/vue-flow/commit/9089861ce78584cb524c3da178cd1c0252ccee30) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable user selection if `elementsSelectable` is false

- [#378](https://github.com/bcakmakoglu/vue-flow/pull/378) [`9089861c`](https://github.com/bcakmakoglu/vue-flow/commit/9089861ce78584cb524c3da178cd1c0252ccee30) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent node selection box from appearing before mouseup

- [#380](https://github.com/bcakmakoglu/vue-flow/pull/380) [`2c3ea836`](https://github.com/bcakmakoglu/vue-flow/commit/2c3ea836f1b62fb808f1f7a00bae5b2e917381bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use shallowRef for node/edge data and event objects so they trigger a re-render on custom nodes/edges

## 1.2.0

### Minor Changes

- [#123](https://github.com/bcakmakoglu/vue-flow/pull/123) [`3105bd0`](https://github.com/bcakmakoglu/vue-flow/commit/3105bd051ab4ac72c95e524dcb5c551ee4f812f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable console warnings for production node-envs

## 1.1.4

### Patch Changes

- [#353](https://github.com/bcakmakoglu/vue-flow/pull/353) [`8f95187`](https://github.com/bcakmakoglu/vue-flow/commit/8f95187a6c474aa299fde3dd3c80145483b1b238) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow undefined as custom theme var value

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Node and Edge data and events to be definitely typed when passed as NodeProps or EdgeProps

- [#352](https://github.com/bcakmakoglu/vue-flow/pull/352) [`bff576b`](https://github.com/bcakmakoglu/vue-flow/commit/bff576bc0494a34eedf6eafb03d84d074d372b79) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `overflow: visible` to control btn svgs (fixes safari bug where svgs aren't showing up)

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Extend Elements/FlowElements generics to differentiate between Node and Edge data and custom events

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add Generic to isNode and isEdge helpers

- [#350](https://github.com/bcakmakoglu/vue-flow/pull/350) [`92a69a6`](https://github.com/bcakmakoglu/vue-flow/commit/92a69a617fc6ddbdc8c1eaeaa8ca040bbc67285e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set nodes' dragging prop on drag start and end (fixes grabbing hand not showing on mousedown / not disappearing on mouseup)

## 1.1.3

### Patch Changes

- [#342](https://github.com/bcakmakoglu/vue-flow/pull/342) [`72c203e`](https://github.com/bcakmakoglu/vue-flow/commit/72c203e3d527376221673fccb62dc99ff8061a23) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge text not calculating dimensions properly

## 1.1.2

### Patch Changes

- [#337](https://github.com/bcakmakoglu/vue-flow/pull/337) [`12d9f79`](https://github.com/bcakmakoglu/vue-flow/commit/12d9f79d1ba5ee3b2e6b45db54ee466156182f61) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add dragging class to nodes on `drag` instead of `dragStart`

- [#341](https://github.com/bcakmakoglu/vue-flow/pull/341) [`d2ed19e`](https://github.com/bcakmakoglu/vue-flow/commit/d2ed19eebad2a8d3ee40f55f3f1dc63037ef73bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass edge styles to edge path element

- [`949d19f`](https://github.com/bcakmakoglu/vue-flow/commit/949d19ff5d120f30ffbef35beb960ce6037082bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge texts not properly aligning to center

- [#333](https://github.com/bcakmakoglu/vue-flow/pull/333) [`8583e13`](https://github.com/bcakmakoglu/vue-flow/commit/8583e13db98fe32f23d91b1952cee91778fd434e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging class to pane

- [#336](https://github.com/bcakmakoglu/vue-flow/pull/336) [`1aaac25`](https://github.com/bcakmakoglu/vue-flow/commit/1aaac25e76367602c9de9198ba1202b728267371) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elements not properly unselected when clicking node and edge afterwards

## 1.1.1

### Patch Changes

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`1e5a77d6`](https://github.com/bcakmakoglu/vue-flow/commit/1e5a77d608c79c7701f97a81690fa5babc7c2514) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent `mouseup` handler from resetting `startHandle` before connections can be made when using `connectOnClick`

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`18a812db`](https://github.com/bcakmakoglu/vue-flow/commit/18a812db6445941ff626921a311f2f2aefd84968) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Passing `single` option breaks `connectable` check when no handle ids are set

  - Pass `connectable` to correct handle prop in default node types

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`a415353b`](https://github.com/bcakmakoglu/vue-flow/commit/a415353ba5fe3bb29b33704baf5d83b869e508f1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `dragging` class name to pane on drag

## 1.1.0

### Minor Changes

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`78f9ee1c`](https://github.com/bcakmakoglu/vue-flow/commit/78f9ee1cb77cc00590b8d4529da7cd124ddfc0f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Add `HandleConnectable` type
  - Update `connectable` prop of `Handle` to `HandleConnectable` type
  - Allow to specify if Handles are connectable
    - any number of connections
    - none
    - single connection
    - or a cb to determine whether the Handle is connectable

  Example:

  ```vue
  <script lang="ts" setup>
  import { Handle, HandleConnectable } from "@vue-flow/core";

  const handleConnectable: HandleConnectable = (node, connectedEdges) => {
    console.log(node, connectedEdges);
    return true;
  };
  </script>
  <template>
    <!-- single connection -->
    <Handle type="target" position="left" connectable="single" />
    <div>Custom Node</div>
    <!-- cb -->
    <Handle id="a" position="right" :connectable="handleConnectable" />
  </template>
  ```

  - Update `node.connectable` prop to `HandleConnectable`

  For Example:

  ```js
  const nodes = ref([
    {
      id: "1",
      position: { x: 0, y: 0 },
      connectable: "single", // each handle is only connectable once (default node for example)
    },
    {
      id: "2",
      position: { x: 200, y: 0 },
      connectable: (node, connectedEdges) => {
        return true; // will allow any number of connections
      },
    },
    {
      id: "3",
      position: { x: 400, y: 0 },
      connectable: true, // will allow any number of connections
    },
    {
      id: "4",
      position: { x: 200, y: 0 },
      connectable: false, // will disable handles
    },
  ]);
  ```

### Patch Changes

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`e175cf81`](https://github.com/bcakmakoglu/vue-flow/commit/e175cf8157be1851651d6df0a9e87f732b53de59) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Add `vueflow` pkg that exports all features

  ```vue
  <script setup>
  // `vueflow` pkg exports all features, i.e. core + additional components
  import { VueFlow, Background, MiniMap, Controls } from "vueflow";
  </script>

  <template>
    <VueFlow>
      <Background />
      <MiniMap />
      <Controls />
    </VueFlow>
  </template>
  ```

  ### Chores

  - Rename `core` pkg directory to `core` from `vue-flow`
  - Rename bundle outputs

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`e1c28a26`](https://github.com/bcakmakoglu/vue-flow/commit/e1c28a26c75a86b8c2790480bb8dadf37ad2ff12) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Simplify `useHandle` usage
  - Pass props to the composable as possible refs
    - Still returns onClick & onMouseDown handlers but only expects mouse event now

  Before:

  ```vue
  <script lang="ts" setup>
  import { useHandle, NodeId } from "@vue-flow/core";

  const nodeId = inject(NodeId);

  const handleId = "my-handle";

  const type = "source";

  const isValidConnection = () => true;

  const { onMouseDown } = useHandle();

  const onMouseDownHandler = (event: MouseEvent) => {
    onMouseDown(
      event,
      handleId,
      nodeId,
      type === "target",
      isValidConnection,
      undefined
    );
  };
  </script>

  <template>
    <div @mousedown="onMouseDownHandler" />
  </template>
  ```

  After:

  ```vue
  <script lang="ts" setup>
  import { useHandle, useNode } from "@vue-flow/core";

  const { nodeId } = useNode();

  const handleId = "my-handle";

  const type = "source";

  const isValidConnection = () => true;

  const { onMouseDown } = useHandle({
    nodeId,
    handleId,
    isValidConnection,
    type,
  });
  </script>

  <template>
    <div @mousedown="onMouseDown" />
  </template>
  ```

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`08ad1735`](https://github.com/bcakmakoglu/vue-flow/commit/08ad17356f5fbd50255af27f7c482da756eda4aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # Bugfixes

  - Edges not returned by getter when `paneReady` event is triggered

## 1.0.0

### Major Changes

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`939bff50`](https://github.com/bcakmakoglu/vue-flow/commit/939bff503039af3b790160640548ddde984cf2bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Simplify edge path calculations
    - remove `getEdgeCenter` and `getSimpleEdgeCenter`

  # Breaking Changes

  - `getEdgeCenter` has been removed
    - Edge center positions can now be accessed from `getBezierPath` or `getSmoothStepPath` functions

  Before:

  ```js
  import { getBezierPath, getEdgeCenter } from "@braks/vue-flow";

  // used to return the path string only
  const edgePath = computed(() => getBezierPath(pathParams));

  // was necessary to get the centerX, centerY of an edge
  const centered = computed(() => getEdgeCenter(centerParams));
  ```

  After:

  ```js
  import { getBezierPath } from "@vue-flow/core";

  // returns the path string and the center positions
  const [path, centerX, centerY] = computed(() => getBezierPath(pathParams));
  ```

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`47d837aa`](https://github.com/bcakmakoglu/vue-flow/commit/47d837aac096e59e7f55213990dff2cc7eba0c01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Change pkg scope from 'braks' to 'vue-flow'
    - Add `@vue-flow/core` package
    - Add `@vue-flow/additional-components` package
    - Add `@vue-flow/pathfinding-edge` package
    - Add `@vue-flow/resize-rotate-node` package

  # Features

  - `useNode` and `useEdge` composables
    - can be used to access current node/edge (or by id) and their respective element refs (if used inside the elements' context, i.e. a custom node/edge)
  - `selectionKeyCode` as `true`
    - allows for figma style selection (i.e. create a selection rect without holding shift or any other key)
  - Handles to trigger handle bounds calculation on mount
    - if no handle bounds are found, a Handle will try to calculate its bounds on mount
    - should remove the need for `updateNodeInternals` on dynamic handles
  - Testing for various features using Cypress 10

  # Bugfixes

  - Fix `removeSelectedEdges` and `removeSelectedNodes` actions not properly removing elements from store

  # Breaking Changes

  - `@vue-flow/core` package is now required to use vue-flow
  - `@vue-flow/additional-components` package contains `Background`, `MiniMap` and `Controls` components and related types
    - When switching to the new pkg scope, you need to change the import path.

  Before:

  ```js
  import { VueFlow, Background, MiniMap, Controls } from "@braks/vue-flow";
  ```

  After

  ```js
  import { VueFlow } from "@vue-flow/core";
  import {
    Background,
    MiniMap,
    Controls,
  } from "@vue-flow/additional-components";
  ```
