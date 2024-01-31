import { PrismaClient } from "@prisma/client";

const gloalForPrimsa = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    gloalForPrimsa.prisma ?? new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') {
    gloalForPrimsa.prisma = prisma
}

// All this helps to avoid creating a new PrismaClient instance for every request, which is very inefficient.