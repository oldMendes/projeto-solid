import "@fastify/jwt"

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      sub: number,
      role: 'ADMIN' | 'MEMBER'
    } // user type is return type of `request.user` object
  }
}