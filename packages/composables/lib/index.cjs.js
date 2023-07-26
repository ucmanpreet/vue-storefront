'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@vue-storefront/core');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var params$b = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, _a) {
        var customQuery = _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var cartResults;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('Mocked: useCart.load');
                        return [4 /*yield*/, context.$bagisto.api.getCart(customQuery)];
                    case 1:
                        cartResults = _c.sent();
                        return [2 /*return*/, ((_b = cartResults === null || cartResults === void 0 ? void 0 : cartResults.data) === null || _b === void 0 ? void 0 : _b.cartDetail) || null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addItem: function (context, _a) {
        _a.currentCart; var product = _a.product, quantity = _a.quantity, customQuery = _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var data, addItemToCartResults;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useCart.addItem');
                        data = {
                            product: product, quantity: quantity, customQuery: customQuery
                        };
                        return [4 /*yield*/, context.$bagisto.api.addToCart(data)];
                    case 1:
                        addItemToCartResults = _d.sent();
                        params$b.load(context, {});
                        return [2 /*return*/, ((_c = (_b = addItemToCartResults === null || addItemToCartResults === void 0 ? void 0 : addItemToCartResults.data) === null || _b === void 0 ? void 0 : _b.addItemToCart) === null || _c === void 0 ? void 0 : _c.cart) || null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem: function (context, _a) {
        _a.currentCart; var product = _a.product; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var params, removeItemToCartResults;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useCart.removeItem');
                        params = { id: product === null || product === void 0 ? void 0 : product.id };
                        return [4 /*yield*/, context.$bagisto.api.removeFromCart(params)];
                    case 1:
                        removeItemToCartResults = _d.sent();
                        return [2 /*return*/, ((_c = (_b = removeItemToCartResults === null || removeItemToCartResults === void 0 ? void 0 : removeItemToCartResults.data) === null || _b === void 0 ? void 0 : _b.removeCartItem) === null || _c === void 0 ? void 0 : _c.cart) || null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateItemQty: function (context, _a) {
        _a.currentCart; var product = _a.product, quantity = _a.quantity; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var params, updateItemToCartResults;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useCart.updateItemQty');
                        params = {
                            qty: [{
                                    cartItemId: product === null || product === void 0 ? void 0 : product.id,
                                    quantity: quantity
                                }]
                        };
                        return [4 /*yield*/, context.$bagisto.api.updateToCart(params)];
                    case 1:
                        updateItemToCartResults = _d.sent();
                        return [2 /*return*/, ((_c = (_b = updateItemToCartResults === null || updateItemToCartResults === void 0 ? void 0 : updateItemToCartResults.data) === null || _b === void 0 ? void 0 : _b.updateItemToCart) === null || _c === void 0 ? void 0 : _c.cart) || null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clear: function (context, _a) {
        _a.currentCart;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: useCart.clear');
                return [2 /*return*/, null];
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    applyCoupon: function (context, _a) {
        _a.currentCart; _a.couponCode; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: useCart.applyCoupon');
                return [2 /*return*/, {
                        updatedCart: null,
                        updatedCoupon: null
                    }];
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeCoupon: function (context, _a) {
        _a.currentCart; _a.couponCode; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: useCart.removeCoupon');
                return [2 /*return*/, {
                        updatedCart: null
                    }];
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isInCart: function (context, _a) {
        var currentCart = _a.currentCart, product = _a.product;
        if ((currentCart === null || currentCart === void 0 ? void 0 : currentCart.items) && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.items.length) > 0) {
            for (var _i = 0, _b = currentCart.items; _i < _b.length; _i++) {
                var cartItem = _b[_i];
                if (cartItem.productId === product.id) {
                    return true;
                }
            }
        }
        return false;
    }
};
var useCart = core.useCartFactory(params$b);

var params$a = {
    provide: function () {
        return {
            cart: useCart(),
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, _a) {
        _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: useBilling.load');
                return [2 /*return*/, null];
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    save: function (context, _a) {
        var params = _a.params, billingDetails = _a.billingDetails; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var excludeIndex, shippingAddress, key, paramDetails, saveBillingResults, paymentMethods;
            var _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        console.log('Mocked: useBilling.save');
                        excludeIndex = ['customerId', 'cartId', 'orderId', 'shippingRates', 'id', 'addressType', 'additional', 'gender', 'defaultAddress', 'vatId', 'createdAt', 'updatedAt', '__typename'];
                        shippingAddress = (_c = (_b = context.cart) === null || _b === void 0 ? void 0 : _b.cart.value) === null || _c === void 0 ? void 0 : _c.shippingAddress;
                        for (key in shippingAddress) {
                            if (excludeIndex.includes(key)) {
                                delete shippingAddress[key];
                            }
                        }
                        paramDetails = {
                            type: 'billing',
                            shipping: shippingAddress,
                            billing: billingDetails,
                            shippingAddressId: 0,
                            billingAddressId: parseInt(params === null || params === void 0 ? void 0 : params.billingAddressId) || 0
                        };
                        return [4 /*yield*/, context.$bagisto.api.saveShippingAddress(paramDetails)];
                    case 1:
                        saveBillingResults = _k.sent();
                        if (!!(saveBillingResults === null || saveBillingResults === void 0 ? void 0 : saveBillingResults.data)) return [3 /*break*/, 4];
                        return [4 /*yield*/, context.cart.setCart(null)];
                    case 2:
                        _k.sent();
                        return [4 /*yield*/, context.cart.load()];
                    case 3:
                        _k.sent();
                        _k.label = 4;
                    case 4:
                        paymentMethods = (_e = (_d = saveBillingResults === null || saveBillingResults === void 0 ? void 0 : saveBillingResults.data) === null || _d === void 0 ? void 0 : _d.saveCheckoutAddresses) === null || _e === void 0 ? void 0 : _e.paymentMethods;
                        if (!((_g = (_f = saveBillingResults === null || saveBillingResults === void 0 ? void 0 : saveBillingResults.data) === null || _f === void 0 ? void 0 : _f.paymentMethods) === null || _g === void 0 ? void 0 : _g.cart)) return [3 /*break*/, 6];
                        context.cart.setCart((_j = (_h = saveBillingResults === null || saveBillingResults === void 0 ? void 0 : saveBillingResults.data) === null || _h === void 0 ? void 0 : _h.paymentMethods) === null || _j === void 0 ? void 0 : _j.cart);
                        return [4 /*yield*/, context.cart.load()];
                    case 5:
                        _k.sent();
                        _k.label = 6;
                    case 6: return [2 /*return*/, paymentMethods ? paymentMethods : null];
                }
            });
        });
    }
};
var useBilling = core.useBillingFactory(params$a);

var params$9 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    categorySearch: function (context, _a) { var _b, _c, _d; return __awaiter(void 0, void 0, void 0, function () {
        var _e, categoriesResult, categoryTreeResults;
        _a.customQuery; var params = __rest(_a, ["customQuery"]);
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.log('Mocked: useCategory.categorySearch');
                    _e = params.apiType;
                    switch (_e) {
                        case 'categoryBySlug': return [3 /*break*/, 1];
                        case 'categoryTree': return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, context.$bagisto.api.getCategories(params)];
                case 2:
                    categoriesResult = _f.sent();
                    return [2 /*return*/, (_c = (_b = categoriesResult === null || categoriesResult === void 0 ? void 0 : categoriesResult.data) === null || _b === void 0 ? void 0 : _b.categories) === null || _c === void 0 ? void 0 : _c.data];
                case 3: return [4 /*yield*/, context.$bagisto.api.getCategoryTree(params)];
                case 4:
                    categoryTreeResults = _f.sent();
                    return [2 /*return*/, (_d = categoryTreeResults === null || categoryTreeResults === void 0 ? void 0 : categoryTreeResults.data) === null || _d === void 0 ? void 0 : _d.homeCategories];
                case 5: return [2 /*return*/];
            }
        });
    }); }
};
var useCategory = core.useCategoryFactory(params$9);

function useContent() { }

var sortingOptions = [
    {
        attrName: 'Default',
        value: ''
    }, {
        attrName: 'Name A-Z',
        value: '?sort=name&order=asc'
    }, {
        attrName: 'Name Z-A',
        value: '?sort=name&order=desc'
    }, {
        attrName: 'Newest First',
        value: '?sort=created_at&order=desc'
    }, {
        attrName: 'Oldest First',
        value: '?sort=created_at&order=asc'
    }, {
        attrName: 'Price Low to High',
        value: '?sort=price&order=asc'
    }, {
        attrName: 'Price High to Low',
        value: '?sort=price&order=desc'
    }
];
var factoryParams$2 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    search: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var productListResults, categoryResult, categoryParams;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    console.log('Mocked: useFacet.search');
                    return [4 /*yield*/, context.$bagisto.api.getProductList(params)];
                case 1:
                    productListResults = _j.sent();
                    categoryResult = null;
                    if (!params.input.categorySlug) return [3 /*break*/, 3];
                    categoryParams = {
                        slug: params.input.categorySlug
                    };
                    return [4 /*yield*/, context.$bagisto.api.getCategories(categoryParams)];
                case 2:
                    categoryResult = _j.sent();
                    _j.label = 3;
                case 3: return [2 /*return*/, {
                        items: ((_b = (_a = productListResults === null || productListResults === void 0 ? void 0 : productListResults.data) === null || _a === void 0 ? void 0 : _a.getProductListing) === null || _b === void 0 ? void 0 : _b.data) || [],
                        categoryDetail: categoryResult || [],
                        pagination: ((_d = (_c = productListResults === null || productListResults === void 0 ? void 0 : productListResults.data) === null || _c === void 0 ? void 0 : _c.getProductListing) === null || _d === void 0 ? void 0 : _d.paginatorInfo) || {},
                        filterableAttributes: categoryResult ? (_h = (_g = (_f = (_e = categoryResult === null || categoryResult === void 0 ? void 0 : categoryResult.data) === null || _e === void 0 ? void 0 : _e.categories) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.filterableAttributes : [],
                        sortingData: sortingOptions
                    }];
            }
        });
    }); }
};
var useFacet = core.useFacetFactory(factoryParams$2);

