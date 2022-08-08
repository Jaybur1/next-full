/* eslint-disable import/no-named-as-default-member */
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import util from 'util'

import { Crypto } from '@peculiar/webcrypto'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

const { getComputedStyle } = window

window.getComputedStyle = (elt): CSSStyleDeclaration => getComputedStyle(elt)
global.TextEncoder = util.TextEncoder
global.crypto = new Crypto()
