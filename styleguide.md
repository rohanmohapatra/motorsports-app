# Styleguide


-   It's better to avoid the 'FunctionComponent'/'FC' and do the following. This avoids one extra burden of being complied to the 'FunctionComponent' type declaration.
```js
import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

function Component({children}: Props):JSX.Element {
    return (
        <div>{children}</div>
    );
}
```
