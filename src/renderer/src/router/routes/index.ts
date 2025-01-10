import type { CustomRoute, ElegantConstRoute, ElegantRoute } from '@elegant-router/types'
import { layouts, views } from '../elegant/imports'
import { generatedRoutes } from '../elegant/routes'
import { transformElegantRoutesToVueRoutes } from '../elegant/transform'

const customRoutes: CustomRoute[] = []

export function createStaticRoutes() {
  const constantRoutes: ElegantRoute[] = []

  const authRoutes: ElegantRoute[] = []

  ;[...customRoutes, ...generatedRoutes].forEach((item) => {
    if (item.meta?.constant) {
      constantRoutes.push(item)
    } else {
      authRoutes.push(item)
    }
  })

  return {
    constantRoutes,
    authRoutes
  }
}

export function getAuthVueRoutes(routes: ElegantConstRoute[]) {
  return transformElegantRoutesToVueRoutes(routes, layouts, views)
}
