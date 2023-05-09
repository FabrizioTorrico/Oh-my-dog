import { UserRoles } from "@prisma/client";
import { hashSync } from "bcryptjs";
import { z } from "zod";
import { UserCreationSchema } from "~/schemas/user";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { bookingsRouter } from "./bookings";

export const usersRouter = createTRPCRouter({
  create: publicProcedure
    .input(UserCreationSchema)
    .mutation(async ({ input, ctx }) => {
      const { password, booking, dog, ...userData } = input;

      // Hash the password with the secret key
      const hashedPassword = hashSync(
        password + (process.env.HASH_PASSWORD ?? ""),
        10
      );

      // Create the user with the hashed passwor
      const user = await ctx.prisma.user.create({
        data: {
          ...userData,
          role: UserRoles.CLIENT,
          password: hashedPassword,
        },
      });

      // Create the dog with the user id
      const dogCreation = await ctx.prisma.clientDog.create({
        data: {
          ...dog,
          healthBook: {
            create: {},
          },
          owner: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      await ctx.prisma.booking.create({
        data: {
          ...booking,
          user: {
            connect: {
              id: user.id,
            },
          },
          dog: {
            connect: {
              id: dogCreation.id,
            },
          },
        },
      });

      // const bookingsCreation = bookingsRouter.create({ ...booking, dog: dogCreation.id, user: user.id, });

      return user;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  delete: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.delete({ where: { email: input } });
  }),
});
