
import { gql } from '@apollo/client/core';

export async function makeOrder(context) {
  try {
    return await context.client
      .mutate({
        mutation: gql`
        mutation placeOrder {
            placeOrder {
                success
                redirectUrl
                selectedMethod
                order {
                    id
                    incrementId
                    status
                    channelName
                    isGuest
                    customerEmail
                    customerFirstName
                    customerLastName
                    customerCompanyName
                    customerVatId
                    shippingMethod
                    shippingTitle
                    shippingDescription
                    couponCode
                    isGift
                    totalItemCount
                    totalQtyOrdered
                    baseCurrencyCode
                    channelCurrencyCode
                    orderCurrencyCode
                    grandTotal
                    baseGrandTotal
                    grandTotalInvoiced
                    baseGrandTotalInvoiced
                    grandTotalRefunded
                    baseGrandTotalRefunded
                    subTotal
                    baseSubTotal
                    subTotalInvoiced
                    baseSubTotalInvoiced
                    subTotalRefunded
                    baseSubTotalRefunded
                    discountPercent
                    discountAmount
                    baseDiscountAmount
                    discountInvoiced
                    baseDiscountInvoiced
                    discountRefunded
                    baseDiscountRefunded
                    taxAmount
                    baseTaxAmount
                    taxAmountInvoiced
                    baseTaxAmountInvoiced
                    taxAmountRefunded
                    baseTaxAmountRefunded
                    shippingAmount
                    baseShippingAmount
                    shippingInvoiced
                    baseShippingInvoiced
                    shippingRefunded
                    baseShippingRefunded
                    customerId
                    customerType
                    channelId
                    channelType
                    cartId
                    appliedCartRuleIds
                    shippingDiscountAmount
                    baseShippingDiscountAmount
                    createdAt
                    updatedAt
                    billingAddress {
                        id
                        customerId
                        cartId
                        orderId
                        firstName
                        lastName
                        gender
                        companyName
                        address1
                        address2
                        postcode
                        city
                        state
                        country
                        email
                        phone
                        vatId
                        defaultAddress
                    }
                    shippingAddress {
                        id
                        customerId
                        cartId
                        orderId
                        firstName
                        lastName
                        gender
                        companyName
                        address1
                        address2
                        postcode
                        city
                        state
                        country
                        email
                        phone
                        vatId
                        defaultAddress
                    }
                    items {
                        id
                        sku
                        type
                        name
                        couponCode
                        weight
                        totalWeight
                        qtyOrdered
                        qtyShipped
                        qtyInvoiced
                        qtyCanceled
                        qtyRefunded
                        price
                        basePrice
                        total
                        baseTotal
                        totalInvoiced
                        baseTotalInvoiced
                        amountRefunded
                        baseAmountRefunded
                        discountPercent
                        discountAmount
                        baseDiscountAmount
                        discountInvoiced
                        baseDiscountInvoiced
                        discountRefunded
                        baseDiscountRefunded
                        taxPercent
                        taxAmount
                        baseTaxAmount
                        taxAmountInvoiced
                        baseTaxAmountInvoiced
                        taxAmountRefunded
                        baseTaxAmountRefunded
                        productId
                        productType
                        orderId
                        parentId
                        additional
                        createdAt
                        updatedAt
                        product {
                            id
                            type
                            attributeFamilyId
                            sku
                            parentId
                            createdAt
                            updatedAt
                        }
                        child {
                            id
                            sku
                            type
                            name
                            couponCode
                            weight
                            totalWeight
                            qtyOrdered
                            qtyShipped
                            qtyInvoiced
                            qtyCanceled
                            qtyRefunded
                            price
                            basePrice
                            total
                            baseTotal
                            totalInvoiced
                            baseTotalInvoiced
                        }
                    }
                    shipments {
                        id
                        status
                        totalQty
                        totalWeight
                        carrierCode
                        carrierTitle
                        trackNumber
                        emailSent
                        customerId
                        customerType
                        orderId
                        orderAddressId
                        createdAt
                        updatedAt
                    }
                    refunds {
                        id
                        incrementId
                        state
                        emailSent
                        totalQty
                        baseCurrencyCode
                        channelCurrencyCode
                        orderCurrencyCode
                        adjustmentRefund
                        baseAdjustmentRefund
                        adjustmentFee
                        baseAdjustmentFee
                        subTotal
                        baseSubTotal
                        grandTotal
                        baseGrandTotal
                        shippingAmount
                        baseShippingAmount
                        taxAmount
                        baseTaxAmount
                        discountPercent
                        discountAmount
                        baseDiscountAmount
                        orderId
                        createdAt
                        updatedAt
                    }
                }
            }
        }`
      });
  } catch (error) {
    console.log('Error makeOrder:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}