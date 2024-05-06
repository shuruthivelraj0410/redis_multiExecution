import redis from 'redis';

const redisClient = redis.createClient({
    url: "redis://127.0.0.1:6379/0"
});

(async () => {
    try {
        await redisClient.connect()
        console.log("connected to redis")
        let response = await redisClient.multi()
            .set('k1', 'shuruthi')
            .set('k2', 'pooja')
            .set('k3',3)
            .incr('k3')
            .get('k1')
            .get('k2')
            .get('k3')
            .hSet('hset', { a: "a", b: "b", c: "c" })
            .hGetAll('hset')
            .hGet('hset', 'b')
            .hVals('hset')
            .sAdd('rule', `{1:1,2:2}`)
            .sMembers('rule')
            .exec();
        console.log(response)
    } catch (e) {
        console.log(e)
    }
})();

