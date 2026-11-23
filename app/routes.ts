import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("About", "components/pages/aboutpage.tsx"),
route("Services", "components/pages/servicespage.tsx"),
route("Products", "components/pages/productspage.tsx"),
route("Contact", "components/pages/contactpage.tsx"),
route("basicProductDetails", "components/detailpage/basicproductdetails.tsx"),
route("interiorProductDetails", "components/detailpage/interiorproductdetails.tsx"),
route("designerProductDetails", "components/detailpage/designerproductdetails.tsx"),
route("*", "components/common/404.tsx"),] satisfies RouteConfig;
