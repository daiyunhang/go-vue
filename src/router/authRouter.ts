/*
 * @Description: auth components
 * @Create: 2020-06-17 02:22:22
 * @LastTime: 2020-06-17 02:22:22
 * @LastEdit: Lucas.
 */
export const authComponents: any = {
  /**
   * 管理员
   */
  AdminUser: {
    title: '管理员列表',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/list.vue')
  },
  /**
   * 权限
   */
  AdminRole: {
    title: '角色列表',
    component: () => import(/* webpackChunkName: "role" */ '@/views/role/list.vue')
  },
  /**
   * 表格
   */
  AdminAuth: {
    title: '权限管理',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/index.vue')
  },
  AdminUserEdit: {
    title: '个人资料修改',
    component: () => import(/* webpackChunkName: "admin-user-edit" */ '@/views/profile/index.vue')
  }
}

interface IAuthComponentConfig {
  title: string
  key: string
}
export const authCompontsConfig = (): IAuthComponentConfig[] => {
  let arr: IAuthComponentConfig[] = []
  for (let v in authComponents) {
    arr.push({
      title: authComponents[v].title,
      key: v
    })
  }
  return arr
}
