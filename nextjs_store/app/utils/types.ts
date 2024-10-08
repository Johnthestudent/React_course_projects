import { Prisma } from '@prisma/client';

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;