var factoryParams$1 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetPassword: function (context, _a) {
        var email = _a.email; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var passwordResult;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('Mocked: resetPassword');
                        return [4 /*yield*/, context.$bagisto.api.customerResetPassword(email)];
                    case 1:
                        passwordResult = _c.sent();
                        return [2 /*return*/, ((_b = passwordResult === null || passwordResult === void 0 ? void 0 : passwordResult.data) === null || _b === void 0 ? void 0 : _b.forgotPassword) || null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setNewPassword: function (context, _a) {
        _a.tokenValue; _a.newPassword; _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: setNewPassword');
                return [2 /*return*/, {}];
            });
        });
    }
};
var useForgotPassword = core.useForgotPasswordFactory(factoryParams$1);

var factoryParams = {
    provide: function () {
        return {
            cart: useCart(),
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    make: function (context, _a) {
        _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var shippingAddress, billingAddress, shippingRate, paymentMethod, orderResults, orderResponse;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        console.log('Mocked: useMakeOrder.make');
                        shippingAddress = (_c = (_b = context === null || context === void 0 ? void 0 : context.cart) === null || _b === void 0 ? void 0 : _b.cart.value) === null || _c === void 0 ? void 0 : _c.shippingAddress;
                        billingAddress = (_e = (_d = context === null || context === void 0 ? void 0 : context.cart) === null || _d === void 0 ? void 0 : _d.cart.value) === null || _e === void 0 ? void 0 : _e.billingAddress;
                        shippingRate = (_g = (_f = context === null || context === void 0 ? void 0 : context.cart) === null || _f === void 0 ? void 0 : _f.cart.value) === null || _g === void 0 ? void 0 : _g.selectedShippingRate;
                        paymentMethod = (_k = (_j = (_h = context === null || context === void 0 ? void 0 : context.cart) === null || _h === void 0 ? void 0 : _h.cart.value) === null || _j === void 0 ? void 0 : _j.payment) === null || _k === void 0 ? void 0 : _k.method;
                        if (!(shippingAddress && billingAddress && shippingRate && paymentMethod)) return [3 /*break*/, 5];
                        return [4 /*yield*/, context.$bagisto.api.makeOrder()];
                    case 1:
                        orderResults = _m.sent();
                        if (!!(orderResults === null || orderResults === void 0 ? void 0 : orderResults.data)) return [3 /*break*/, 4];
                        return [4 /*yield*/, context.cart.setCart(null)];
                    case 2:
                        _m.sent();
                        return [4 /*yield*/, context.cart.load()];
                    case 3:
                        _m.sent();
                        _m.label = 4;
                    case 4:
                        orderResponse = (_l = orderResults === null || orderResults === void 0 ? void 0 : orderResults.data) === null || _l === void 0 ? void 0 : _l.placeOrder;
                        if (!(orderResponse === null || orderResponse === void 0 ? void 0 : orderResponse.redirectUrl) && (orderResponse === null || orderResponse === void 0 ? void 0 : orderResponse.success)) {
                            context.cart.setCart(null);
                        }
                        return [2 /*return*/, (orderResponse === null || orderResponse === void 0 ? void 0 : orderResponse.order) || null];
                    case 5: return [2 /*return*/, null];
                }
            });
        });
    }
};
var useMakeOrder = core.useMakeOrderFactory(factoryParams);

var params$8 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productsSearch: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, productDetailResults, newProductResults, pageNumber, featuredProductResults, relatedProductResults;
        var _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _a = params.typeListing;
                    switch (_a) {
                        case 'productDetail': return [3 /*break*/, 1];
                        case 'newProduct': return [3 /*break*/, 3];
                        case 'featuredProduct': return [3 /*break*/, 5];
                        case 'relatedProduct': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 1:
                    console.log('Mocked: useProduct.getProductDetail');
                    return [4 /*yield*/, context.$bagisto.api.getProductDetail(params)];
                case 2:
                    productDetailResults = _g.sent();
                    return [2 /*return*/, ((_b = productDetailResults === null || productDetailResults === void 0 ? void 0 : productDetailResults.data) === null || _b === void 0 ? void 0 : _b.product) || {}];
                case 3:
                    console.log('Mocked: useProduct.getNewProduct');
                    return [4 /*yield*/, context.$bagisto.api.getNewProduct(params)];
                case 4:
                    newProductResults = _g.sent();
                    return [2 /*return*/, ((_c = newProductResults === null || newProductResults === void 0 ? void 0 : newProductResults.data) === null || _c === void 0 ? void 0 : _c.newProducts) || []];
                case 5:
                    console.log('Mocked: useProduct.getFeaturedProduct');
                    pageNumber = 1704;
                    return [4 /*yield*/, context.$bagisto.api.getFeaturedProduct(pageNumber)];
                case 6:
                    featuredProductResults = _g.sent();
                    console.log('data=================', featuredProductResults);
                    return [2 /*return*/, ((_e = (_d = featuredProductResults === null || featuredProductResults === void 0 ? void 0 : featuredProductResults.data) === null || _d === void 0 ? void 0 : _d.products) === null || _e === void 0 ? void 0 : _e.data) || []];
                case 7:
                    console.log('Mocked: useProduct.getRelatedProduct');
                    return [4 /*yield*/, context.$bagisto.api.getRelatedProduct(params)];
                case 8:
                    relatedProductResults = _g.sent();
                    return [2 /*return*/, ((_f = relatedProductResults === null || relatedProductResults === void 0 ? void 0 : relatedProductResults.data) === null || _f === void 0 ? void 0 : _f.relatedProducts) || []];
                case 9: return [2 /*return*/];
            }
        });
    }); }
};
var useProduct = core.useProductFactory(params$8);

var params$7 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchReviews: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, productReviewResults, removeResults;
        var _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log('Mocked: useReview.searchReviews');
                    _a = params.type;
                    switch (_a) {
                        case 'search': return [3 /*break*/, 1];
                        case 'remove': return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, context.$bagisto.api.searchReviews(params)];
                case 2:
                    productReviewResults = _g.sent();
                    return [2 /*return*/, {
                            reviews: ((_c = (_b = productReviewResults === null || productReviewResults === void 0 ? void 0 : productReviewResults.data) === null || _b === void 0 ? void 0 : _b.reviewsList) === null || _c === void 0 ? void 0 : _c.data) || null,
                            pagination: ((_e = (_d = productReviewResults === null || productReviewResults === void 0 ? void 0 : productReviewResults.data) === null || _d === void 0 ? void 0 : _d.reviewsList) === null || _e === void 0 ? void 0 : _e.paginatorInfo) || null
                        }];
                case 3: return [4 /*yield*/, context.$bagisto.api.removeReview(params === null || params === void 0 ? void 0 : params.review)];
                case 4:
                    removeResults = _g.sent();
                    return [2 /*return*/, (_f = removeResults === null || removeResults === void 0 ? void 0 : removeResults.data) === null || _f === void 0 ? void 0 : _f.deleteReview];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addReview: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var createReviewResults;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Mocked: useReview.addReview');
                    return [4 /*yield*/, context.$bagisto.api.createProductReview(params)];
                case 1:
                    createReviewResults = _c.sent();
                    return [2 /*return*/, ((_b = (_a = createReviewResults === null || createReviewResults === void 0 ? void 0 : createReviewResults.data) === null || _a === void 0 ? void 0 : _a.createReview) === null || _b === void 0 ? void 0 : _b.success) || null];
            }
        });
    }); }
};
var useReview = core.useReviewFactory(params$7);

