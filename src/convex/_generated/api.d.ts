/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as authProviders_emailOtp from "../authProviders/emailOtp.js";
import type * as authProviders_phoneOtp from "../authProviders/phoneOtp.js";
import type * as blog from "../blog.js";
import type * as gallery from "../gallery.js";
import type * as http from "../http.js";
import type * as orders from "../orders.js";
import type * as packages from "../packages.js";
import type * as seedData from "../seedData.js";
import type * as siteContent from "../siteContent.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  "authProviders/emailOtp": typeof authProviders_emailOtp;
  "authProviders/phoneOtp": typeof authProviders_phoneOtp;
  blog: typeof blog;
  gallery: typeof gallery;
  http: typeof http;
  orders: typeof orders;
  packages: typeof packages;
  seedData: typeof seedData;
  siteContent: typeof siteContent;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
