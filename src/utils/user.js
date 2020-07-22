/*
 * @Description: 用户信息、权限本地缓存
 * @Author: admin
 * @Date: 2020-03-06 09:45:52
 * @LastEditors: admin
 * @LastEditTime: 2020-04-13 14:52:33
 */
import config from '../../config/defaultSettings';
import { local, session } from './store';

// 用户信息缓存key
const { tokenCacheKey, userCacheKey, authCacheKey } = config;

/**
 * 获取登录token缓存
 * @returns {object}
 */
export function getTokenCache() {
  return session.get(tokenCacheKey) || '';
}

/**
 * 设置登录token缓存
 * @param {*} key
 */
export function setTokenCache(key) {
  session.set(tokenCacheKey, key);
}

/**
 * 清除登录token缓存
 */
export function removeTokenCache() {
  session.remove(tokenCacheKey);
}

/**
 * 获取登录缓存
 * @returns {object}
 */
export function getUserCache() {
  return session.get(userCacheKey) || {};
}

/**
 * 设置登录缓存
 * @param {*} key
 */
export function setUserCache(key) {
  session.set(userCacheKey, key);
}

/**
 * 清除登录缓存
 */
export function removeUserCache() {
  session.remove(userCacheKey);
}

/**
 * 获取权限缓存
 * @returns {object}
 */
export function getAuthCache() {
  return session.get(authCacheKey) || {};
}

/**
 * 设置权限缓存
 * @param {*} key
 */
export function setAuthCache(key) {
  session.set(authCacheKey, key);
}

/**
 * 清除权限缓存
 */
export function removeAuthCache() {
  session.remove(authCacheKey);
}

/**
 * 清除缓存
 */
export function removeCache() {
  session.remove();
}