var params$6 = {
    provide: function () {
        return {
            cart: useCart()
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, _a) {
        _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log('Mocked: useShipping.load');
                        if (!!((_c = (_b = context === null || context === void 0 ? void 0 : context.cart) === null || _b === void 0 ? void 0 : _b.cart.value) === null || _c === void 0 ? void 0 : _c.shippingAddress)) return [3 /*break*/, 2];
                        return [4 /*yield*/, context.cart.load()];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2: return [2 /*return*/, ((_d = context === null || context === void 0 ? void 0 : context.cart.value) === null || _d === void 0 ? void 0 : _d.shippingAddress) || {}];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    save: function (context, _a) {
        var shippingDetails = _a.shippingDetails, customQuery = _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var params, saveShippingResults, shippingResponse;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useShipping.save');
                        params = {
                            type: 'shipping',
                            shipping: shippingDetails,
                            billing: shippingDetails,
                            shippingAddressId: parseInt(customQuery === null || customQuery === void 0 ? void 0 : customQuery.shippingAddressId) || 0,
                            billingAddressId: parseInt(customQuery === null || customQuery === void 0 ? void 0 : customQuery.shippingAddressId) || 0
                        };
                        return [4 /*yield*/, context.$bagisto.api.saveShippingAddress(params)];
                    case 1:
                        saveShippingResults = _d.sent();
                        if (!!(saveShippingResults === null || saveShippingResults === void 0 ? void 0 : saveShippingResults.data)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (context === null || context === void 0 ? void 0 : context.cart.setCart(null))];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, context.cart.load()];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        shippingResponse = (_b = saveShippingResults === null || saveShippingResults === void 0 ? void 0 : saveShippingResults.data) === null || _b === void 0 ? void 0 : _b.saveCheckoutAddresses;
                        if (!(shippingResponse === null || shippingResponse === void 0 ? void 0 : shippingResponse.cart)) return [3 /*break*/, 7];
                        return [4 /*yield*/, (context === null || context === void 0 ? void 0 : context.cart.setCart(shippingResponse === null || shippingResponse === void 0 ? void 0 : shippingResponse.cart))];
                    case 5:
                        _d.sent();
                        return [4 /*yield*/, context.cart.load()];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7: return [2 /*return*/, shippingResponse ? (_c = context === null || context === void 0 ? void 0 : context.cart.value) === null || _c === void 0 ? void 0 : _c.shippingAddress : {}];
                }
            });
        });
    }
};
var useShipping = core.useShippingFactory(params$6);

var params$5 = {
    provide: function () {
        return useCart();
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, _a) {
        var customQuery = _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var shippingAddress, billingAddress, shippingRate, params_1, paymentMethodResults, paymentMethods;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        console.log('Mocked: loadShippingProvider');
                        if (!(customQuery.type === 'payment')) return [3 /*break*/, 2];
                        shippingAddress = (_b = context === null || context === void 0 ? void 0 : context.cart.value) === null || _b === void 0 ? void 0 : _b.shippingAddress;
                        billingAddress = (_c = context === null || context === void 0 ? void 0 : context.cart.value) === null || _c === void 0 ? void 0 : _c.billingAddress;
                        shippingRate = (_d = context === null || context === void 0 ? void 0 : context.cart.value) === null || _d === void 0 ? void 0 : _d.selectedShippingRate;
                        if (!(shippingAddress && billingAddress && shippingRate)) return [3 /*break*/, 2];
                        params_1 = {
                            shippingMethod: shippingRate.method
                        };
                        return [4 /*yield*/, context.$bagisto.api.saveShippingMethod(params_1)];
                    case 1:
                        paymentMethodResults = _l.sent();
                        if ((_f = (_e = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _e === void 0 ? void 0 : _e.paymentMethods) === null || _f === void 0 ? void 0 : _f.cart) {
                            context.setCart((_h = (_g = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _g === void 0 ? void 0 : _g.paymentMethods) === null || _h === void 0 ? void 0 : _h.cart);
                        }
                        paymentMethods = (_k = (_j = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _j === void 0 ? void 0 : _j.paymentMethods) === null || _k === void 0 ? void 0 : _k.paymentMethods;
                        return [2 /*return*/, paymentMethods ? paymentMethods : null];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    save: function (context, _a) {
        var shippingMethod = _a.shippingMethod, customQuery = _a.customQuery;
        return __awaiter(void 0, void 0, void 0, function () {
            var params, shippingMethodResults, params_2, paymentMethodResults;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        console.log('Mocked: saveShippingProvider');
                        params = {
                            shippingMethod: shippingMethod
                        };
                        if (!((customQuery === null || customQuery === void 0 ? void 0 : customQuery.actionType) && customQuery.actionType === 'shipping')) return [3 /*break*/, 2];
                        return [4 /*yield*/, context.$bagisto.api.saveShippingMethod(params)];
                    case 1:
                        shippingMethodResults = _o.sent();
                        if ((_c = (_b = shippingMethodResults === null || shippingMethodResults === void 0 ? void 0 : shippingMethodResults.data) === null || _b === void 0 ? void 0 : _b.paymentMethods) === null || _c === void 0 ? void 0 : _c.cart) {
                            context.setCart((_e = (_d = shippingMethodResults === null || shippingMethodResults === void 0 ? void 0 : shippingMethodResults.data) === null || _d === void 0 ? void 0 : _d.paymentMethods) === null || _e === void 0 ? void 0 : _e.cart);
                        }
                        return [2 /*return*/, ((_g = (_f = shippingMethodResults === null || shippingMethodResults === void 0 ? void 0 : shippingMethodResults.data) === null || _f === void 0 ? void 0 : _f.paymentMethods) === null || _g === void 0 ? void 0 : _g.paymentMethods) || null];
                    case 2:
                        if (!((customQuery === null || customQuery === void 0 ? void 0 : customQuery.actionType) && customQuery.actionType === 'payment')) return [3 /*break*/, 4];
                        params_2 = {
                            payment: {
                                method: shippingMethod
                            }
                        };
                        return [4 /*yield*/, context.$bagisto.api.savePaymentMethod(params_2)];
                    case 3:
                        paymentMethodResults = _o.sent();
                        if ((_j = (_h = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _h === void 0 ? void 0 : _h.savePayment) === null || _j === void 0 ? void 0 : _j.cart) {
                            context.setCart((_l = (_k = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _k === void 0 ? void 0 : _k.savePayment) === null || _l === void 0 ? void 0 : _l.cart);
                        }
                        return [2 /*return*/, ((_m = paymentMethodResults === null || paymentMethodResults === void 0 ? void 0 : paymentMethodResults.data) === null || _m === void 0 ? void 0 : _m.savePayment) || null];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    }
};
var useShippingProvider = core.useShippingProviderFactory(params$5);

var useStore = core.useStoreFactory({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, params) {
        console.log('Mocked: useStore.load');
        return Promise.resolve({});
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    change: function (context, params) {
        console.log('Mocked: useStore.change');
        return Promise.resolve({});
    }
});

var params$4 = {
    provide: function () {
        return {
            cart: useCart()
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var customerToken, user_data, loginResult, customerDetail;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Mocked: useUser.load');
                    customerToken = context.$bagisto.config.app.$cookies.get('vsf-bagCust-token');
                    user_data = context.$bagisto.config.app.$cookies.get('vsf-bagCust-user');
                    console.log('hiihhihihiihihihih');
                    console.log({ user_data: user_data }, 'USER_DATA_FROM_COOKIES');
                    if (!customerToken) return [3 /*break*/, 2];
                    return [4 /*yield*/, context.$bagisto.api.getCustomer(user_data)];
                case 1:
                    loginResult = _b.sent();
                    customerDetail = (_a = loginResult === null || loginResult === void 0 ? void 0 : loginResult.data) === null || _a === void 0 ? void 0 : _a.user;
                    return [2 /*return*/, customerDetail ? customerDetail : null];
                case 2:
                    context.cart.load();
                    return [2 /*return*/, null];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logOut: function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var token, logoutResult;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Mocked: useUser.logOut');
                    token = context.$bagisto.config.app.$cookies.get('vsf-bagCust-token');
                    return [4 /*yield*/, context.$bagisto.api.customerLogout()];
                case 1:
                    logoutResult = _c.sent();
                    if (((_b = (_a = logoutResult === null || logoutResult === void 0 ? void 0 : logoutResult.data) === null || _a === void 0 ? void 0 : _a.customerLogout) === null || _b === void 0 ? void 0 : _b.status) && token) {
                        context.$bagisto.config.app.$cookies.remove('vsf-bagCust-token');
                        context === null || context === void 0 ? void 0 : context.cart.setCart(null);
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUser: function (context, _a) {
        _a.currentUser; var updatedUserData = _a.updatedUserData;
        return __awaiter(void 0, void 0, void 0, function () {
            var updateResult, userData;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useUser.updateUser');
                        return [4 /*yield*/, context.$bagisto.api.customerUpdate(updatedUserData)];
                    case 1:
                        updateResult = _d.sent();
                        userData = (_c = (_b = updateResult === null || updateResult === void 0 ? void 0 : updateResult.data) === null || _b === void 0 ? void 0 : _b.updateAccount) === null || _c === void 0 ? void 0 : _c.customer;
                        if (!userData) return [3 /*break*/, 3];
                        return [4 /*yield*/, params$4.load(context)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2 /*return*/, userData ? userData : null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var registerResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Mocked: useUser.register');
                    return [4 /*yield*/, context.$bagisto.api.createCustomer(params)];
                case 1:
                    registerResult = _b.sent();
                    return [2 /*return*/, {
                            key: 'customer_register',
                            // success: registerResult?.data?.customerRegister,
                            success: (_a = registerResult === null || registerResult === void 0 ? void 0 : registerResult.data) === null || _a === void 0 ? void 0 : _a.createUser,
                            error: registerResult.data ? null : registerResult
                        }];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logIn: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var loginResult, loginResultResponse;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log('Mocked: useUser.logIn');
                    return [4 /*yield*/, context.$bagisto.api.customerLogin(params)];
                case 1:
                    loginResult = _g.sent();
                    loginResultResponse = {
                        key: 'customer_login',
                        customerToken: ((_b = (_a = loginResult === null || loginResult === void 0 ? void 0 : loginResult.data) === null || _a === void 0 ? void 0 : _a.userLogin) === null || _b === void 0 ? void 0 : _b.accessToken) || null,
                        user: ((_d = (_c = loginResult === null || loginResult === void 0 ? void 0 : loginResult.data) === null || _c === void 0 ? void 0 : _c.userLogin) === null || _d === void 0 ? void 0 : _d.user) || null,
                        success: (_f = (_e = loginResult === null || loginResult === void 0 ? void 0 : loginResult.data) === null || _e === void 0 ? void 0 : _e.userLogin) === null || _f === void 0 ? void 0 : _f.success,
                        error: loginResult.data ? null : loginResult
                    };
                    if (loginResultResponse.customerToken !== null) {
                        context.$bagisto.config.app.$cookies.set('vsf-bagCust-token', loginResultResponse.customerToken);
                        // store id in cookies
                        context.$bagisto.config.app.$cookies.set('vsf-bagCust-user', loginResultResponse.user);
                        context === null || context === void 0 ? void 0 : context.cart.load();
                    }
                    return [2 /*return*/, loginResultResponse];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changePassword: function (context, _a) {
        var currentUser = _a.currentUser, currentPassword = _a.currentPassword, newPassword = _a.newPassword;
        return __awaiter(void 0, void 0, void 0, function () {
            var params, updatePasswordResult;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('Mocked: useUser.changePassword');
                        params = {
                            firstName: currentUser.firstName,
                            lastName: currentUser.lastName,
                            email: currentUser.email,
                            gender: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.gender) || 'Male',
                            oldpassword: currentPassword,
                            password: newPassword,
                            confirmPassword: newPassword
                        };
                        return [4 /*yield*/, context.$bagisto.api.customerUpdate(params)];
                    case 1:
                        updatePasswordResult = _d.sent();
                        return [2 /*return*/, ((_c = (_b = updatePasswordResult === null || updatePasswordResult === void 0 ? void 0 : updatePasswordResult.data) === null || _b === void 0 ? void 0 : _b.updateAccount) === null || _c === void 0 ? void 0 : _c.customer) || null];
                }
            });
        });
    }
};
var useUser = core.useUserFactory(params$4);

var params$3 = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserBilling.addAddress');
            return [2 /*return*/, {}];
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserBilling.deleteAddress');
            return [2 /*return*/, {}];
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserBilling.updateAddress');
            return [2 /*return*/, {}];
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserBilling.load');
            return [2 /*return*/, {}];
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setDefaultAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserBilling.setDefaultAddress');
            return [2 /*return*/, {}];
        });
    }); }
};
var useUserBilling = core.useUserBillingFactory(params$3);

var params$2 = {
    provide: function () {
        return useUser();
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchOrders: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var orderListResults;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    console.log('Mocked: searchOrders');
                    params.input = {};
                    if ((_a = context.user.value) === null || _a === void 0 ? void 0 : _a.id) {
                        params.input.customerId = parseInt((_b = context.user.value) === null || _b === void 0 ? void 0 : _b.id);
                    }
                    return [4 /*yield*/, context.$bagisto.api.getOrderList(params)];
                case 1:
                    orderListResults = _k.sent();
                    console.log({ orderListResults: orderListResults }, 'Order list Result');
                    return [2 /*return*/, {
                            results: ((_d = (_c = orderListResults === null || orderListResults === void 0 ? void 0 : orderListResults.data) === null || _c === void 0 ? void 0 : _c.ordersList) === null || _d === void 0 ? void 0 : _d.data) || null,
                            pagination: ((_f = (_e = orderListResults === null || orderListResults === void 0 ? void 0 : orderListResults.data) === null || _e === void 0 ? void 0 : _e.ordersList) === null || _f === void 0 ? void 0 : _f.paginatorInfo) || null,
                            total: ((_j = (_h = (_g = orderListResults === null || orderListResults === void 0 ? void 0 : orderListResults.data) === null || _g === void 0 ? void 0 : _g.ordersList) === null || _h === void 0 ? void 0 : _h.paginatorInfo) === null || _j === void 0 ? void 0 : _j.total) || 0
                        }];
            }
        });
    }); }
};
var useUserOrder = core.useUserOrderFactory(params$2);

