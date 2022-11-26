[#](#) REACT STATE MANAGEMENT

## useState()

```typescriptreact
import { useState } from React

const [state,setState] = useState('default value')
setState('new value')
```

## Recoil
### install
### Example
in root file :
```typescriptreact
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import Pages from './pages'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Pages />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

