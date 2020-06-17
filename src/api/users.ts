/*
 * @Author: Lucas.
 * @Create: 2020-06-17 02:22:22
 * @LastTime: 2020-06-17 02:22:22
 * @LastEdit: Lucas.
 * @FilePath: \smallyan.admin\client\src\api\users.ts
 * @Description: 用户
 */
import request from '@/utils/request'

export const getUserInfo = (data?: any) =>
  request({
    url: '/user/info',
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: '/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/logout',
    method: 'post'
  })

export const getUsers = (data: any) =>
  request({
    url: '/user/list',
    method: 'post',
    data
  })

export const delAdmin = (id: number) =>
  request({
    url: '/user/del',
    method: 'post',
    data: { id },
    showSuccess: 'toast'
  })

export const editUser = (data: any) =>
  request({
    url: '/user/edit',
    method: 'post',
    data: data,
    showSuccess: 'toast'
  })