var params$1 = {
    provide: function () {
        return {
            user: useUser(),
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var addressResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Mocked: useUserShipping.addAddress');
                    return [4 /*yield*/, context.$bagisto.api.createAddress(params === null || params === void 0 ? void 0 : params.address)];
                case 1:
                    addressResult = _b.sent();
                    return [2 /*return*/, ((_a = addressResult === null || addressResult === void 0 ? void 0 : addressResult.data) === null || _a === void 0 ? void 0 : _a.addresses) || {}];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var addressResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Mocked: useUserShipping.deleteAddress');
                    return [4 /*yield*/, context.$bagisto.api.removeAddress(params === null || params === void 0 ? void 0 : params.address)];
                case 1:
                    addressResult = _b.sent();
                    return [2 /*return*/, ((_a = addressResult === null || addressResult === void 0 ? void 0 : addressResult.data) === null || _a === void 0 ? void 0 : _a.addresses) || {}];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var addressResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Mocked: useUserShipping.updateAddress');
                    return [4 /*yield*/, context.$bagisto.api.updateAddress(params === null || params === void 0 ? void 0 : params.address)];
                case 1:
                    addressResult = _b.sent();
                    return [2 /*return*/, ((_a = addressResult === null || addressResult === void 0 ? void 0 : addressResult.data) === null || _a === void 0 ? void 0 : _a.addresses) || {}];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var addressesResult;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Mocked: useUserShipping.load');
                    if (!((_a = context.user) === null || _a === void 0 ? void 0 : _a.user.value)) return [3 /*break*/, 2];
                    return [4 /*yield*/, context.$bagisto.api.getAddresses(params)];
                case 1:
                    addressesResult = _c.sent();
                    return [2 /*return*/, ((_b = addressesResult === null || addressesResult === void 0 ? void 0 : addressesResult.data) === null || _b === void 0 ? void 0 : _b.addresses) || {}];
                case 2: return [2 /*return*/, {}];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setDefaultAddress: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Mocked: useUserShipping.setDefaultAddress');
            return [2 /*return*/, {}];
        });
    }); }
};
var useUserShipping = core.useUserShippingFactory(params$1);

