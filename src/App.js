import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

// const heading = React.createElement("h1", {id:"heading",className:"headingContent"}, "This is React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
// root.render(heading);

// Below is Javascript way of creating react element with children
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a h1 tag"),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", {}, "I am a h3 tag"),
//     React.createElement("h4", {}, "I am a h4 tag"),
//   ]),
// ]);
// console.log(parent)

// Below is JSX way of creating react element
// const jsxHeading = (
//   <div className="parent">
//     <div className="child1">
//       <h1>I am a h1 tag</h1>
//       <h2>I am a h2 tag</h2>
//     </div>
//     <div className="child2">
//       <h3>I am a h3 tag</h3>
//       <h4>I am a h4 tag</h4>
//     </div>
//   </div>
// );
// console.log(jsxHeading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Below is creating React Component using js functions.
// const TitleComponent = () => <h1>Namaste React Web Series 🚀</h1>;

// const HeadingComponent = () => (
//   <div className="container">
//     {TitleComponent()}
//     <TitleComponent></TitleComponent>
//     <TitleComponent />
//     <h1>Functional Component</h1>
//   </div>
// );

// Assignment-3 work
// const HeaderComponent = () => {
//   return (
//     <div className="headerContainer">
//       <a href="#" className="logo">
//         <i class="fa-brands fa-google fa-xl googleIcon"></i>
//         <p className="googleText">oogle</p>
//       </a>
//       <div className="searchFieldContainer">
//         <input type="search" className="searchField" />
//         <a href="#"><i class="fa-solid fa-magnifying-glass searchIcon"></i></a>
//       </div>
//       <a href="#" className="userIcon">
//         <i class="fa-regular fa-circle-user fa-xl"></i>
//       </a>
//     </div>
//   );
// };

