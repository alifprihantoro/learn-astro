---
title: 'state react'
slug: state-react
date: 2022-08-03T10:41:30+07:00
lastmod: 2022-08-03T10:41:34+07:00
description: 'state, usestate, useeffect, react'
---

```typescriptreact
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // ???? toggle isActive state on click
    setIsActive(current => !current);
  };
```