var params = {
    provide: function () {
        return {
            user: useUser()
        };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load: function (context, params) { return __awaiter(void 0, void 0, void 0, function () {
        var wishlistParams, wishlistResult;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log('Mocked: useWishlist.load');
                    wishlistParams = {
                        input: ((_a = params === null || params === void 0 ? void 0 : params.customQuery) === null || _a === void 0 ? void 0 : _a.input) || {},
                        page: ((_b = params === null || params === void 0 ? void 0 : params.customQuery) === null || _b === void 0 ? void 0 : _b.page) || 1
                    };
                    if ((_c = context.user.value) === null || _c === void 0 ? void 0 : _c.id) {
                        wishlistParams.input = { customerId: parseInt((_d = context.user.value) === null || _d === void 0 ? void 0 : _d.id) };
                    }
                    return [4 /*yield*/, context.$bagisto.api.getWishlist(wishlistParams)];
                case 1:
                    wishlistResult = _g.sent();
                    return [2 /*return*/, {
                            results: ((_e = wishlistResult === null || wishlistResult === void 0 ? void 0 : wishlistResult.data) === null || _e === void 0 ? void 0 : _e.wishlists.data) || null,
                            pagination: ((_f = wishlistResult === null || wishlistResult === void 0 ? void 0 : wishlistResult.data) === null || _f === void 0 ? void 0 : _f.wishlists.paginatorInfo) || null
                        }];
            }
        });
    }); },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addItem: function (context, _a) {
        var currentWishlist = _a.currentWishlist, product = _a.product;
        return __awaiter(void 0, void 0, void 0, function () {
            var data, addWishlistResults, wishlistResponse;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('Mocked: useWishlist.addItem');
                        data = {
                            productId: parseInt(product === null || product === void 0 ? void 0 : product.id)
                        };
                        return [4 /*yield*/, context.$bagisto.api.addToWishlist(data)];
                    case 1:
                        addWishlistResults = _c.sent();
                        wishlistResponse = (_b = addWishlistResults === null || addWishlistResults === void 0 ? void 0 : addWishlistResults.data) === null || _b === void 0 ? void 0 : _b.addToWishlist;
                        if (wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.wishlist) {
                            params.load(context, {});
                            params.isInWishlist(context, { currentWishlist: currentWishlist, product: product });
                        }
                        return [2 /*return*/, (wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.wishlist) ? wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.wishlist : null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem: function (context, _a) {
        var currentWishlist = _a.currentWishlist, product = _a.product;
        return __awaiter(void 0, void 0, void 0, function () {
            var data, removeResults, wishlistResponse;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('Mocked: useWishlist.removeItem');
                        data = { productId: (product === null || product === void 0 ? void 0 : product.productId) ? parseInt(product === null || product === void 0 ? void 0 : product.productId) : parseInt(product === null || product === void 0 ? void 0 : product.id) };
                        return [4 /*yield*/, context.$bagisto.api.removeFromWishlist(data)];
                    case 1:
                        removeResults = _c.sent();
                        wishlistResponse = (_b = removeResults === null || removeResults === void 0 ? void 0 : removeResults.data) === null || _b === void 0 ? void 0 : _b.removeFromWishlist;
                        if (wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.wishlist) {
                            params.load(context, {});
                            params.isInWishlist(context, { currentWishlist: currentWishlist, product: product });
                        }
                        return [2 /*return*/, (wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.status) ? wishlistResponse === null || wishlistResponse === void 0 ? void 0 : wishlistResponse.wishlist : null];
                }
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clear: function (context, _a) {
        _a.currentWishlist;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                console.log('Mocked: useWishlist.clear');
                return [2 /*return*/, null];
            });
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isInWishlist: function (context, _a) {
        var _b;
        var currentWishlist = _a.currentWishlist, product = _a.product;
        if (!product) {
            return false;
        }
        var exist = false;
        var user = (_b = context === null || context === void 0 ? void 0 : context.user) === null || _b === void 0 ? void 0 : _b.user.value;
        if ((currentWishlist === null || currentWishlist === void 0 ? void 0 : currentWishlist.results) && (currentWishlist === null || currentWishlist === void 0 ? void 0 : currentWishlist.results.length) > 0) {
            for (var _i = 0, _c = currentWishlist.results; _i < _c.length; _i++) {
                var wishlistProduct = _c[_i];
                if ((user === null || user === void 0 ? void 0 : user.id) && ((wishlistProduct === null || wishlistProduct === void 0 ? void 0 : wishlistProduct.customerId) === (user === null || user === void 0 ? void 0 : user.id)) && ((wishlistProduct === null || wishlistProduct === void 0 ? void 0 : wishlistProduct.productId) === product.id)) {
                    exist = true;
                    break;
                }
                if (!(user === null || user === void 0 ? void 0 : user.id) && (wishlistProduct === null || wishlistProduct === void 0 ? void 0 : wishlistProduct.productId) === product.id) {
                    exist = true;
                    break;
                }
            }
        }
        return exist;
    }
};
var useWishlist = core.useWishlistFactory(params);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId$4(category) {
    if (!category) {
        return null;
    }
    return (category === null || category === void 0 ? void 0 : category.id) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category) {
    return {
        label: '',
        slug: '',
        items: [],
        isCurrent: false
    };
}
function getBreadcrumbs$2(category) {
    var breadcrumbs = [];
    if (!category) {
        return [];
    }
    breadcrumbs.push({ text: 'Home', link: '/' });
    if (category === null || category === void 0 ? void 0 : category.breadcrumbs) {
        for (var _i = 0, _a = Object.entries(category === null || category === void 0 ? void 0 : category.breadcrumbs); _i < _a.length; _i++) {
            var _b = _a[_i]; _b[0]; var value = _b[1];
            breadcrumbs.push({
                text: value.name,
                link: "/category/" + (value.urlPath || value.slug)
            });
        }
    }
    return breadcrumbs;
}
var categoryGetters = {
    getTree: getTree,
    getBreadcrumbs: getBreadcrumbs$2,
    getId: getId$4
};

function htmlDecode(input) {
    var formatName = function () {
        try {
            var domParser = new DOMParser();
            var doc = domParser.parseFromString(input, 'text/html');
            return doc.documentElement.textContent;
        }
        catch (_a) {
            return input;
        }
    };
    var name = formatName();
    return name === 'undefined' ? '' : name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product) {
    if (!product) {
        return '';
    }
    if (typeof product !== 'undefined' && typeof product.productFlats !== 'undefined') {
        for (var _i = 0, _a = product.productFlats; _i < _a.length; _i++) {
            var productFlat = _a[_i];
            if (productFlat.locale === 'en') {
                console.log(productFlat, 'product getters============');
                // return   ((productFlat.name != 'null') ? htmlDecode(productFlat.name) : '') +' Product-Id-'+ product.id;
                return ((productFlat.name) ? htmlDecode(productFlat.name) : '') + ' Product-Id-' + productFlat.id;
            }
        }
    }
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product) {
    if (!product) {
        return '';
    }
    return (product === null || product === void 0 ? void 0 : product.sku) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice$1(product) {
    var _a, _b;
    if (!product) {
        return {
            regular: 0,
            special: 0
        };
    }
    if (typeof product !== 'undefined' && typeof product.productFlats !== 'undefined') {
        return {
            regular: (_a = product.productFlats[0]) === null || _a === void 0 ? void 0 : _a.price,
            special: (_b = product.productFlats[0]) === null || _b === void 0 ? void 0 : _b.specialPrice
        };
    }
    return {
        regular: 0,
        special: 0
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRegularPrice(product) {
    if (!product) {
        return '';
    }
    if (typeof product !== 'undefined' && typeof product.priceHtml !== 'undefined') {
        return product.priceHtml.regular;
    }
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSpecialPrice(product) {
    if (!product) {
        return '';
    }
    if (typeof product !== 'undefined' && typeof product.priceHtml !== 'undefined') {
        return product.priceHtml.special;
    }
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product) {
    if (!product || typeof product === 'undefined' || typeof product.cacheGalleryImages === 'undefined') {
        return [
            {
                small: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_small.jpg',
                normal: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_medium.jpg',
                big: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
            }
        ];
    }
    var images = [];
    for (var _i = 0, _a = product.cacheGalleryImages; _i < _a.length; _i++) {
        var image = _a[_i];
        images.push({
            small: image.smallImageUrl,
            normal: image.mediumImageUrl,
            big: image.largeImageUrl
        });
    }
    return images;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product) {
    if (!product || typeof product === 'undefined' || typeof product.images === 'undefined') {
        return {
            small: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprojectfba.com%2Famazon-images-not-showing%2F&psig=AOvVaw2gye9rw3OPMIipMCeiuk0D&ust=1690356058329000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiPgJypqYADFQAAAAAdAAAAABAD',
            normal: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprojectfba.com%2Famazon-images-not-showing%2F&psig=AOvVaw2gye9rw3OPMIipMCeiuk0D&ust=1690356058329000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiPgJypqYADFQAAAAAdAAAAABAD',
            big: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprojectfba.com%2Famazon-images-not-showing%2F&psig=AOvVaw2gye9rw3OPMIipMCeiuk0D&ust=1690356058329000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiPgJypqYADFQAAAAAdAAAAABAD'
            // small: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_small.jpg',
            // normal: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_medium.jpg',
            // big: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
        };
    }
    return {
        // small: product.cacheBaseImage?.smallImageUrl,
        // normal: product.cacheBaseImage?.mediumImageUrl,
        // big: product.cacheBaseImage?.largeImageUrl
        small: product.images[0],
        normal: product.images[0],
        big: product.images[0]
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products, filters) {
    if (!products) {
        return [];
    }
    return products;
    // return [
    //   {
    //     _id: 1,
    //     _description: 'Some description',
    //     _categoriesRef: [
    //       '1',
    //       '2'
    //     ],
    //     name: 'Black jacket',
    //     sku: 'black-jacket',
    //     images: [
    //       'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
    //     ],
    //     price: {
    //       original: 12.34,
    //       current: 10.00
    //     }
    //   }
    // ];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products, filterByAttributeName) {
    return {};
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShortDescription(product) {
    if (!product) {
        return '';
    }
    if (typeof product !== 'undefined' && typeof product.productFlats !== 'undefined') {
        for (var _i = 0, _a = product.productFlats; _i < _a.length; _i++) {
            var productFlat = _a[_i];
            if (productFlat.locale === 'en') {
                return productFlat.shortDescription;
            }
        }
    }
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product) {
    if (!product) {
        return '';
    }
    if (typeof product !== 'undefined' && typeof product.productFlats !== 'undefined') {
        for (var _i = 0, _a = product.productFlats; _i < _a.length; _i++) {
            var productFlat = _a[_i];
            if (productFlat.locale === 'en') {
                return htmlDecode(productFlat.description);
            }
        }
    }
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAdditionalData(product) {
    if (!product) {
        return [];
    }
    if (typeof product !== 'undefined' && typeof product.additionalData !== 'undefined') {
        return product.additionalData;
    }
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getConfigurableData(product) {
    if (!product) {
        return null;
    }
    if (typeof product !== 'undefined' && typeof product.configutableData !== 'undefined') {
        var configAttributes = [];
        for (var _i = 0, _a = product.configutableData.attributes; _i < _a.length; _i++) {
            var attribute = _a[_i];
            configAttributes.push({
                id: attribute.id,
                code: attribute.code,
                label: attribute.label,
                options: attribute.options,
                swatchType: attribute.swatchType
            });
        }
        return {
            configData: product.configutableData,
            configAttributes: configAttributes
        };
    }
    return null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId$3(product) {
    if (!product) {
        return null;
    }
    return (product === null || product === void 0 ? void 0 : product.id) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getNumber(product) {
    if (!product) {
        return null;
    }
    if (typeof product !== 'undefined' && typeof product.productFlats !== 'undefined') {
        for (var _i = 0, _a = product.productFlats; _i < _a.length; _i++) {
            var productFlat = _a[_i];
            if (productFlat.locale === 'en') {
                return productFlat.productNumber;
            }
        }
    }
    return null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice$3(price) {
    return '';
    // if (price === null) {
    //   return null;
    // }
    // // TODO get correct data from api
    // const locale = 'en';
    // const country = 'en';
    // const currency = 'USD';
    // return new Intl.NumberFormat(`${locale}-${country}`, {
    //   style: 'currency',
    //   currency,
    // }).format(price);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews$1(product) {
    if (!product) {
        return 0;
    }
    var total = 0;
    if (typeof product !== 'undefined' && typeof product.reviews !== 'undefined') {
        for (var _i = 0, _a = product.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (review.status === 'approved') {
                total += 1;
            }
        }
        return total;
    }
    return 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating$1(product) {
    if (!product) {
        return 0;
    }
    var total = 0;
    if (typeof product !== 'undefined' && typeof product.reviews !== 'undefined') {
        for (var _i = 0, _a = product.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            total += review.rating;
        }
        return Math.round(((total / getTotalReviews$1(product)) + Number.EPSILON) * 10) / 10;
    }
    return 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs$1(product, category) {
    var breadcrumbs = [];
    if (!product) {
        return breadcrumbs;
    }
    if (category) {
        breadcrumbs = categoryGetters.getBreadcrumbs(category);
    }
    breadcrumbs.push({
        text: getName(product),
        route: {
            path: getId$3(product)
        }
    });
    return breadcrumbs;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProductRelatedProduct(product) {
    if (!product) {
        return [];
    }
    if (typeof product !== 'undefined' && typeof product.relatedProducts !== 'undefined') {
        return product.relatedProducts;
    }
    return [];
}
var productGetters = {
    getName: getName,
    getSlug: getSlug,
    getPrice: getPrice$1,
    getGallery: getGallery,
    getCoverImage: getCoverImage,
    getFiltered: getFiltered,
    getAttributes: getAttributes,
    getDescription: getDescription,
    getCategoryIds: getCategoryIds,
    getId: getId$3,
    getFormattedPrice: getFormattedPrice$3,
    getRegularPrice: getRegularPrice,
    getSpecialPrice: getSpecialPrice,
    getTotalReviews: getTotalReviews$1,
    getAverageRating: getAverageRating$1,
    getBreadcrumbs: getBreadcrumbs$1,
    getShortDescription: getShortDescription,
    getAdditionalData: getAdditionalData,
    getNumber: getNumber,
    getProductRelatedProduct: getProductRelatedProduct,
    getConfigurableData: getConfigurableData
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemId(item) {
    if (!item) {
        return '';
    }
    return (item === null || item === void 0 ? void 0 : item.id) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems$4(cart) {
    if (!cart) {
        return null;
    }
    return (cart === null || cart === void 0 ? void 0 : cart.items) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName$2(item) {
    if (!item) {
        return '';
    }
    return (item === null || item === void 0 ? void 0 : item.name) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage$1(item) {
    if (!item) {
        return '';
    }
    return productGetters.getCoverImage(item === null || item === void 0 ? void 0 : item.product);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice$2(item) {
    return {
        regular: (item === null || item === void 0 ? void 0 : item.total) || 0,
        special: 0
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty$2(item) {
    if (!item) {
        return 0;
    }
    return (item === null || item === void 0 ? void 0 : item.quantity) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes$2(item, filterByAttributeName) {
    if (!item || !(item === null || item === void 0 ? void 0 : item.additional)) {
        return {};
    }
    var attributes = {};
    var additionalData = JSON.parse(item === null || item === void 0 ? void 0 : item.additional);
    if (additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes) {
        for (var attribute in additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes) {
            if (Object.prototype.hasOwnProperty.call(additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes, attribute)) {
                var element = additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes[attribute];
                var attributeName = element.attribute_name;
                attributes[attributeName] = element.option_label;
            }
        }
    }
    return attributes;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku$2(item) {
    if (!item) {
        return '';
    }
    return (item === null || item === void 0 ? void 0 : item.sku) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals$1(cart) {
    var _a;
    if (!cart) {
        return {
            subtotal: 0,
            shippingtotal: 0,
            taxtotal: 0,
            discounttotal: 0,
            special: 0,
            total: 0
        };
    }
    var selectedShippingRate = ((_a = cart === null || cart === void 0 ? void 0 : cart.selectedShippingRate) === null || _a === void 0 ? void 0 : _a.price) || 0;
    return {
        subtotal: cart === null || cart === void 0 ? void 0 : cart.subTotal,
        shippingtotal: selectedShippingRate,
        taxtotal: cart === null || cart === void 0 ? void 0 : cart.taxTotal,
        discounttotal: cart === null || cart === void 0 ? void 0 : cart.discountAmount,
        special: 0,
        total: cart === null || cart === void 0 ? void 0 : cart.grandTotal
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice$1(cart) {
    return 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems$1(cart) {
    if (!cart) {
        return 0;
    }
    return (cart === null || cart === void 0 ? void 0 : cart.itemsCount) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice$2(price) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart) {
    return [];
}
var cartGetters = {
    getTotals: getTotals$1,
    getShippingPrice: getShippingPrice$1,
    getItems: getItems$4,
    getItemName: getItemName$2,
    getItemImage: getItemImage$1,
    getItemPrice: getItemPrice$2,
    getItemQty: getItemQty$2,
    getItemAttributes: getItemAttributes$2,
    getItemSku: getItemSku$2,
    getFormattedPrice: getFormattedPrice$2,
    getTotalItems: getTotalItems$1,
    getCoupons: getCoupons,
    getDiscounts: getDiscounts,
    getItemId: getItemId
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params, criteria) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params, criteria) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!params || !(params === null || params === void 0 ? void 0 : params.data) || !((_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.filterableAttributes)) {
        return [];
    }
    var filters = [];
    var categoryDetail = (_f = (_e = (_d = (_c = (_b = params === null || params === void 0 ? void 0 : params.data) === null || _b === void 0 ? void 0 : _b.categoryDetail) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.categories) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f[0];
    var filterableAttributes = (_g = params === null || params === void 0 ? void 0 : params.data) === null || _g === void 0 ? void 0 : _g.filterableAttributes;
    for (var key in filterableAttributes) {
        if (Object.prototype.hasOwnProperty.call(filterableAttributes, key)) {
            var attribute = filterableAttributes[key];
            if (attribute.code === 'price') {
                attribute.maxPrice = categoryDetail.categoryProductMaxPrice;
            }
            filters.push(attribute);
        }
    }
    return filters;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params) {
    var _a, _b, _c, _d, _e;
    if (!params || !(params === null || params === void 0 ? void 0 : params.data) || !(params === null || params === void 0 ? void 0 : params.data)) {
        return {
            options: [],
            selected: ''
        };
    }
    var selectedSort = [];
    if ((_a = params === null || params === void 0 ? void 0 : params.input) === null || _a === void 0 ? void 0 : _a.filters) {
        for (var key in (_b = params === null || params === void 0 ? void 0 : params.input) === null || _b === void 0 ? void 0 : _b.filters) {
            if (Object.prototype.hasOwnProperty.call((_c = params === null || params === void 0 ? void 0 : params.input) === null || _c === void 0 ? void 0 : _c.filters, key) && ['sort', 'order'].includes(key)) {
                selectedSort.push(key + '=' + ((_d = params === null || params === void 0 ? void 0 : params.input) === null || _d === void 0 ? void 0 : _d.filters[key]));
            }
        }
    }
    return {
        options: ((_e = params === null || params === void 0 ? void 0 : params.data) === null || _e === void 0 ? void 0 : _e.sortingData) || [],
        selected: selectedSort.length ? '?' + selectedSort.join('&') : ''
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params) {
    var _a, _b, _c, _d;
    var categoryDetail = (_d = (_c = (_b = (_a = params === null || params === void 0 ? void 0 : params.categoryDetail) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.categories) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d[0];
    return {
        label: (categoryDetail === null || categoryDetail === void 0 ? void 0 : categoryDetail.name) || '',
        slug: (categoryDetail === null || categoryDetail === void 0 ? void 0 : categoryDetail.slug) || '',
        items: (categoryDetail === null || categoryDetail === void 0 ? void 0 : categoryDetail.children) || null,
        isCurrent: true,
        count: (categoryDetail === null || categoryDetail === void 0 ? void 0 : categoryDetail.productCount) || 0
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(params) {
    return (params === null || params === void 0 ? void 0 : params.items) || [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(params) {
    var _a, _b, _c, _d;
    return {
        currentPage: ((_a = params === null || params === void 0 ? void 0 : params.pagination) === null || _a === void 0 ? void 0 : _a.currentPage) || 1,
        totalPages: ((_b = params === null || params === void 0 ? void 0 : params.pagination) === null || _b === void 0 ? void 0 : _b.lastPage) || 1,
        totalItems: ((_c = params === null || params === void 0 ? void 0 : params.pagination) === null || _c === void 0 ? void 0 : _c.total) || 1,
        itemsPerPage: ((_d = params === null || params === void 0 ? void 0 : params.pagination) === null || _d === void 0 ? void 0 : _d.count) || 10,
        pageOptions: []
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params) {
    var _a, _b, _c, _d;
    var category = ((_d = (_c = (_b = (_a = params === null || params === void 0 ? void 0 : params.categoryDetail) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.categories) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d[0]) || [];
    return categoryGetters.getBreadcrumbs(category);
}
var facetGetters = {
    getSortOptions: getSortOptions,
    getGrouped: getGrouped,
    getAll: getAll,
    getProducts: getProducts,
    getCategoryTree: getCategoryTree,
    getBreadcrumbs: getBreadcrumbs,
    getPagination: getPagination
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getResetPasswordToken(result) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isPasswordChanged(result) {
    return true;
}
var forgotPasswordGetters = {
    getResetPasswordToken: getResetPasswordToken,
    isPasswordChanged: isPasswordChanged
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDate(order) {
    if (!order) {
        return '';
    }
    return order.createdAt || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId$2(order) {
    if (!order) {
        return null;
    }
    return (order === null || order === void 0 ? void 0 : order.id.toString()) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStatus(order) {
    if (!order) {
        return '';
    }
    var orderStatus = '';
    switch (order === null || order === void 0 ? void 0 : order.status) {
        case 'processing':
            orderStatus = 'Processing';
            break;
        case 'completed':
            orderStatus = 'Complete';
            break;
        case 'canceled':
            orderStatus = 'Cancelled';
            break;
        case 'closed':
            orderStatus = 'Closed';
            break;
        case 'pending_payment':
            orderStatus = 'Pending Payment';
            break;
        case 'fraud':
            orderStatus = 'Fraud';
            break;
        default:
            orderStatus = 'Pending';
            break;
    }
    return orderStatus || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(order) {
    if (!order) {
        return 0;
    }
    return order.grandTotal || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems$3(order) {
    if (!order) {
        return [];
    }
    if (order === null || order === void 0 ? void 0 : order.results) {
        return order.results || [];
    }
    return (order === null || order === void 0 ? void 0 : order.items) || [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku$1(item) {
    var _a;
    if (!item) {
        return '';
    }
    return ((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.id) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName$1(item) {
    if (!item) {
        return '';
    }
    return (item === null || item === void 0 ? void 0 : item.name) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty$1(item) {
    if (!item) {
        return 0;
    }
    return (item === null || item === void 0 ? void 0 : item.qtyOrdered) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice$1(item) {
    if (!item) {
        return 0;
    }
    return (item === null || item === void 0 ? void 0 : item.price) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSubTotal(item) {
    if (!item) {
        return 0;
    }
    return (item === null || item === void 0 ? void 0 : item.total) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice$1(price) {
    return '';
}
// eslint-disable-next-line
function getOrdersTotal(orders) {
    if (!orders && !(orders === null || orders === void 0 ? void 0 : orders.total)) {
        return 0;
    }
    return (orders === null || orders === void 0 ? void 0 : orders.total) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes$1(item, filterByAttributeName) {
    if (!item || !(item === null || item === void 0 ? void 0 : item.additional)) {
        return {};
    }
    var attributes = {};
    var additionalData = JSON.parse(item === null || item === void 0 ? void 0 : item.additional);
    if (additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes) {
        for (var attribute in additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes) {
            if (Object.prototype.hasOwnProperty.call(additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes, attribute)) {
                var element = additionalData === null || additionalData === void 0 ? void 0 : additionalData.attributes[attribute];
                var attributeName = element.attribute_name;
                attributes[attributeName] = element.option_label;
            }
        }
    }
    return attributes;
}
var orderGetters = {
    getDate: getDate,
    getId: getId$2,
    getStatus: getStatus,
    getPrice: getPrice,
    getItems: getItems$3,
    getItemSku: getItemSku$1,
    getItemName: getItemName$1,
    getItemQty: getItemQty$1,
    getItemPrice: getItemPrice$1,
    getFormattedPrice: getFormattedPrice$1,
    getOrdersTotal: getOrdersTotal,
    getItemSubTotal: getItemSubTotal,
    getItemAttributes: getItemAttributes$1
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems$2(reviewItems) {
    if (!reviewItems) {
        return [];
    }
    var reviews = [];
    if (Array.isArray(reviewItems)) {
        for (var _i = 0, reviewItems_1 = reviewItems; _i < reviewItems_1.length; _i++) {
            var reviewDetail = reviewItems_1[_i];
            reviews.push(reviewDetail);
        }
    }
    return reviews;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewId(reviewItem) {
    if (!reviewItem) {
        return '';
    }
    return (reviewItem === null || reviewItem === void 0 ? void 0 : reviewItem.id) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewAuthor(reviewItem) {
    if (!reviewItem) {
        return '';
    }
    return (reviewItem === null || reviewItem === void 0 ? void 0 : reviewItem.customerName) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewMessage(reviewItem) {
    if (!reviewItem) {
        return '';
    }
    return (reviewItem === null || reviewItem === void 0 ? void 0 : reviewItem.comment) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewRating(reviewItem) {
    if (!reviewItem) {
        return 0;
    }
    return (reviewItem === null || reviewItem === void 0 ? void 0 : reviewItem.rating) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewDate(reviewItem) {
    if (!reviewItem) {
        return '';
    }
    return (reviewItem === null || reviewItem === void 0 ? void 0 : reviewItem.createdAt) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(reviewItems) {
    if (!reviewItems) {
        return 0;
    }
    return reviewItems.length;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(reviewItems) {
    if (!reviewItems) {
        return 0;
    }
    var total = 0;
    for (var _i = 0, reviewItems_2 = reviewItems; _i < reviewItems_2.length; _i++) {
        var review = reviewItems_2[_i];
        total += review.rating;
    }
    return Math.round(((total / getTotalReviews(reviewItems)) + Number.EPSILON) * 10) / 10;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRatesCount(review) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewsPage(review) {
    return 0;
}
var reviewGetters = {
    getItems: getItems$2,
    getReviewId: getReviewId,
    getReviewAuthor: getReviewAuthor,
    getReviewMessage: getReviewMessage,
    getReviewRating: getReviewRating,
    getReviewDate: getReviewDate,
    getTotalReviews: getTotalReviews,
    getAverageRating: getAverageRating,
    getRatesCount: getRatesCount,
    getReviewsPage: getReviewsPage
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems$1(stores, criteria) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSelected(stores) {
    return null;
}
var storeGetters = {
    getItems: getItems$1,
    getSelected: getSelected
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAddresses$1(billing, criteria) {
    return [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDefault$1(billing) {
    return {};
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotal$1(billing) {
    return 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPostCode$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetName$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetNumber$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCity$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName$2(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName$2(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCountry$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone$2(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmail$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProvince$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCompanyName$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTaxNumber$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getApartmentNumber$1(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isDefault$1(address) {
    return false;
}
var userBillingGetters = {
    getAddresses: getAddresses$1,
    getDefault: getDefault$1,
    getTotal: getTotal$1,
    getPostCode: getPostCode$1,
    getStreetName: getStreetName$1,
    getStreetNumber: getStreetNumber$1,
    getCity: getCity$1,
    getFirstName: getFirstName$2,
    getLastName: getLastName$2,
    getCountry: getCountry$1,
    getPhone: getPhone$2,
    getEmail: getEmail$1,
    getProvince: getProvince$1,
    getCompanyName: getCompanyName$1,
    getTaxNumber: getTaxNumber$1,
    getId: getId$1,
    getApartmentNumber: getApartmentNumber$1,
    isDefault: isDefault$1
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName$1(user) {
    var _a;
    if (!user) {
        return '';
    }
    // return user?.firstName || '';
    return (user === null || user === void 0 ? void 0 : user.firstName) || ((_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.split(' ')[0]);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName$1(user) {
    var _a;
    if (!user) {
        return '';
    }
    // return user?.lastName || '';
    return (user === null || user === void 0 ? void 0 : user.lastName) || ((_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.split(' ')[1]);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFullName(user) {
    if (!user) {
        return '';
    }
    console.log('Getters in composables======', user === null || user === void 0 ? void 0 : user.name);
    // return `${user?.firstName} ${user?.lastName}` || '';
    return "" + (user === null || user === void 0 ? void 0 : user.name) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmailAddress(user) {
    if (!user) {
        return '';
    }
    return (user === null || user === void 0 ? void 0 : user.email) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone$1(user) {
    if (!user) {
        return null;
    }
    return user === null || user === void 0 ? void 0 : user.phone;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGender(user) {
    if (!user) {
        return '';
    }
    return user === null || user === void 0 ? void 0 : user.gender;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDateOfBirth(user) {
    if (!user) {
        return '';
    }
    return (user === null || user === void 0 ? void 0 : user.dateOfBirth) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getUser(user) {
    var _a;
    if (!user) {
        return null;
    }
    return ((_a = user === null || user === void 0 ? void 0 : user.success) === null || _a === void 0 ? void 0 : _a.customer) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getUserId(user) {
    if (!user) {
        return null;
    }
    return (user === null || user === void 0 ? void 0 : user.id) || null;
}
var userGetters = {
    getFirstName: getFirstName$1,
    getLastName: getLastName$1,
    getFullName: getFullName,
    getEmailAddress: getEmailAddress,
    getPhone: getPhone$1,
    getGender: getGender,
    getDateOfBirth: getDateOfBirth,
    getUser: getUser,
    getUserId: getUserId
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAddresses(shipping, criteria) {
    if (!shipping) {
        return [];
    }
    var addresses = [];
    if (shipping.addresses && shipping.addresses.length > 0) {
        for (var _i = 0, _a = shipping.addresses; _i < _a.length; _i++) {
            var address = _a[_i];
            if (Array.isArray(criteria === null || criteria === void 0 ? void 0 : criteria.addressType) && (criteria === null || criteria === void 0 ? void 0 : criteria.addressType.indexOf(address.addressType)) !== -1) {
                addresses.push(address);
            }
            if (!criteria) {
                addresses.push(address);
            }
        }
    }
    return addresses;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDefault(shipping) {
    if (!shipping) {
        return null;
    }
    var defaultAddress = [];
    if (shipping.addresses && shipping.addresses.length > 0) {
        for (var _i = 0, _a = shipping.addresses; _i < _a.length; _i++) {
            var address = _a[_i];
            if (address.defaultAddress === true) {
                defaultAddress.push(address);
            }
        }
    }
    return (defaultAddress === null || defaultAddress === void 0 ? void 0 : defaultAddress[0]) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotal(shipping) {
    var totalAddresses = getAddresses(shipping);
    return totalAddresses.length || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPostCode(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.postcode) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetName(address) {
    if (!address) {
        return '';
    }
    return address === null || address === void 0 ? void 0 : address.address1;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetNumber(address) {
    if (!address) {
        return '';
    }
    return address === null || address === void 0 ? void 0 : address.address2;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCity(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.city) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.firstName) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.lastName) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCountry(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.country) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.phone) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmail(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProvince(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.state) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCompanyName(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.companyName) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTaxNumber(address) {
    if (!address) {
        return '';
    }
    return (address === null || address === void 0 ? void 0 : address.vatId) || '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(address) {
    if (!address) {
        return null;
    }
    return (address === null || address === void 0 ? void 0 : address.id) || null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getApartmentNumber(address) {
    return '';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isDefault(address) {
    if (!address) {
        return false;
    }
    return (address === null || address === void 0 ? void 0 : address.defaultAddress) || false;
}
var userShippingGetters = {
    getAddresses: getAddresses,
    getDefault: getDefault,
    getTotal: getTotal,
    getPostCode: getPostCode,
    getStreetName: getStreetName,
    getStreetNumber: getStreetNumber,
    getCity: getCity,
    getFirstName: getFirstName,
    getLastName: getLastName,
    getCountry: getCountry,
    getPhone: getPhone,
    getEmail: getEmail,
    getProvince: getProvince,
    getCompanyName: getCompanyName,
    getTaxNumber: getTaxNumber,
    getId: getId,
    getApartmentNumber: getApartmentNumber,
    isDefault: isDefault
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(wishlist) {
    if (!wishlist) {
        return [];
    }
    if (wishlist === null || wishlist === void 0 ? void 0 : wishlist.results) {
        return wishlist.results || [];
    }
    return (wishlist === null || wishlist === void 0 ? void 0 : wishlist.items) || [];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(wishlist) {
    return {
        total: 0,
        subtotal: 0
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item) {
    if (!item || !(item === null || item === void 0 ? void 0 : item.product)) {
        return '';
    }
    return productGetters.getName(item === null || item === void 0 ? void 0 : item.product);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item) {
    if (!item || !(item === null || item === void 0 ? void 0 : item.product)) {
        return 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_small.jpg';
    }
    return productGetters.getCoverImage(item === null || item === void 0 ? void 0 : item.product);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item) {
    return {
        regular: productGetters.getRegularPrice(item === null || item === void 0 ? void 0 : item.product),
        special: productGetters.getSpecialPrice(item === null || item === void 0 ? void 0 : item.product)
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item) {
    return 1;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item, filters) {
    return {
        color: 'red'
    };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item) {
    if (!item || !(item === null || item === void 0 ? void 0 : item.product)) {
        return '';
    }
    return productGetters.getSlug(item === null || item === void 0 ? void 0 : item.product);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(wishlist) {
    return 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(wishlist) {
    var _a;
    if (!wishlist || !(wishlist === null || wishlist === void 0 ? void 0 : wishlist.pagination)) {
        return 0;
    }
    return ((_a = wishlist === null || wishlist === void 0 ? void 0 : wishlist.pagination) === null || _a === void 0 ? void 0 : _a.total) || 0;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price) {
    return '';
}
var wishlistGetters = {
    getItems: getItems,
    getTotals: getTotals,
    getItemName: getItemName,
    getItemImage: getItemImage,
    getItemPrice: getItemPrice,
    getItemQty: getItemQty,
    getItemAttributes: getItemAttributes,
    getShippingPrice: getShippingPrice,
    getItemSku: getItemSku,
    getTotalItems: getTotalItems,
    getFormattedPrice: getFormattedPrice
};

exports.cartGetters = cartGetters;
exports.categoryGetters = categoryGetters;
exports.facetGetters = facetGetters;
exports.forgotPasswordGetters = forgotPasswordGetters;
exports.orderGetters = orderGetters;
exports.productGetters = productGetters;
exports.reviewGetters = reviewGetters;
exports.storeGetters = storeGetters;
exports.useBilling = useBilling;
exports.useCart = useCart;
exports.useCategory = useCategory;
exports.useContent = useContent;
exports.useFacet = useFacet;
exports.useForgotPassword = useForgotPassword;
exports.useMakeOrder = useMakeOrder;
exports.useProduct = useProduct;
exports.useReview = useReview;
exports.useShipping = useShipping;
exports.useShippingProvider = useShippingProvider;
exports.useStore = useStore;
exports.useUser = useUser;
exports.useUserBilling = useUserBilling;
exports.useUserOrder = useUserOrder;
exports.useUserShipping = useUserShipping;
exports.useWishlist = useWishlist;
exports.userBillingGetters = userBillingGetters;
exports.userGetters = userGetters;
exports.userShippingGetters = userShippingGetters;
exports.wishlistGetters = wishlistGetters;
//# sourceMappingURL=index.cjs.js.map
