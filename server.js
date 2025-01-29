const express = require('express')

express()
    .use('*',(req, res, next) => {
        const ms = Number(req.query.ms ?? 3000)

        setTimeout(() => {
            res.send({ ms, random: Math.floor(Math.random() * 1000) })
            next()
        }, ms)

    })
    .listen(3005, () => {
        console.log('Backend started on http://localhost:3005')
    })

