import { ProductsSearchParams } from '@vue-storefront/core';
export declare type TODO = any;
export declare type UseBillingAddParams = TODO;
export declare type UseCategorySearchParams = TODO;
export declare type UseFacetSearchParams = TODO;
export declare type UseProductSearchParams = ProductsSearchParams;
export declare type UseReviewSearchParams = TODO;
export declare type UseReviewAddParams = {
    name: string;
    title: string;
    rating: number;
    comment: string;
    productId: number;
};
export declare type UseShippingAddParams = TODO;
export declare type UseStoreFilterParams = TODO;
export declare type UseUserUpdateParams = TODO;
export declare type UseUserRegisterParams = TODO;
export declare type useUserOrderSearchParams = TODO;
export declare type CustomerOrder = {
    results: any[];
    total: number;
};
export declare type User = {
    id: number;
    name: String;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    dateOfBirth: string;
};
