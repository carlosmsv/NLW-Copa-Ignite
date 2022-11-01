import Fastify from "fastify";

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  // http://localhost:3333/pools/count
  fastify.get('/pools/count', () => {
    return {count: 0}
  })

  await fastify.listen({port: 3333})
}

bootstrap()