/*
 * @Author: Lucas.
 * @Create: 2020-06-17 02:22:22
 * @LastTime: 2020-06-17 02:22:22
 * @LastEdit: Lucas.
 * @FilePath: \smallyan.admin\client\src\api\users.ts
 * @Description: 用户
 */
import request from '@/utils/request'

export const getNodes = () =>
  request({
    url: '/auth/list',
    method: 'get'
  })

export const editNodes = (data: any) =>
  request({
    url: '/auth/edit',
    method: 'post',
    data,
    showSuccess: 'toast'
  })

export const delNode = (id: number) =>
  request({
    url: '/auth/del',
    method: 'get',
    data: { id }
  })
