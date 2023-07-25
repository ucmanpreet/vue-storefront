import { UserGetters } from '@vue-storefront/core';
import { User } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(user: User): string {
  if (!user) {
    return '';
  }

  
  // return user?.firstName || '';
    return user?.firstName || user?.name?.split(' ')[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(user: User): string {
  if (!user) {
    return '';
  }

  // return user?.lastName || '';
  return user?.lastName || user?.name?.split(' ')[1];

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFullName(user: User): string {
  if (!user) {
    return '';
  }
console.log('Getters in composables======',user?.name);

  // return `${user?.firstName} ${user?.lastName}` || '';
  return `${user?.name}` || '';

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmailAddress(user: User): string {
  if (!user) {
    return '';
  }

  return user?.email || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone(user: User): string {
  if (!user) {
    return null;
  }

  return user?.phone;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGender(user: User): string {
  if (!user) {
    return '';
  }

  return user?.gender;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDateOfBirth(user: User): string {
  if (!user) {
    return '';
  }

  return user?.dateOfBirth || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getUser(user): string {
  if (!user) {
    return null;
  }

  return user?.success?.customer || null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getUserId(user: User): number {
  if (!user) {
    return null;
  }

  return user?.id || null;
}

export const userGetters: UserGetters<User> = {
  getFirstName,
  getLastName,
  getFullName,
  getEmailAddress,
  getPhone,
  getGender,
  getDateOfBirth,
  getUser,
  getUserId
};