// {{ --->   EPISODE - 4 START   <--- }}
// const HeaderComponent = () => {
//   return (
//     <div className="headerContainer">
//       <div className="logoContainer">
//         <img
//           src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
//           className="logo"
//         />
//         <p className="companyName">Cwiggy</p>
//       </div>
//       <div className="navContainer">
//         <a href="#" className="navItems">
//           Home
//         </a>
//         <a href="#" className="navItems">
//           About Us
//         </a>
//         <a href="#" className="navItems">
//           Help
//         </a>
//         <a href="#" className="navItems">
//           Cart
//         </a>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {
//   const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
//     props.resData.info;
//   const cloudinaryImageUrl =
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//     cloudinaryImageId;
//   return (
//     <div className="resCardContainer">
//       <img src={cloudinaryImageUrl} className="resCardImg" />
//       <p className="resName">{name}</p>
//       <p className="description">{cuisines.join(",")}</p>
//       <h4>{avgRating}</h4>
//       <h5>{costForTwo}</h5>
//     </div>
//   );
// };
// const SearchBarComponent = () => {
//   return (
//     <div className="searchContainer">
//       <input
//         type="search"
//         className="searchField"
//         placeholder="Search for specific restaurant ... "
//       />
//       <button className="searchIconBtn">
//         <i className="fa-solid fa-magnifying-glass fa-lg"></i>
//       </button>
//     </div>
//   );
// };
// const resObj = [
//   {
//     info: {
//       id: "436045",
//       name: "Bakingo",
//       cloudinaryImageId: "f4jyyjlvvwhicxiuxndo",
//       locality: "Anand Vihar Apartments",
//       areaName: "Tolichowki",
//       costForTwo: "₹300 for two",
//       cuisines: ["Bakery"],
//       avgRating: 4.2,
//       feeDetails: {
//         restaurantId: "436045",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3800,
//       },
//       parentId: "3818",
//       avgRatingString: "4.2",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 4.3,
//         serviceability: "SERVICEABLE",
//         slaString: "28 mins",
//         lastMileTravelString: "4.3 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-04 00:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/bakingo-anand-vihar-apartments-tolichowki-hyderabad-436045",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "2519",
//       name: "Mehfil",
//       cloudinaryImageId: "l9csgm5mxtvwxsrgfmfr",
//       locality: "Whisper Valley Road",
//       areaName: "Manikonda",
//       costForTwo: "₹300 for two",
//       cuisines: ["Biryani", "North Indian", "Tandoor", "Chinese", "Kebabs"],
//       avgRating: 3.9,
//       feeDetails: {
//         restaurantId: "2519",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3800,
//       },
//       parentId: "637",
//       avgRatingString: "3.9",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 35,
//         lastMileTravel: 3.8,
//         serviceability: "SERVICEABLE",
//         slaString: "35 mins",
//         lastMileTravelString: "3.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "10% OFF",
//         subHeader: "UPTO ₹40",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/mehfil-whisper-valley-road-manikonda-hyderabad-2519",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "156384",
//       name: "Domino's Pizza",
//       cloudinaryImageId: "gpjyzajdxpjpg0tiapeg",
//       locality: "PAPULAGUDA",
//       areaName: "Secretariat Colony",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//       avgRating: 4.4,
//       feeDetails: {
//         restaurantId: "156384",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2700,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2700,
//       },
//       parentId: "2456",
//       avgRatingString: "4.4",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 25,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "30% OFF",
//         subHeader: "UPTO ₹75",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/dominos-pizza-papulaguda-secretariat-colony-hyderabad-156384",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "254788",
//       name: "Karachi Bakery",
//       cloudinaryImageId: "e3a73ddcd3db759d2bdcc491cf9b866f",
//       locality: "khajaguda",
//       areaName: "manikonda",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "Bakery",
//         "Pizzas",
//         "Snacks",
//         "Chinese",
//         "American",
//         "Italian",
//         "Desserts",
//         "Sweets",
//       ],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "254788",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2700,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2700,
//       },
//       parentId: "1262",
//       avgRatingString: "4.0",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 24,
//         lastMileTravel: 2.6,
//         serviceability: "SERVICEABLE",
//         slaString: "24 mins",
//         lastMileTravelString: "2.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 21:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/karachi-bakery-khajaguda-manikonda-hyderabad-254788",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "70704",
//       name: "10 Pounder Pizza",
//       cloudinaryImageId: "8570ee4f0296520540ad05234ed139dc",
//       locality: "Anjaih nagar",
//       areaName: "Gachibowli",
//       costForTwo: "₹300 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "70704",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5300,
//       },
//       parentId: "19817",
//       avgRatingString: "4.1",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 58,
//         lastMileTravel: 5,
//         serviceability: "SERVICEABLE",
//         slaString: "58 mins",
//         lastMileTravelString: "5.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-04 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/10-pounder-pizza-anjaih-nagar-gachibowli-hyderabad-70704",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "99349",
//       name: "Pista House Bakery",
//       cloudinaryImageId: "ydmvidzzodtnby3q3cnb",
//       locality: "Diamond Hills",
//       areaName: "Gachibowli",
//       costForTwo: "₹200 for two",
//       cuisines: ["Bakery"],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "99349",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3800,
//       },
//       parentId: "19008",
//       avgRatingString: "4.0",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 52,
//         lastMileTravel: 3.8,
//         serviceability: "SERVICEABLE",
//         slaString: "52 mins",
//         lastMileTravelString: "3.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/pista-house-bakery-diamond-hills-gachibowli-hyderabad-99349",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "627394",
//       name: "Leon's - Burgers & Wings (Leon Grill)",
//       cloudinaryImageId: "xkb0giahljzc6ewjfhbo",
//       locality: "Gandipet",
//       areaName: "Manikonda",
//       costForTwo: "₹300 for two",
//       cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
//       avgRating: 4.2,
//       feeDetails: {
//         restaurantId: "627394",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2700,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2700,
//       },
//       parentId: "371281",
//       avgRatingString: "4.2",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 2.1,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "2.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-gandipet-manikonda-hyderabad-627394",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "388153",
//       name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
//       cloudinaryImageId: "uxqvw4tzxiyx4tcuduo5",
//       locality: "Shaikpet",
//       areaName: "Manikonda",
//       costForTwo: "₹300 for two",
//       cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//       avgRating: 4.5,
//       veg: true,
//       feeDetails: {
//         restaurantId: "388153",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3800,
//       },
//       parentId: "582",
//       avgRatingString: "4.5",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 27,
//         lastMileTravel: 3.6,
//         serviceability: "SERVICEABLE",
//         slaString: "27 mins",
//         lastMileTravelString: "3.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 21:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "40% OFF",
//         subHeader: "UPTO ₹80",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-shaikpet-manikonda-hyderabad-388153",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "449026",
//       name: "Pizza Hut",
//       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       locality: "Divyasree Techridge",
//       areaName: "Manikonda",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 3.5,
//       feeDetails: {
//         restaurantId: "449026",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2700,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2700,
//       },
//       parentId: "721",
//       avgRatingString: "3.5",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 35,
//         lastMileTravel: 2.1,
//         serviceability: "SERVICEABLE",
//         slaString: "35 mins",
//         lastMileTravelString: "2.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-03 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       loyaltyDiscoverPresentationInfo: {
//         logoCtx: {
//           text: "BENEFITS",
//           logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//         },
//         freedelMessage: "FREE DELIVERY",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-405b34b0-938a-4c06-8fb2-15a6459bf1f9",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/pizza-hut-divyasree-techridge-manikonda-hyderabad-449026",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
// ];
// const BodyComponent = () => {
//   return (
//     <div className="bodyContainer">
//       <SearchBarComponent />
//       <div className="restaurantContainer">
//         {resObj.map((eachRestaurant) => (
//           <RestaurantCard key={eachRestaurant.info.id} resData={eachRestaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// {{ --->   EPISODE - 4 END   <--- }}