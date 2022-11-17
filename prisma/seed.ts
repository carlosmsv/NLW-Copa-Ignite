import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
  const user = await prisma.user.create({
    data:{
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/carlosmsv.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,
    }
  })

  const participant = await prisma.participant.create({
    data:{
      poolId: pool.id,
      userId: user.id,
    }
  })

}

main()