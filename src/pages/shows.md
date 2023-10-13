---
title: 'Shows'
---

# Shows

<section>
    <ol>
        {% for show in shows %}
        <li>
            <h2>{{ show.name }}</h2>
            <span>{{ show.location }}</span>
            <span>{{ show.date }}</span>
            <span>{{ show.time }}</span>
        </li>
        {% endfor %}
    </ol>
</section>
