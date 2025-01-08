/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppImport } from './routes/_app'

// Create Virtual Routes

const AuthVerifyLazyImport = createFileRoute('/_auth/verify')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()
const AppDashboardLazyImport = createFileRoute('/_app/dashboard')()

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AuthVerifyLazyRoute = AuthVerifyLazyImport.update({
  id: '/verify',
  path: '/verify',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/verify.lazy').then((d) => d.Route))

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route))

const AppDashboardLazyRoute = AppDashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/dashboard.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_app/dashboard': {
      id: '/_app/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardLazyImport
      parentRoute: typeof AppImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/verify': {
      id: '/_auth/verify'
      path: '/verify'
      fullPath: '/verify'
      preLoaderRoute: typeof AuthVerifyLazyImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppDashboardLazyRoute: typeof AppDashboardLazyRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppDashboardLazyRoute: AppDashboardLazyRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface AuthRouteChildren {
  AuthLoginLazyRoute: typeof AuthLoginLazyRoute
  AuthVerifyLazyRoute: typeof AuthVerifyLazyRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginLazyRoute: AuthLoginLazyRoute,
  AuthVerifyLazyRoute: AuthVerifyLazyRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteWithChildren
  '/dashboard': typeof AppDashboardLazyRoute
  '/login': typeof AuthLoginLazyRoute
  '/verify': typeof AuthVerifyLazyRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/dashboard': typeof AppDashboardLazyRoute
  '/login': typeof AuthLoginLazyRoute
  '/verify': typeof AuthVerifyLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/_app/dashboard': typeof AppDashboardLazyRoute
  '/_auth/login': typeof AuthLoginLazyRoute
  '/_auth/verify': typeof AuthVerifyLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/dashboard' | '/login' | '/verify'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/dashboard' | '/login' | '/verify'
  id:
    | '__root__'
    | '/_app'
    | '/_auth'
    | '/_app/dashboard'
    | '/_auth/login'
    | '/_auth/verify'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_auth"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/dashboard"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/verify"
      ]
    },
    "/_app/dashboard": {
      "filePath": "_app/dashboard.lazy.tsx",
      "parent": "/_app"
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/verify": {
      "filePath": "_auth/verify.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */