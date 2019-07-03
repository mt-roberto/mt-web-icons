# mt-web-icons

## Prerequisites

You have Node installed at v10.0.0+ and Yarn at v1.2.0+.
You are familiar with Git.

# Steps for updating the web font

1. Go to https://icomoon.io/app/#/select
2. Upload the latest `selection.json` in the `iconmoon` folder
3. In the iconmoon web app, just upload whatever svg you want to add. Be sure to center it and name it properly.
4. Generate the new web font
5. Download it
6. Unzip it
7. Copy the whole unzipped folder to update this repository

# Create svgs and build components

Run the following command before:

```console
yarn build
```

# How to use it

### Icon component with icon name:

```javascript
import React from 'react';
import { ReactElement } from 'react';
const Icon = 'mt-web-icons';

export default function IconAuto(): ReactElement {
  return <Icon name="auto" width={100} height={100} fill="#ffffff" />;
}
```

### Icon component with invalid icon name will display a placeholder icon:

```javascript
import React from 'react';
import { ReactElement } from 'react';
const Icon = 'mt-web-icons';

export default function IconAuto(): ReactElement {
  return <Icon name="Invalid Icon" />;
}
```

### Icon with defined placeholder and fallback for suspence:

```javascript
import React from 'react';
import { ReactElement } from 'react';
const Icon = 'mt-web-icons';

export default function IconAuto(): ReactElement {
  return <Icon name="Auto" placeholder={null} fallback={<div />} />;
}
```

### Specific Icon:

```javascript
import React from 'react';
import { ReactElement } from 'react';
import IconAuto from 'mt-web-icons/react/Auto';

export default function Icon(): ReactElement {
  return <IconAuto width={100} height={100} fill="#ffffff" />;
}
```
