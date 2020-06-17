/*
 * @Author: Lucas.
 * @Create: 2020-06-17 02:22:22
 * @LastTime: 2020-06-17 02:22:22
 * @LastEdit: Lucas.
 * @FilePath: \smallyan.admin\client\src\api\role.ts
 * @Description: 角色
 */
import request from '@/utils/request'
import { IAdminRole } from './types'

export const getRoles = (data: any = {}) =>
  request({
    url: '/role/list',
    method: 'post',
    data
  })

export const getRoleAuth = (id: number = 0) =>
  request({
    url: '/role/info',
    method: 'post',
    data: { id }
  })

export const delRole = (id: number) =>
  request({
    url: '/role/del',
    method: 'post',
    data: { id },
    showSuccess: 'toast'
  })

export const editRole = (data: IAdminRole) =>
  request({
    url: '/role/edit',
    method: 'post',
    data,
    showSuccess: 'toast'
  })
