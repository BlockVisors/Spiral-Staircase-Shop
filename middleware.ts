import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
   publicRoutes: ["/", "/cart", "/checkout","/product","/category"],
  //  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", "/product/52bc3532-5dcd-423d-91a8-853279502437"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
