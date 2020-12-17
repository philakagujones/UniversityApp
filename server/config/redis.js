const express = require('express')
const router = express.Router()
const redis = require('redis')

const client = redis.createClient(proccess.env.REDIS_PORT);

