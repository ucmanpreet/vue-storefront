
import { gql } from "@apollo/client/core";

export async function getFeaturedProduct(context, params) {

    try {
        return await context.client
        .query({
            query : gql`  query products {
                products {
                  paginatorInfo {
                    count
                    currentPage
                    lastPage
                    total
                  }
                  data {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
                    productFlats {
                      id
                      sku
                      name
                      description
                      shortDescription
                      urlKey
                      new
                      featured
                      status
                      visibleIndividually
                      thumbnail
                      price
                      cost
                      specialPrice
                      specialPriceFrom
                      specialPriceTo
                      weight
                      color
                      colorLabel
                      size
                      sizeLabel
                      locale
                      channel
                      productId
                      parentId
                      minPrice
                      maxPrice
                      metaTitle
                      metaKeywords
                      metaDescription
                      width
                      height
                      depth
                      variants {
                        id
                        sku
                        name
                        description
                        shortDescription
                        urlKey
                        new
                        featured
                        status
                        visibleIndividually
                        thumbnail
                        price
                        locale
                        channel
                        productId
                        parentId
                      }
                      parent {
                        id
                        sku
                        name
                        description
                        shortDescription
                        urlKey
                        new
                        featured
                        status
                        visibleIndividually
                        thumbnail
                        price
                        cost
                        specialPrice
                        specialPriceFrom
                        specialPriceTo
                        weight
                      }
                      createdAt
                      updatedAt
                    }
                    variants {
                      id
                      type
                      attributeFamilyId
                      sku
                      parentId
                    }
                    parent {
                      id
                      type
                      attributeFamilyId
                      sku
                      parentId
                    }
                    attributeFamily {
                      id
                      code
                      name
                      status
                      isUserDefined
                    }
                    attributeValues {
                      id
                      productId
                      attributeId
                      locale
                      channel
                      textValue
                      booleanValue
                      integerValue
                      floatValue
                      dateTimeValue
                      dateValue
                      jsonValue
                      attribute {
                        id
                        code
                        adminName
                        type
                      }
                    }
                    superAttributes {
                      id
                      code
                      adminName
                      type
                      position
                    }
                    categories {
                      id
                      name
                      description
                      slug
                      urlPath
                      imageUrl
                      metaTitle
                      metaDescription
                      metaKeywords
                      position
                      status
                      displayMode
                      parentId
                      filterableAttributes {
                        id
                        adminName
                        code
                        type
                        position
                      }
                      translations {
                        id
                        name
                        description
                        localeId
                        locale
                      }
                      createdAt
                      updatedAt
                    }
                    inventories {
                      id
                      qty
                      productId
                      inventorySourceId
                      vendorId
                      inventorySource {
                        id
                        code
                        name
                        description
                        contactName
                        contactEmail
                        contactNumber
                        contactFax
                        country
                        state
                        city
                        street
                        postcode
                        priority
                        latitude
                        longitude
                        status
                      }
                    }
                    images {
                      id
                      type
                      path
                      productId
                    }
                    orderedInventories {
                      id
                      qty
                      productId
                      channelId
                    }
                    reviews {
                      id
                      title
                      rating
                      comment
                      status
                      productId
                      customerId
                      customerName
                      createdAt
                      updatedAt
                    }
                    groupedProducts {
                      id
                      qty
                      sortOrder
                      productId
                      associatedProductId
                      associatedProduct {
                        id
                        type
                        attributeFamilyId
                        sku
                        parentId
                      }
                    }
                    downloadableSamples {
                      id
                      url
                      file
                      fileName
                      type
                      sortOrder
                      productId
                      createdAt
                      updatedAt
                      translations {
                        id
                        locale
                        title
                        productDownloadableSampleId
                      }
                    }
                    downloadableLinks {
                      id
                      title
                      price
                      url
                      file
                      fileName
                      type
                      sampleUrl
                      sampleFile
                      sampleFileName
                      sampleType
                      sortOrder
                      productId
                      downloads
                      translations {
                        id
                        locale
                        title
                        productDownloadableLinkId
                      }
                    }
                    bundleOptions {
                      id
                      type
                      isRequired
                      sortOrder
                      productId
                      bundleOptionProducts {
                        id
                        qty
                        isUserDefined
                        sortOrder
                        isDefault
                        productBundleOptionId
                        productId
                      }
                      translations {
                        id
                        locale
                        label
                        productBundleOptionId
                      }
                    }
                    customerGroupPrices {
                      id
                      qty
                      valueType
                      value
                      productId
                      customerGroupId
                      createdAt
                      updatedAt
                    }
                    booking {
                      id
                      type
                      qty
                      location
                      showLocation
                      availableEveryWeek
                      availableFrom
                      availableTo
                      productId
                      defaultSlot {
                        id
                        bookingType
                        duration
                        breakTime
                        slots {
                          to
                          toDay
                          from
                          fromDay
                        }
                        bookingProductId
                      }
                      appointmentSlot {
                        id
                        duration
                        breakTime
                        sameSlotAllDays
                        slots {
                          from
                          to
                        }
                        bookingProductId
                      }
                    }
                  }
                }
              }
            `,
            // query: gql`
            // query featuredProducts ($count: Int = 10) {
            //     featuredProducts(count: $count) {
            //         id
            //         type
            //         isInWishlist
            //         attributeFamilyId
            //         sku
            //         parentId
            //         productFlats {
            //             id
            //             sku
            //             productNumber
            //             name
            //             description
            //             shortDescription
            //             urlKey
            //             new
            //             featured
            //             status
            //             visibleIndividually
            //             thumbnail
            //             price
            //             cost
            //             specialPrice
            //             specialPriceFrom
            //             specialPriceTo
            //             weight
            //             color
            //             colorLabel
            //             size
            //             sizeLabel
            //             locale
            //             channel
            //             productId
            //             parentId
            //             minPrice
            //             maxPrice
            //             metaTitle
            //             metaKeywords
            //             metaDescription
            //             width
            //             height
            //             depth
            //             createdAt
            //             updatedAt
            //         }
            //         cacheBaseImage {
            //             smallImageUrl
            //             mediumImageUrl
            //             largeImageUrl
            //             originalImageUrl
            //         }
            //         priceHtml {
            //             id
            //             type
            //             html
            //             regular
            //             special
            //         }
            //         reviews {
            //             id
            //             title
            //             rating
            //             comment
            //             status
            //             productId
            //             customerId
            //             customerName
            //             createdAt
            //             updatedAt
            //         }
            //     }
            // }`,
            variables: {
                count: params.limit
            }
        });

    } catch (error) {
        console.log('Error getFeaturedProduct:');
        console.log(error);
        throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
    }
}