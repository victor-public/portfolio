---
    layout: layouts/base.njk
    title: Home
    pagination:
        data: collections.post
        size: 3
    description: > 
        A description of the HOME page
---

{% include "partials/paginator.njk" %}